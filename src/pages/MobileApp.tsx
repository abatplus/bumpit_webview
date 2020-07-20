import React from 'react';
import { Grid, Theme, createStyles, makeStyles, Typography } from '@material-ui/core';

import appstoreBadge from '../img/apple-appstore-badge.png';
import playstoreBadge from '../img/google-play-badge.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    registerButton: {
      minWidth: '200px',
      minHeight: '50px',
      borderRadius: '0px',
      boxShadow: 'none',
      textAlign: 'left'
    },
    registerTypo: {
      fontWeight: 'bold'
    },
    registerContainer: {
      paddingTop: theme.typography.pxToRem(140),
      paddingBottom: theme.typography.pxToRem(140),
      justifyContent: 'left',
      backgroundColor: '#F5F5F9',
    },
    preTitle: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: 'bold',
      marginLeft: theme.typography.pxToRem(10),
      textAlign: 'left'
    },
    title: {
      fontSize: theme.typography.pxToRem(34),
      color: theme.palette.primary.main,
      textAlign: 'left',
      fontWeight: 'bold',
      marginLeft: theme.typography.pxToRem(10),
      textTransform: 'uppercase'
    },
    bulletPointContainer: {
      marginTop: theme.typography.pxToRem(80),
      marginLeft: theme.typography.pxToRem(10),
      textAlign: 'left'
    },
    bulletPointNumber: {
      fontSize: theme.typography.pxToRem(50),
      fontWeight: 'bold',
      color: '#B0B1B3'
    },
    bulletPointText: {
      marginTop: theme.typography.pxToRem(25),
    },
    bulletPointText2: {
      marginTop: theme.typography.pxToRem(15),
    },
    imageContainer: {
      marginTop: theme.typography.pxToRem(60),
    },
    image: {
      maxWidth: '40%'
    },
    appstoreContainer: {
      paddingTop: theme.typography.pxToRem(100),
      justifyContent: 'left'
    },
    appstoreButton: {
      marginTop: theme.typography.pxToRem(80),
      maxHeight: theme.typography.pxToRem(70)
    },
    playstoreButton: {
      marginTop: theme.typography.pxToRem(80),
      maxHeight: theme.typography.pxToRem(70)
    }
  }),
);

export default function RegisterArea() {
  const classes = useStyles()

  return (
    <Grid container item className={classes.registerContainer}>
      <Grid item xs={'auto'} md={2} />
      <Grid item xs={12} md={8}>
        <Typography className={classes.title}>...Und für den Besucher genauso einfach</Typography>
      </Grid>
      <Grid item xs={'auto'} md={2} />

      <Grid item xs={'auto'} md={2} />

      <Grid item xs={'auto'} md={2} />

      <Grid item xs={'auto'} md={2} />
      <Grid item xs={12} md={6} className={classes.appstoreContainer}>
        <Typography className={classes.title}>vSwap direkt downloaden</Typography>
      </Grid>
      <Grid item xs={'auto'} md={4} />
      <Grid item xs={'auto'} md={2} />
      <Grid item xs={12} md={2} >
        <img src={appstoreBadge} className={classes.appstoreButton} alt="vSwap im AppStore laden" />
      </Grid>
      <Grid item xs={12} md={2} >
        <img src={playstoreBadge} className={classes.playstoreButton} alt="vSwap im Playstore laden" />
      </Grid>
      <Grid item xs={'auto'} md={6} />
      <Grid item xs={'auto'} md={4} />
    </Grid>
  )
}