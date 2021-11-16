import React, { useEffect, useState } from "react";


// this function will display the employee list after being imported to Repairs. It does a fetch, event listener, and render html display all in one function.
export const EmployeeList = () => {
    const [employees, changeEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then((employeeArray) => {
                    changeEmployees(employeeArray)
                })
        },
        []
    )

    return (
        <>
            <h1>Customer List</h1>
            {
                employees.map(
                    (employeeObj) => {
                        return <h3 key={`employee--${employeeObj.id}`}>{employeeObj.name}</h3>
                    }
                )
            }
        </>
    )
}