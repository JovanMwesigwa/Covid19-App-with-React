import React, {useState, useEffect} from 'react'
import  axios from 'axios'
import SideNavComponent from '../components/SideNav/SideNavComponent'


const Home = () => {

  const [cases, setCases] = useState([])
  const [deaths, setDeaths] = useState([])

  useEffect(() => {
    axios.get("https://disease.sh/v2/all")
      .then(response => {
        //console.log(response.data);
        const fetchedData = response.data
        setCases(fetchedData.cases)
        setDeaths(fetchedData.deaths)
      })
      .catch(error => {
        console.log(error);
        
      })
  },[])
  //console.log(`cases are ${cases}`);
  //console.log(`deaths are ${deaths}`); 
  return (  
    <div>     
      <SideNavComponent cases={cases} deaths={deaths} />
    </div>
  )
}

export default Home
