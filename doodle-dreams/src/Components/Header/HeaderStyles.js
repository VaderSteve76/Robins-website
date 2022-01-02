import styled from 'styled-components';
import logo from '../../Img/IMG_0057.jpeg';

export const IMG = styled.div`
  height: 325px;
  max-width: 90%;
  box-shadow: 0px 8px 8px 0px black;
  border-radius: 5px;
  background-image: url(${logo});
  background-position: cover; 
  background-repeat: no-repeat; 
  background-size: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25px;
`;