import React from "react";
import MyComponent from "../API";
import { Container } from '@mui/material';

const MyHeader = () => {
	return (
		<Container maxWidth="sm" style={{textAlign: "center"}}>
            <h1 className="headerTitle">HTML to PDF Generator</h1>
            <h3 className="subTitle">Paste your link to generate a downloadable PDF snapshot</h3>
        </Container>
        

	);
};

export default MyHeader;
