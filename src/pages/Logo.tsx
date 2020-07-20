import Typography from "@material-ui/core/Typography";
import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core';
// const Logo = require("../img/logo.png");

const useStylesCenterLogo = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      paddingTop: "5%",
      paddingLeft: "20%",
      paddingBottom: "10%",
      paddingRight: "20%",
      height: "25%",
      textAlign: 'center'
    },
    logo: {
      maxWidth: '15%'
    },
    logoTypo: {
      color: 'grey'
    }
  }),
);

export default function DisplayLogo() {
  const classes = useStylesCenterLogo()

  return <div className={classes.logoContainer}>
    {/* <Logo className={classes.logo} /> */}
    <Typography component="h1" variant="h3" className={classes.logoTypo}>vSwap</Typography>
  </div>
}

const useStylesHeaderLogo = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      height: "25%",
      textAlign: 'center'

    },
    logo: {
      maxWidth: '80px',
    },
    logoTypo: {
      color: '#B1B1B3',
      fontWeight: 'bold',
      fontSize: '16px',
    }
  }),
);


export function HeaderLogo() {
  const classes = useStylesHeaderLogo()

  return <div className={classes.logoContainer}>
    {/* <Logo className={classes.logo} /> */}
    <Typography className={classes.logoTypo}>POWERED BY ABAT+</Typography>
  </div>
}

const useStylesLawLogo = makeStyles((theme: Theme) =>
  createStyles({
    logoContainer: {
      paddingTop: "3%",
      paddingLeft: "20%",
      paddingBottom: "3%",
      paddingRight: "20%",
      height: "25%",
      textAlign: 'center'
    },
    logo: {
      maxWidth: '15%'
    },
    logoTypo: {
      color: 'grey',
      textDecoration: 'none',

    }
  }),
);

export function LawLogo() {
  const classes = useStylesLawLogo()

  return <div className={classes.logoContainer}>
    {/* <Logo className={classes.logo} /> */}
    <Typography className={classes.logoTypo} component="h1" variant="h3">vSwap</Typography>
  </div>
}