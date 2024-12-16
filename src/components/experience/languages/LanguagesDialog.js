import React from "react";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: '25px',
    padding: theme.spacing(2),
    boxShadow: theme.shadows[5],
    transition: 'transform 0.3s ease-out',
    backgroundColor: theme.palette.background.paper,
  },
  '& .MuiDialogTitle-root': {
    fontWeight: 'bold',
    fontSize: '2rem',
    color: theme.palette.primary.main,
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    color: theme.palette.text.primary,
    lineHeight: 2,
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(5),
    justifyContent: 'right',
  },
  '& .MuiButton-root': {
    borderRadius: '8px',
    textTransform: 'none',
    fontWeight: 'bold',
    padding: '15px 10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    }
  },
  '& .MuiIconButton-root': {
    color: theme.palette.grey[1000],
    '&:hover': {
      backgroundColor: theme.palette.grey[300],
    }
  }
}));

export default function LanguagesDialog(props) {
    const { title, description, close, open } = props;
    return (
        <BootstrapDialog
            onClose={close}
            aria-labelledby={`${title} experience`}
            open={open}
        >
            <DialogTitle sx={{ m: 0, p: 2 }} id={`${title} experience`}>
                {title} experience
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={close}
                sx={(theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                })}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers>
                <Typography gutterBottom sx={{ fontSize: '1.5rem', lineHeight: 1.8 }}>
                    {description}
                </Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={close} style={{ fontSize: '1.5rem', lineHeight: 0.1}}>
                    FECHAR
                </Button>
            </DialogActions>
        </BootstrapDialog>
    );
}
