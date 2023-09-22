import {createBrowserRouter} from "react-router-dom";
import {Main} from "../pages/main";
import {SignIn} from "../pages/signIn";
import {MyList} from "../pages/myList";
import {Film} from "../pages/film";
import {Paths} from "./paths";
import {AddReview} from "../pages/addReview";
import {Player} from "../pages/player";
import {NotFound} from "../pages/notFound";

export const router = createBrowserRouter([
  {
    path:Paths.main,
    element:<Main/>
  },
  {
    path:Paths.signIn,
    element:<SignIn/>
  },
  {
    path:Paths.film,
    element:<Film/>
  },
  {
    path:Paths.myList,
    element:<MyList/>
  },
  {
    path:Paths.addReview,
    element:<AddReview/>
  },
  {
    path:Paths.player,
    element:<Player/>
  },
  {
    path:Paths.notFound,
    element:<NotFound/>
  }

]);
