import React from "react";
import Grid from "@mui/material/Grid";
import MyComponent from "../API";
import { Container } from '@mui/material';

const MyHeader = () => {
	return (
		<Container maxWidth="sm" style={{textAlign: "center"}}>
            <h1>HTML to PDF Generator</h1>
            <h3>Paste your link to generate a downloadable PDF snapshot</h3>
        </Container>
        

	);
};

export default MyHeader;
