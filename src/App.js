
import About from './About/About';
import './App.css';
import Links from './Links/Links';
import Navbar from './Navbar/Navbar';
import Projects from './Projects/Projects';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
      <main>
        <About />
        <Projects />
        <Links/>
      </main>
      </main>
    </div>
  );
}

export default App;
