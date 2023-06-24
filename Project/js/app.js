import "../scss/index.scss"
import React from "react";
import {createRoot} from "react-dom/client";

import {RandomImg} from "./RandomImg";
import {FigureCategory} from "./FigureCategory";
import {ChangeCaseFunction} from "./contact";
import BiggerImg from "./BiggerImg";



const App = () => {
    return (
        <>
            <RandomImg/>
            <FigureCategory/>

        </>
    )
}


const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);



