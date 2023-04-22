import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Chirp from './components/Chirp';
import Home from './views/Home';
import MessagesView from './views/MessagesView';

import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/messages' element={<MessagesView></MessagesView>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
