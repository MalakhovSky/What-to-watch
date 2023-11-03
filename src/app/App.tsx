import {useEffect} from "react";
import {Main} from "../pages/main";
import {useAppDispatch, useAppSelector} from "../redux/hooks/useAppDispatch";
import {fetchFilms, getUsers} from "../redux/features/asyncActions";



const App = () => {
  // const dispatch = useAppDispatch()
  // const users = useAppSelector(state => state.users.users)
  // console.log(users,'users')
  //
  // useEffect(() => {
  //   dispatch(getUsers())
  //   console.log('СРАБОТАЛ В АПП')
  //
  // }, [dispatch]);



  return (
    <Main/>
  )
}

export default App;
