import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
    //const root = ReactDOM.createRoot(document.getElementsByTagName("table-gest").allegati.children);
    //const root = ReactDOM.createRoot(document.getElementById("root"));
    //root.render(<App />);
    /*  <React.StrictMode>  
      </React.StrictMode>*/
      
      console.log("greetings is done!");
  }
}

//customElements.define("enea-logo",mylogo);
customElements.define("enea-table-gest", Reanime);

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />,document.getElementById("root"));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
