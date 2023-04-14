import styles from "@/styles/Home.module.css";
import Product from "@/components/product/product";
import { IProduct } from "@/Types/product";
import { useContext } from "react";
import CartContext from "@/Context/Cart/CartContext";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

export default function ShopHome() {
	const { addToCart, increase, cartItems } = useContext(CartContext);
	const [data, setData] = useState([]);

	const alreadyAdded = (product: IProduct): boolean => {
		return !!cartItems.find((item) => item.id === product.id);
	};

	const currentProductQty = (product: IProduct): number => {
		return cartItems.find((item) => item.id === product.id)!.quantity;
	};

	useEffect(() => {
		const fetchData = async () => {
			await fetch("https://fakestoreapi.com/products?limit=2")
				.then((response) => response.json())
				.then((data) => {
					let newD = data.map((item: IProduct) => ({
						...item,
						availableQty: 5,
					}));
					setData(newD);
				});
		};

		fetchData();
	}, []);

	const handleAddToCart = (pd: IProduct): void => {
		if (alreadyAdded(pd)) {
			if (currentProductQty(pd) == pd.availableQty) return;
			increase(pd);
		} else {
			addToCart(pd);
		}
	};

	return (
		<>
			<main className={styles.main}>
				<Grid
					container
					spacing={4}
					direction="row"
					justifyContent="center"
					alignItems="center"
				>
					{data.map((pd: IProduct) => (
						<Grid item key={pd.id}> 
							<Product
								key={pd.id}
								Item={pd}
								handleAddToCart={handleAddToCart}
							/>
						</Grid>
					))}
				</Grid>
			</main>
		</>
	);
}
