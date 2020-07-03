import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const Header: React.FC = () => {
  return (
    <AppBar
      color="primary"
      position="sticky"
      elevation={0}
      // className={classNames(this.props.classes.appBar, {
      //   [this.props.classes.appBarShift]: !this.props.isOpen,
      // })}
    >
      <Toolbar>
        <div style={{ textAlign: 'center' }}>
          <Typography>BumpIt BusinessCard Application</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
