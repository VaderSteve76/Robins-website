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

// export const Container = styled.div`
//   height: 350px;
//   max-width: 100%;
// `;

// export const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   bottom: 0;
//   left: 0;
//   right: 0;
//   height: 100%;
//   width: 100%;
//   opacity: 0;
//   transition: .5s ease;
//   background-color: #008CBA;
// `;

// export const Text = styled.div`
//   color: white;
//   font-size: 20px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   -ms-transform: translate(-50%, -50%);
// `;