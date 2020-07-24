import React from 'react';
import { Grid, Theme, createStyles, makeStyles, Typography } from '@material-ui/core';
import { CallSplit, Schedule, TagFaces, TouchApp } from '@material-ui/icons';
import { useIntl } from 'react-intl';
import { translate } from '../utils';

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
  const i18n = useIntl();
  const classes = useStyles()

  return <Grid container item className={classes.contentGrid}>
    <Grid item xs={'auto'} md={2} />
    <Grid item xs={12} md={2}>
      <Schedule className={classes.icon} />
      <Typography className={classes.headerTypo}>{translate(i18n, 'Time_Saving')}</Typography>
      <Typography className={classes.headerText}>{translate(i18n, 'Time_Saving_Description')}</Typography>
    </Grid>
    <Grid item xs={12} md={2}>
      <TagFaces className={classes.icon} />
      <Typography className={classes.headerTypo}>{translate(i18n, 'No_Costs')}</Typography>
      <Typography className={classes.headerText}>{translate(i18n, 'No_Costs_Description')}</Typography>
    </Grid>
    <Grid item xs={12} md={2}>
      <CallSplit className={classes.icon} />
      <Typography className={classes.headerTypo}>{translate(i18n, 'Data_Secure')}</Typography>
      <Typography className={classes.headerText}>{translate(i18n, 'Data_Secure_Description')}</Typography>
    </Grid>
    <Grid item xs={12} md={2}>
      <TouchApp className={classes.icon} />
      <Typography className={classes.headerTypo}>{translate(i18n, 'Intuitive_Use')}</Typography>
      <Typography className={classes.headerText}>{translate(i18n, 'Intuitive_Use_Description')}</Typography>
    </Grid>
    <Grid item xs={'auto'} md={2} />
  </Grid>
}