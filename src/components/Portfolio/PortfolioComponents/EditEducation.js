import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import baseurl from '../../../baseURL/config'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { educationLevels, authorities, discipline } from '../../../constraints/arrays'
import MenuItem from '@mui/material/MenuItem'
import {RiCloseCircleFill} from 'react-icons/ri'



const modalWrapper = {

    position: 'fixed',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    backgroundColor: 'rgba(189 , 189 , 189 , 0.9)'
}

const modalContainer = {

    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50% , -50%)',
    maxWidth: '45rem',
    backgroundColor: '#fff',
    AlignItems: 'center',
    borderRadius: '0.5rem'
}

const feild = {

    width: '40rem',
    AlignItems: 'center',
    marginTop: '18px',
    margin: '18px',


}

const save = {
    float: 'left',
    margin: '20px'
}

const cancel = {
    float: 'right',
    margin: '20px',
    cursor: 'pointer'
}








const EducationPortfolio = (props) => {

    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))

    if (!user) Navigate("/login")

    const [userInfo, setUserInfo] = useState([])


    // useEffect(() => {

    //     fetch(`http://localhost:8000/personal/${user._id}`, {
    //         headers: {
    //             Authorization: `Bearer ${localStorage.getItem('token')}`
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => { console.log(data); setUserInfo(data.data) })
    //         .catch(err => console.log(err))
    //     console.log(userInfo)
    // }, [])


        useEffect(() => {
            getEducationData()
        }, [])

    const [eduData, setEduData] = useState(
        {
            _id: '',
            educationLevel: '',
            collegeName: '',
            authority: '',
            discipline: '',
            startYear: '',
            endYear: ''
        }
    )
    const [isEditing, setIsEditing] = useState(false);
    function getEducationData(id) {
        fetch(`http://localhost:8000/education/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((result) => result.json())
            .then((resp) => {
                console.log("resp", resp)
                setEduData(resp)
                setIsEditing(true);
                console.log("eduData", eduData)
            })
            .catch(error => {
                console.log(error)
            })
    };



    // Function to handle changes in form values
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEduData((prevValues) => ({ ...prevValues, [name]: value }));
    };



    // Function to submit the form data and save it to the API
    const handleSubmit = async (id) => {
        await fetch(`http://localhost:8000/education/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eduData)
        });
        setIsEditing(false);
    };



    return (


        <div style={modalWrapper}>

            <div style={modalContainer} >

                <div style={feild} onSubmit={(event) => { event.preventDefault(); handleSubmit(eduData.data?._id) }}>

                <button style={{float: 'right',border: 'none', backgroundColor: 'transparent'}} onClick={() => props.EditEducationInfo(false)} ><RiCloseCircleFill style={{fontSize: '23px', color: 'rgb(22 102 197)'}}/></button>


                    <FormControl sx={{ m: 3, width: 600 }}>
                        <InputLabel>Education Level</InputLabel>
                        <Select

                            name="educationLevel"
                            value={eduData.data?.educationLevel}
                            label="EducationLevel"
                            required
                            input={<OutlinedInput label="Education Level" />}
                        >
                            {educationLevels.map((educationLevel) => (
                                <MenuItem
                                    key={educationLevel}
                                    value={educationLevel}
                                >
                                    {educationLevel}
                                </MenuItem>
                            ))}

                        </Select>
                    </FormControl>



                    <Box
                        mb={1}
                        sx={{ m: 3, width: 600 }}
                    >
                        <TextField fullWidth label="Degree Name"

                            name="degreeName"
                            value={eduData.data?.degreeName}
                            id="fullWidth"
                        />
                    </Box>



                    <Box
                        mb={1}
                        sx={{ m: 3, width: 600 }}
                    >
                        <TextField fullWidth label="College Name" id="fullWidth"
                            name="collegeName"
                            value={eduData.data?.collegeName}
                        />
                    </Box>



                    <FormControl sx={{ m: 3, width: 600 }}>
                        <InputLabel>Authority</InputLabel>
                        <Select

                            name="authority"
                            label="Authority"
                            value={eduData.data?.authority}
                            input={<OutlinedInput label="Authority" />}
                            required
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            {authorities.map((authority) => (
                                <MenuItem
                                    key={authority}
                                    value={authority}
                                >
                                    {authority}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl sx={{ m: 3, width: 600 }}>
                        <InputLabel>Discipline</InputLabel>
                        <Select
                            variant="outlined"
                            label="Discipline"
                            name="discipline"
                            value={eduData.data?.discipline}


                            input={<OutlinedInput label="Discipline" />}
                            required
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            {discipline.map((disciplines, i) => (
                                <MenuItem
                                    key={i}
                                    value={disciplines}
                                >
                                    {disciplines}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>


                    <Box
                        mb={1}
                        sx={{ m: 3, width: 600 }}>
                        <TextField
                            variant="outlined"
                            label="Start Year"
                            name='startYear'
                            value={eduData.data?.startYear}
                            type="date"
                            fullWidth
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}

                        />
                    </Box>


                    <Box mb={1}
                        sx={{ m: 3, width: 600 }}><TextField
                            variant="outlined"
                            label="End Year"
                            name="endYear"
                            value={eduData.data?.endYear}
                            type="date"
                            fullWidth
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                        /></Box>



                    <Button variant="contained" style={save} onClick={handleInputChange} >Update</Button>



                    <Button variant="contained" style={cancel}>delete</Button>

                </div>

                <br />

            </div>

        </div>
    )
}

export default EducationPortfolio