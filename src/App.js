import Home from './Routes/Home'
import About from './Routes/About'
import Adopt from './Routes/Adopt'
import Auth from './Routes/Auth'
import { Route, createBrowserRouter, createHashRouter,createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Navigation from './Routes/Navigation';
import {AppContainer} from './Components/AppContainer.styles'

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/adopt' element={<Adopt/>}/>
        <Route exact path='/auth' element={<Auth/>}/>
      </Route>)
  )

  
  return (
    <AppContainer>
      <RouterProvider router={router}/>
    </AppContainer>
  );
}

export default App;
