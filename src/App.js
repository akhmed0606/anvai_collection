import Home from "./components/Home";
import Start from "./components/Start";

function App() {
  if (window.ethereum) {
    return <Home />;
  } else {
    return <Start />
  }
}

export default App;
