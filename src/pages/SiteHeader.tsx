import React from 'react';
import { Grid, Theme, createStyles, makeStyles, Typography } from '@material-ui/core';
import { HeaderLogo } from './Logo';
import { useIntl } from 'react-intl';
import IvCardTranslations from '../i18n/IvCardTranslations';
import { nameof } from '../utils';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      margin: '2rem',
      backgroundColor: 'white',
      height: '60vh',
      marginBottom: '100px',
    },
    productName: {
      color: theme.palette.primary.main,
      fontSize: theme.typography.pxToRem(38),
      fontWeight: 'bold',
    },
    headerText: {
      margin: theme.typography.pxToRem(20),
      fontSize: theme.typography.pxToRem(34),
      textAlign: 'center',
    },
  })
);

export default function SiteHeader() {
  const i18n = useIntl();
  const classes = useStyles();

  return (
    <Grid container item className={classes.background} justify="center">
      <Grid item xs={12} md={3}>
        <HeaderLogo />
      </Grid>
      <Grid xs={'auto'} md={9} item />
      <Grid item xs={'auto'} md={3} />
      <Grid item xs={12} md={6}>
        <Typography className={classes.headerText}>
          <span className={classes.productName}>vSwap</span>
          <span> - </span>
          <span>{i18n.formatMessage({ id: nameof<IvCardTranslations>('App_Slogan') })}</span>
        </Typography>
      </Grid>
      <Grid item xs={'auto'} md={3} />
      <Grid item xs={4} />
      <Grid item xs={4} />
    </Grid>
  );
}
