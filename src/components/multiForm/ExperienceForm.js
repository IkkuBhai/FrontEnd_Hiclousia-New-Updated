import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { Button , Box } from '@mui/material';



const useStyles = styled({

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
        backgroundColor: 'rgba(22 102 197)',
    },
    cancel: {
        float: 'right',
        cursor: 'pointer',
        backgroundColor: 'rgba(22 102 197)',
    },

    close: {
        float: 'right',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
    }
})

const ExperienceForm = (props) => {

    
    const classes = useStyles()

    return (
        <div className={classes.modalWrapper}>
            <div className={classes.modalContainer}>
                <button className={classes.close} onClick={() => props.expFormNew(false)}><AiFillCloseCircle style={{fontSize: '22px',color: 'rgba(22 102 197)',}}/></button>
                <form className={classes.formField}>

                    <Box mb={2}>
                    <TextField fullWidth label="Job Status" />
                    
                    </Box>
                    <br/>

                    <Box mb={2}>
                    <TextField fullWidth label="Job Title" />
                    
                    </Box>
                    <br/>

                    <Box mb={2}>
                    <TextField fullWidth label="Company Name" />
                    
                    </Box>
                    <br/>

                    <Box mb={2}>
                    <TextField fullWidth label="Company Ttype" />
                    
                    </Box>
                    <br/>

                    <Box mb={2}>
                    <TextField fullWidth label="Company Location" />
                    
                    </Box>
                    <br/>

                    <Box mb={2}>
                    <TextField fullWidth label="Skills" />
                    
                    </Box>
                    <br/>

                    <Box mb={2}>
                    <TextField fullWidth label="Experience" />
                    
                    </Box>
                    <br/>

                    
                    <Button variant="contained" className={classes.save}>save</Button>
                    <Button variant="contained" className={classes.cancel} onClick={() => props.expFormNew(false)}>cancel</Button>
                   
                </form>
            </div>
        </div>
    )
}

export default ExperienceForm