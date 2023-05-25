import React from 'react'
import '../../styles/App.css'
import { useEffect } from 'react'
// import LoginCard from '../loginPage/loginCard'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate, Link } from "react-router-dom"
import { AiOutlineUser } from "react-icons/"
import Navbar from './Navbar'


function App() {
  const [user, setUser] = React.useState("");
  const navigate = useNavigate()

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userDetails")))

  }, [])

  function logOut() {
    localStorage.removeItem('userDetails');
    localStorage.removeItem('token');
    window.location.reload();
  }


  return (

    <div className="hero">

      <Navbar />

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="talent-recruiter">


        <h2 className="talent">Talent</h2>
        <h2 className="recruiter">Recruiter</h2>

      </div>

      <div className="home-button">
        <br></br>
        <h2>Bridging the Gap between Employability and Jobs Landscape for the
          current and Future Jobs.</h2>
      </div>
    </div>

  )
}


export default App;
