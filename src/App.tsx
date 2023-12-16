import TODOForm from './component/TODOForm/TODOForm';
import Toolbar from './component/Toolbar/Toolbar';
import {Route, Routes} from 'react-router-dom';
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <Routes>
          <Route path='/todoform' element={<TODOForm />}/>
          <Route path="*" element={(
          <div className="container-fluid d-flex justify-content-center">
            <img
              className="w-50"
              src={PageNoFoundPicture}
              alt="Page Not Found"/>
          </div>
        )}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
