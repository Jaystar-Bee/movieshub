
import './App.css';
import Router from "./router/Router"
import KeyProvider from './store/KeyProvide';

function App() {
  return (
    <>
      <div className='min-h-screen bg-dark text-white'>
        <KeyProvider>
          <Router />
          </KeyProvider>
      </div>
    </>
  );
}

export default App;
