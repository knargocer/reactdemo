import React from 'react';
import { Thumbnail, Card} from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

export default function Cast({cast}) {
  console.log(cast)
  return (
    <Thumbnail src={URL_IMG+IMG_SIZE_SMALL+cast.profile_path} alt={cast.name} >
      <p>{cast.name}</p>
    </Thumbnail>
//I wanted to make them as cards but I couldn't display them
    // <Card style={{ width: '18rem' }} >
    //   <Card.Body>
    //    <Card.Img variant="top" src={URL_IMG+IMG_SIZE_SMALL+cast.profile_path}  alt={cast.name} />
    //    <Card.Title>{cast.name}</Card.Title>
    //   </Card.Body>
    // </Card>
  );
}

Cast.propTypes = {
  cast: React.PropTypes.shape({
    profile_path: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })
};
