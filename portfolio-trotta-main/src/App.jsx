import IndexView from "./views/indexView.jsx";
import { LanguageProvider } from "./contexts/LanguageContext.jsx";
import MouseMeshEffect from "./components/MouseMeshEffect.jsx";

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
