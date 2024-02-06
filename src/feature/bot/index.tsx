import React, { useState } from 'react';
import { Grid } from '@mui/material';

import AccountList from './AccountList'; 
import SavingsInsightForm from '../SavingsInsightForm';

const Bot: React.FC = () => {
  const [recommended, setRecommended] = useState<any[]>([]); 

  return (
    <Grid container spacing={2}>
      <Grid item lg={9} md={8} xs={12}>
        <SavingsInsightForm setRecommended={setRecommended} />
        <AccountList recommended={recommended} />
      </Grid>

    </Grid>
  );
};

export default Bot;
