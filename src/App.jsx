import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./Home";
import Registration from "./Registration";
import Login from "./Login";
import HostelBook from "./HostelBook";
import ViewAll from "./ViewAll";
import Protected from "./Protected";
import "./App.css";

const App = () => {
  return (
    <>
    
      <Router>
       
        <Switch>
          <Route exact path="/">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Protected Comp={Home} />
          </Route>
          <Route path="/bookhostel">
            <Protected Comp={HostelBook} />
          </Route>
          <Route path="/viewall">
            <Protected Comp={ViewAll} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;