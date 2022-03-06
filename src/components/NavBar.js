import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const NavBar = () => {
    return (
        <Box sx={{ flexGrow: 1, width: "100%" }}>
            <AppBar position="static" color="success">
                <Toolbar>
                    <Typography
                        variant="h4"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Spotified
                    </Typography>
                    <Button color="inherit">Team</Button>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default NavBar;
