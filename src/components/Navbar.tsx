import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


export const Navbar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h5" component="p">
                        React Mortgage Calculator
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
