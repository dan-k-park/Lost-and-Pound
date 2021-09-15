import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components";
import { GlobalStyle } from "./globalStyles";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
