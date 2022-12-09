import React from "react";
import { Grid, Typography } from "@mui/material";
import theme from "./theme/theme";

const App = () => {
  return (
    <Grid container direction='column' alignItems='center'>
      <Grid container sx={{ background: theme.palette.primary.light }}>
        <Typography color={theme.palette.primary.contrastText}>
          Test: background custom primary - light, texto color primary
          contrastText
        </Typography>
      </Grid>
      <Grid container sx={{ background: theme.palette.primary.main }}>
        <Typography color={theme.palette.primary.contrastText}>
          Test: background custom primary - main, texto color primary
          contrastText
        </Typography>
      </Grid>
      <Grid container sx={{ background: theme.palette.primary.dark }}>
        <Typography color={theme.palette.primary.contrastText}>
          Test: background custom primary - dark, texto color primary
          contrastText
        </Typography>
      </Grid>
    </Grid>
  );
};

export default App;
