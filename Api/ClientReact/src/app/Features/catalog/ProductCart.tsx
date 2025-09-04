import type { Product } from "../../model/product";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCart({ product }: Props) {
  return (
    <Card elevation={3} sx={{ width: 240 ,borderRadius:2, display:'flex', flexDirection:'column', justifyContent:'space-between'  }}>
      <CardMedia
        sx={{ height: 240, backgroundSize: "cover" }}
        image={product.pictureUrl}
        title={product.name}
      />

      <CardContent>
        <Typography
          gutterBottom
          sx={{ textTransform: "uppercase" }}
          variant="subtitle2"
        >
          {product.name}
        </Typography>

        <Typography sx={{ color: "text.secondary" }} variant="h6">
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </CardContent>

      <CardContent
        sx={{ justifyContent: "space-between" }}
      >

        <Button>Add to Cart</Button>
        <Button component={Link} to={`/catalog/${product.id}`} >View</Button>
      </CardContent>

    </Card>
  );
}
