import React from "react";
import { useState } from "react";


export const AddCalculator = () => {
    let [counter, setTotal]= useState("0")

    const onHandleClick = () => {
        setTotal(++counter);
    
        counter(setTotal + " " + counter);
      };

     


    return (
        <>
            <button oClick={() => onHandleClick()}>Add 1</button>
            <button onClick={() => onHandleClick()}>Add 2</button>
            <button onClick={() => OnHandleClick()}>Add 3</button>
            <br></br>
            Total:  
        </>
    )
}