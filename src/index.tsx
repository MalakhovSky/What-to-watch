import {createRoot} from "react-dom/client";
import App from './app/App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {Paths} from "./paths";
import { Main } from "./app/components/main";
import {SignIn} from "./app/components/signIn";
import {Favorites} from "./app/components/favorites";
import {Room} from "./app/components/room";

const router = createBrowserRouter([
  {
    path:Paths.main,
    element:<Main/>
  },
  {
    path:Paths.signIn,
    element:<SignIn/>
  },
  {
    path:Paths.favorites,
    element:<Favorites/>
  },
  {
    path:Paths.room,
    element:<Room/>
  }
  ]);


const container = document.getElementById('root');
const root = createRoot(container);

root.render(

<RouterProvider router={router}>
  <App />
</RouterProvider>



)
