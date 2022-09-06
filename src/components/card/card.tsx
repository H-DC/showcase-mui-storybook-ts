import React, { ReactNode } from 'react';
import CardUI from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/grid';
import { makeStyles } from '@material-ui/styles';
import { Box, Typography } from '@material-ui/core';

interface CardProps {
  title: { label: string; subtitle: string; avatar: string };
  headerActions: { label: string; onClick: () => void }[];
  primaryFooterAction: { label: string };
  secondaryFooterActions: { label: string; onClick: () => void };
  children: ReactNode[];
}

const styles = makeStyles((theme) => ({
  footerActions: {
    padding: '1rem',
  },
  headerActions: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const Card: React.FC<CardProps> = ({
  title,
  headerActions,
  primaryFooterAction,
  secondaryFooterActions,
  children,
}) => {
  const classes = styles();

  return (
    <CardUI>
      <CardHeader
        avatar={<Avatar aria-label="recipe">{title.avatar}</Avatar>}
        action={
          <div className={classes.headerActions}>
            {headerActions.map((action) => (
              <Button size="small" variant="text" key={action.label} onClick={action.onClick}>
                {action.label}
              </Button>
            ))}
          </div>
        }
        title={title.label}
        subheader={title.subtitle}
        style={{ borderBottom: '1px solid #eee' }}
      />
      <CardContent>
        <Box style={{ marginBottom: '1rem' }}>
          <Typography variant="subtitle1" color="textSecondary" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Typography>
        </Box>
        <Grid container direction="column" spacing={2}>
          {children.map((child, index) => (
            <Grid item xs key={index}>
              {child}
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <CardActions classes={{ root: classes.footerActions }}>
        <Grid container direction="row" spacing={4} justifyContent="space-between">
          <Grid item>
            <Typography variant="body2" color="textSecondary" component="p">
              {primaryFooterAction.label}
            </Typography>
          </Grid>
          <Grid item>
            <Button color="primary" variant="contained" onClick={secondaryFooterActions.onClick}>
              {secondaryFooterActions.label}
            </Button>
          </Grid>
        </Grid>
      </CardActions>
    </CardUI>
  );
};
