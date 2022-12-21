import React from 'react';
import { Container } from '@mui/material'
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";

const FooterStyles = styled(Paper)(() => ({
	textAlign: "center",
    backgroundColor: "transparent",
    boxShadow: "none",
    paddingTop: "2em",
	"& h3": {
        paddingTop: "2em",
		color: "white",
		fontFamily: "Alata",
		fontSize: "0.7em",
	},
}));

// const IconStyles = styled(Paper)(() => ({
	

// }));




const MyFooter = () => {
    return (
		<Container>
			<FooterStyles>
				<h3>Made with &hearts; by Jonathan Mitchell</h3>
				<a href="https://github.com/JonathanMitchell1234/ReactHTMLtoPDFgenerator">
					<GitHubIcon sx={{ color: "white", fontSize: "30px" }} />
				</a>
			</FooterStyles>
		</Container>
	);
}



export default MyFooter;