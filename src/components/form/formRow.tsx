import { Grid } from '@material-ui/core';
import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode[];
}

export const FormRow: React.FC<Props> = ({ children }) => {
  return (
    <Grid container direction="row" spacing={2}>
      {children.map((child, index) => (
        <Grid item xs key={index}>
          {child}
        </Grid>
      ))}
    </Grid>
  );
};
