import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

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
          <Route path="/:username">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
