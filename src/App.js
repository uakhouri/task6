import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Calculator from "./components/Calculator";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}>
          <Home />
        </Route>
        <Route path="/Calculator">
          <Calculator />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
