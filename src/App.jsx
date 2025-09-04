import IndexView from "./pages/Home/indexView.jsx";
import { LanguageProvider } from "./contexts/LanguageContext/LanguageContext.jsx";
import MouseMeshEffect from "./components/three/MouseMeshEffect/MouseMeshEffect.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <MouseMeshEffect />
        <IndexView />
      </div>
    </LanguageProvider>
  );
}

export default App;
