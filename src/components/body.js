import React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";


const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: "#068FF1",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
    marginTop: "50px",
	color: theme.palette.text.secondary,
}));

export default function AboutGrid() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<Grid container spacing={3}>
				<Grid xs>
					<Item>xs</Item>
				</Grid>
				<Grid xs={6}>
					<Item>xs=6</Item>
				</Grid>
				<Grid xs>
					<Item>xs</Item>
				</Grid>
			</Grid>
		</Box>
	);
}
