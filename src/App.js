import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  Link
} from "react-router-dom";
import {
  DungeonView
} from "./Dungeon.js"
import './App.css';
import dungeonList from "./Mock/dungeonList.json"

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/dungeon/:dungeonId">
            <Dungeon />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
      </header>
    </div>
  );
}

function Home() {
  const buttons = dungeonList.map((element) =>
    <Link to={`/dungeon/${element.id}`}><img width="200" height="121" src={`${element.iconLink}`} alt={`${element.name}`}/></Link>
  );
  
  return (
    <nav>
      <ul>
        {buttons}
      </ul>
    </nav>
  )
}

function Dungeon() {
  
  let { dungeonId } = useParams();

  return (
      <DungeonView dungeonId={dungeonId}/>
  )
}


export default App;
