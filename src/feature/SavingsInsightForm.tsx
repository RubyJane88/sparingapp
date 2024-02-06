import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Autocomplete,
} from "@mui/material";
import { getAccountGroups, getSavingsRecommendation } from "../service/apiCall";

interface SavingsAccountProps {
  title: string;
  link: string;
  id: string;
  updated: string;
  f_navn: string;
  f_leverandor: string;
  f_leverandor_tekst: string;
  f_produktpakke: string;
  f_produktpakke_tekst: string;
  f_frie_uttak: number;
  f_grensebelop1: number | string; // Adjusted based on your JSON, could be either a number or an empty string
  f_gruppe: string;
  f_highestEntryFee: number;
  f_kap_periode: number;
  f_maks_alder: number;
  f_markedsomraade: string;
  f_markedsomraadeTekst: string;
  f_maks_belop: number;
  f_min_alder: number;
  f_min_belop: number;
  f_rentesats1: number;
  f_spesielle_betingelser: string;

}

type Props = {
  setRecommended: (data: any) => void
}

const SavingsInsightForm = (props: Props) => {
  const { setRecommended } = { ...props }

  const [accountType, setAccountType] = useState<any>(null)
  const [accountGroups, setAccountGroups] = useState<string[]>([]);
  const [savingsAccount] = useState<SavingsAccountProps[]>([]);
  const [interestRateMin, setInterestMin] = useState("");
  const [interestRateMax, setInterestMax] = useState("");
  const [minDepositAmount, setMinDepositAmount] = useState("");
  const [maxDepositAmount, setMaxDepositAmount] = useState("");
  const [freeWithdrawal, setFreeWithdrawal] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault();
    try {
      const payload = { accountType, minDepositAmount, maxDepositAmount, freeWithdrawal, interestRateMax, interestRateMin, currentSavings }
      const response = await getSavingsRecommendation(payload);
      setRecommended(response?.data || [])
      if (!response?.success) {
        alert("No recommendations found")
        return
      }

    } catch (error) {
      console.error("Error fetching savings account data:", error);
    }
  };



  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const response = await getAccountGroups();
        if (response?.success) {
          setAccountGroups(response.data || []);
        } else {
          console.error("Failed to fetch account groups: No success flag");
        }
      } catch (error) {
        console.error("Error fetching account groups:", error);
      }
    };
    fetchGroups();
  }, []);

  console.log("Ready to render savingsAccount:", savingsAccount);


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
          <h4>Find out if switching to a new savings account is right for you</h4>
        </Typography>

        <Typography>Select your Savings Account Type </Typography>

        <Autocomplete
          disablePortal
          id="account-group-autocomplete"
          options={accountGroups}
          value={accountType}
          onChange={( newValue) => setAccountType(newValue)}
          renderInput={(params) => <TextField {...params} label="Account type" />}
        />
        <TextField
          label="What is current interest rate from your bank?"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={interestRateMin}
          onChange={(e) => { setInterestMin(e.target.value) }}
        />
        <TextField
          label="Maximum Interest Rates"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={interestRateMax}
          onChange={(e) => { setInterestMax(e.target.value) }}
        />
        <TextField
          label="Minimum deposit amount"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={minDepositAmount}
          onChange={(e) => { setMinDepositAmount(e.target.value) }}
        />

        <TextField
          label="Maximum deposit amount"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={maxDepositAmount}
          onChange={(e) => { setMaxDepositAmount(e.target.value) }}
        />
        <TextField
          label="How many free withdrawals do you have now?"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={freeWithdrawal}
          onChange={(e) => { setFreeWithdrawal(e.target.value) }}
        />

        <Typography variant="h6" sx={{ marginTop: 2 }}>Current Savings</Typography>
        <TextField
          label="Estimate Current Savings"
          type="number"
          variant="outlined"
          fullWidth
          required
          value={currentSavings}
          onChange={(e) => { setCurrentSavings(e.target.value) }}
        />


        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ alignSelf: "center", marginTop: 2, alignContent: "center" }}>
          Submit
        </Button>
      </Box>





    </form>

  )
}

export default SavingsInsightForm;