import { Paper, Typography, Button, Box } from "@mui/material";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        bgcolor: "#f5f5f5",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          textAlign: "center",
          maxWidth: 400,
        }}
      >
        <Typography variant="h3" gutterBottom>
          404 - Not Found
        </Typography>
        <Typography variant="body1" gutterBottom>
          The page you are looking for does not exist.
        </Typography>
        <Button variant="contained" color="primary" href="/catalog">
          Go CaTOLOG
        </Button>

      </Paper>
    </Box>
  );
}
