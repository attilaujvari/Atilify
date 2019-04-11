import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import {BrowserRouter} from "react-router-dom";
import UserProvider from "./context/UserProvider";
import DataProvider from "./context/DataProvider";

ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <DataProvider>
                <App/>
            </DataProvider>
        </UserProvider>
    </BrowserRouter>,
document.getElementById("root"))