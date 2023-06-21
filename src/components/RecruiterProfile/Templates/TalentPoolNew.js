import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function TalentPoolNew() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>

                    <Typography variant="h6" color="inherit" noWrap>
                        Hiclousia
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>

                <Container sx={{ py: 8 }} maxWidth="md">
                    <Card maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="h2">
                                JD
                            </Typography>
                            <Typography>

                                <ListItemAvatar sx={{ marginTop: '-9px' }}>
                                    <Avatar alt="Cindy Baker" sx={{ fontSize: 80, cursor: 'pointer', margin: 'auto' }}></Avatar>
                                </ListItemAvatar>

                                <CardActions>
                                        <Button size="small" style={{ alignItems: 'center' }}>active</Button>

                                    </CardActions>

                            </Typography>
                        </CardContent>
                    </Card>

                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" style={{ textAlign: 'center' }} component="h2">
                                            Candidate
                                        </Typography>
                                        <Typography>

                                            <ListItemAvatar sx={{ marginTop: '-9px' }}>
                                                <Avatar alt="Cindy Baker" sx={{ fontSize: 80, cursor: 'pointer', margin: 'auto' }}></Avatar>
                                            </ListItemAvatar>

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" style={{ alignItems: 'center' }}>select</Button>

                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>

        </ThemeProvider>
    );
}