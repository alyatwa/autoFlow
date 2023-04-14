import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { IProduct } from "@/Types/product";
import Grid from "@mui/material/Grid";
import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box";

type Props = {
	Item: IProduct;
	handleAddToCart: (clickedItem: IProduct) => void;
};

export default function Product({ Item, handleAddToCart }: Props) {
	return (
		<Card sx={{ maxWidth: 245, minWidth: 200, minHeight: 300 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="190"
					image={Item.image}
					alt={Item.title}
				/>
				<CardContent sx={{ height: 110 }}>
					<Typography gutterBottom sx={{ fontSize: 15 }} component="div">
						{Item.title}
					</Typography>
					<Box style={{ flexGrow: 1, height:10 }}></Box>
					<Chip label={Item.category} variant="outlined" />
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Grid
					container
					alignItems="center"
					direction="row"
					justifyContent="space-between"
				>
					<Grid item xs>
						<Button
							size="small"
							color="primary"
							onClick={() => handleAddToCart(Item)}
						>
							Add to card
						</Button>
					</Grid>
					<Grid item xs>
						<Typography variant="h6" component="h2" align="right">
							{Item.price}$
						</Typography>
					</Grid>
				</Grid>
			</CardActions>
		</Card>
	);
}
