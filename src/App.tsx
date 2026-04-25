import { Route, Switch } from 'wouter';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import MatchPage from './pages/MatchPage';

function App() {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/:groupSlug/:matchSlug">
          {(params) => <MatchPage groupSlug={params.groupSlug} matchSlug={params.matchSlug} />}
        </Route>
      </Switch>
    </AppLayout>
  );
}

export default App;
