import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const Checkout = () => {
	const { itemCount, total } = useContext(CartContext);

	return (
		<Card sx={{ maxWidth: 200 }}>
			<CardContent>
				<Typography variant="h5" component="div">
					Total Items:
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{itemCount}
				</Typography>
				<Typography variant="h5" component="div">
					Total Payment:
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					{total}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default Checkout;
