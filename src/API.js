import React, {useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';



function MyComponent() {
  const [htmlUrl, setHtmlUrl] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');

  const handleChange = (event) => {
    setHtmlUrl(event.target.value);
  };

  const handleGeneratePdf = () => {
    axios
		.post(
			"https://api.html2pdf.app/v1/generate",
			{
				html: `<iframe src="${htmlUrl}" height="1000%" width="100%" />`,
				apiKey: "thDFo86J5Cs2cLdGvnCTuiMEAfqtb79GG0AETyGbsrpMAfTxc7IwPwkYzHK3n3wl",
			},
			{ responseType: "arraybuffer" }
		)
		.then((response) => {
			const blob = new Blob([response.data], { type: "application/pdf" });
			const url = URL.createObjectURL(blob);
			setPdfUrl(url);
		})
		.catch((err) => {
			console.log(err.message);
		});
  };

  return (
    <div>
      <input type="text" className='linkField' value={htmlUrl} onChange={handleChange} /> <br />
      <Button variant="contained" onClick={handleGeneratePdf}>Generate PDF</Button>
      {pdfUrl && (
        <div>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">View PDF</a>
          <br />
          <Button variant="contained" onClick={() => setPdfUrl('')}>Clear PDF</Button>
        </div>
      )}
    </div>
  );
}

export default MyComponent;

