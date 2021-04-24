import { BrowserRouter, Route } from "react-router-dom";

import { LoginPage } from "./components/users/LoginPage";
import { Listing } from "./components/application/Listing";
import { FlightBooking } from "./components/application/FlightBooking";

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
