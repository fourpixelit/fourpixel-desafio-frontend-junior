import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ContextProvider } from "./context";

import Home from "./pages/home";
import Repositorios from "./pages/repositorios";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/repositorios" component={Repositorios} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
