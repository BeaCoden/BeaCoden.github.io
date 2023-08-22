document.getElementById('downloadBtn').addEventListener('click', async function() {
  const element = document.querySelector('body');
  const pdf = await html2pdf().from(element).outputPdf();
  
  const blob = new Blob([pdf], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'CV-BeaPitzschke.pdf';
  a.click();
});
