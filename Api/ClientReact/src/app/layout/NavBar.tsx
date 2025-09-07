import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { toggleDarkMode } from "./uiSlice";

const midlinks = [
  { title: "catalog", path: "/catalog" },
  { title: "about", path: "/about" },
  { title: "contact", path: "/contact" },
];

const rightlinks = [
  { title: "login", path: "/login" },
  { title: "register", path: "/register" },
];

const navstyle = {
  color: "inherit",
  textDecoration: "none",
  ml: 2,
  "&:hover": { color: "grey.500" },
  "&.active": { color: "#747576ff" },
};

// type Props = {
//   toggleDarkMode: () => void;
//   darkMode: boolean;
// };

// export default function NavBar({ darkMode, toggleDarkMode }: Props) {
export default function NavBar() {
  const { loading, darkMode } = useAppSelector((state) => state.ui);

  const dispatch = useAppDispatch();

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left side (Logo + Dark/Light Toggle) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography component={NavLink} sx={navstyle} to="/home" variant="h6">
            Re-Store
          </Typography>
          {/* <IconButton onClick={toggleDarkMode}> */}
          <IconButton onClick={() => dispatch(toggleDarkMode())}>
            {darkMode ? <DarkMode /> : <LightMode sx={{ color: "inherit" }} />}
          </IconButton>
        </Box>

        {/* Center (Midlinks) */}
        <List sx={{ display: "flex", flexDirection: "row" }}>
          {midlinks.map(({ title, path }) => (
            <ListItem component={NavLink} to={path} key={path} sx={navstyle}>
              {title.toUpperCase()}
            </ListItem>
          ))}
        </List>

        {/* Right side (Cart + Login/Register) */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton size="large" color="inherit" sx={{ mr: 2 }}>
            <Badge badgeContent="4" color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: "flex", flexDirection: "row" }}>
            {rightlinks.map(({ title, path }) => (
              <ListItem component={NavLink} to={path} key={path} sx={navstyle}>
                {title.toUpperCase()}
              </ListItem>
            ))}
          </List>
        </Box>
      </Toolbar>
      {loading && (
        <Box sx={{ width: "100%" }}>
          <LinearProgress color="secondary" />
        </Box>
      )}
    </AppBar>
  );
}
