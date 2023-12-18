import TODOForm from './component/TODOForm/TODOForm';
import Toolbar from './component/Toolbar/Toolbar';

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main>
        <TODOForm />
      </main>
    </>
  );
}

export default App;
