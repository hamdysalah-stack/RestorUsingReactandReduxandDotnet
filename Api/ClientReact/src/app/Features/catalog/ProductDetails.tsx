import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../model/product";
import Grid from "@mui/material/Grid";
import {
  Button,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/Product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  const ProductDetails = [
    { label: "Name", value: product.name },
    { label: "Description", value: product.description },
    { label: "Price", value: product.price },
    { label: "Type", value: product.type },
    { label: "Brand", value: product.brand },
    { label: "Quantity In Stock", value: product.quantityInStock },
  ];

  return (
    <Grid container spacing={6} maxWidth="lg" sx={{ mx: "auto" }}>
      <Grid size={6}>
        <img
          src={product?.pictureUrl}
          alt={product?.name}
          style={{ width: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid size={6}>
        <Typography variant="h3">{product?.name}</Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="h4">
          ${(product?.price / 100).toFixed(2)}
        </Typography>

        <TableContainer>
          <Table sx={{
            '&td': {fontSize:'1rem'}
          }} >
            <TableBody>
              {ProductDetails.map((detail, index) => (
                <TableRow key={index}>
              <TableCell sx={{fontWeight:'bold'}} >{detail.label}</TableCell>
              <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid size={6}>
            <TextField
              variant="outlined"
              type="number"
              label="Quantity in Cart"
              fullWidth
              defaultValue={1}
            />
          </Grid>
          <Grid size={6}>
            <Button sx={{height:'55px'}} color="primary" size="large" variant="contained" fullWidth> 
              Add to Cart
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
