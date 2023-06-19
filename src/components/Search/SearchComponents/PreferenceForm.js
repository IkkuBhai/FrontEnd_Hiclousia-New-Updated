import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Select from 'react-select'
import MultiSelect from "multiselect-react-dropdown"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { educationLevels } from '../../../constraints/arrays'
import SearchedItems from './SearchedItems'

const PreferenceForm = (props) => {


    //Options for Job Preferences



    const indusrty = [
        { value: 'it', label: 'IT' },
        { value: 'finance', label: 'Finance' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'healthCare', label: 'Health Care' },
        { value: 'sales', label: 'Sales' }
    ]


    const jobRole = [
        'Software Developer',
        'Frontend Developer',
        'Backend Developer',
        'Fullstack Developer'
    ]

    const skills = [
        { value: 'react', label: 'React' },
        { value: 'tailwind', label: 'Tailwind' },

    ]

    const location = [
        { value: 'Noida', label: 'Noida' },
        { value: 'bangalore', label: 'Bangalore' },
        { value: 'Chennai', label: 'Chennai' }
    ]

    const jobNature = [
        { value: 'remote', label: 'Remote' },
        { value: 'Onsite', label: 'Onsite' }

    ]

    const jobType = [
        { value: 'fullTime', label: 'Full Time' },
        { value: 'partTime', label: 'Part Time' },
        { value: 'Intern', label: 'Intern' },
        { value: 'Contract', label: 'Contract' },
        { value: 'Temporary', label: 'Temporary' }
    ]

    const salary = [
        { value: 'one', label: '1 Lpa' },
        { value: 'two', label: '2 Lpa' },
        { value: 'three', label: '3 Lpa' },
        { value: 'fore', label: '4 Lpa' },
        { value: 'five', label: '5 Lpa' },
        { value: 'six', label: '6 Lpa' },
        { value: 'seven', label: '7 Lpa' },
        { value: 'eight', label: '8 Lpa' },
        { value: 'nine', label: '9 Lpa' },
        { value: 'ten', label: '10 Lpa' },
        { value: 'eleven', label: '11 Lpa' },
        { value: 'twelve', label: '12 Lpa' },
    ]

    //Options for Job Preferences




    return (
   
        <Grid
            item xs={15} md={8} lg={9}
        >
            <Paper
                sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    // height: 240,
                }}
            >

                <Box>
                    <Select

                        placeholder='Which Industry are you looking for ?'
                        options={indusrty}
                    />
                </Box>


                <br />

                <Box>
                    <MultiSelect
                        isObject={false}
                        placeholder='Which Job Role are you looking for ?'
                        options={jobRole}
                        maxSelectedItems={2}
                    />
                </Box>

                <br />

                <Box>
                    <Select

                        placeholder='Highest Education ?'
                        options={educationLevels}
                    />
                </Box>

                <br />

                <Box>
                    <MultiSelect
                        isObject={false}
                        placeholder='Skills'
                        options={skills}
                    />
                </Box>
                <br />

                <Box>
                    <MultiSelect
                        placeholder='Job Nature'
                        isObject={false}
                        options={jobNature}
                    />
                </Box>

                <br />


                <Box>
                    <MultiSelect
                        isObject={false}
                        placeholder='Job Type'
                        options={jobType}
                    />
                </Box>

                <br />


                <Box>
                    <MultiSelect
                        placeholder='Location'
                        isObject={false}
                        options={location}
                    />
                </Box>

                <br />

                <Box>
                    <Select
                        placeholder='Expected Salary'
                        options={salary}
                    />
                </Box>

                <br />

                <Button variant="contained" href='/SearchResult'>Submit</Button>


            </Paper>

        </Grid>
    )
}

export default PreferenceForm