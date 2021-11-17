import React from "react";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import "./Repairs.css"


// This function is responsible for rendering the html from the imported statements.
export const Repairs = () => {
    return (
        <>
            <NavBar />
            <h1>Honey Rae's Repair Shop</h1>
            <ApplicationViews />
        </>
    )
}
// the react framework <> and </> houses JSX code which can do a variety of things in one function with simpler code.
