import React from 'react';
import { Typography, Link } from '@material-ui/core';
const Copyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Typography variant={'body2'} color={'textSecondary'} align={'center'}>
      Copyright &copy; {currentYear} by&nbsp;
      <Link color="inherit" href={'https://www.abat.de/de/abatplus'} title={'abat+ GmbH'}>
        abat+ GmbH
      </Link>
    </Typography>
  );
};

export default Copyright;
