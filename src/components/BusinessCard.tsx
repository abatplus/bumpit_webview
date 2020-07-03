import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardHeader,
  CardActions,
  //  CardMedia,
  IconButton,
  CardContent,
} from '@material-ui/core';
import CloudDownload from '@material-ui/icons/CloudDownload';
import { useParams } from 'react-router';

const BusinessCard: React.FC = () => {
  let { tempGuid } = useParams();

  return (
    <Card>
      <CardHeader></CardHeader>
      <CardContent>
        <Typography>
          Hier wird dann die Visitenkarte gerendert mit dem Bild und die Kontaktdaten angezeigt. {tempGuid} is to be used to request the data from the backend.
        </Typography>
      </CardContent>
      {/* <CardMedia image="" title="vCard" /> */}
      <CardActionArea>
        <CardActions>
          <IconButton title="Download as vCard" aria-label="download" onClick={(event) => console.log('DOWNLOAD GESTARTET')}>
            <CloudDownload />
          </IconButton>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default BusinessCard;
