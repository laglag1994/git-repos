import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Repos from "./components/Repos";

function App() {
  return (
    
    <div className="bg-[#0D1117] bg-cover h-[100hv] ">
      <Search/>
      <Card/>
      <Repos/>
    </div>
  );
}

export default App;
