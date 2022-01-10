import Footer from "./components/Footer";
import Header from "./components/Header";
import Orders from "./components/Orders";
import Prototypes from "./components/Prototypes";
import AppStateContext from "./contexts/AppStateContext";

function App() {
  return (
    <AppStateContext>
      <Header />
      <div className="container">
        <Prototypes />
        <Orders />
        <Footer />
      </div>
    </AppStateContext>
  );
}

export default App;
