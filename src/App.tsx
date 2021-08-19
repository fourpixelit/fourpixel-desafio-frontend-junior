import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ContextProvider } from "./context";

import Home from "./pages/home";
import Repositorios from "./pages/repositorios";
import Seguidores from "./pages/seguidores";
import Seguindo from "./pages/seguindo";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/repositorios" component={Repositorios} />
            <Route path="/seguidores" component={Seguidores} />
            <Route path="/seguindo" component={Seguindo} />
          </Switch>
        </BrowserRouter>
      </ContextProvider>
    </div>
  );
}

export default App;
