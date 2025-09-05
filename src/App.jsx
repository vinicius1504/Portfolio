import IndexView from "./pages/Home/indexView.jsx";
import { LanguageProvider } from "./contexts/LanguageContext/LanguageContext.jsx";

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <IndexView />
      </div>
    </LanguageProvider>
  );
}

export default App;
