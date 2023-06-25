import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const SearchedItems = ({ recommendedJobs }) => {
  return (
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        {recommendedJobs.map((job) => (
          <Card key={job.id} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {job.jobRole}
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {job.company}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {job.highestEducation}
              </Typography>
              {/* <Typography variant="body2">{job.details}</Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small">Job Description</Button>
              <Button size="small" style={{ float: 'right' }}>
                Apply
              </Button>
            </CardActions>
          </Card>
        ))}
      </Paper>
    </Grid>
  );
};
export default SearchedItems;             

// import React, { useState } from 'react'
// import Grid from '@mui/material/Grid'
// import Paper from '@mui/material/Paper'
// import Button from '@mui/material/Button'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import CardContent from '@mui/material/CardContent'
// import Typography from '@mui/material/Typography'
// import Description from './Description'

// const SearchedItems = () => {


//     // const [description ,setDescription] = useState(false)
//     return (
//         <Grid item xs={12}>
//             <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>


//                 <Card sx={{ minWidth: 275 }}>
//                     <CardContent>

//                         <Typography variant="h5" component="div">
//                             Software Developer
//                         </Typography>

//                         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                             Word of the Day
//                         </Typography>

//                         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                             adjective
//                         </Typography>
//                         <Typography variant="body2">
//                             well meaning and kindly.
//                             <br />
//                             {'"a benevolent smile"'}
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small" >job description</Button>
//                         <Button size="small" style={{float: 'right'}}>Apply</Button>
//                     </CardActions>
//                     {/* {description && <Description />} */}
//                 </Card>

//                 <br />

//                 <Card sx={{ minWidth: 275 }}>
//                     <CardContent>

//                         <Typography variant="h5" component="div">
//                             Software Developer
//                         </Typography>

//                         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                             Word of the Day
//                         </Typography>

//                         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                             adjective
//                         </Typography>
//                         <Typography variant="body2">
//                             well meaning and kindly.
//                             <br />
//                             {'"a benevolent smile"'}
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">job description</Button>
//                         <Button size="small" style={{float: 'right'}}>Apply</Button>
//                     </CardActions>
//                 </Card>

//                 <br />

//                 <Card sx={{ minWidth: 275 }}>
//                     <CardContent>
//                         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//                             Word of the Day
//                         </Typography>
//                         <Typography variant="h5" component="div">
//                             Software Developer
//                         </Typography>
//                         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                             adjective
//                         </Typography>
//                         <Typography variant="body2">
//                             well meaning and kindly.
                            
//                             <br />
//                             {'"a benevolent smile"'}
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button size="small">job description</Button>
//                         <Button size="small" style={{float: 'right'}}>Apply</Button>
//                     </CardActions>
//                 </Card>


//             </Paper>
//         </Grid>
//     )
// }

// export default SearchedItems
