import {createRoot} from "react-dom/client";
import {RouterProvider} from 'react-router-dom'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import App from './app/App';
import {router} from "./router/router";
import store,{persistor} from "./redux/store";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <PersistGate loading={null} persistor={persistor}>
        <App/>
      </PersistGate>
    </RouterProvider>
  </Provider>,
)
