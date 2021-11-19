import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./Tickets.css"
export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [active, setActive] = useState("")
    const history = useHistory()
    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )
    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === "").length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    return (
        <>
            <div>
            <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>

            </div>
            { active }
            {
                tickets.map(
                    (ticketObj) => {
                        return <div key={`ticket--${ticketObj.id}`}>
                           <p className= {`ticket ${ticketObj.emergency ? "emergency" : ""}`} >
{ticketObj.emergency ? "🚑 " : ""} <Link to={`/tickets/${ticketObj.id}`}>{ticketObj.description}</Link> submitted by {ticketObj.customer.name} and worked on by {ticketObj.employee.name}
</p>

                            </div>
                    }
                    )
                }
        </>
    )
}