import * as React from 'react'
import { useState, useEffect } from "react"
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Container from '@mui/material/Container'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { mainListItems } from './PortfolioComponents/ListPortfolio'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { FiEdit2 } from 'react-icons/fi'
import { FaGraduationCap } from 'react-icons/fa'
import { GrAdd } from 'react-icons/gr'
import Personal from './PortfolioComponents/PersonalPortfolio'
import Education from './PortfolioComponents/EducationPortfolio'
import Project from './PortfolioComponents/ProjectPortfolio'
import Experience from './PortfolioComponents/ExperiencePortfolio'
import { useNavigate } from 'react-router-dom'
import ProfilePic from './PortfolioComponents/PortfolioPic'
import Grid from '@mui/material/Grid'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { AiFillDelete } from 'react-icons/ai'
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';




const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function DashboardPortfolio() {




    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))

    if (!user) Navigate("/login")

    const [userInfo, setUserInfo] = useState([])

    useEffect(() => {

        fetch(`http://localhost:8000/personal/${user._id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => { console.log(data); setUserInfo(data.data) })
            .catch(err => console.log(err))
        console.log(userInfo)
    }, [])




    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };



    const [personal, setPersonal] = React.useState(false)
    const [education, setEducation] = React.useState(false)
    const [project, setProject] = React.useState(false)
    const [experience, setExperience] = React.useState(false)


    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >

                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h5"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Hiclousia
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {/* {secondaryListItems} */}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>

                        <Card sx={{ minWidth: 200 }}>
                            <CardContent>
                                <button
                                    onClick={() => setPersonal(true)}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '18px',
                                        cursor: 'pointer'
                                    }}>
                                    <FiEdit2 style={{ fontSize: '20px' }} />
                                </button>

                                <ProfilePic />

                                {personal && <Personal personalinfo={personal => setPersonal(false)} />}



                            </CardContent>
                        </Card>
                        <br />


                        <Card sx={{ minWidth: 200 }}>
                            <CardContent>

                                <Typography variant="h5" component="div">
                                    Education
                                </Typography>


                                <button
                                    onClick={() => setEducation(true)}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '-26px',
                                        cursor: 'pointer'
                                    }}>
                                    <GrAdd style={{ fontSize: '20px' }} />
                                </button>
                                {/* <Divider variant="inset" component="li" /> */}
                                <br></br>
                                <br></br>

                                {education && <Education />}


                                {userInfo.educationData?.map((education) => (
                                    <List>

                                        <ListItem alignItems="flex-start">

                                            <ListItemAvatar>
                                                <Avatar><SchoolSharpIcon/></Avatar>
                                            </ListItemAvatar>

 

                                            <ListItemText

                                                primary={
                                                    <React.Fragment>
                                                        <Typography variant='h6' style={{fontFamily: "'Montserrat', sans-serif" , fontFamily: "'Lora', sans-serif"}}>{education.collegeName}</Typography>
                                                    </React.Fragment>
                                                }
                                                
                                                secondary={
                                                    <React.Fragment>
                                                        <Typography 
                                                            sx={{ display: 'inline' }}
                                                            style={{fontFamily: "'Montserrat', sans-serif"}} 
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {education.educationLevel}
                                                        </Typography>
                                                        {" — "} {education.degreeName}, {education.discipline}

                                                        <Typography variant="subtitle1" gutterBottom>
                                                            {education.startYear} {" — "} {education.endYear}
                                                        </Typography>
                                                    </React.Fragment>
                                                }
                                            />
                                            <button style={{
                                                float: 'right',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer'
                                            }}><FiEdit2 style={{ float: 'right', fontSize: '20px' }} /></button>

                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))}
                            </CardContent>

                        </Card>
                        <br />


                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>

                                <Typography variant="h5" component="div">
                                    Project
                                </Typography>

                                <button
                                    onClick={() => setProject(true)}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '-26px',
                                        cursor: 'pointer'
                                    }}>
                                    <FiEdit2 style={{ fontSize: '20px' }} />
                                </button>
                                {project && <Project />}



                                {userInfo.projects?.map((projects) => (
                                    <Grid item xs={8} key={projects._id}>
                                        {projects.projectTitle}
                                        {projects.description}
                                        {projects.startDate}
                                        {projects.endDate}
                                        {projects.Url}
                                        {projects.organizationName}

                                    </Grid>
                                ))}


                            </CardContent>

                        </Card>
                        <br />

                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>

                                <Typography variant="h5" component="div">
                                    Experience
                                </Typography>

                                <button
                                    onClick={() => setExperience(true)}
                                    style={{
                                        float: 'right',
                                        border: 'none',
                                        background: 'transparent',
                                        marginTop: '-26px',
                                        cursor: 'pointer'
                                    }}>
                                    <FiEdit2 style={{ fontSize: '20px' }} />
                                </button>
                                {experience && <Experience />}


                                {userInfo.experienceData?.map((experience) => (
                                    <List>
                                        <ListItem>
                                            <ListItemText>
                                                <Grid item xs={8} sm={8} key={experience._id} >
                                                    <ListItemAvatar>
                                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                                    </ListItemAvatar>
                                                    <button style={{
                                                        float: 'right',
                                                        border: 'none',
                                                        background: 'transparent',
                                                        marginTop: '-26px',
                                                        cursor: 'pointer'
                                                    }}><AiFillDelete style={{ float: 'right', fontSize: '20px' }} /></button>

                                                    <div style={{ margin: '10%', marginTop: '6%', }}>

                                                        <h5 style={{ fontFamily: "'Sans-Serif', Arial", }}>{experience.jobTitle}</h5> at <p>{experience.companyName}</p>

                                                    </div>
                                                    <Divider variant="inset" component="li" />
                                                </Grid>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                ))}
                            </CardContent>

                        </Card>

                        <br />
                        <br />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}