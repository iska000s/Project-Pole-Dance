import React, {createElement} from "react";
import {figures} from "./figures";
import {createRoot} from "react-dom/client";

const newImg = document.querySelector(".workout_basic");

export const RandomImg = () => {
    if (newImg) {
        const createImg = createRoot(newImg);

        const RandomImgFunction = () => {
            const randomImgArray = [];
            for (let n = 0; n < figures.length; n++) {
                if (randomImgArray.length === 6) {
                    return <ul>{randomImgArray.map((element) => <li key={figures.id} className={"workout_image"}>{element}</li>)}</ul>;
                } else {
                    const randomObj = Math.floor(Math.random() * figures.length);
                            if (figures[randomObj].level === "basic" && randomImgArray.includes(figures[randomObj].src) === false) {
                                const sourceImg = figures[randomObj].src;
                                randomImgArray.push(sourceImg);
                            }
                }
            }
        }
            createImg.render(<RandomImgFunction/>);
        }
}
