import React, { useEffect, useState } from "react";
import Header from "../components/header";
import ProductCard from "../components/productCard";
import axios from "axios";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Typography from "@mui/material/Typography";

const Home = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [state, setState] = useState({
    right: false,
  });

  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    axios.get("http://localhost:3001/api/v1/users/getProducts")
      .then(response => {
        if (response.data && Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        } else {
          setProducts([]); // Ensure products is an array
        }
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {cartItems.length === 0 ? (
          <ListItem>
            <ListItemText primary="Your cart is empty" />
          </ListItem>
        ) : (
          cartItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary={item.name} secondary={`$${item.price}`} />
              </ListItemButton>
            </ListItem>
          ))
        )}
      </List>
      <Divider />
      <List>
        <ListItem>
          <ListItemText primary={`Total Items: ${cartItems.length}`} />
        </ListItem>
      </List>
    </Box>
  );

  if (loading) {
    return <div>Loading...</div>; // Add a loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Handle and display errors
  }

  return (
    <div>
      <Header />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>

      <React.Fragment key={'right'}>
        <Button onClick={toggleDrawer('right', true)} variant="contained" style={{ position: 'fixed', bottom: 16, right: 16 }}>
          View Cart
        </Button>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Home;
