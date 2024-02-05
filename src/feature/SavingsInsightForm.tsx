import React, { useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Autocomplete,
} from "@mui/material";
import { getAccountGroups } from "../service/apiCall";

const SavingsInsightForm = () => {
  const [accountGroup, setAccountGroup] = React.useState<any>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log("Form submitted");
  };

  useEffect(() => {
    fetchGroups();

    async function fetchGroups() {
      const response = await getAccountGroups();
      if (response?.success) setAccountGroup(response?.data || []);
    }
  },[]);

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "90ch" },
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}>
        <Typography variant="h5" margin="2rem" sx={{ color: "secondary.main" }}>
          Find out if switching to a new savings account is right for you
        </Typography>

        <Typography variant="h6">Current Bank and Account Type</Typography>
        <TextField
          label="Nåværende bank"
          variant="outlined"
          fullWidth
          required
        />
        <TextField
          label="Type sparekonto du har?"
          variant="outlined"
          fullWidth
          required
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={accountGroup}
          renderInput={(params) => (
            <TextField {...params} label="Account type" />
          )}
        />

        <Typography variant="h6">Current Account Features</Typography>
        <TextField
          label="Din nåværende rentesats"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Antall frie uttak per måned"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Spesielle betingelser for din konto"
          variant="outlined"
          fullWidth
        />

        <Typography variant="h6">Financial Activity</Typography>
        <TextField
          label="Gjennomsnittlig kontobalanse"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Hvor ofte tar du ut penger?"
          variant="outlined"
          fullWidth
        />

        <Typography variant="h6">Savings Goals</Typography>
        <TextField
          label="Ditt primære mål med sparekontoen"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Er du interessert i kontoer med spesifikke funksjoner eller fordeler?"
          variant="outlined"
          fullWidth
        />

        <Typography variant="h6">Additional Services</Typography>
        <TextField
          label="Bruker du tilleggstjenester med din nåværende konto?"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Ser du etter lignende tjenester i en ny konto?"
          variant="outlined"
          fullWidth
        />

        <Typography variant="h6">Preferences for new account</Typography>
        <TextField
          label="Minimumsrente du ser etter i en ny sparekonto"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Minimum og maksimum kontobalanse du vurderer for din nye sparekonto"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Hvor viktig er frie uttak for deg på en skala fra 1 til 10?"
          variant="outlined"
          fullWidth
        />

        <Typography variant="h6">Switching preferences</Typography>
        <TextField
          label="Hvor sannsynlig er det at du bytter til en ny bank hvis den tilbyr bedre renter eller vilkår?"
          variant="outlined"
          fullWidth
        />
        <TextField
          label="Er det noen deal-breakers for deg når du vurderer en ny sparekonto?"
          variant="outlined"
          fullWidth
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: "center", marginTop: 2 }}>
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default SavingsInsightForm;
