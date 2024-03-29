import "./App.css";
import Home from "./components/Home";
import Space from "./components/Space";

function App() {
  return (
    <div className="bg-gray-700 items-center text-white justify-center">
      <Space lg />
      <Home />
      <Space lg />
    </div>
  );
}

export default App;
