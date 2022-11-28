import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Comics from './pages/Comics';
import Error404 from './pages/Error404';
import Header from './components/Header';
import useFetch from './hooks/useFetch';

function App() {

  const exampleApi = useFetch('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=f942a5ceea7b8677426993bd48c5c8f3&hash=2c3c73079b7c62f832c5b18e3c2b9e6a');
  console.log(exampleApi);

  return (
    <div>
      {/*REACT ROUTER DOM V6*/}
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/*REACT ROUTER DOM V5*/}
        {/*<Switch>
          <Route path="/" exact component={() =><Home></Home>}/>
          <Route path="/Inicio" exact component={() => <Home></Home>}/>
          <Route path="/series" exact component={() => <Series></Series>}/>
          <Route path="/comics" exact component={() => <Comics></Comics>} />
          <Route component={() => <Error404></Error404>}/>
        </Switch>
        */}
      </BrowserRouter>      
    </div>
  );
}

export default App;
