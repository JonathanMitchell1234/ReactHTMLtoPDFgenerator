import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Container } from "@mui/material";

function MyComponent() {
	const [htmlUrl, setHtmlUrl] = useState("");
	const [pdfUrl, setPdfUrl] = useState("");
	const [isLoading, setIsLoading] = useState(false); // Add this line to add the isLoading state

	const handleChange = (event) => {
		setHtmlUrl(event.target.value);
	};

	const handleGeneratePdf = () => {
		setIsLoading(true); // Set isLoading to true when the button is clicked

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
				setIsLoading(false); // Set isLoading to false when the action is complete
			})
			.catch((err) => {
				console.log(err.message);
				setIsLoading(false); // Set isLoading to false if there is an error
			});
	};

return (
	<Container maxWidth="lg" style={{ textAlign: "center" }}>
		<div>
			<input type="text" className="linkField" value={htmlUrl} onChange={handleChange} /> <br />
			<LoadingButton
				loading={isLoading} // Use the isLoading state to control the loading state of the button
				loadingIndicator="Loading…"
				variant="contained"
				onClick={handleGeneratePdf}
				style={{ backgroundColor: "#068FF1" }}
			>
				{" "}
				Generate PDF
			</LoadingButton>
			{pdfUrl && (
				<div>
					<a href={pdfUrl} target="_blank" rel="noopener noreferrer">
						View PDF
					</a>
					<br />
					<Button variant="contained" onClick={() => setPdfUrl("")}>
						Clear PDF
					</Button>
				</div>
			)}
		</div>
	</Container>
);
}

export default MyComponent;
