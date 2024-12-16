import React from "react";
import Typography from '@mui/material/Typography';
import { DialogContent } from "@mui/material";

export default function Copyright() {
    return (
        <DialogContent dividers style={{marginTop: "15px"}}>
            <Typography
                variant="body2"
                align="center"
                sx={{
                    color: 'text.secondary',
                }}
            >
                <Typography>
                    {`Copyright © Renato Rocha Ferreira ${new Date().getFullYear()}`}
                </Typography>{' '}
            </Typography>
        </DialogContent>
    );
}