import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Team = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia component="img" height="140" image="" alt="samyu" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Samyuktha Patnaik
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    ></Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default Team;
