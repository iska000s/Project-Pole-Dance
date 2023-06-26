import React from "react";
import {figures} from "./figures";
import {createRoot} from "react-dom/client";

const newImgBasic = document.querySelector(".workout_basic");
const newImgIntermediate = document.querySelector(".workout_intermediate");
const newImgAdvanced = document.querySelector(".workout_advanced");

if (newImgBasic) {
    const createImg = createRoot(newImgBasic);

    const RandomImgFunction = () => {
        const randomImgArray = [];
        for (let n = 0; n < figures.length; n++) {
            if (randomImgArray.length === 6) {
                return <ul>{randomImgArray.map((element) => <li key={figures.id}
                                                                className={"workout_image"}>{element}</li>)}</ul>;
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


if (newImgIntermediate) {
    const createImg = createRoot(newImgIntermediate);

    const RandomImgFunction = () => {
        const randomImgArray = [];
        for (let n = 0; n < figures.length; n++) {
            if (randomImgArray.length === 6) {
                return <ul>{randomImgArray.map((element) => <li key={figures.id}
                                                                className={"workout_image"}>{element}</li>)}</ul>;
            } else {
                const randomObj = Math.floor(Math.random() * figures.length);
                if (figures[randomObj].level === "intermediate" && randomImgArray.includes(figures[randomObj].src) === false) {
                    const sourceImg = figures[randomObj].src;
                    randomImgArray.push(sourceImg);
                }
            }
        }
    }
    createImg.render(<RandomImgFunction/>);
}

if (newImgAdvanced) {
    const createImg = createRoot(newImgAdvanced);

    const RandomImgFunction = () => {
        const randomImgArray = [];
        for (let n = 0; n < figures.length; n++) {
            if (randomImgArray.length == 3) {
                return <ul>{randomImgArray.map((element) => <li key={figures.id}
                                                                className={"workout_image"}>{element}</li>)}</ul>;
            } else {
                const randomObj = Math.floor(Math.random() * figures.length);
                if (figures[randomObj].level === "advanced" && randomImgArray.includes(figures[randomObj].src) === false) {
                    const sourceImg = figures[randomObj].src;
                    randomImgArray.push(sourceImg);
                }
            }
        }
    }
    createImg.render(<RandomImgFunction/>);
}

export default "RandomImg";