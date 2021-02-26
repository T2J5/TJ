// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link
} from 'react-router-dom';
import routes from './router';
import { RouteWithSubRoutes } from './assets/common';
import { RouteInterface } from './assets/interface';
// import { Heading } from './examples/props';
// import CounterCon from './container/CounterCon';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ul>
            <li><Link to="/home">Home 首页</Link></li>
            <li><Link to="/about">About 关于</Link></li>
            <li><Link to="/link">Link 联系</Link></li>
          </ul>
        </header>

        <Switch>
          {routes.map((route: RouteInterface, i: number) => {
            return RouteWithSubRoutes(route, i)
          })}
        </Switch>

      </div>
    </Router>
  );
}

export default App;
