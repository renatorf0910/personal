import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LanguagesDialog from './languages/LanguagesDialog';
import * as language from "./languages/dict_infos.json"

export default function Experience() {
  const [expanded, setExpanded] = useState({ open: false, title: "", description: "" });

  const handleClickOpen = (key, value) => {
    setExpanded({ open: true, title: key, description: value });
  };

  const handleClose = () => {
    setExpanded({ open: false, title: "", description: "" });
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {Object.entries(language).map(([key, value]) => {
        if (key !== 'default') {
          return (
            <div style={{ margin: "5px" }} key={key}>
              <Button
                variant="outlined"
                onClick={() => handleClickOpen(key, value)}
                sx={{
                  color: 'grey',
                  borderColor: '#e792f1',
                  '&:hover': {
                    backgroundColor: 'grey',
                    color: 'white'
                  }
                }}
              >
                {key}
              </Button>
            </div>
          );
        }
      })}
      <LanguagesDialog open={expanded?.open} title={expanded?.title} description={expanded?.description} close={handleClose} />
    </div>
  );
}
