import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

import MultiSelect from "multiselect-react-dropdown"
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { educationLevels, experiences, jobRoles, sectors, location, experience, primarySkills, salary } from '../../../constraints/arrays'
import SearchedItems from './SearchedItems'
import Typography from '@mui/material/Typography'


import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';



const PreferenceForm = () => {




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


                


                <FormControl sx={{ m: 3, width: 600 }}>
                    <InputLabel id="demo-multiple-name-label">Skills </InputLabel>
                    <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                    
                        multiple
                        input={<OutlinedInput label="Skills" />}

                    >
                        {primarySkills.map((primarySkill, i) => (
                            <MenuItem
                                key={i}
                                value={primarySkill}
                            >
                                {primarySkill}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>



                <Button variant="contained" href='/SearchResult'>Submit</Button>


            </Paper>

        </Grid>
    )
}

export default PreferenceForm