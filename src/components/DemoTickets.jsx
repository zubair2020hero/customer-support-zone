import React, {use} from "react";


const DemoTickets = ({TicketsPromise}) => {
    const tickets = use(TicketsPromise);
    console.log(tickets)
    return(
        <div>

        </div>
    );
};

export default DemoTickets;