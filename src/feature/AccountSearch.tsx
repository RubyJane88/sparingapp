import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

const AccountSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IKontoData[]>([]);

  const handleSearch = () => {
    const results = IKontoData.filter((account) =>
      account.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <Typography variant="h4">Account Search</Typography>
      <TextField
        fullWidth
        label="Enter Account Title"
        value={searchTerm}
        variant="outlined"
        margin="normal"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default AccountSearch;
