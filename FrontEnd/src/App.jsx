import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componets/navbar";
import Footer from "./componets/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="">
        <Navbar />
        <div className="h-[80vh]"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
