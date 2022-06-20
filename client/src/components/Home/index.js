import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import {Grid, Button, Select, MenuItem, FormControl, InputLabel, TextField, Radio, FormLabel, RadioGroup, FormControlLabel, FormHelperText} from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";



//Dev mode
const serverURL = ""; //enable for dev mode

//Deployment mode instructions
//const serverURL = "http://ov-research-4.uwaterloo.ca:PORT"; //enable for deployed mode; Change PORT to the port number given to you;
//To find your port number: 
//ssh to ov-research-4.uwaterloo.ca and run the following command: 
//env | grep "PORT"
//copy the number only and paste it in the serverURL in place of PORT, e.g.: const serverURL = "http://ov-research-4.uwaterloo.ca:3000";

const fetch = require("node-fetch");

const opacityValue = 0.9;

const theme = createTheme({
  palette: {
    type: 'dark',
    background: {
      default: "#000000"
    },
    primary: {
      main: "#52f1ff",
    },
    secondary: {
      main: "#b552f7",
    },
  },
});

const styles = theme => ({
  root: {
    body: {
      backgroundColor: "#000000",
      opacity: opacityValue,
      overflow: "hidden",
    },
  },
  mainMessage: {
    opacity: opacityValue,
  },

  mainMessageContainer: {
    marginTop: "20vh",
    marginLeft: theme.spacing(20),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(4),
    },
  },
  paper: {
    overflow: "hidden",
  },
  message: {
    opacity: opacityValue,
    maxWidth: 250,
    paddingBottom: theme.spacing(2),
  },

});

const Review = (props) => {
  const [movieName, setMovie] = useState("")
  const [movieNameErrorMessage, setMovieNameErrorMessage] = useState("")

  const [reviewTitleName, setReviewTitle] = useState("")
  const [reviewTitleErrorMessage, setReviewTitleErrorMessage] = useState("")

  const [reviewName, setReview] = useState("")
  const [reviewErrorMessage, setReviewErrorMessage] = useState("")

  const [ratingName, setRating] = useState("")
  const [ratingErrorMessage, setRatingErrorMessage] = useState("")

  const [finalReview, setFinalReview] = useState("")
  let errorExists = false;


  const buttonSubmit = () => {
    setMovieNameErrorMessage("");
    if (movieName === "") {
      setMovieNameErrorMessage("Please select a movie.")
      errorExists = true;
    }
    setReviewTitleErrorMessage("");
    if (reviewTitleName === "") {
      setReviewTitleErrorMessage("Please enter a review title.")
      errorExists = true;
    }

    setReviewErrorMessage("");
    if (reviewName === "") {
      setReviewErrorMessage("Please enter a review.")
      errorExists = true;
    }

    setRatingErrorMessage("");
    if (ratingName === "") {
      setRatingErrorMessage("Please enter a rating.")
      errorExists = true;
    }

    setFinalReview("")
    if (!errorExists) {
      setFinalReview(
        <div>
          <Typography variant="h5" component="h5">
            Movie name: {movieName}
          </Typography>
          <Typography variant="h5" component="h5">
            Review title: {reviewTitleName}
          </Typography>
          <Typography variant="h5" component="h5">
            Review body: {reviewName}
          </Typography>
          <Typography variant="h5" component="h5">
            Rating: {ratingName}
          </Typography>
        </div>
      )
    }
  }

  



  return(
    <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
  >
    <Typography variant="h3" component="h3">
      Review Pixar Movies 
    </Typography>
    <MovieSelection selectHandler = {setMovie} errorMessage = {movieNameErrorMessage}></MovieSelection>
    <ReviewTitle selectHandler = {setReviewTitle} errorMessage = {reviewTitleErrorMessage}></ReviewTitle>
    <ReviewText selectHandler = {setReview} errorMessage = {reviewErrorMessage}></ReviewText>
    <Rating selectHandler = {setRating} errorMessage = {ratingErrorMessage}></Rating>
    <Button variant="contained" color="primary" onClick={buttonSubmit}>
      Submit
    </Button>
    {finalReview}
    </Grid>
  )
}

const MovieSelection = (props) => {

  const editMovie = (event) => {
    props.selectHandler(event.target.value)
  }

  return(

    <FormControl variant="outlined" style = {{width: "50%"}}>
    <InputLabel id="MovieSelectLabel">Select a movie</InputLabel>
    <Select
      labelId="MovieSelectLabel"
      id="MovieSelectLabelID"
      error={props.errorMessage==="" ? false : true}
      onChange={editMovie}
    >
      <MenuItem value={"Cars"}>Cars</MenuItem>
      <MenuItem value={"Luca"}>Luca</MenuItem>
      <MenuItem value={"Soul"}>Soul</MenuItem>
      <MenuItem value={"Coco"}>Coco</MenuItem>
      <MenuItem value={"Toy Story"}>Toy Story</MenuItem>
    </Select>
    <FormHelperText error>{props.errorMessage}</FormHelperText>
  </FormControl>

)
}

const ReviewTitle = (props) => {
  const editTitle = (event) => {
    props.selectHandler(event.target.value)
  }
  return(
    <FormControl style = {{width:"50%"}}>
      <TextField error={props.errorMessage==="" ? false : true} onChange={editTitle} id="ReviewTitleID" label="Enter Review Title" variant="outlined" helperText={props.errorMessage}/>
    </FormControl>
  )

  
}

const ReviewText = (props) => {

  const editReview = (event) => {
    props.selectHandler(event.target.value)
  }
  
  return(
    <FormControl style = {{width:"50%"}}>
      <TextField
        error={props.errorMessage==="" ? false : true} onChange={editReview} helperText={props.errorMessage}
        id="outlined-multiline-static"
        label="Enter Review"
        multiline
        rows={4}
        inputProps={{ maxLength: 200 }}
        variant="outlined"
      
      />  

      
    </FormControl>
  )

}


const Rating = (props) => {
  const editRating = (event) => {
    props.selectHandler(event.target.value)
  }
  return(
    
<FormControl component="fieldset">
      <FormLabel component="legend">Movie Rating</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top" error={props.errorMessage==="" ? false : true} onChange={editRating} >
      
        <FormControlLabel
          value = "1"
          control={<Radio color="primary" />}
          label="1"
          labelPlacement="top"
        />
        <FormControlLabel
          value = "2"
          control={<Radio color="primary" />}
          label="2"
          labelPlacement="top"
        />
       <FormControlLabel
          value = "3"
          control={<Radio color="primary" />}
          label="3"
          labelPlacement="top"
        />

        <FormControlLabel
          value = "4"
          control={<Radio color="primary" />}
          label="4"
          labelPlacement="top"
        />

        <FormControlLabel
          value = "5"
          control={<Radio color="primary" />}
          label="5"
          labelPlacement="top"
        />
        
      </RadioGroup>
      <FormHelperText error>{props.errorMessage}</FormHelperText>
</FormControl>
  )

}





class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 1,
      mode: 0
    }
  };

  componentDidMount() {
    //this.loadUserSettings();
  }


  loadUserSettings() {
    this.callApiLoadUserSettings()
      .then(res => {
        //console.log("loadUserSettings returned: ", res)
        var parsed = JSON.parse(res.express);
        console.log("loadUserSettings parsed: ", parsed[0].mode)
        this.setState({ mode: parsed[0].mode });
      });
  }

  callApiLoadUserSettings = async () => {
    const url = serverURL + "/api/loadUserSettings";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //authorization: `Bearer ${this.state.token}`
      },
      body: JSON.stringify({
        userID: this.state.userID
      })
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log("User settings: ", body);
    return body;
  }

  render() {
    const { classes } = this.props;



    const mainMessage = (
      <Grid
        container
        spacing={0}
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
        style={{ minHeight: '100vh' }}
        className={classes.mainMessageContainer}
      >
        <Grid item>

          <Typography
            variant={"h3"}
            className={classes.mainMessage}
            align="flex-start"
          >
            {this.state.mode === 0 ? (
              <React.Fragment>
                I am legit the goat - Welcome to MSCI245!
              </React.Fragment>
            ) : (
              <React.Fragment>
                Welcome back!
              </React.Fragment>
            )}
          </Typography>

        </Grid>
      </Grid>
    )


    return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />

          <Review></Review>

        </div>
      </MuiThemeProvider>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
