import { NextRequest, NextResponse } from 'next/server';
import { DocumentProcessorServiceClient, protos } from '@google-cloud/documentai';

type Document = protos.google.cloud.documentai.v1.IDocument;
type Item = protos.google.cloud.documentai.v1.Document.IEntity

const credentials = {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY
}
// Inicializa el cliente
const client = new DocumentProcessorServiceClient({credentials});

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const name = `projects/${process.env.GOOGLE_DOCUMENT_AI_PROJECT_ID}/locations/${process.env.GOOGLE_EXPENSES_PROCESSOR_LOCATION}/processors/${process.env.GOOGLE_EXPENSES_PROCESSOR_ID}`;

  const request = {
    name,
    rawDocument: {
      content: buffer,
      mimeType: file.type, // ej: "image/jpeg" o "application/pdf"
    },
  };

  const [result] = await client.processDocument(request);

  const { document } = result;

  if (!document) {
    return NextResponse.json({ error: 'No document returned by Document AI' }, { status: 500 });
  }

  return NextResponse.json(transformData(document));
}

function transformData(document: Document) {

    const transformedData = document?.entities?.map((item: Item) => {

        if(item && item.properties && item.properties.length > 0) {
            const description = item.properties.find(
                (property: Item) => property.type === 'line_item/description'
            )
    
            const amount = item.properties.find(
                (property: Item) => property.type === 'line_item/amount'
            )

            if(description && amount) {
                return {
                    description,
                    amount
                }
            }
        }
    }).filter((item: unknown) => item);

    return transformedData;
}
