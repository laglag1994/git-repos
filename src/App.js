import React from "react";
import Search from "./components/Search";
import Card from "./components/Card";
import Repos from "./components/Repos";
import { useState } from "react";
import { useEffect } from "react";



let timeout 

function App() {


  const [card, setCard] = useState();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [term, setTerm] = useState('');

  const getUser = async () => {
    try {
      console.log("Calling get user....")
      const response = await fetch(`https://api.github.com/users/${term}`)
      if (response.status !==200 )
      return
      setCard( await response.json())
      console.log("User Result:")
      await getRepos()
    } catch (err) {
      console.log("Error from get user: ", err)
    }
  }



  useEffect(() => { 
    clearTimeout(timeout)
    timeout = setTimeout(getUser, 500)
  },[term])



  const getRepos = async () => {
    try {
      console.log("Calling get repos....")
      const response = await fetch(`https://api.github.com/users/${term}/repos`)
      // 200 = OK, 404 = Not Found etc..
      if (response.status !== 200) return
      const repos = await response.json()
      setRepos(repos)
      console.log("Get repos result:")
      console.log(repos)
    } catch (err) {
      console.log("Error from get repos: ", err)
    }
  }


  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${term}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setCard(data)
  //       setLoading(false)
  //     })
  //     .catch(err => console.log(err))
  // }, [term]);




  // useEffect(() => {

  //   fetch(`https://api.github.com/users/${term}/repos`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setRepos(data)
  //       setLoading(false)
  //     })
  //     .catch(err => console.log(err))
  // }, [term]);



  if (loading) return <h1 className="text-[#8B949E] text-center text-3xl">Loeading....</h1>

  return (


    <div className=" bg-[#0D1117] bg-cover min-h-screen  mx-auto w-[100wv]">

     

      <Search searchValue={(text) => setTerm(text)} />

      
      {card && <Card theCard={card} />}

      {repos.map(repo => (
        <Repos key={repo.id} repo={repo} />
      ))}




    </div>
  );
}

export default App;
