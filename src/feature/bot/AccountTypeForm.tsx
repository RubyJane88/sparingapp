import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Autocomplete,
} from "@mui/material";
import { getAccountGroups } from "../../service/apiCall";

const AccountTypeForm = () => {
  const [accountGroup, setAccountGroup] = useState<string[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const accountGroupData = await getAccountGroups();

      setAccountGroup(accountGroupData);
    } catch (error) {
      console.error("Error fetching savings account:", error);
    }
  };

  useEffect(() => {
    fetchGroups();

    async function fetchGroups() {
      const response = await getAccountGroups();
      console.log("Account Group Response:", response);
      if (response?.success) setAccountGroup(response?.data || []);
    }
  }, []);

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
        <Typography variant="h6">Account Type Form</Typography>
        {accountGroup.length > 0 && (
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={accountGroup}
            renderInput={(params) => (
              <TextField {...params} label="Account type" />
            )}
          />
        )}

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

export default AccountTypeForm;
