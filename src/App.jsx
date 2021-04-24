import { BrowserRouter, Route } from "react-router-dom";

import { LoginPage } from "./components/users/LoginPage";
import { Listing } from "./components/application/Listing";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={LoginPage}></Route>
      <Route path="/listing" exact component={Listing}></Route>
    </BrowserRouter>
  );
}

export default App;
