import './App.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import swal from 'sweetalert';
import ButtonAlert from './ButtonAlert';



function CardsOne({ object }) {
    return (
        <>
            <Card sx={{ maxWidth: 345, flex: "center" }}>
                <CardActionArea sx={{ color: "blue" }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={object.img}
                        alt="1"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {object.text}
                        </Typography>

                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <ButtonAlert BotonAlerta={object.msg} />


                </CardActions>
            </Card >
        </>
    );
}

export default CardsOne;