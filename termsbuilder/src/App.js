import { useState } from 'react';
import Form from './components/Form';
import Output from './components/Output';
import ExportButtons from './components/exportButtons';
import { generateDocs } from './utils/generateDocs';

function App() {
  const [docs, setDocs] = useState(null);

  const handleGenerate = (data) => {
    const generated = generateDocs(data);
    setDocs(generated);
  };

  return (
    <main className="bg-gray-100 min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-6">TermsBuilder 🛡️</h1>
      <Form onGenerate={handleGenerate} />
      {docs && (
        <>
          <Output {...docs} />
          <ExportButtons />
        </>
      )}
    </main>
  );
}

export default App;
