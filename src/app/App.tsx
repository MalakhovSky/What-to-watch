import {useEffect} from "react";
import {Main} from "../pages/main";
import {useAppDispatch} from "../redux/hooks/useAppDispatch";
import {fetchFilms} from "../redux/features/asyncActions";



const App = () => {
  // const dispatch = useAppDispatch()
  //
  // useEffect(() => {
  //   dispatch(fetchFilms())
  //   console.log('СРАБОТАЛ В АПП')
  // }, [dispatch]);
  //


  return (
    <Main/>
  )
}

export default App;
