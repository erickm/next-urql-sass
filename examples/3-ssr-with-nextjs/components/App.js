import css from './App.scss';
import Navbar from './Navbar';

const App = ({ children }) => (
  <>
  <Navbar />
  <main className={css.root}>
    {children}
    <style jsx global>
      {
        `
        * {
          margin: 0;
          padding: 0;
        }
        `
      }
    </style> 
  </main>
  </>
);

export default App;
