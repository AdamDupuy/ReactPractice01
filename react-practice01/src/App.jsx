import React from 'react';
import ReactDOM from "react-dom";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

let firstColor = '#E8AA42';
let primaryTxtColor = '#E57C23';
let secondaryTxtColor = '#F8F1F1';
let fourthColor = '#025464';

const useStyles = makeStyles((theme) => ({
 container: {
    backgroundColor: fourthColor,
    padding: theme.spacing(8,0,6)
 },
 standardButton: {
    color: fourthColor, 
    backgroundColor : firstColor
 }
})); 

const App = () => {
    const classes = useStyles();
    return (
        <div
        style = {{
            backgroundColor: fourthColor
        }}>            
            <CssBaseline />
            <AppBar position="relative" style ={{color: fourthColor, backgroundColor : firstColor}}>
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Cool Manga Panels
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container maxWidth="sm">
                        <Typography variant = "h2" align = "center" style = {{color: primaryTxtColor}} gutterBottom>
                            The Panels
                        </Typography>
                        <Typography variant = "h5" align = "center" style = {{color: secondaryTxtColor}} paragraph>
                            Hello, this is my current manga panels site.  The following is an explanation of the themes of Power and Responsibility in the Manga titled "Helck." The series examines the relationship between power and responsibility. Helck, as one of the strongest beings in the world, struggles with the weight of his power and the responsibilities that come with it. It explores the moral dilemmas he faces and the choices he must make to protect those he cares about. The story reflects on the notion that power can be both a blessing and a burden, and emphasizes the importance of using it responsibly.
                        </Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" className={classes.standardButton}>
                                        See my panels
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" className={classes.standardButton}>
                                        Add a submission
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                </div>
                <Container maxWidth="sm" align="center">
                    <Typography variant="h4" align = "center" style = {{color: primaryTxtColor}} gutterBottom>Please rate this site from one to five.</Typography>
                    <ButtonGroup variant="contained" aria-label="contained primary button group">
                        <Button className={classes.standardButton}>1</Button>
                        <Button className={classes.standardButton}>2</Button>
                        <Button className={classes.standardButton}>3</Button>
                        <Button className={classes.standardButton}>4</Button>
                        <Button className={classes.standardButton}>5</Button>
                    </ButtonGroup>
                </Container>
            </main>    
        </div>
    );
}

export default App;