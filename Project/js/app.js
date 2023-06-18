import React from "react";
import {createRoot} from "react-dom/client";
import {RandomImg} from "./RandomImg";

const container = document.getElementById("app");
const root = createRoot(container);


const App = () => {
    return (
        <>
            <RandomImg />
        </>
    )
}


root.render(<App/>);
