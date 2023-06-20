import React, { useState } from "react"
import { styled } from '@mui/system'
import Profile from '../../imgs/Profile.jpg'
import { FiEdit2 } from 'react-icons/fi'
import ProfileForm from "../Forms/ProfileForm"
import JobPostForm from '../Forms/JobPostForm'
import { BsSignpost } from 'react-icons/bs'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Box } from '@material-ui/core'
import JobDescription from "./JobDescription"




const useStyles = styled((theme) => ({

    main: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',

    },

    profile: {

        width: '90%',
        height: '40vh',
        gridColumn: '1/2',
        borderRadius: '0.5rem',
        border: '0.3px solid lightgrey',
        marginTop: '45px',
        marginLeft: '160px',
        backgroundColor: 'rgb(239, 245, 250)',
        // background-color: rgb(239, 245, 250)
    },

    icon: {
        float: 'right',
        margin: '5px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
    },

    jobPost: {
        gridColumn: '2/3',
        width: '60%',
        marginTop: '45px',
        display: 'grid',
        border: '0.3px solid lightgrey',
        borderRadius: '0.5rem',
        marginLeft: '180px',
        backgroundColor: 'rgb(239, 245, 250)',
    },

    cardOne: {

        width: '90%',
        marginLeft: '30px',
        marginBottom: '15px',
    },

    cardTwo: {

        width: '90%',
        marginLeft: '30px',
        marginBottom: '15px',
    },

    cardThree: {

        width: '90%',
        marginLeft: '30px',
        marginBottom: '15px',
    },

    typo: {
        margin: '10px',
        color: '#0077B5',
    }


}))





const Employer = () => {

    const classes = useStyles()

    const [form, setForm] = useState(false)
    const [jobPost, setJobPost] = useState(false)
    const [jobDescription , setJobDescription] = useState(false)


    return (
        <div className={classes.main}>
            <div className={classes.profile}>

                <button className={classes.icon} onClick={() => setForm(true)}><FiEdit2 style={{ fontSize: '18px', }} /></button>
                {form && <ProfileForm recPro={form => setForm(false)} />}
                {/* <img
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '0.1px solid grey',
                        margin: '40px',
                        cursor: 'pointer',
                    }}

                    src={Profile}
                /> */}
            </div>

            <div className={classes.jobPost}>
                <Box className={classes.typo}>
                    <Typography variant="h5" component="h2" >
                        Job Posted
                    </Typography>
                </Box>
                <Card sx={{ minWidth: 275, marginTop: '25px', }} className={classes.cardOne}>
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



                <Card sx={{ minWidth: 275, marginTop: '25px', }} className={classes.cardTwo}>
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




                <Card sx={{ minWidth: 275, marginTop: '25px', }} className={classes.cardThree}>
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