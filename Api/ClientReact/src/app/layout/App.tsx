import { useEffect, useState } from "react";
import type { Product } from "../model/product";
import Catalog from "../Features/catalog/Catalog";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [darkMode , setDarkMode] = useState(false);

  const palleteType=darkMode?"dark":"light";

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
  }
  });


  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    fetch("http://localhost:5000/api/Product")
      .then((response) => response.json())
      .then((data) => setProducts(data));

    return () => {
      setProducts([]);
    };
  }, []);

  // const addproduct = () => {
  //   setProducts((prevState) => [
  //     ...prevState,
  //     {
  //       id: prevState.length + 1,
  //       name: `Product ${prevState.length + 1}`,
  //       price: (prevState.length + 1) * 100,
  //       description: `This is product ${prevState.length + 1}`,
  //       pictureUrl: `https://via.placeholder.com/150`,
  //       type: `Type ${prevState.length + 1}`,
  //       brand: `Brand ${prevState.length + 1}`,
  //       quantityInStock: 10,
  //     },
  //   ]);
  // };

  return (


    <ThemeProvider  theme={theme}>  
   <CssBaseline />
 <NavBar   toggleDarkMode={toggleDarkMode}  darkMode={darkMode} />
    <Box 
    sx={{
      minHeight:'100vh',
      background: darkMode?
      'radial-gradient(circle at 10% 20%, #1e3c72 0%, #2a5298 90%)':
      'radial-gradient(circle at 10% 20%, #ffffff 0%, #e0e0e0 90%)',
     py:4
    }}
    >
         <Container maxWidth="xl" sx={{ mt: 12 }}>
     
      <Catalog products={products} />
    </Container>
    </Box>
   
  
    </ThemeProvider>
   
  );
}

export default App;
