
import Footer from './composants/Layout/Footer';
import Header from './composants/Layout/Header';

import { BrowserRouter } from 'react-router-dom';

import MyRouter from './routes';

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <MyRouter />
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
