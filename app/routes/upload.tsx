import { useState } from 'react';
import  Storage  from 'aws-amplify';

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  const handleUpload = async () => {
    if (!file) return;
    try {
      const result = await Storage.put(file.name, file, {
        contentType: file.type,
        level: 'public', // 👈 required for unauth'd public access
      });

      const fileUrl = await Storage.get(result.key, { level: 'public' });
      setUrl(fileUrl as string);
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <div>
      <h2>Public Upload to S3</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
      <button onClick={handleUpload}>Upload</button>
      {url && (
        <p>
          ✅ Uploaded: <a href={url} target="_blank" rel="noreferrer">{url}</a>
        </p>
      )}
    </div>
  );
}
