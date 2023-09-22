import {createRoot} from "react-dom/client";
import {RouterProvider} from 'react-router-dom'
import App from './app/App';
import {router} from "./router/router";




const container = document.getElementById('root');
const root = createRoot(container);

root.render(

<RouterProvider router={router}>
  <App />
</RouterProvider>



)
