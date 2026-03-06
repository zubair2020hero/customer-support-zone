import "./App.css";
import "./styles/main.scss";
import CusHeader from "./components/Header/CusHeader";
import CusCount from "./components/count/CusCount";
import CusTickets from "./components/Tickets/CusTickets";
import CusFooter from "./components/Footer/CusFooter";

const TicketsPromise = fetch("./tickets-data.json").then((res) => res.json());

function App() {
  return (
    <>
      <CusHeader></CusHeader>
      <CusCount></CusCount>
      <CusTickets></CusTickets>
      <CusFooter></CusFooter>
    </>
  );
}

export default App;
