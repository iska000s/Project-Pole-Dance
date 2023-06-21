import React from "react";
import {figures} from "./figures";
import {createRoot} from "react-dom/client";

const imgSit = document.querySelector(".figures_chair");
const imgTwine = document.querySelector(".figures_twine");
const imgInvert = document.querySelector(".figures_invert");
const imgHandstand = document.querySelector(".figures_handstand");
const imgHandspring = document.querySelector(".figures_handspring");
const imgStrength = document.querySelector(".figures_strength");

export const FigureCategory = () => {
    if (imgSit) {
        const ctImg = createRoot(imgSit);

        const FigureCategory = () => {
            const categoryArray = []

            for (let i = 0; i < figures.length; i++) {
                if (figures[i].category === 'siedzące') {
                    const newSrc = figures[i].src;
                    categoryArray.push(newSrc);
                }
            }
            return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
        }

        ctImg.render(<FigureCategory/>);
    }

    if (imgTwine) {
        const twineImg = createRoot(imgTwine);

        const FigureCategoryTwin = () => {
            const categoryArray = []

            for (let i = 0; i < figures.length; i++) {
                if (figures[i].category === 'szpagaty') {
                    const newSrc = figures[i].src;
                    categoryArray.push(newSrc);
                }
            }
            return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
        }

        twineImg.render(<FigureCategoryTwin/>);
    }

    if (imgInvert) {
        const invertImg = createRoot(imgInvert);

        const FigureCategoryTwin = () => {
            const categoryArray = []

            for (let i = 0; i < figures.length; i++) {
                if (figures[i].category === 'szpagaty') {
                    const newSrc = figures[i].src;
                    categoryArray.push(newSrc);
                }
            }
            return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
        }

        invertImg.render(<FigureCategoryTwin/>);
    }
    if (imgHandstand) {
        const handstandImg = createRoot(imgHandstand);

        const FigureCategory = () => {
            const categoryArray = []

            for (let i = 0; i < figures.length; i++) {
                if (figures[i].category === 'handstandy') {
                    const newSrc = figures[i].src;
                    categoryArray.push(newSrc);
                }
            }
            return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
        }

        handstandImg.render(<FigureCategory/>);
    }

    if (imgHandspring) {
        const handspringImg = createRoot(imgHandspring);

        const FigureCategory = () => {
            const categoryArray = []

            for (let i = 0; i < figures.length; i++) {
                if (figures[i].category === 'handspringi') {
                    const newSrc = figures[i].src;
                    categoryArray.push(newSrc);
                }
            }
            return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
        }

        handspringImg.render(<FigureCategory/>);
    }

    if (imgStrength) {
        const strengthImg = createRoot(imgStrength);

        const FigureCategory = () => {
            const categoryArray = []

            for (let i = 0; i < figures.length; i++) {
                if (figures[i].category === 'siłowe') {
                    const newSrc = figures[i].src;
                    categoryArray.push(newSrc);
                }
            }
            return <ul>{categoryArray.map(element => <li className={"figure"}>{element}</li>)}</ul>;
        }

        strengthImg.render(<FigureCategory/>);
    }
}
