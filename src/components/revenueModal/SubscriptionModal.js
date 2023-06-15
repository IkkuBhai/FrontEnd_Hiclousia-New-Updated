import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import PricingOne from './SuscribeComponents/Compo1';
import PricingTwo from './SuscribeComponents/Compo2';
import PricingZero from './SuscribeComponents/Compo0';
import Hiererchy from './SuscribeComponents/CheckedComponents/Hiererchy';





function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Hiclousia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Gold',
    price: '500',
    description: [
      '20 Portfolios ',
      'for 15 Days'
    ],
    buttonText: 'buy',
    buttonVariant: 'outlined',

  },
  {
    title: 'Silver',

    price: '6500',
    description: [
      '1 Job Post',
      '20 Portfolios',
      'for 1 Month'

    ],
    buttonText: 'Buy',
    buttonVariant: 'contained',
  },
  {
    title: 'Platinum',
    price: '23000',
    description: [
      '10 Portfolios',
      'for 1 Month'
    ],
    buttonText: 'Buy',
    buttonVariant: 'outlined',
  },
];



const first = {

  margin: '15px',
  marginBottom: '15px'

}








const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >


        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h4" color="blue" noWrap sx={{ flexGrow: 1 }}>
            Hiclousia
          </Typography>
          {/* <nav>

          </nav> */}
        </Toolbar>


      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Buy your plan
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" style={{ border: '1px solid lightgrey', borderRadius: '0.5rem', }}>


        <br></br>
        <PricingZero />
        <br></br>
        <PricingOne />
        <br></br>
        <PricingTwo />
        <br></br>
        <Hiererchy />
        <br></br>
        


      </Container>
      <br></br>
      
      <br /><br />
      {/* <CustomizedTables/> */}


      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}


    </ThemeProvider>
  );
}