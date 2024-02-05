import { Grid } from "@mui/material";

import AccountTypeForm from "./AccountTypeForm";
import SavingsInsightForm from "../SavingsInsightForm";

const Bot = () => {
  return (
    <Grid container spacing={2}>
      <Grid item lg={9} md={8} xs={12}>
        <SavingsInsightForm />
      </Grid>
      <AccountTypeForm />
      <Grid item lg={3} md={4} xs={12}></Grid>

      <Grid item lg={3} md={4} xs={12}>
        History Box goes here fgrGF
      </Grid>
    </Grid>
  );
};

export default Bot;
