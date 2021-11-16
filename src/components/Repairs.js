import React from "react";
import {CustomerList} from "./customers/CustomerList";
import {EmployeeList} from "./EmployeeList"

// This function is responsible for rendering the html from the imported statements.
export const Repairs = () => {
    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>
            <CustomerList />
            <EmployeeList />
        </>
    )
}
// the react framework <> and </> houses JSX code which can do a variety of things in one function with simpler code.
