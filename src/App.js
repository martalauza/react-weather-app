import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Reykjavik" />
        <footer>
          This project was created by{" "}
          <a
            href="https://glittery-selkie-cacbc9.netlify.app/aboutme.html"
            target="blank"
            rel="noopener noreferrer"
          >
            Marta Lauza{" "}
          </a>
          and is{" "}
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
