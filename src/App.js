import { ImageGrid } from "./components/imageGrid";
import TitleComponent from "./components/title";
import UpLoadComponent from "./components/upload";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <TitleComponent />
      <UpLoadComponent />
      <ImageGrid />
    </div>
  );
}

export default App;
