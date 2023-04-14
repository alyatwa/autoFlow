import CartItem from "../../components/cartitem/CartItem";
import { useContext } from "react";
import CartContext from "../../Context/Cart/CartContext";
import Checkout from "../../components/checkout/Checkout";
import { IProduct } from "@/Types/product";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const Cart = () => {
	const { cartItems } = useContext(CartContext);

	return (
		<>
			<Grid spacing={2} container direction="row" justifyContent="center" alignItems="center">
        <Grid item>
				{cartItems.length === 0 ? (
					<Typography variant="h5" component="h2">
						Shopping Cart Empty
					</Typography>
				) : (
					<Grid
						spacing={2}
						container 
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Grid item>
							<Typography variant="h5" component="h2">
								Shopping Cart <span>({cartItems.length})</span>
							</Typography>
						</Grid>
						{cartItems.map((product: IProduct) => (
							<Grid item key={product.id}>
								<CartItem key={product.id} product={product} />
							</Grid>
						))}
					</Grid>
				)}	</Grid>
				<Grid item> {cartItems.length > 0 && <Checkout />} </Grid>
		
			</Grid>
		</>
	);
};

export default Cart;
