import React, {use} from "react";


const Tickets = ({TicketsPromise}) => {
    const tickets = use(TicketsPromise);
    console.log(tickets)
    return(
        <div>

        </div>
    );
};

export default Tickets;