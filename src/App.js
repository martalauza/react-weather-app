import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Riga" />
        <footer>
          This project was created by Marta Lauza and is{" "}
          <a
            href="https://github.com/martalauza/react-weather-app"
            target="blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
