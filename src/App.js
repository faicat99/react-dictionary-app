import logo from "./logo.jpeg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
        </main> 
      <footer className="App-footer mt-5">
        <small>Coded by Fainche Mckeown</small>
      </footer>
      </div> 
    </div>
  );
}

