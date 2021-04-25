import { BrowserRouter, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { LoginPage } from "./components/users";
import { Listing, FlightBooking } from "./components/application";

function App() {
  const loginStatus = useSelector((state) => state.logger);
  return (
    <BrowserRouter>
      <Route
        path="/"
        exact
        component={loginStatus ? Listing : LoginPage}
      ></Route>
      <Route path="/listing" exact component={Listing}></Route>
      <Route path="/booking" exact component={FlightBooking}></Route>
    </BrowserRouter>
  );
}

export default App;
