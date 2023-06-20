import "../scss/index.scss"
import React from "react";
import { createRoot } from "react-dom/client";

import {RandomImg} from "./RandomImg";
import {figures} from "./figures";

const container = document.getElementById("app");

if (container) {
    const root = createRoot(container);

    const App = () => {
        return (
            <>
                cos cos
                <RandomImg />
            </>
        )
    }


    root.render(<App/>);

}



