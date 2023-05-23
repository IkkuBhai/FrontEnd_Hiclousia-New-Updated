import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@mui/material/TextField'
import { Box, Button, Container } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { AiFillCloseCircle } from 'react-icons/ai'


const useStyles = makeStyles({

    modalWrapper: {
        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        backgroundColor: 'rgba(189 , 189 , 189 , 0.9)',
    },

    modalContainer: {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '30rem',
        padding: '2rem 3rem',
        borderRadius: '0.5rem',
        backgroundColor: '#fff',
    },

    formField: {
        AlignItems: 'center',
        marginTop: '18px',
        width: '25rem',
    },

    save: {
        float: 'left',
        cursor: 'pointer',
    },
    cancel: {
        float: 'right',
        cursor: 'pointer',
    }


})


const ProjectForm = (props) => {

    const classes = useStyles()

    return (
        <div className={classes.modalWrapper}>
            <div className={classes.modalContainer}>
                <form className={classes.formField} >

                    <Box mb={2}>
                        <TextField fullWidth label="Project Title" />
                    </Box>
                    <br />


                    <Box mb={2}>
                        <label>Start Date</label>
                        <TextField fullWidth type='date' />
                    </Box>
                    <br />

                    <Box mb={2}>
                        <label>End Date</label>
                        <TextField fullWidth type='date' />
                    </Box>
                    <br />

                    <Box mb={2}>
                        <TextField fullWidth label="Organization Name" />
                    </Box>
                    <br />

            
                    <Box mb={2} >
                        <TextField
                            id="outlined-multiline-static"
                            style={{width: '100%',}}
                            label="Description"
                            multiline
                            rows={4}
                            defaultValue="Deescription"
                        />
                    </Box>
                    <br />







                    <Button variant="contained" className={classes.save} >save</Button>
                    <Button variant="contained" className={classes.cancel} onClick={() => props.proj(false)}>cancel</Button>

                </form>


            </div>
        </div>
    )
}

export default ProjectForm