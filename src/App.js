import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Repos from "./components/Repos";
import { useState } from "react";
import { useEffect } from "react";




function App() {


  const [card, setCard] = useState([]);
  const [repos, setRepos]=useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm]=useState('');
  const [timeStamp, setTimeStamp] = useState(Date.now())



  useEffect(() => {

    fetch(`https://api.github.com/users/${term}`)
    .then(res=>res.json())
    .then(data=>{
      setCard(data.user)
      setLoading(false)
    })
    .catch(err=> console.log(err))
  }, []);

  useEffect(() => {

    fetch(`https://api.github.com/users/${term}/repos`)
    .then(res=>res.json())
    .then(data=>console.log('repos',data))
    .catch(err=> console.log(err))
  }, []);







  return (
    
    <div className="bg-[#0D1117] bg-cover h-[100hv]">

      
      <Search searchValue={(text) => setTerm(text)}/>

      {!loading && repos.length === 0 && <h1 className="text-[#8B949E] text-center text-3xl">No Data To Show</h1>}


      {loading? <h1 className="text-[#8B949E] text-center text-3xl">Loeading....</h1> :<Repos />&& <Card />}



      
    </div>
  );
}

export default App;
