import React from "react";
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import ShuffleIcon from '@material-ui/icons/Shuffle';

const StyledCard = styled(Card)`
  margin: 1em;
  width: 20em;
`;

const StyledCardMedia = styled(CardMedia)`
  height: 0;
  padding-top: 56.25%;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: center;
`;

export default ({onSwitch, imageSrc, day, name}) => {
  return (
    <StyledCard>
      <CardHeader
        title={day}
        subheader={name}
      />
      <StyledCardMedia
        image={process.env.PUBLIC_URL + imageSrc}
        title={name}
      />
      <StyledCardActions>
      {
        onSwitch &&
          <Button variant="contained" color="primary" onClick={onSwitch}><ShuffleIcon/> Swich</Button>
      }
      </StyledCardActions>
    </StyledCard>
  );
}