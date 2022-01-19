import React, { Component } from 'react';
import Faq from "react-faq-component";
import * as S from './FaqStyles';
import data from './Data';


const styles = {
  bgColor: "#A7DBD8",
  rowTitleTextSize: "20px",
  rowContentColor: "#48484a",
  rowContentTextSize: "16px",
  rowContentPaddingTop: "10px",
  rowContentPaddingBottom: "10px",
  rowContentPaddingLeft: "50px",
  rowContentPaddingRight: "50px",
  transitionDuration: ".6s",
  timingFunc: "linear"
}

export default class FAQ extends Component {
  render() {
    return (
      <S.FAQ>
        <Faq
          data={data}
          styles={styles}
          config={{animate: true, tabFocus: true}}
        />
      </S.FAQ>
    )
  }
}