import { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Autocomplete,
  Stack,
} from "@mui/material";
import { getSavingsRecommendation, getAccountGroups } from "../service/apiCall";


type Props = {
  setRecommended: (data: any) => void
}

const SavingsInsightForm: React.FC<Props> = ({ setRecommended }) => {
  const [accountType, setAccountType] = useState<string | null>(null); 
  const [accountGroups, setAccountGroups] = useState<string[]>([]);
  const [minDepositAmount, setMinDepositAmount] = useState("");
  const [maxDepositAmount, setMaxDepositAmount] = useState("");
  const [freeWithdrawal, setFreeWithdrawal] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getAccountGroups();
        if (response?.success) {
          setAccountGroups(response.data);
        }
      } catch (error) {
        console.error("Error fetching account groups:", error);
      }
    };
    fetchGroups();
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const payload = {
      accountType,
      minDepositAmount,
      maxDepositAmount,
      freeWithdrawal,
   
    };
    try {
      const response = await getSavingsRecommendation(payload);
      if (response?.success) {
        setRecommended(response.data);
      } 
    } catch (error) {
      console.error("Error fetching savings account data:", error);
    }
  };
  
  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom align="center">
        Find out if switching to a new savings account is right for you
      </Typography>
      <Stack spacing={2} alignItems="center">
        <Autocomplete
          disablePortal
          id="account-group-autocomplete"
          options={accountGroups}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Account Type" />}
          value={accountType}
          onChange={(_e, newValue: string | null) => setAccountType(newValue)}
        />
    
        <TextField
          label="Minimum Deposit Amount"
          type="number"
          variant="outlined"
          value={minDepositAmount}
          onChange={(e) => setMinDepositAmount(e.target.value)}
        />
        <TextField
          label="Maximum Deposit Amount"
          type="number"
          variant="outlined"
          value={maxDepositAmount}
          onChange={(e) => setMaxDepositAmount(e.target.value)}
        />
        <TextField
          label="Free Withdrawal"
          type="number"
          variant="outlined"
          value={freeWithdrawal}
          onChange={(e) => setFreeWithdrawal(e.target.value)}
        />
        <TextField
          label="Current Savings"
          type="number"
          variant="outlined"
          value={currentSavings}
          onChange={(e) => setCurrentSavings(e.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default SavingsInsightForm;
