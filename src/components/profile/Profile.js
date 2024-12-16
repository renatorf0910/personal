import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';


export default function Profile() {
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ textAlign: "center" }}>
      Renato Rocha Ferreira <img width="20%" style={{ borderRadius: "200px" }} src='http://github.com/renatorf0910.png'></img>
      </Typography>
    </>
  )
}