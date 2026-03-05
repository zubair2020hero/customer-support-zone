
import './App.css'
import Tickets from './components/tickets';

const TicketsPromise = fetch('./tickets-data.json').then(res => res.json());

function App() {

  return (
    <>
      {/* <button class="btn btn-primary">Butdon</button> */}
      
      <h1>Hello</h1>
      <h2>Hello Too</h2>
      <h3>Hello Happy</h3>
      <h4>All Ok</h4>
      <h4>Good</h4>
      <Tickets TicketsPromise={TicketsPromise}></Tickets>

    </>
  )
}


export default App
