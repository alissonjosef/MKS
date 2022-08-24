import { Route } from 'react-router-dom';
import Home from '../pages';



const Routes = (): JSX.Element => {
  return (
    <Route>
      <Route path="/" exact component={Home} />
    </Route>
  );
};

export default Routes;
