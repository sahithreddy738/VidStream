import { Provider } from 'react-redux';
import Header from './components/Header';
import './index.css';
import appStore from './utils/appStore';
import { RouterProvider } from 'react-router-dom';
import appRouter from './utils/routingConfig';

function App() {
  return (
    <Provider store={appStore}>
        <Header/>
        <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
