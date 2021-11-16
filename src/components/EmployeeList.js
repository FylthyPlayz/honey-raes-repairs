import React, { useEffect, useState } from "react";


// this function will display the employee list after being imported to Repairs. It does a fetch, event listener, and render html display all in one function.
export const EmployeeList = () => {
    const [employees, changeEmployees] = useState([])
    const [employeeSpecialty, updateSpecialty] = useState([])

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

    useEffect(
        () => {
            const justSpecialties = employees.map(employee => employee.specialty)
            updateSpecialty(justSpecialties.join(","))

        },
        [employees]
    )

    return (
        <>
            <div>
                Specialties: {employeeSpecialty}
            </div>
            <h1>Employee List</h1>
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