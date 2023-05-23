import React, { useEffect, useState } from 'react'
import '../../styles/userProfile.css'
import { AiFillCloseCircle } from 'react-icons/ai'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


const UserProfileForm = (props) => {

    const formField = {
        AlignItems: 'center',
        marginTop: '18px',
    };

    const inputFieldForm = {
        borderRadius: '0.2rem',
        height: '21px',
        width: '15rem',
        border: '1px solid #245799',
    };

    const labelField = {
        fontFamily: "'Arial', sans-serif",
        margin: '17px',
        color: '#072042',

    };

    const saveButton = {

        float: 'left',

    }

    const cancelButton = {

        float: 'right',

    }

    const cross = {
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '25px',
        color: '#5c99ea',
        cursor: 'pointer',
        float: 'right',
        marginBottom: '20px',
        marginRight: '-7px',
    }

    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:8000/userprofiles/6433b453e9f602c1383d35f0`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        
        .then((result)=> {
            result.json().then((resp)=>{
               
                setData(resp)
            })
           })
    },[])

    console.log(data)




    

    return (
        <>
            <div className="edu-Modal-wrapper">
                <div className="edu-Modal-container">

                    <button style={cross} onClick={() => props.pro(false)}><AiFillCloseCircle style={{ color: 'rgb(22 102 197)', }} /></button>

                    <h3 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: "'Arial', sans-serif", }}>Personal Information</h3>

                    <div className="edu-modal-form">





                        <form style={formField} >

                            <Box mb={2}>
                                <TextField fullWidth label="Git Link" />
                            </Box>
                            <br />

                            <Box mb={2}>
                                <TextField fullWidth label="Gender"  />
                            </Box>
                            <br />

                            {/* <Box mb={2}>
                                <TextField fullWidth label="Discipline" />
                            </Box>
                            <br /> */}


                            <Box mb={2}>
                                <label>Date of Birth</label>
                                <TextField fullWidth type='date'  />
                            </Box>
                            <br />

                            <Box mb={2}>
                                <TextField fullWidth label="Phone Number"  />
                            </Box>
                            <br />

                            <Box mb={2}>
                                <TextField fullWidth label="Location"  />
                            </Box>
                            <br />

                            



                



                            <Button style={saveButton} variant="contained">save</Button>
                            <Button style={cancelButton} variant="contained" onClick={() => props.pro(false)}>cancel</Button>

                        </form>

                    </div>


                </div>
            </div>
        </>
    )
}

export default UserProfileForm