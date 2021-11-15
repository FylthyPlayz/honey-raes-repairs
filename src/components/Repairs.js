import React, { useEffect, useState } from "react";

export const Repairs = () => {
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
            <h1>Honey Rae's Repair Shop</h1>

            {
                customers.map(
                    (customerObj) => {
                        return <h2>{customerObj.name}</h2>
                    }
                )
            }
        </>
    )
}