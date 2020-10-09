import React from 'react';
import Cast from './Cast';
import {Link} from 'react-router';
import {  Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export default function CastList({data}) {
  //I Tried to chenge the intersecting view with styling
  const StyledLink = styled(Link)`
    display:inline-block;
    margin:20px;
    padding:20px;
    &:hover {
      text-decoration:none;
    }
  `;
    let casts = data.map(function(cast) {
      if(cast.profile_path != null) {
        return(
          
         <Col xs={4} sm={3} md={2} lg ={2} key={cast.id} >
            <StyledLink to={'/star/'+cast.id} >< Cast cast={cast} /> </StyledLink>
         </Col> 
        
        );
      }

      return null;
    });
  //Added a row to make the display as wanted
    return(
      <div>
        <h3>Casts</h3>
        <Row xs={5} sm={3} md={2} lg = {1} >
        {casts}
      </Row>
      </div>
    );
}
