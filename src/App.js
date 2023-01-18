import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Repos from "./components/Repos";
import { useState } from "react";
import { useEffect } from "react";




function App() {


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [term, setTerm]=useState('');

  useEffect(() => {

    fetch(`https://api.github.com/users/${term}`)
  }, []);







  return (
    
    <div className="bg-[#0D1117] bg-cover h-[100hv] ">
      <Search/>
      <Card/>
      <Repos/>
    </div>
  );
}

export default App;
