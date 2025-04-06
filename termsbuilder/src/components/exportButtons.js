import html2pdf from 'html2pdf.js';

export default function ExportButtons() {
  const handleExport = () => {
    const element = document.body;
    html2pdf().from(element).save('legal-documents.pdf');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(document.body.innerText);
    alert('Copied to clipboard!');
  };

  return (
    <div className="flex gap-4 p-4">
      <button onClick={handleCopy} className="btn">📋 Copy</button>
      <button onClick={handleExport} className="btn">⬇️ Export to PDF</button>
    </div>
  );
}
