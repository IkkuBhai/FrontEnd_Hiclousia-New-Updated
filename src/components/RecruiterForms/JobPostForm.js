// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Button, Select, MenuItem, Grid, IconButton, Typography } from '@material-ui/core';
// import { Add, Remove } from '@material-ui/icons';
// import { FormControl, InputLabel } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
// import MultipleSelectChip from '../multiForm/MultiSelect';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import { jobRoles, experiences, primarySkills, secondarySkills, sector } from '../../constraints/arrays';
// import Chip from '@mui/material/Chip';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';



// const form = {

//     margin: '50px',
//     border: 'solid 1px',
//     borderRadius: '0.5rem',
//     ALignItems: 'center'
// }

// const formControl = {

//     margin: 'theme.spacing(3)',
//     width: '100%',
// }




// const userId = JSON.parse(localStorage.getItem("userDetails"))

// const JobForm = () => {
//     const navigation = useNavigate();
//     useEffect(() => {

//         if (userId == null) {
//             navigation("/login")
//             alert("Please login first")
//         }
//     }, [])
//     // const classes = useStyles();
//     const [jobData, setJobData] = useState([
//         {
//             userDetailsID: userId ? userId._id : null,
//             jobRole: [],
//             jobDescription: "",
//             experience: [],
//             primarySkills: [],
//             secondarySkills: [],
//             education: [],
//             location: "",
//             salary: "",
//         },
//     ]);

//     const handleAddJob = () => {
//         setJobData([
//             ...jobData,
//             {
//                 userDetailsID: userId._id,
//                 jobRole: [],
//                 jobDescription: "",
//                 experience: [],
//                 primarySkills: [],
//                 secondarySkills: [],
//                 education: [],
//                 location: "",
//                 salary: "",
//             },
//         ]);
//     };

//     const handleRemoveJob = (index) => {
//         const newJobs = [...jobData];
//         newJobs.splice(index - 1, 1);
//         setJobData(newJobs);
//     };

//     const handleJobChange = (event, index) => {
//         const { name, value } = event.target;
//         const newJobs = [...jobData];
//         newJobs[index] = {
//             ...newJobs[index],
//             [name]: value,
//         };
//         setJobData(newJobs);
//     };

//     const handleJobChange2 = (event, index) => {
//         const { name, value } = event.target;
//         const [field, propertyIndex] = name.split(".");
//         handleJobChange(index, field, value);
//     };

//     function SaveJob() {
//         let info = { ...jobData }

//         fetch("http://localhost:8000/job", {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(info)

//         }).then(response => response.json().then(data => {
//             console.log(data)
//             if (data.status === true) {
//                 alert("Created Job Post Sucessfully")

//             }

//         }))


//     }
//     function handlesubmitEvent(e) {

//         e.preventDefault()
//         SaveJob()

//     };

//     return (//Muti Select should be in limit of max 3


//         <form style={form} onSubmit={handlesubmitEvent}>
//             <Typography variant="h6" gutterBottom>Post a job :</Typography>

//             {jobData?.map((job, index) => (
//                 <div key={index}>

//                     <FormControl sx={{ m: 1, width: 300 }}>
//                         <InputLabel id="demo-multiple-name-label">Job Role</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple

//                             input={<OutlinedInput label="Job Role" />}

//                         >
//                             {jobRoles.map((jobRole) => (
//                                 <MenuItem
//                                     key={jobRole}
//                                     value={jobRole}

//                                 >
//                                     {jobRole}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>


//                     <FormControl sx={{ m: 1, width: 300 }}>
//                         <InputLabel id="demo-multiple-name-label">Primary Skills</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple

//                             input={<OutlinedInput label="Primary Skills" />}

//                         >
//                             {primarySkills.map((primarySkill) => (
//                                 <MenuItem
//                                     key={primarySkill}
//                                     value={primarySkill}

//                                 >
//                                     {primarySkill}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>


//                     <FormControl sx={{ m: 1, width: 300 }}>
//                         <InputLabel id="demo-multiple-name-label">Secondary Skills</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple

//                             input={<OutlinedInput label="Secondary Skills" />}

//                         >
//                             {secondarySkills.map((secondarySkill) => (
//                                 <MenuItem
//                                     key={secondarySkill}
//                                     value={secondarySkill}

//                                 >
//                                     {secondarySkill}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>


//                     <FormControl sx={{ m: 1, width: 300 }}>
//                         <InputLabel id="demo-multiple-name-label">Sector</InputLabel>
//                         <Select
//                             labelId="demo-multiple-name-label"
//                             id="demo-multiple-name"
//                             multiple

//                             input={<OutlinedInput label="Sector" />}

//                         >
//                             {sector.map((sector) => (
//                                 <MenuItem
//                                     key={sector}
//                                     value={sector}

//                                 >
//                                     {sector}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>


                    
//                     <Box
//                         component="form"
//                         sx={{
//                             '& .MuiTextField-root': { m: 1, width: '50ch' },
//                         }}
//                         noValidate
//                         autoComplete="off"
//                     >

//                         <TextField
//                             id="outlined-textarea"
//                             label="Company"
//                             placeholder="Company"
//                             multiline
//                         />

//                         <TextField
//                             id="outlined-multiline-static"
//                             label="Job Description"
//                             multiline
//                             rows={4}
//                         />

//                     </Box>



//                     {/* <Box sx={{ minWidth: 120 }}>
//                         <FormControl fullWidth>
//                             <InputLabel id="demo-simple-select-label">Location</InputLabel>
//                             <Select
//                                 labelId="demo-simple-select-label"
//                                 id="demo-simple-select"
//                                 label="Location"

//                             >
//                                 <MenuItem>Ten</MenuItem>
//                                 <MenuItem>Twenty</MenuItem>
//                                 <MenuItem>Thirty</MenuItem>
//                             </Select>
//                         </FormControl>
//                     </Box> */}










//                     {/* <FormControl style={formControl}>
//                         <InputLabel id="demo-multiple-chip-label" >Job Role</InputLabel>
//                         <Select
//                             labelId="demo-multiple-chip-label"
//                             id="demo-multiple-chip"

//                             multiple
//                             name='jobRole'
//                             value={job.jobRole}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput id="select-multiple-chip" label="Job Role" shrink />}
//                             renderValue={(selected) => (
//                                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                                     {selected.map((value) => (
//                                         <Chip key={value} label={value} />
//                                     ))}
//                                 </Box>
//                             )}

//                         // MenuProps={MenuProps}

//                         >


//                             {jobRoles.map((jobRole) => (
//                                 <MenuItem
//                                     key={jobRole}
//                                     value={jobRole}

//                                 >
//                                     {jobRole}
//                                 </MenuItem>
//                             ))}


//                         </Select>
//                     </FormControl>

//                     <Box
//                         sx={{
//                             '& .MuiTextField-root': { m: 1, width: '50ch' },
//                         }}>
//                         <TextField

//                             style={{ margin: '50px' }}
//                             id="outlined-multiline-static"
//                             label="Job Description"
//                             name="jobDescription"
//                             value={job.jobDescription}
//                             onChange={(event) => handleJobChange(event, index)}
//                             multiline
//                             rows={4}
//                         />
//                     </Box>

//                     <FormControl style={formControl}>
//                         <InputLabel id="demo-multiple-chip-label" >Experience</InputLabel>
//                         <Select
//                             labelId="demo-multiple-chip-label"
//                             id="demo-multiple-chip"
//                             multiple
//                             name='experience'
//                             value={job.experience}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput id="select-multiple-chip" label="Experience" shrink />}
//                             renderValue={(selected) => (
//                                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                                     {selected.map((value) => (
//                                         <Chip key={value} label={value} />
//                                     ))}
//                                 </Box>
//                             )}

//                         // MenuProps={MenuProps}

//                         >
//                             {experiences.map((experience) => (
//                                 <MenuItem
//                                     key={experience}
//                                     value={experience}

//                                 >
//                                     {experience}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>

//                     <br></br>
//                     <br></br>

//                     <FormControl style={formControl}>
//                         <InputLabel id="demo-multiple-chip-label" >Primary Skills</InputLabel>
//                         <Select
//                             labelId="demo-multiple-chip-label"
//                             id="demo-multiple-chip"
//                             multiple
//                             name='primarySkills'
//                             value={job.primarySkills}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput id="select-multiple-chip" label="Primary Skills" shrink />}
//                             renderValue={(selected) => (
//                                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                                     {selected.map((value) => (
//                                         <Chip key={value} label={value} />
//                                     ))}
//                                 </Box>
//                             )}

//                         // MenuProps={MenuProps}

//                         >
//                             {primarySkills.map((primarySkill) => (
//                                 <MenuItem
//                                     key={primarySkill}
//                                     value={primarySkill}

//                                 >
//                                     {primarySkill}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>

//                     <br></br>
//                     <br></br>

//                     <FormControl style={formControl}>
//                         <InputLabel id="demo-multiple-chip-label" >Secondary Skills</InputLabel>
//                         <Select
//                             labelId="demo-multiple-chip-label"
//                             id="demo-multiple-chip"
//                             multiple
//                             name='secondarySkills'
//                             value={job.secondarySkills}
//                             onChange={(event) => handleJobChange(event, index)}
//                             input={<OutlinedInput id="select-multiple-chip" label="Primary Skills" shrink />}
//                             renderValue={(selected) => (
//                                 <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//                                     {selected.map((value) => (
//                                         <Chip key={value} label={value} />
//                                     ))}
//                                 </Box>
//                             )}

//                         // MenuProps={MenuProps}

//                         >
//                             {secondarySkills.map((secondarySkill) => (
//                                 <MenuItem
//                                     key={secondarySkill}
//                                     value={secondarySkill}

//                                 >
//                                     {secondarySkill}
//                                 </MenuItem>
//                             ))}
//                         </Select>
//                     </FormControl>

//                     <br></br>
//                     <br></br>
//                     <br></br>
//                     <br></br>


//                     <Typography variant="h6" gutterBottom>
//                         Education Qualification
//                     </Typography>
//                     <Box>
//                         {jobData.education?.map((education, index) => (
//                             <Box key={index}>
//                                 <TextField
//                                     label="Authority"
//                                     name={`education[${index}]`}
//                                     value={education.authority}
//                                     onChange={(event) => handleJobChange2(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                                 <br />
//                                 <TextField
//                                     label="education Level"
//                                     name={`education[${index}]`}
//                                     value={education.educationLevel}
//                                     onChange={(event) => handleJobChange2(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                                 <br />
//                                 <TextField
//                                     label="Discipline"
//                                     name={`education[${index}]`}
//                                     value={education.discipline}
//                                     onChange={(event) => handleJobChange2(event, index)}
//                                     variant="outlined"
//                                     required
//                                 />
//                             </Box>

//                         ))}
//                     </Box>

//                     <br></br>
//                     <br></br>

//                     <Button
//                         variant="outlined"
//                         onClick={() =>
//                             setJobData({
//                                 ...jobData,
//                                 education: [
//                                     ...jobData.education,
//                                     { authority: '', educationLevel: '', discipline: '' }
//                                 ]
//                             })
//                         }
//                     >
//                         Add Education Qualifications
//                     </Button>
//                     <TextField
//                         label="Job Location"
//                         name="location"
//                         value={job.location}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     />
//                     <TextField
//                         label="Salary"
//                         name="salary"
//                         value={job.salary}
//                         onChange={(event) => handleJobChange(event, index)}
//                         variant="outlined"
//                         fullWidth
//                         required
//                     /> */}

//                     {index === jobData?.length - 1 &&
//                         <Button
//                             // className={classes.addButton}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<Add />}
//                             onClick={handleAddJob}
//                         >
//                             Add
//                         </Button>
//                     }
//                     {index !== jobData?.length - 1 &&
//                         <Button
//                             // className={classes.removeButton}
//                             variant="contained"
//                             color="primary"
//                             startIcon={<Remove />}
//                             onClick={() => handleRemoveJob(index)}
//                         >
//                             Remove
//                         </Button>
//                     }

//                     <Button onClick={handlesubmitEvent}
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                     >
//                         Submit

//                     </Button>
//                     <br></br>
//                 </div>
//             ))}
//         </form >
//     );

// };

// export default JobForm;