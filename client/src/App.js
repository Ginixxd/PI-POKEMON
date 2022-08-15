import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import Home from './components/Home/Home'
import PokeCreate from './components/PokeCreate/PokeCreate'
import Detail from './components/Detail/Detail'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/home' component = {Home} />
        <Route path = '/pokemons' component = {PokeCreate} />
        <Route exact path = '/home/:id' component = {Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
