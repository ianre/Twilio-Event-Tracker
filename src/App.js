import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
// to add css
import './App.css';


/*
Import the other components you need
*/
import Navbar from "./components/navbar.component"
// EventsList
//import ExercisesList from "./components/exercises-list.component";
import EventsList from "./components/events-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import InfoPage from "./components/info-page.component";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={EventsList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/info" component={InfoPage} />
      </div>
    </Router>
  );
}

export default App;
