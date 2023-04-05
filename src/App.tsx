import Navigation from "./components/shared/navigation/Navigation";
import Counter from "./components/home/Counter";
import Sidebar from "./components/shared/navigation/Sidebar";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState({
    firstName: "Pablo", 
    lastName: "Chandia",
  });

  return (
    <div id="wrapper">
      <Navigation showSideBar={() => setShowSidebar(true)} />
      <Sidebar isVisible={showSidebar} />
      <Counter />
    </div>
  );
}

export default App;
