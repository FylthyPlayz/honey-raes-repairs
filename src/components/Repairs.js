import React from "react";
import {CustomerList} from "./customers/CustomerList";
import {EmployeeList} from "./EmployeeList"
import { TicketList } from "./serviceTickets/TicketList";

// This function is responsible for rendering the html from the imported statements.
export const Repairs = () => {
    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>
            <h2>Customer List</h2>
            <CustomerList />
            <h2>Employee List</h2>
            <EmployeeList />
            <h2>Service Tickets</h2>
            <TicketList />
        </>
    )
}
// the react framework <> and </> houses JSX code which can do a variety of things in one function with simpler code.
