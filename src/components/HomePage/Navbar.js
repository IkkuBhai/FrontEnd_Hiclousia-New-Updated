import React, { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg'
import { useNavigate, Link } from "react-router-dom"

const Navbar = () => {

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
        <>

            <nav className='main-nav-home'>
                {/* 1st part */}
                <div className='logo-home'>
                    <h2>H<span>i</span></h2>
                </div>

                {/* 2nd Menu part*/}
                <div className='menu-link-home'>
                    <ul>
                        <li>Talent Profile</li>
                        <li>Recruiter</li>
                        <li>About Us</li>
                        <li>Contact Us</li>

                        {user ? (<li
                            style={{cursor: "pointer",color: 'goldenrod',listStyleType: 'none',}}
                            onClick={logOut}
                        >
                            Log Out
                        </li>
                        ) : (
                            <li style={{listStyleType: 'none',}}>
                                <a href="/LogInSignIn" style={{color: 'goldenrod',}}>Login</a>
                            </li>
                        )}

                    </ul>
                </div>

                <div className='profile-icon'>
                    <button className='profile-icon-btn' onClick={() => navigate("/UserProfile")}><CgProfile style={{ color: 'goldenrod', fontSize: '27px', }} /></button>

                </div>
            </nav>

        </>
    )
}

export default Navbar