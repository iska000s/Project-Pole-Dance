import React from "react";
import {figures} from "./figures";


export const RandomImg = () => {
    const randomImgArray = [];
    for (let n = 0; n < figures.length; n++) {
        if (randomImgArray.length === 6) {
            return <ul>{randomImgArray.map((element) => <li className={"workout_image"}>{element}</li>)}</ul>;
        } else {
            const randomObj = Math.floor(Math.random() * figures.length);
            if (figures[randomObj].level === "basic") {
                const sourceImg = figures[randomObj].src;
                randomImgArray.push(sourceImg);
            }
        }
    }
}

