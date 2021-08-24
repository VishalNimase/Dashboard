import './App.css';
import MiniDrawer from './component/drawer';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {routesFinal } from './routesWithSubroutes';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
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
    <div className={classes.root}>
      <Router>
        <MiniDrawer />
        <main className={classes.content} >
        <div className={classes.toolbar} />
        <Switch>
            {routesFinal.map((route, index) => (
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
