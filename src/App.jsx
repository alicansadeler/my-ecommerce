import Header from "./layout/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center ">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
