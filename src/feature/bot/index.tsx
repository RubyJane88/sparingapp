import React, { useState } from 'react';
import { Grid, Button } from '@mui/material';

import AccountList from './AccountList';
import SavingsInsightForm from '../SavingsInsightForm';

const Bot: React.FC = () => {
  const [recommended, setRecommended] = useState<any[]>([]);
  const [isFormVisible, setIsFormVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Grid container spacing={2}>
      <Grid item lg={9} md={8} xs={12}>

        <Button variant="contained" onClick={toggleVisibility} sx={{ marginBottom: '20px' }}>Saving Options</Button>
        {isFormVisible ? (
          <SavingsInsightForm setRecommended={setRecommended} />
        ) : (
          <AccountList recommended={recommended} />
        )}
      </Grid>
    </Grid>
  );
};

export default Bot;
