import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import r2wc from 'react-to-webcomponent';
import ENEATables from './TableComponent';
import reportWebVitals from './reportWebVitals';

//https://github.com/bitovi/react-to-web-component/blob/main/docs/api.md

const webcomponent = r2wc(ENEATables, React, ReactDOM,{
  props:{showlogo:"string", head:"string", name:"string",listnum:'number'}}
);

//const mylogo = r2wc(ENEAlogo,React,ReactDOM);

class Reanime extends webcomponent{
  connectedCallback(){
    console.log("Hi. Webcomponent is alive!");
  }
}

//customElements.define("enea-logo",mylogo);
customElements.define("enea-table-gest", Reanime);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
