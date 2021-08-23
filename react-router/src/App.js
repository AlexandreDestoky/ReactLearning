import "./App.css";
import Accueil from "./Components/Accueil";
import Projet from "./Components/Projet";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path="/" exact component={Accueil}/>
        <Route path="/Projet" exact component={Projet}/>
        <Route path="/Contact" exact component={Contact}/>
      </Switch>

      </Router>
    </>
  );
}

export default App;

{/* <Contact />
<Projet />
<Accueil /> */}