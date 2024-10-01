import Header from "./layout/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import HomePage from "./pages/HomePage";
import { Footer } from "./layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center 2xl:w-[1440px] 2xl:mx-auto gap-56">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
