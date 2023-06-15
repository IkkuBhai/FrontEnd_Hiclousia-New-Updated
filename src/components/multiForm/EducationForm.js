import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import baseurl from '../../baseURL/config'
import '../../styles/userProfile.css'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { yearofPassouts, educationLevels, authorities } from '../../constraints/arrays'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';




const userId = JSON.parse(localStorage.getItem('userDetails'));


const useStyles = styled((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      paddingTop: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {

      },
      width: '70ch',
    },


    padding: '50px 30px',
    margin: "0px,500px"
  },

  formControl: {
    margin: theme.spacing(5),
  },

  addButton: {
    margin: theme.spacing(5),
  },

  removeButton: {
    margin: theme.spacing(5),

  },
}));



const educationFormFields = {

  border: 'solid 0.1px',
  margin: '48px',
  borderRadius: '0.5rem',
  AlignItems: 'center'

}

const EducationForm = (props) => {

  const navigate = useNavigate();
  useEffect(() => {

    if (userId == null) {
      navigate("/login")
      alert("Please login first")
    }
  },)


  const classes = useStyles();

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

  const handleRemoveEducation = (index) => {
    const newEducation = [...educationList];
    newEducation.splice(index - 1, 1);
    setEducationList(newEducation);
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
            navigate("/ExperienceForm")
          }
        }
  
        ))
      )

      

    })

    return true
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    SaveEducation()

  }


  return (


    <div style={educationFormFields}>

      {educationList.map((education, i) => (
        <div key={education._id} className={classes.root} >
          <Typography textalign="center" variant="h6" gutterBottom color="primary">
            Education Details:
          </Typography>

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



          <TextField
            variant="outlined"
            label="College Name"
            name="collegeName"
            value={education.collegeName}
            onChange={(e) => handleChange(e, i)}
            fullWidth
            required
          />

          <TextField
            variant="outlined"
            label="Degree Name"
            name="degreeName"
            value={education.degreeName}
            onChange={(e) => handleChange(e, i)}
            fullWidth

          />


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





          <TextField
            variant="outlined"
            label="Discipline"
            name="discipline"
            value={education.discipline}
            onChange={(e) => handleChange(e, i)}
            fullWidth
            required
          />




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

          <TextField
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
          />
          {educationList.length !== 1 && (
            <Button className={classes.addButton}
              variant="contained"
              color="red"
              onClick={() => handleRemoveEducation(i)}
            >
              Remove
            </Button>
          )}

          <br></br>
          <Button className={classes.removeButton}
            variant="contained"
            color="primary"
            onClick={handleAddEducation}
          >
            Add Education
          </Button>


          <Button
            variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>

        </div>
      ))}
    </div>
  );
};

export default EducationForm;