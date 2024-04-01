import "./App.css";
import Home from "./components/Home";
import Space from "./components/Space";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`${
        theme === "light" ? "bg-white" : "bg-gray-700"
      } items-center ${
        theme === "light" ? "text-black" : "text-white"
      } justify-center`}
    >
      <Space lg />
      <Home theme={theme} toggleTheme={toggleTheme} />
      <Space lg />
    </div>
  );
}

export default App;
