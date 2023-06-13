import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import { Add, Remove } from '@material-ui/icons';
import { primarySkills } from '../../constraints/arrays'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const useStyles = makeStyles((theme) => ({
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

    color: theme.palette.primary.main,

    //  boxShadow: '0px 3px 5px 2px rgba(255, 105, 135, .3)',
    padding: '50px 30px',
    margin: "0px,500px"
  },

  addButton: {
    margin: theme.spacing(5),

  },
  removeButton: {
    margin: theme.spacing(5),

  },
}));

const userId = JSON.parse(localStorage.getItem("userDetails"))

function ProjectForm() {
  const classes = useStyles();
  const [projectData, setProjectData] = useState([
    {
      userDetailsID: userId._id,
      projectTitle: '',
      projectType: '',
      description: '',
      skills: [],
      startDate: '',
      endDate: '',
      url: '',
      organizationName: ''
    }
  ]
  );


  const handleAddProject = () => {

    const projects = [...projectData, {
      userDetailsID: userId._id,
      projectTitle: '',
      projectType: '',
      description: '',
      skills: [],
      startDate: '',
      endDate: '',
      url: '',
      organizationName: ''
    }];

    setProjectData(
      projects
    );
  }



  const handleRemoveProject = (index) => {
    const projects = [...projectData];
    projects.splice(index, 1);
    setProjectData(
      projects
    );
  };

  const handleProjectChange = (event, index) => {

    const { name, value } = event.target;

    const projects = [...projectData];
    projects[index] = {
      ...projectData[index],
      [name]: value
    };
    setProjectData(projects);
  }

  function SaveProject() {
    console.log(projectData)
    let projectInfo = projectData;
    projectInfo?.map((e, index) => {
      return (fetch("http://localhost:8000/project", {
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

          setProjectData([{
            userDetailsID: userId._id,
            projectTitle: '',
            projectType: '',
            description: '',
            skills: [],
            startDate: '',
            endDate: '',
            url: '',
            organizationName: ''
          }])

        }
      }
      )))
    })
    return true
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    SaveProject()
    alert("Profile submitted sccessfully")

    // alert(JSON.stringify(projectData));
  };



  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography textAlign="center" variant="h6" gutterBottom>
        Projects :
      </Typography>

      {projectData?.map((project, index) => (
        <div key={index}>
          <TextField
            label="Project Title"
            name="projectTitle"
            variant="outlined"
            required
            value={project.projectTitle}
            onChange={(event) => handleProjectChange(event, index)}
          />


          <TextField
            label="Project Type"
            name="projectType"
            variant="outlined"
            required
            value={project.projectType}
            onChange={(event) => handleProjectChange(event, index)}
          />








          <FormControl sx={{ m: 3, width: 600 }}>
            <InputLabel id="demo-multiple-name-label">Skills Used</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              name="skills"
              value={project.skills}
              onChange={(event) => handleProjectChange(event, index)}
              multiple
              input={<OutlinedInput label="Skills Used" />}

            >
              {primarySkills.map((primarySkill, i) => (
                <MenuItem
                  key={i}
                  value={primarySkill}
                >
                  {primarySkill}
                </MenuItem>
              ))}
            </Select>
          </FormControl>






          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            variant="outlined"
            required
            value={project.startDate}
            onChange={(event) => handleProjectChange(event, index)}
            InputLabelProps={{
              shrink: true,
            }}
          />



          <TextField
            label="End Date"
            name="endDate"
            type="date"
            variant="outlined"
            required
            value={project.endDate}
            onChange={(event) => handleProjectChange(event, index)}
            InputLabelProps={{
              shrink: true,
            }}
          />


          <TextField
            label="URL"
            name="url"
            variant="outlined"
            // required
            value={project.url}
            onChange={(event) => handleProjectChange(event, index)}
          />



          <TextField
            label="Organization Name"
            name="organizationName"
            type="text"
            variant="outlined"
            required
            value={project.organizationName}
            onChange={(event) => handleProjectChange(event, index)}
          />



          <TextField
            label="Description"
            name="description"
            value={project.description}
            variant="outlined"
            required
            fullWidth
            multiline
            maxRows={2}
            defaultValue="Text limit 250 characters"
            // color="success"
            focused
            onChange={(event) => handleProjectChange(event, index)}
          />




          {/* <br/> */}
          {index === projectData?.length - 1 &&
            <Button
              className={classes.addButton}
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleAddProject}
            >
              Add
            </Button>
          }
          {index !== projectData?.length - 1 &&
            <Button
              className={classes.removeButton}
              variant="contained"
              color="primary"
              startIcon={<Remove />}
              onClick={() => handleRemoveProject(index)}
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

export default ProjectForm;

