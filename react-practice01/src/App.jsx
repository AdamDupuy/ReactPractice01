import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Cool Manga Panels
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container mawWidth="sm">
                        <Typography variant = "h2" align = "center" color = "textPrimary" gutterBottom>
                            The Panels
                        </Typography>
                        <Typography variant = "h5" align = "center" color = "textSecondary" paragraph>
                            Hello, this is my current manga panels site.  The following is an explanation of the themes of Power and Responsibility in the Manga titled "Helck." The series examines the relationship between power and responsibility. Helck, as one of the strongest beings in the world, struggles with the weight of his power and the responsibilities that come with it. It explores the moral dilemmas he faces and the choices he must make to protect those he cares about. The story reflects on the notion that power can be both a blessing and a burden, and emphasizes the importance of using it responsibly.
                        </Typography>
                    </Container>
                </div>
            </main>
        </>
    );
}

export default App;