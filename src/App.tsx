import './App.scss';
import { Provider } from 'react-redux';
import store from '@redux/store/store';
import GlobalRoutes from './routes/GlobalRoutes';

function App() {
  return (
    <Provider store={store}>
      <GlobalRoutes />
    </Provider>
  );
}

export default App;
