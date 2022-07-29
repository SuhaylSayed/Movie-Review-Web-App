import React, { useState } from 'react';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import { Grid, Button, MenuItem, FormControl, TextField,} from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { Box, AppBar, Toolbar } from '@material-ui/core';
import history from '../Navigation/history';
import Link from '@material-ui/core/Link';


const theme = createTheme({
    palette: {
      type: 'dark',
      background: {
        default: "#00008B"
      },
      primary: {
        main: "#52f1ff",
      },
      secondary: {
        main: "#b552f7",
      },
      
    },
  });

const Search = () => {
return (
<div>
<MuiThemeProvider theme={theme}>
<CssBaseline />

<Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static" color="secondary">
                        <Toolbar>
                            <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('/')}>Home</Button>
                            <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('/reviews')}>Reviews</Button>
                            <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('/myPage')}>My Page</Button>
                            <Button style={{ fontSize: '20px' }} color="inherit" onClick={() => history.push('/Search')}>Search</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
<Typography variant="h3" color="inherit" noWrap align='center' >
Search
</Typography>


<Typography variant="h5" color="inherit" noWrap align='center'>
Search by Movie Title, Actor Name and/or Director Name
</Typography>


<Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <FormControl style = {{width:"50%"}}>
      <TextField  id="movieTitle" label="Movie Title" variant="outlined" />
    </FormControl>

    <FormControl style = {{width:"50%"}}>
      <TextField  id="movieTitle" label="Actor Name" variant="outlined" />
    </FormControl>

    <FormControl style = {{width:"50%"}}>
      <TextField  id="movieTitle" label="Director Name" variant="outlined" />
    </FormControl>
    <Button variant="contained" color="primary" >
      Submit
    </Button>

    </Grid>
 

  



</MuiThemeProvider>
</div>
)
}
export default Search;