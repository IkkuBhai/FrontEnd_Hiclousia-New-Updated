import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';



import { createTheme, ThemeProvider } from '@mui/material/styles';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>

                    <Typography variant="h6" color="inherit" noWrap>
                        Hiclousia
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >

                </Box>
                <Typography varient="h4">My Talent Pool</Typography>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >

                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2" textAlign="center">
                                            Candidate
                                        </Typography>
                                        <ListItemAvatar style={{ width: '150px', height: '150px' , display: 'flex', alignItems: 'center', justifyContent: 'center'  }} AlignItems="center">
                                            <Avatar alt="Remy Sharp"  style={{ fontSize: '100px' }}></Avatar>
                                        </ListItemAvatar>

                                    </CardContent>
                                    <CardActions>
                                        <Button size="large">Select</Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}




// import React, { useEffect, useState } from "react"
// import { styled } from '@mui/system'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import Button from '@mui/material/Button'
// import Typography from '@mui/material/Typography'
// import { Box } from '@mui/material'
// import JobDescription from "../RecruiterProfileComponents/PageComponents/JobDescription"
// const useStyles = styled((theme) => ({
//     main: {
//         width: '100%',
//         display: 'grid',
//         gridTemplateColumns: '1fr 2fr',
//     },
//     profile: {
//         width: '90%',
//         height: '40vh',
//         gridColumn: '1/2',
//         borderRadius: '0.5rem',
//         border: '0.3px solid lightgrey',
//         marginTop: '45px',
//         marginLeft: '160px',
//         backgroundColor: 'rgb(239, 245, 250)',
//     },
//     icon: {
//         float: 'right',
//         margin: '5px',
//         border: 'none',
//         background: 'transparent',
//         cursor: 'pointer',
//     },
//     jobPost: {
//         gridColumn: '2/3',
//         width: '60%',
//         marginTop: '45px',
//         display: 'grid',
//         border: '0.3px solid lightgrey',
//         borderRadius: '0.5rem',
//         marginLeft: '180px',
//         backgroundColor: 'rgb(239, 245, 250)',
//     },
//     cardOne: {
//         width: '90%',
//         marginLeft: '30px',
//         marginBottom: '15px',
//     },
//     cardTwo: {
//         width: '90%',
//         marginLeft: '30px',
//         marginBottom: '15px',
//     },
//     cardThree: {
//         width: '90%',
//         marginLeft: '30px',
//         marginBottom: '15px',
//     }

// }))
// const user = JSON.parse(localStorage.getItem('userDetails'));
// export default function Employer() {
//     const classes = useStyles()
//     // const [form, setForm] = useState(false)
//     // const [jobPost, setJobPost] = useState(false)
//     // const [jobDescription , setJobDescription] = useState(false)
//     const [planData, setPlanData] = useState([]);
//     function getplandetails(data) {
//         setPlanData(data)
//     }
//     useEffect(
//         () => {
//             fetch(`http://localhost:8000/revenueR/${user._id}`)
//                 .then(response => response.json()
//                     .then(data => {
//                         getplandetails(data.data)
//                         console.log(data.data)
//                         console.log(planData)
//                     })
//                     .catch(err => console.log(err)));
//         }, []
//     )
//     return (
//         <div className={classes.main}>

//             <div style={{ margin: '55px' }}>
//                 <div className={classes.jobPost} style={{ display: 'flex', justifyContent: 'space-between' }}>
//                     <Typography variant="h5" component="h2" >
//                         Job Posted
//                     </Typography>
//                     <Card sx={{ minWidth: 275, marginTop: '25px' }} className={classes.cardOne}>
//                         <CardContent>
//                             <Typography variant="h5" component="div">
//                                 Software Engineer
//                             </Typography>
//                             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                 Hiclousia
//                             </Typography>
//                             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                             </Typography>
//                             <Typography variant="body2">
//                                 React
//                                 <br />
//                             </Typography>
//                             <Typography variant="body2">
//                                 Bangalore
//                                 <br />
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <Button size="small" >show  more</Button>
//                             <Button style={{float: 'right'}}>Select</Button>
//                             {/* <Button onClick={() => setJobDescription(true)}>show more</Button> */}
//                             {/* {jobDescription && <JobDescription/>} */}
//                         </CardActions>
//                     </Card>
//                     <Card sx={{ minWidth: 275, marginTop: '25px' }} className={classes.cardTwo}>
//                         <CardContent>
//                             <Typography variant="h5" component="div">
//                                 Software Engineer
//                             </Typography>
//                             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                 Hiclousia
//                             </Typography>
//                             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                             </Typography>
//                             <Typography variant="body2">
//                                 React
//                                 <br />
//                             </Typography>
//                             <Typography variant="body2">
//                                 Bangalore
//                                 <br />
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <Button size="small">show more</Button>
//                             <Button style={{float: 'right'}}>Select</Button>
//                         </CardActions>
//                     </Card>
//                     <Card sx={{ minWidth: 275, marginTop: '25px' }} className={classes.cardThree}>
//                         <CardContent>
//                             <Typography variant="h5" component="div">
//                                 Software Engineer
//                             </Typography>
//                             <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                                 Hiclousia
//                             </Typography>
//                             <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                             </Typography>
//                             <Typography variant="body2">
//                                 React
//                                 <br />
//                             </Typography>
//                             <Typography variant="body2">
//                                 Bangalore
//                                 <br />
//                             </Typography>
//                         </CardContent>
//                         <CardActions>
//                             <Button size="small">show more</Button>
//                             <Button style={{float: 'right'}}>Select</Button>
//                         </CardActions>
//                     </Card>
//                 </div>
//             </div>

//         </div>
//     )
// }




