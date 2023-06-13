import React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const Experience = () => {

    const modalWrapper = {

        position: 'fixed',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
        backgroundColor: 'rgba(189 , 189 , 189 , 0.9)'
    }

    const modalContainer = {

        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50% , -50%)',
        maxWidth: '45rem',
        backgroundColor: '#fff',
        AlignItems: 'center',
        borderRadius: '0.5rem'
    }

    const feild = {

        width: '40rem',
        AlignItems: 'center',
        marginTop: '18px',
        margin: '18px',
        

    }

    const save = {
        float: 'left',
        margin: '20px'
    }

    const cancel = {
        float: 'right',
        margin: '20px'
    }

    return (
        <div style={modalWrapper}>
        <div style={modalContainer}>

            <div style={feild}>

                <Box
                    mb={2}
                >
                    <TextField fullWidth label="Current Status" id="fullWidth" />
                </Box>

                <Box
                    mb={2}
                >
                    <TextField fullWidth label="My Role" id="fullWidth" />
                </Box>

                <Box
                    mb={2}
                >
                    <TextField fullWidth label="Job Nature" id="fullWidth" />
                </Box>

                <Box
                    mb={2}
                >
                    <TextField fullWidth label="Organization Name" id="fullWidth" />
                </Box>

                <Box
                    mb={2}
                >
                    <TextField fullWidth label="Organization Sector" id="fullWidth" />
                </Box>

                <Box
                    mb={2}
                >
                  
                    <TextField type='date' fullWidth  id="fullWidth"  variant='outlined' InputLabelProps={{ shrink: true,}} />
                </Box>

                <Box
                    mb={2}
                >
                    <label>End Date</label>
                    <TextField type='date' fullWidth  id="fullWidth" />
                </Box>
            

                <Button variant="contained" style={save}>save</Button>
                <Button variant="contained" style={cancel} >cancel</Button>

            </div>

            <br/>

        </div>
    </div>
    )
}

export default Experience