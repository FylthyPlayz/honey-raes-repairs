import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    });

    const history = useHistory()
    const submitEmployee = (event) => {
        event.preventDefault()

        const newemployee = {
            name: employee.name,
            specialty: employee.specialty
        }
        const fetchOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newemployee)
        }
        return fetch("http://localhost:8088/employees", fetchOption)
            .then(response => response.json())
            .then(() => {
                history.push("/employees")
            })
    }
    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Hire Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name:</label>
                    <input
                    onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.name = evt.target.value
                            updateEmployee(copy)
                        }}
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full Name of hired Employee"
                         />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Specialty:</label>
                    <input type="text"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.specialty = evt.target.value
                                updateEmployee(copy)
                            }} />
                </div>
            </fieldset>
            <button onClick={submitEmployee} className="btn btn-primary">
                Finish Hiring
            </button>
        </form>
    )
}