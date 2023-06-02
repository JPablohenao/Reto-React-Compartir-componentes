import './App.css';
import * as React from 'react';
import { Button } from '@mui/material';
import swal from 'sweetalert';




function ButtonAlert({ BotonAlerta }) {




    return (


        <Button size="small" color="success" onClick={() => swal(BotonAlerta)}> button </Button>

    )
}

export default ButtonAlert;