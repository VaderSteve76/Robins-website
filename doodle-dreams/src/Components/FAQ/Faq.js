import React, { Component } from 'react';
import Faq from "react-faq-component";
import data from './Data';

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Faq
          data={data}
          styles={{
            bgColor: "white",
            titleTextColor: "#48482a",
            rowTitleColor: "#78789a",
            rowTitleTextSize: "large",
            rowContentColor: "#48484a",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingLeft: "50px",
            rowContentPaddingRight: "150px",
            arrowColor: "red"
          }}
          config={{
            animate: true
          }}
        />
      </div>
    )
  }
}