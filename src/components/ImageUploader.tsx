'use client';

import { useState } from 'react';

interface ImageUploaderProps {
  onUpload(file: File): void;
}

export default function ImageUploader(props: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
  
    // Vista previa
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);

    props.onUpload(file);
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Sube tu imagen</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: '1rem' }}>
          <h4>Vista previa:</h4>
          <img src={preview} alt="Vista previa" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
}