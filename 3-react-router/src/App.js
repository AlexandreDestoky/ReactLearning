import "./App.css";
import Accueil from "./Components/Accueil";
import Projet from "./Components/Projet";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/Projet/:slug" exact component={Projet} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/" component={() => <div>ERREUR 404</div>}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;

// Explication différence API Context et Redux
