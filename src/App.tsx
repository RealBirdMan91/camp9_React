import React from "react";
import Navigation from "./components/shared/navigation/Navigation";
import Counter from "./components/home/Counter";
import Sidebar from "./components/shared/navigation/Sidebar";
import { useState } from "react";
import Button from "./components/shared/Button";
import Blog from "./components/home/Blog";
import Todo from "./components/home/Todo";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [user, setUser] = useState({
    firstName: "Julian",
    lastName: "Vogel",
  });

  function sidebarHandler(e: React.MouseEvent, testVal: string) {
    console.log(e.target, testVal);
    setShowSidebar(true);
  }

  return (
    <div id="wrapper">
      <Navigation showSideBar={sidebarHandler} />
      <Sidebar isVisible={showSidebar} />
      <Counter />
      <div>
        <h2 className="text-2xl font-bold">{user.firstName}</h2>
        <h2 className="text-2xl font-bold">{user.lastName}</h2>
        <Button
          variant="primary"
          onClick={() => setUser((prev) => ({ ...prev, lastName: "maria" }))}
        >
          Change Last Name
        </Button>
      </div>
      <Todo />
    </div>
  );
}

export default App;
