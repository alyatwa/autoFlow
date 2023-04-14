import { useState, useEffect } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";
import CartContext from "../../Context/Cart/CartContext";
import { useContext } from "react";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdbIcon from "@mui/icons-material/Adb";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export default function Topbar() {
	const { cartItems } = useContext(CartContext);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar>
						<Button component={RouterLink} to="/" variant="contained">
							Home
						</Button>

						<Box sx={{ flexGrow: 1 }} />
						<Box>
							<IconButton
								size="large"
								component={RouterLink}
								to="/cart"
								aria-label="show 4 new mails"
								color="inherit"
							>
								{cartItems.length > 0 ? (
									<Badge badgeContent={cartItems.length} color="error">
										<ShoppingCartIcon />
									</Badge>
								) : (
									<ShoppingCartIcon />
								)}
							</IconButton>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
}
