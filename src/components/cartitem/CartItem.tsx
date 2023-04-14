import { useContext } from "react";

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { IProduct } from "@/Types/product";
import CartContext from "../../Context/Cart/CartContext";

type proType = {
	product: IProduct;
};

const CartItem = ({ product }: proType) => {
	const { removeFromCart, increase, decrease } = useContext(CartContext);

	return (
		<Card sx={{ display: "flex", maxWidth: 350, height: 150 }}>
			<CardMedia
				component="img"
				sx={{ width: 100 }}
				image={product.image}
				alt={product.title}
			/>
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<CardContent sx={{ flex: "1 0 auto" }}>
					<Typography
						sx={{ fontSize: 14 }}
						align="left"
						color="text.primary"
						gutterBottom
					>
						{product.title}
					</Typography>
					<Typography
						variant="subtitle1"
						align="left"
						color="text.secondary"
						component="div"
					>
						{product.price}
					</Typography>
				</CardContent>
				<Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
					{product.quantity > 1 && (
						<IconButton onClick={() => decrease(product)} aria-label="remove">
							<RemoveIcon />
						</IconButton>
					)}

					{product.quantity === 1 && (
						<IconButton
							onClick={() => removeFromCart(product)}
							aria-label="remove"
						>
							<DeleteIcon />
						</IconButton>
					)}

					<Typography variant="h6" component="h2" align="right">
						{product.quantity}
					</Typography>

					<IconButton
						disabled={product.quantity == product.availableQty}
						onClick={() => increase(product)}
						aria-label="Add"
					>
						<AddIcon />
					</IconButton>
				</Box>
			</Box>
		</Card>
	);
};

export default CartItem;
