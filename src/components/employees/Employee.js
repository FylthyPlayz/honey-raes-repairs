import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [employee, set] = useState({})  // State variable for current ticket object
    const { employeeId } = useParams()  // Variable storing the route parameter

    useEffect(
        () => {
            fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then((data) => {
                    set(data)
                })
        },
        [ employeeId ]  // Above function runs when the value of ticketId change
    )

    return (
        <>
            <h2>Employee {employeeId} </h2>
            <section className="employee">
                <h3 className="employee__description">{employee.description}</h3>
                <div className="employee__customer">Submitted by {employee.customer?.name}</div>
                <div className="employee__employee">Assigned to {employee.employee?.name}</div>
            </section>
        </>
    )
}