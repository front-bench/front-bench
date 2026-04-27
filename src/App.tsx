import { useMediaQuery } from '@guoyunhe/react-media-query';
import { ConfigProvider, theme } from 'antd';
import { Route, Switch } from 'wouter';
import AppLayout from './components/AppLayout';
import HomePage from './pages/HomePage';
import MatchPage from './pages/MatchPage';

const SYSTEM_DARK_MODE_QUERY = '(prefers-color-scheme: dark)';

function App() {
  const isDarkMode = useMediaQuery(SYSTEM_DARK_MODE_QUERY);

  return (
    <ConfigProvider
      theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}
    >
      <AppLayout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/:groupKey/:matchKey">
            {(params) => <MatchPage groupKey={params.groupKey} matchKey={params.matchKey} />}
          </Route>
        </Switch>
      </AppLayout>
    </ConfigProvider>
  );
}

export default App;
