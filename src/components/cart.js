import React from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Cart
      </Typography>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.name}
              secondary={`$${item.price}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Cart;
