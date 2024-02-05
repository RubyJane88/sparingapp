import React from "react";
import { Typography, Box } from "@mui/material";
import { KontoData } from "../interfaces/iKontoData";

interface Props {
  account: KontoData;
}

const AccountDetails: React.FC<Props> = ({ account }) => {
  if (!account)
    return (
      <>
        <span>"No account data available</span>
      </>
    );

  return (
    <Box>
      <Typography variant="h4">{account.title}</Typography>
      <Typography variant="subtitle1">Bank Provider: {account.navn}</Typography>
      <Typography>Account Type: {account.leverandor}</Typography>
      <Typography variant="h6">Minimum Amount: {account.minBelop}</Typography>
      <Typography>Maximum Amount: {account.maksBelop}</Typography>
      <Typography>Interest Rate: {account.rentesatser}</Typography>

      <Typography>Free Withdrawals: {account.frie_uttak}</Typography>
      <Typography>Withdrawal Fee: {account.kap_periode}</Typography>

      <Typography>Monthly Savings: {account.manedlig_sparing}</Typography>
      <Typography>Min. Age: {account.min_alder}</Typography>
      <Typography>Max Age: {account.min_alder}</Typography>
      <Typography>Market Area Mortage: {account.markedsomraade}</Typography>
      <Typography>
        Mortgage Description: {account.markedsomraadeTekst}
      </Typography>
      <Typography>Key Period: {account.kap_periode}</Typography>
      <Typography>
        Special Conditions: {account.spesielleBetingelser}
      </Typography>
    </Box>
  );
};

export default AccountDetails;
