import React, { useEffect, useState } from "react";

export const CustomerList = () => {
    const [customers, changeCustomers] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    changeCustomers(customerArray)
                })
        },
        []
    )

    return (
        <>
            <h1>Customer List</h1>
            {
                customers.map(
                    (customerObj) => {
                        return <h3 key={`customer--${customerObj.id}`}>{customerObj.name}</h3>
                    }
                )
            }
        </>
    )
}