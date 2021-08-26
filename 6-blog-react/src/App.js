import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Article from "./Containers/Article/Article";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contact" exact component={Contact}/>
          <Route path="/article" exact component={Article}/>
          <Route path="/ecrire" exact component={AddArticle}/>
        </Switch>
      </Router>
      {/* <Home/> */}
    </div>
  );
}

export default App;
