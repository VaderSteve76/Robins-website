import React, { Component } from 'react';
import images from './Data';
import * as S from './ProductStyles';
import '../../styles.css';

export default class Product extends Component {
  render() {
    return (
      <div className="card-container">
        <S.Card>
          <img className="card-image" src={images[0]} />
          <div class="card-text">
          <h4><b>Cesar Milan</b></h4>
          <p>How to Raise the Perfect Dog: Through Puppyhood and Beyond</p>
          <a href="https://www.amazon.com/dp/0307461300/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&amp;linkCode=w00&amp;linkId=640de74d8c59f5a335a5920b9bfca93d&amp;creativeASIN=0307461300">Buy Here!</a>
        </div>
      </S.Card>
      <S.Card>
          <img className="card-image" src={images[0]} />
          <div class="card-text">
          <h4><b>Cesar Milan</b></h4>
          <p>How to Raise the Perfect Dog: Through Puppyhood and Beyond</p>
          <a href="https://www.amazon.com/dp/0307461300/ref=as_sl_pc_tf_til?tag=bigdoodledrea-20&amp;linkCode=w00&amp;linkId=640de74d8c59f5a335a5920b9bfca93d&amp;creativeASIN=0307461300">Buy Here!</a>
        </div>
      </S.Card>
    </div>
    );
  }
}