import React, { useState } from "react"
import { FiEdit2 } from 'react-icons/fi'
import ProfileForm from "../Forms/ProfileForm"
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import JobDescription from "./JobDescription"






    const main = {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',

    }

    const  profile = {

        width: '90%',
        height: '40vh',
        gridColumn: '1/2',
        borderRadius: '0.5rem',
        border: '0.3px solid lightgrey',
        marginTop: '45px',
        marginLeft: '160px',
        backgroundColor: 'rgb(239, 245, 250)'
        // background-color: rgb(239, 245, 250)
    }

    const icon = {
        float: 'right',
        margin: '5px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer'
    }

   

    const cardOne = {

        width: '90%',
        marginLeft: '30px',
        marginBottom: '15px'
    }

    const cardTwo = {

        width: '90%',
        marginLeft: '30px',
        marginBottom: '15px',
    }

    const cardThree = {

        width: '90%',
        marginLeft: '30px',
        marginBottom: '15px'
    }

    const typo = {
        margin: '10px',
        color: '#0077B5'
    }








const Employer = () => {

  

    const [form, setForm] = useState(false)
    // const [jobPost] = useState(false)
    const [jobDescription , setJobDescription] = useState(false)


    return (
        <div style={main}>
            <div style={profile}>

                <button style={icon} onClick={() => setForm(true)}><FiEdit2 style={{ fontSize: '18px', }} /></button>
                {form && <ProfileForm recPro={form => setForm(false)} />}
                
            </div>

            <div >
                <Box style={typo}>
                    <Typography variant="h5" component="h2" >
                        Job Posted
                    </Typography>
                </Box>
                <Card sx={{ minWidth: 275, marginTop: '25px', }} style={cardOne}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Software Engineer
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hiclousia
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">

                        </Typography>
                        <Typography variant="body2">
                            React
                            <br />

                        </Typography>
                        <Typography variant="body2">
                            Bangalore
                            <br />

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => setJobDescription(true)}>show more</Button>
                        {jobDescription && <JobDescription/>}
                    </CardActions>
                </Card>



                <Card sx={{ minWidth: 275, marginTop: '25px', }} style={cardTwo}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Software Engineer
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hiclousia
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">

                        </Typography>
                        <Typography variant="body2">
                            React
                            <br />

                        </Typography>
                        <Typography variant="body2">
                            Bangalore
                            <br />

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">show more</Button>
                    </CardActions>
                </Card>




                <Card sx={{ minWidth: 275, marginTop: '25px', }} style={cardThree}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Software Engineer
                        </Typography>

                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Hiclousia
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">

                        </Typography>
                        <Typography variant="body2">
                            React
                            <br />

                        </Typography>
                        <Typography variant="body2">
                            Bangalore
                            <br />

                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">show more</Button>
                    </CardActions>
                </Card>

            </div>
        </div> 
    )
}

export default Employer