//import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import "./components/TicketForm.js";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm.js";
import ticketReducer from "./reducers/ticketReducer.js";
import TicketList from "./components/TicketList.js";

import { sortTickets } from "./utilits/sortingUtilities.js";
//import { type } from "@testing-library/user-event/dist/type/index.js";

function App() {
  const intialState = {
    tickets: [],
    editingTicket: null,
    sortPreference: "High to Low",
  };

  const [state, dispatch] = useReducer(ticketReducer, intialState);
  const sortedTickets = sortTickets(state.tickets, state.sortPreference);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch} editingTicket={state.editingTicket} />
        {state.tickets.length > 0 && (
          <div className="results">
            <h2>All Tickets</h2>
            <select
              value={state.sortPreference}
              onChange={(e) =>
                dispatch({ type: "SET_SORTING", payload: e.target.value })
              }
            >
              <option value={"High to Low"}>High to Low</option>
              <option value={"Low to High"}>Low to High</option>
            </select>
            <TicketList
              tickets={sortedTickets}
              dispatch={dispatch}
            ></TicketList>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
