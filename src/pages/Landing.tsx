import React from 'react';
import { Grid, Theme, createStyles, makeStyles } from '@material-ui/core';

import SiteHeader from './SiteHeader'
import Advantages from './Advantages'
import DownloadArea from './DownloadArea'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    landingContainer: {
      textAlign: 'center'
    },
  }),
);

export default function Landing() {
  const classes = useStyles()

  return <Grid container className={classes.landingContainer}>
    <SiteHeader />
    <Advantages />
    <DownloadArea />
  </Grid>;
}