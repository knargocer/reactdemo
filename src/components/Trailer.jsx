import React from 'react';
import { URL_YOUTUBE } from '../const';
import { Col } from 'react-bootstrap'
/**
 * Represents a trailer 
 * @param {string} trailer - the address of trailer for YouTube api
 */
export default function Trailer({trailer}) {
  return(
    <Col>
     <iframe title={URL_YOUTUBE + trailer} src={URL_YOUTUBE + trailer} allowFullScreen />
    </Col>
    )}

Trailer.propTypes = {
  trailer: React.PropTypes.string.isRequired,
};
