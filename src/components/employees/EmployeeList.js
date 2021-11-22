import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom"

// this function will display the employee list after being imported to Repairs. It does a fetch, event listener, and render html display all in one function.
export const EmployeeList = () => {
    const [employees, changeEmployees] = useState([])
    const [employeeSpecialty, updateSpecialty] = useState([])
    const history = useHistory() 
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
            updateSpecialty(justSpecialties.join(", "))

        },
        [employees]
    )

    return (
        <>
            <div>
                Specialties: {employeeSpecialty}
            </div>
            
            {
                employees.map(
                    (employeeObj) => {
                        return <h3 key={`employee--${employeeObj.id}`}><Link to={`/employees/${employeeObj.id}`}>{employeeObj.name}</Link></h3>
                    }
                )
            }
            <div>
            <button onClick={() => history.push("/employees/create")}>Hire Employee</button>
            </div>
        </>
    )
}