import './App.css';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home';
import Series from './Pages/Series';
import Comics from './Pages/Comics';
import Error404 from './Pages/Error404';
import Header from './Components/Header/Header';



function App() {
  return (
  <div>
      {/* /react router dom v6 */}
      
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/inicio' element={<Home/>} />
        <Route path='/series' element={<Series/>} />
        <Route path='/comics' element={<Comics/>} />
        <Route path='*' element={<Error404/>} />
      </Routes>
    
    </BrowserRouter>
    
      {/* react router dom v5 */}

      {/* <Switch>
        <Route path="/" exact component={() => <Home/>} />
        <Route path="/Inicio" exact component={() => <Home/>} />
        <Route path="/Series" exact component={() => <Series/>} />
        <Route path="/Comics" exact component={() => <Comics/>} />
        <Route component={() => <Error404/>} />
      </Switch> */}
    
  </div>
  );
  }

export default App;
