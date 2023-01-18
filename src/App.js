import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Repos from "./components/Repos";
import { useState } from "react";
import { useEffect } from "react";




function App() {


  const [card, setCard] = useState();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState('');
  // const [timeStamp, setTimeStamp] = useState(Date.now())



  useEffect(() => {
    fetch(`https://api.github.com/users/${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setCard(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [term]);




  useEffect(() => {

    fetch(`https://api.github.com/users/${term}/repos`)
      .then(res => res.json())
      .then(data => {
        setRepos(data)
        setLoading(false)
      })
      .catch(err => console.log(err))
  }, [term]);


  console.log(Object.keys(repos));

  if (loading)return <h1 className="text-[#8B949E] text-center text-3xl">Loeading....</h1> 

  return (


    <div className="container bg-[#0D1117] bg-cover h-[100hv]  mx-auto w-[100wv]">


      <Search searchValue={(text) => setTerm(text)} />

      {card?  <Card theCard={card} /> :<h1 className="text-[#8B949E] text-center text-3xl">No Data To Show</h1> }

      {repos.length === 0 ?  <h1 className="text-[#8B949E] text-center text-3xl">No Data To Show</h1> :
             repos.map(repo =>(
              <Repos key={repo.id} repo={repo}/>
            ))
  
      }




    </div>
  );
}

export default App;
