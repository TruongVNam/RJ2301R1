import { useState } from "react";

export default function useCarColor() {
    
    const handleChange =(e) => {
        console.log('e.target.name === "cars"', e.target.name === "cars");
        let {cars, colors} = {...selected};
        if (e.target.name === "cars") {
            cars = e.target.value;
        } else {
            colors = e.target.value;
        }

        setSelected({cars: Number(cars), colors: Number(colors)});

        console.log("e.target.name: ", e.target.name);
        console.log("e.target.value: ", e.target.value);
    };
    console.log("selected: ", selected);

    const {cars, colors} = selected;
    let carID = cars
    let colorID = colors;
    console.log("carID: ", carID);
    console.log("colorID: ", colorID);
    console.log("carName: ", Cars.cars[carID].name);
    console.log("colorID: ", Colors.colors[colorID].name);
}