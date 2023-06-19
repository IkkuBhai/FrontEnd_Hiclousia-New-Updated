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
import { yearofPassouts, educationLevels, authorities } from '../../../constraints/arrays'
import MenuItem from '@mui/material/MenuItem'



const userId = JSON.parse(localStorage.getItem('userDetails'));



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
    margin: '20px'
}



const Education = () => {



    const navigate = useNavigate();
    useEffect(() => {

        if (userId == null) {
            navigate("/login")
            alert("Please login first")
        }
    },)

    const [educationList, setEducationList] = useState([
        {
            userDetailsID: userId._id,
            educationLevel: '',
            collegeName: '',
            authority: '',
            discipline: '',
            yearOfpassout: '',
            startYear: '',
            endYear: ''
        },
    ]

    );

    function SaveEducation() {

        educationList.map((e) => {

            return (

                fetch(`${baseurl}/education`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(e)

                }).then(response => response.json().then(data => {
                    console.log(data)
                    if (data.status === false) return false
                    else {

                        setEducationList([{
                            userDetailsID: userId._id,
                            educationLevel: '',
                            degreeName: '',
                            collegeName: '',
                            authority: '',
                            discipline: '',
                            yearOfpassout: '',
                            startYear: '',
                            endYear: ''
                        }])
                        navigate("/Portfolio")
                    }
                }

                ))
            )



        })

        return true
    }


    const handleAddEducation = () => {

        setEducationList([...educationList, {
            userDetailsID: userId._id,
            educationLevel: '',
            collegeName: '',
            authority: '',
            discipline: '',
            yearOfpassout: '',
            startYear: '',
            endYear: ''
        },
        ]);
    };

    const handleChange = (event, index) => {
        // console.log(index)
        const { name, value } = event.target;

        const newEducation = [...educationList];

        newEducation[index] = {
            ...newEducation[index],
            [name]: value,
        };

        setEducationList(newEducation);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // handleAddEducation();
        SaveEducation();

    }





    // // //API things start
    // // const Navigate = useNavigate();
    // // const user = JSON.parse(localStorage.getItem("userDetails"))
    // // console.log('user', user)
    // // if (!user) Navigate("/login")

    // // useEffect(() => {
    // //     getEducationData()
    // // }, [])

    // // //API things end


    // const Navigate = useNavigate();

    // const user = JSON.parse(localStorage.getItem("userDetails"))

    // if (!user) Navigate("/Login")

    // const [userInfo, setUserInfo] = useState([])


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


    // useEffect(() => {
    //     getEducationData()
    // }, [])

    // const [eduData, setEduData] = useState(
    //     {
    //         _id: '',
    //         educationLevel: '',
    //         collegeName: '',
    //         authority: '',
    //         discipline: '',
    //         yearOfpassout: ''
    //     }
    // )
    // const [isEditing, setIsEditing] = useState(false);
    // function getEducationData(id) {
    //     fetch(`http://localhost:8000/education/${id}`, {
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //         .then((result) => result.json())
    //         .then((resp) => {
    //             console.log("resp", resp)
    //             setEduData(resp)
    //             setIsEditing(true);
    //             console.log("eduData", eduData)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // };
    // // Function to handle changes in form values
    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setEduData((prevValues) => ({ ...prevValues, [name]: value }));
    // };


    // // Function to submit the form data and save it to the API
    // const handleSubmit = async (id) => {
    //     await fetch(`http://localhost:8000/education/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(eduData)
    //     });
    //     setIsEditing(false);
    // };









    return (


        <div style={modalWrapper}>
            {educationList.map((education, i) => (
                <div style={modalContainer} key={education._id}>

                    <div style={feild}>

                        {/* <Box
                        mb={2}
                    >
                        <TextField
                            fullWidth
                            label="Education Level"
                            id="fullWidth"
                        />

                    </Box> */}

                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Education Level</InputLabel>
                            <Select
                                value={education.educationLevel}
                                name="educationLevel"
                                onChange={(e) => handleChange(e, i)}
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
                                value={education.degreeName}
                                onChange={(e) => handleChange(e, i)}
                                id="fullWidth"
                            />
                        </Box>



                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField fullWidth label="College Name" id="fullWidth"
                                name="collegeName"
                                value={education.collegeName}
                                onChange={(e) => handleChange(e, i)} />
                        </Box>



                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel>Authority</InputLabel>
                            <Select
                                name="authority"
                                label="Authority"
                                value={education.authority}
                                onChange={(e) => handleChange(e, i)}
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



                        <Box
                            mb={1}
                            sx={{ m: 3, width: 600 }}
                        >
                            <TextField
                                variant="outlined"
                                label="Discipline"
                                name="discipline"
                                value={education.discipline}
                                onChange={(e) => handleChange(e, i)}
                                fullWidth
                                required
                            />
                        </Box>




                        <FormControl sx={{ m: 3, width: 600 }}>
                            <InputLabel id="demo-multiple-name-label">Year of Passout</InputLabel>
                            <Select
                                name="yearOfpassout"
                                value={education.yearOfpassout}
                                onChange={(e) => handleChange(e, i)}
                                labelId="demo-multiple-name-label"
                                id="demo-multiple-name"

                                input={<OutlinedInput label="Year of Passout" />}

                            >
                                {yearofPassouts.map((yearofPassout) => (
                                    <MenuItem
                                        key={yearofPassout}
                                        value={yearofPassout}
                                    >
                                        {yearofPassout}
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
                                name="startYear"
                                value={education.startYear}
                                onChange={(e) => handleChange(e, i)}

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
                                value={education.endYear}
                                onChange={(e) => handleChange(e, i)}

                                type="date"
                                fullWidth
                                required
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            /></Box>



                        <Button variant="contained" style={save} onClick={handleAddEducation} >save</Button>



                        <Button variant="contained" style={cancel} >cancel</Button>


                    </div>

                    <br />

                </div>
            ))}
        </div>
    )
}

export default Education