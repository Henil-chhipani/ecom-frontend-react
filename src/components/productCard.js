import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={product.thumbnail} // Update this to match your actual image URL
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained">
          Buy
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
