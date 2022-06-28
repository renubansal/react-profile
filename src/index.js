import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import App from "./components/App.js";
import Jokes from "./components/Jokes.js";
import { createBrowserHistory } from "react-router-dom/node_modules/history";
import "./index.css";
import Header from "./components/Header.js";

// const history = createBrowserHistory();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Header><App /></Header>}></Route>
        <Route path="jokes" element={<Header><Jokes/></Header>} />
    </Routes>
  </BrowserRouter>
);

// new Promise((resolve, reject) => {
//     // reject(new Error('Some Error')); //error
//     setTimeout(() => {
//         resolve('Bears','Bamboo','Bois'); //logic
//     }, 2000)

// }).then(quote => console.log(quote));
// ;
