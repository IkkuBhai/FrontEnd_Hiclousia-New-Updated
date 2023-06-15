import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Navbar from './Navbar'

const useStyles = makeStyles((theme) => ({

    main: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '10rem 1fr 2fr 1fr 10rem',

    },

    jobDescription: {
        width: '100%',
        gridColumn: '3/4',
    }

}))

const TalentPool = () => {

    const classes = useStyles()

    return (
        <>
            <Navbar />
            <div className={classes.main}>
                <div className={classes.jobDescription}>
                    
                </div>
            </div>
        </>

    )
}

export default TalentPool