import React, { Component } from 'react';
import * as S from './HeaderStyles';

export default class MainHeader extends Component {
  render() {
    return (
      <div>
        <S.IMG></S.IMG>
        <S.NAV>
          <S.DIV>
            <a href=''>Home</a>
            <a href=''>About Us</a>
            <a href=''>Before You Visit</a>
            <a href=''>FAQ</a>
            <a href=''>Available Puppies</a>
          </S.DIV>
          <S.DIV>
            <a href=''>Training/Grooming</a>
            <a href=''>Health Guarantee</a>
            <a href=''>Early Neuro Stimulation</a>
            <a href=''>Deposit/Delivery</a>
            <a href=''>Supply List/Product Links</a>
          </S.DIV>
          
        </S.NAV>
      </div>
    )
  }
}