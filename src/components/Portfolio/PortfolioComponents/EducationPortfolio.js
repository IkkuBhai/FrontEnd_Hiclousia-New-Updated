import React,{ useState, useEffect} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'




const Education = () => {


    // //API things start
    // const Navigate = useNavigate();
    // const user = JSON.parse(localStorage.getItem("userDetails"))
    // console.log('user', user)
    // if (!user) Navigate("/login")

    // useEffect(() => {
    //     getEducationData()
    // }, [])

    // //API things end


    const Navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("userDetails"))
  
    if (!user) Navigate("/Login")

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


    useEffect(() => {
        getEducationData()
    }, [])

    const [eduData, setEduData] = useState(
        {
            _id: '',
            educationLevel: '',
            collegeName: '',
            authority: '',
            discipline: '',
            yearOfpassout: ''
        }
    )
    const [isEditing, setIsEditing] = useState(false);
    function getEducationData(id) {
        fetch(`http://localhost:8000/education/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((result) => result.json())
            .then((resp) => {
                console.log("resp", resp)
                setEduData(resp)
                setIsEditing(true);
                console.log("eduData", eduData)
            })
            .catch(error => {
                console.log(error)
            })
    };
    // Function to handle changes in form values
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEduData((prevValues) => ({ ...prevValues, [name]: value }));
    };


    // Function to submit the form data and save it to the API
    const handleSubmit = async (id) => {
        await fetch(`http://localhost:8000/education/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eduData)
        });
        setIsEditing(false);
    };






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
                        <TextField
                            fullWidth
                            label="Education Level"
                            id="fullWidth"
                        />

                    </Box>



                    <Box
                        mb={2}
                    >
                        <TextField fullWidth label="Degree Name" id="fullWidth" />
                    </Box>



                    <Box
                        mb={2}
                    >
                        <TextField fullWidth label="Organization NAme" id="fullWidth" />
                    </Box>



                    <Box
                        mb={2}
                    >
                        <TextField fullWidth label="Authority" id="fullWidth" />
                    </Box>



                    <Box
                        mb={2}
                    >
                        <TextField fullWidth label="Discipline" id="fullWidth" />
                    </Box>


                    <Box
                        mb={2}
                    >
                        <label>Start Date</label>
                        <TextField type='date' fullWidth id="fullWidth" />
                    </Box>

                    <Box
                        mb={2}
                    >
                        <label>End Date</label>
                        <TextField type='date' fullWidth id="fullWidth" />
                    </Box>

                    <Button variant="contained" style={save}>save</Button>
                    <Button variant="contained" style={cancel} >cancel</Button>

                </div>

                <br />

            </div>
        </div>
    )
}

export default Education