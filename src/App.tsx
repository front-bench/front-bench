import { Route, Switch } from 'wouter';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import MatchPage from './pages/MatchPage';

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/:groupKey/:matchKey">
          {(params) => <MatchPage groupKey={params.groupKey} matchKey={params.matchKey} />}
        </Route>
      </Switch>
    </AppLayout>
  );
}

export default App;
