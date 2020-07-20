import React from 'react';
import { Grid, Theme, createStyles, makeStyles, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    contentGrid: {
      width: '100%',
      justifyContent: 'center',
      backgroundColor: '#F5F5F9',
    },
    icon: {
      color: theme.palette.primary.main,
      fontSize: theme.typography.pxToRem(35),
      marginTop: theme.typography.pxToRem(40)
    },
    headerTypo: {
      margin: theme.typography.pxToRem(10),
      marginTop: theme.typography.pxToRem(30),
      fontWeight: 'bold',
      fontSize: theme.typography.pxToRem(18),
      letterSpacing: '2'
    },
    headerText: {
      margin: theme.typography.pxToRem(10),
      marginTop: theme.typography.pxToRem(30),
      marginBottom: theme.typography.pxToRem(40),
      fontSize: theme.typography.pxToRem(18),
      letterSpacing: '2'
    }
  }),
);

export default function Advantages() {
  const classes = useStyles()

  return <Grid container item className={classes.contentGrid}>
    <Grid item xs={'auto'} md={2} />
    <Grid item xs={12} md={2}>
      {/* <FontAwesomeIcon className={classes.icon} icon={faClock} /> */}
      <Typography className={classes.headerTypo}>Zeitliche Ersparnis</Typography>
      <Typography className={classes.headerText}>Kein aufwändiges Archivieren und Aussortieren von Kontaktformularen</Typography>
    </Grid>
    <Grid item xs={12} md={2}>
      {/* <FontAwesomeIcon className={classes.icon} icon={faHandHoldingBox} /> */}
      <Typography className={classes.headerTypo}>Keine versteckten Kosten</Typography>
      <Typography className={classes.headerText}>vSwap ist komplett kostenlos</Typography>
    </Grid>
    <Grid item xs={12} md={2}>
      {/* <FontAwesomeIcon className={classes.icon} icon={faUserShield} /> */}
      <Typography className={classes.headerTypo}>DSGVO sicher</Typography>
      <Typography className={classes.headerText}>Automatisches Löschen der Datensätze</Typography>
    </Grid>
    <Grid item xs={12} md={2}>
      {/* <FontAwesomeIcon className={classes.icon} icon={faStreetView} /> */}
      <Typography className={classes.headerTypo}>Intuitive Nutzung</Typography>
      <Typography className={classes.headerText}>Schlichter, moderner Aufbau für eine schnelle Bedienbarkeit</Typography>
    </Grid>
    <Grid item xs={'auto'} md={2} />
  </Grid>
}