import styled from 'styled-components';
import logo from '../../Img/IMG_0057.jpeg';

export const DIV = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

export const IMG = styled.div`
  height: 350px;
  max-width: 90%;
  box-shadow: 0px 8px 8px 0px black;
  border-radius: 5px;
  background-image: url(${logo});
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: 100%;
  margin: 25px auto 5px auto;
`;

export const SwipeDiv = styled.div`
  height: 450px;
  max-width: 90%;
  box-shadow: 0px 8px 8px 0px black;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-evenly;
`;