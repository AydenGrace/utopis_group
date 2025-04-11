import "./App.css";
import Landing from "./components/landing/Landing";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import Apropos from "./components/Apropos";

function App() {
  return (
    <>
      <Header />
      <Landing></Landing>
      <Apropos />
      <Footer />
    </>
  );
}

export default App;
