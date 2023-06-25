import * as React from 'react';
import { useState, useEffect } from 'react'
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
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom"
import CardHeader from '@mui/material/CardHeader';


const user = JSON.parse(localStorage.getItem('userDetails'));



const cards = [1, 2, 3];
// TODO remove, this demo shouldn't need to reset the theme.

const profile = {

    marginTop: '130px',
    borderRadius: '0.8rem',
    boxShadow: '2px 2px 4px 2px rgba(0, 0, 0, 0.2)'

}

const tiers = [

    {

        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Select',
        buttonVariant: 'contained',
    },
    {

        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Select',
        buttonVariant: 'contained',
    },
    {

        price: '15',
        description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support',
        ],
        buttonText: 'Select',
        buttonVariant: 'contained',
    },
];



const defaultTheme = createTheme();
export default function MyPlans() {
    const navigate = useNavigate();
    const [planData, setPlanData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8000/revenueR/${user._id}`)
            .then(response => response.json())
            .then(data => {
                setPlanData(data.data);
                console.log(data.data);
                console.log(planData);
            })
            .catch(err => console.log(err));
    }, []);
    const recruiterInfo = { ...planData.recruiterInfo };
    const plansDetails = planData.plans;
    console.log(plansDetails)
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




                <Container sx={{ py: 8 }} maxWidth="md" style={profile}>
                    <ListItem alignItems="flex-start" marginLeft="10px">
                        <ListItemAvatar marginTop="-7px">
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 130, height: 130 }} />
                        </ListItemAvatar>
                        <ListItemText
                            sx={{ marginTop: '25px', marginLeft: '22px', flexGrow: 1 }}
                            primary={
                                <Typography variant="h4" fontFamily="Roboto, sans-serif">
                                    {recruiterInfo.fullName}
                                </Typography>
                            }

                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Email: {recruiterInfo.email}
                                    </Typography>
                                    <Typography>
                                        Phone Number: {recruiterInfo.phoneNumber}
                                    </Typography>

                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </Container>
                <br></br>
                <br></br>
                <br></br>
                <Container maxWidth="md" >
                    {plansDetails?.map((plan, index) => (
                        <Grid key={index} container spacing={5} alignItems="flex-end">
                            {tiers.map((tier) => (


                                <Grid
                                    item
                                    key={tier.title}
                                    xs={12}
                                    sm={tier.title === 'Enterprise' ? 12 : 6}
                                    md={4}
                                >
                                    <Card >
                                        <CardHeader
                                            title={plan.recruiterPlan}
                                            subheader={tier.subheader}
                                            titleTypographyProps={{ align: 'center' }}
                                            subheaderTypographyProps={{
                                                align: 'center',
                                            }}
                                            sx={{
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'light'
                                                        ? theme.palette.grey[200]
                                                        : theme.palette.grey[700],
                                            }}
                                        />
                                        <CardContent sx={{
                                            height: '15rem', alignItems: 'center',
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[200]
                                                    : plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[700]
                                        }}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                }}
                                            >
                                                <Typography variant="h5" color="text.primary" sx={{ marginTop: "57px" }}>
                                                    {plan.duration} to {plan.remainingDays} Days
                                                </Typography>
                                                <br />

                                                <Typography variant="h6" color="text.secondary">
                                                    {plan.jobPostno} Post
                                                </Typography>
                                            </Box>

                                        </CardContent >


                                        <CardActions sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[200]
                                                    : plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[700]
                                        }}>
                                            <Button fullWidth variant='outlined' >
                                                Active
                                            </Button>
                                        </CardActions>

                                        <CardActions sx={{
                                            backgroundColor: (theme) =>
                                                theme.palette.mode === 'light'
                                                    ? plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[200]
                                                    : plan.recruiterPlan === 'Gold'
                                                        ? 'goldenrod'
                                                        : plan.recruiterPlan === 'Silver'
                                                            ? '#c0c0c0'
                                                            : plan.recruiterPlan === 'Platinum'
                                                                ? '#e5e4e2'
                                                                : theme.palette.grey[700]
                                        }}>


                                            <Button fullWidth variant={tier.buttonVariant} onClick={() => { navigate(`/Employer/${user._id}/${plan.id}`) }}>
                                                {tier.buttonText}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                    <br></br>
                                </Grid>
                            ))}

                        </Grid>
                    ))}
                </Container>
            </main>
        </ThemeProvider>
    );
}      