import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1 className="text-center">DICTIONARY APP</h1>
       </header>
      <main>
        <Dictionary defaultKeyword="book" />
        </main> 
      <footer className="App-footer mt-5">
        <small>Coded by Fainche Mckeown</small>
      </footer>
      </div> 
    </div>
  );
}

