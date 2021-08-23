import './App.css';
import MiniDrawer from './component/drawer';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Temprature from './component/temrature'

const routes = [
  {
    path: "/",
    exact: true,
    component: () => (<Temprature />),
    label:'Temprature'
  },
  {
    path: "/humidity",
    component: () => (<div>Humidity</div>),
    label: 'Humidity'
  },
  {
    path: "/Pressure",
    component: () => (<div>Pressure</div>),
    label: 'Pressure'
  },
  {
    path: "/Antiometer",
    component: () => (<div>Antiometer</div>),
    label: 'Antiometer'
  }
]; 
const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));
function App() {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <div className="App">
      <Router>
        <MiniDrawer />
        <main className={classes.content} >
        <div className={classes.toolbar} />
        <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
