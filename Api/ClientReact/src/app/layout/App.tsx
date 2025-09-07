import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../Store/store";


// const getinitialThemeMode=()=>{
//   const savedTheme=localStorage.getItem('darkMode');
//   return savedTheme ? JSON.parse(savedTheme):true;
// }

function App() {
  // const [darkMode , setDarkMode] = useState(getinitialThemeMode());

  const {darkMode}= useAppSelector(state=>state.ui);

  const palleteType=darkMode?"dark":"light";

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
  }
  });


  // const toggleDarkMode = ()=>{
  //   setDarkMode(!darkMode);
  //   // localStorage.setItem('darkMode',JSON.stringify(!darkMode));
  // }

  

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
 {/* <NavBar   toggleDarkMode={toggleDarkMode}  darkMode={darkMode} /> */}
  <NavBar   />

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
     
      {/* <Catalog  /> */}
      <Outlet />
    </Container>
    </Box>
   
  
    </ThemeProvider>
   
  );
}

export default App;
