import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import './App.css';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>
    </Provider>
  );
}

export default App;
