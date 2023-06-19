import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { jobRoles, experiences, secondarySkills, primarySkills, educationLevels } from '../../constraints/arrays';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';



const main = {
    border: '2px solid blue',
    margin: '50px',
    AlignItems: 'center',
    borderRadius: '0.5rem'
}


const userId = JSON.parse(localStorage.getItem("userDetails"))




const JobPost = () => {

    const navigation = useNavigate();
    useEffect(() => {

        if (userId == null) {
            navigation("/login")
            alert("Please login first")
        }
    },)
    // const classes = useStyles();
    const [jobData, setJobData] = useState([
        {
            userDetailsID: userId._id,
            jobRole: [],
            jobDescription: "",
            experience: [],
            primarySkills: [],
            secondarySkills: [],
            education: [],
            location: '',
            salary: "",
            sector: '',
            highestEducation: []
        },
    ]);


    const handleJobChange = (event, index) => {
        const { name, value } = event.target;
        const newJobs = [...jobData];
        newJobs[index] = {
            ...newJobs[index],
            [name]: value,
        };
        setJobData(newJobs);
    };



    function SaveJob() {

        let info = jobData

        info?.map((e) => {

            return (
                fetch("http://localhost:8000/job/6459fde1079b153768934242", {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(e)

                }).then(response => response.json().then(data => {
                    console.log(data)
                    if (data.status === true) {
                        alert("Created Job Post Sucessfully")

                    }

                }))
            )
        })




    }
    function handlesubmitEvent(e) {

        e.preventDefault()
        SaveJob()

    };

    return (
        <div style={main} onSubmit={handlesubmitEvent}>

            {jobData?.map((job, index) => (
                <div key={index}>
                    <Typography variant="h4" gutterBottom>
                        Post a Job
                    </Typography>



                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Job Role</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"

                            maxItem={3}
                            name='jobRole'
                            value={job.jobRole}
                            onChange={(event) => handleJobChange(event, index)}

                            input={<OutlinedInput label="Job Role" />}
                        >
                            {jobRoles.map((jobRole, i) => (
                                <MenuItem
                                    key={i}
                                    value={jobRole}

                                >
                                    {jobRole}
                                </MenuItem>
                            )
                            )}
                        </Select>
                    </FormControl>



                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Highest Qualification</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            maxItem={3}
                            name='highestEducation'
                            value={job.highestEducation}
                            onChange={(event) => handleJobChange(event, index)}

                            input={<OutlinedInput label="Highest Qualification" />}

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



                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Experience</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name='experience'
                            value={job.experience}
                            onChange={(event) => handleJobChange(event, index)}

                            input={<OutlinedInput label="Job Role" />}

                        >
                            {experiences.map((experience) => (
                                <MenuItem
                                    key={experience}
                                    value={experience}

                                >
                                    {experience}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>



                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Primary Skills</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name='primarySkills'
                            value={job.primarySkills}
                            onChange={(event) => handleJobChange(event, index)}

                            input={<OutlinedInput label="Primary Skills" />}

                        >
                            {primarySkills.map((primarySkill) => (
                                <MenuItem
                                    key={primarySkill}
                                    value={primarySkill}

                                >
                                    {primarySkill}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>




                    <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Secondary Skills</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name='secondarySkills'
                            value={job.secondarySkills}
                            onChange={(event) => handleJobChange(event, index)}

                            input={<OutlinedInput label="Secondary Skills" />}

                        >
                            {secondarySkills.map((secondarySkill) => (
                                <MenuItem
                                    key={secondarySkill}
                                    value={secondarySkill}

                                >
                                    {secondarySkill}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>



                    {/* <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            multiple
                            name='sector'
                            value={job.sector}
                            onChange={(event) => handleJobChange(event, index)}

                            input={<OutlinedInput label="Secondary Skills" />}

                        >
                            {sectors.map((sector) => (
                                <MenuItem
                                    key={sector}
                                    value={sector}

                                >
                                    {sector}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> */}



                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            fullWidth
                            name='sector'
                            value={job.sector}
                            onChange={(event) => handleJobChange(event, index)}
                            label="Sector"
                            id="fullWidth"
                        />


                        <TextField
                            id="outlined-multiline-static"
                            name='jobDescription'
                            value={job.jobDescription}
                            onChange={(event) => handleJobChange(event, index)}
                            label="Job Description"
                            multiline
                            rows={4}

                        />
                    </Box>

                    <TextField fullWidth name='company'
                        value={job.company}
                        onChange={(event) => handleJobChange(event, index)}
                        label="Company"
                        id="fullWidth"
                    />



                    <TextField
                        fullWidth
                        name='location'
                        value={job.location}
                        onChange={(event) => handleJobChange(event, index)}
                        label="Location"
                        id="fullWidth"
                    />





                    {/* <FormControl sx={{ m: 1, width: 500 }}>
                        <InputLabel id="demo-multiple-name-label">Location</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"

                            name='location'
                            value={job.location}
                            onChange={(event) => handleJobChange(event, index)}

                            input={<OutlinedInput label="Location" />}

                        >
                            {location.map((locations) => (
                                <MenuItem
                                    key={locations}
                                    value={locations}

                                >
                                    {locations}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl> */}


                    <TextField fullWidth name='salary'
                        value={job.salary}
                        onChange={(event) => handleJobChange(event, index)}
                        label="Salary"
                        id="fullWidth"
                    />




                    <Button onClick={handlesubmitEvent}
                        type="submit"
                        variant="contained"
                        color="primary"
                    >
                        Submit

                    </Button>


                </div>
            ))}

        </div>
    )
}

export default JobPost