import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Home } />
    </Switch>
  );
}

export default App;
