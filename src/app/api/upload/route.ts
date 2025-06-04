import { NextRequest, NextResponse } from 'next/server';
import { DocumentProcessorServiceClient } from '@google-cloud/documentai';
import { Readable } from 'stream';

const PROJECT_ID = '987542019259';
const LOCATION = 'us'; // o 'eu', depende de dónde esté tu processor
const PROCESSOR_ID = 'a230386c5752986a';

// Inicializa el cliente
const client = new DocumentProcessorServiceClient({
  keyFilename: 'config/mita-app-document-ai-key.json', // asegúrate de no subir esto a git
});

async function bufferFromReadable(readable: Readable): Promise<Buffer> {
  const chunks: Buffer[] = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const name = `projects/${PROJECT_ID}/locations/${LOCATION}/processors/${PROCESSOR_ID}`;

  const request = {
    name,
    rawDocument: {
      content: buffer,
      mimeType: file.type, // ej: "image/jpeg" o "application/pdf"
    },
  };

  const [result] = await client.processDocument(request);

  const { document } = result;

  return NextResponse.json(transformData(document));
}

function transformData(document: any) {

    const transformedData = document.entities.map((item: any) => {

        if(item.properties.length > 0) {
            const description = item.properties.find(
                (property: any) => property.type === 'line_item/description'
            )
    
            const amount = item.properties.find(
                (property: any) => property.type === 'line_item/amount'
            )

            if(description && amount) {
                return {
                    description,
                    amount
                }
            }
        }
    }).filter((item: any) => item);

    return transformedData;
}
