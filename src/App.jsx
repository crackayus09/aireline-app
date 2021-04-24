import { BrowserRouter, Route } from "react-router-dom";

import { LoginPage } from "./components/users";
import { Listing, FlightBooking } from "./components/application";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginPage}></Route>
      <Route path="/listing" exact component={Listing}></Route>
      <Route path="/booking" exact component={FlightBooking}></Route>
    </BrowserRouter>
  );
}

export default App;
