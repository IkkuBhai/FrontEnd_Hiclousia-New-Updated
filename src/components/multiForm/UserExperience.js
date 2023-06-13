import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography,  } from '@material-ui/core';
import { Add, Remove,  } from '@material-ui/icons';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { primarySkills, experienceTypes, companyTypes, location } from '../../constraints/arrays';
import OutlinedInput from '@mui/material/OutlinedInput'







const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        //  backgroundColor: theme.palette.info.main 
      },
      width: '70ch',
    },

    color: theme.palette.primary.main,


    padding: '50px 30px',
    // margin: "0px,500px",

    border: '1px solid',
    borderRadius: '0.5rem',
    margin: '48px'
  },

  addButton: {
    margin: theme.spacing(5),

  },
  removeButton: {
    margin: theme.spacing(5),

  },
}));

const userId = JSON.parse(localStorage.getItem("userDetails"))

function ExperienceForm() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [experienceData, setExperienceData] = useState([
    {
      userDetailsID: userId._id,
      jobStatus: "Active",
      experienceType: '',
      jobRole: '',
      companyName: '',
      companyType: '',
      skills: [],
      location: '',
      startDate: '',
      endDate: '',
    

    }
  ]
  );


  const handleAddexperience = () => {

    const experiences = [...experienceData, {
      experienceType: '',
      jobStatus: "Active",
      jobRole: '',
      companyType: '',
      companyName: '',
      skills: [],
      location: '',
      startDate: '',
      endDate: '',
      
    }];

    setExperienceData(
      experiences
    );
  }

  const handleRemoveexperience = (index) => {
    const experiences = [...experienceData];
    experiences.splice(index, 1);
    setExperienceData(
      experiences
    );
  };

  const handleExperienceChange = (event, index) => {

    const { name, value } = event.target;
    //  console.log(name,value)
    const experiences = [...experienceData];
    experiences[index] = {
      ...experienceData[index],
      [name]: value
    };
    setExperienceData(experiences);
  }

  function SaveExperience() {
    console.log(experienceData)
    let experienceInfo = experienceData;
    experienceInfo?.map((e, index) => {
      fetch("http://localhost:8000/experience", {
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

          setExperienceData([{
            experienceType: '',
            jobStatus: "Active",
            jobRole: '',
            companyType: '',
            experienceType: '',
            skills: [],
            companyName: '',
            location: '',
            startDate: '',
            endDate: ''
          }])
          navigate("/UserProjects")

        }
      }
      ))
    })
    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    SaveExperience()

    // alert(JSON.stringify(experienceData));
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography textAlign="center" variant="h6" gutterBottom>
        Experience Details:
      </Typography>
      {experienceData?.map((experience, index) => (
        <div key={index}>

          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel>Experience Type</InputLabel>
            <Select
              name="experienceType"
              value={experience.experienceType}
              onChange={(event) => handleExperienceChange(event, index)}
              label="Experience Type"
              required
              input={<OutlinedInput label="Experience Type" />}
            >
              {experienceTypes.map((experienceType) => (
                <MenuItem
                  key={experienceType}
                  value={experienceType}
                >
                  {experienceType}
                </MenuItem>
              ))}

            </Select>
          </FormControl>





          <TextField
            label="Job Status"
            name="jobStatus"
            value={experience.jobStatus}
            variant="outlined"
            required
            focused
            onChange={(event) => handleExperienceChange(event, index)}
          />





          <TextField
            label="Job Role"
            name="jobRole"
            variant="outlined"
            required
            value={experience.jobRole}
            onChange={(event) => handleExperienceChange(event, index)}
          />





          <TextField
            label="Organization Name"
            name="companyName"
            variant="outlined"
            required
            value={experience.companyName}
            onChange={(event) => handleExperienceChange(event, index)}
          />






          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel>Company Type</InputLabel>
            <Select
              name="companyType"
              value={experience.companyType}
              onChange={(event) => handleExperienceChange(event, index)}
              label="Company Type"
              required
              input={<OutlinedInput label="Company Type" />}
            >
              {companyTypes.map((companyType) => (
                <MenuItem
                  key={companyType}
                  value={companyType}
                >
                  {companyType}
                </MenuItem>
              ))}

            </Select>
          </FormControl>



          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="demo-multiple-name-label">Skills Practiced</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              name="skills"
              value={experience.skills}
              onChange={(event) => handleExperienceChange(event, index)}
              multiple
              input={<OutlinedInput label="Skills Practiced" />}

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
 


          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel>Company Location</InputLabel>
            <Select
              name="location"
              value={experience.location}
              onChange={(event) => handleExperienceChange(event, index)}
              label="Company Location"
              required
              input={<OutlinedInput label="Company Location" />}
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
          </FormControl>

          {/* <MultipleSelectChip handleFunction={handleExperienceChange} index={index} requiredData={primarySkills} labelName={"Skills"} /> */}

          <TextField

            variant="outlined"
            label="Start Year"
            name="startDate"
            value={experience.startDate}
            onChange={(event) => handleExperienceChange(event, index)}
            type="date"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}

          />

          <TextField
            variant="outlined"
            label="End Year"
            name="endDate"
            value={experience.endDate}
            onChange={(event) => handleExperienceChange(event, index)}
            type="date"
            fullWidth
            required
            InputLabelProps={{
              shrink: true,
            }}
          />

          <br />

          {index === experienceData?.length - 1 &&
            <Button
              className={classes.addButton}
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleAddexperience}
            >
              Add
            </Button>
          }
          {index !== experienceData?.length - 1 &&
            <Button
              className={classes.removeButton}
              variant="contained"
              color="primary"
              startIcon={<Remove />}
              onClick={() => handleRemoveexperience(index)}
            >
              Remove
            </Button>
          }
        </div>
      ))}
      <Button onClick={handleSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit

      </Button>
      <br></br>
    </form>
  );
}

export default ExperienceForm;