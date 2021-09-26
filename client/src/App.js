import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import { GlobalStyle } from "./globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

const LoginContainer = () => (
  <>
    <Route exact path="/login">
      <Login />
    </Route>
  </>
);

const DefaultContainer = () => (
  <>
    <Navbar />

    <Route exact path="/">
      <Home />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/:username">
      <Profile />
    </Route>
  </>
);

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
