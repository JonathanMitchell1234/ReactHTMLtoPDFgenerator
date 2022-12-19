import React from "react";
import { Container } from '@mui/material';


const MyHeader = () => {
	return (
		<Container maxWidth="sm" style={{textAlign: "center"}}>
            <h1 className="headerTitle">HTML to PDF Generator</h1>
            <h3 className="subTitle">Paste your link to generate a downloadable PDF snapshot</h3> <br/>
        </Container>
        

	);
};

export default MyHeader;
