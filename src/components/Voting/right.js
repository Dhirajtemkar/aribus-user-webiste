import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
      marginLeft: theme.spacing(1),
    },
    root: {
        background: "#fafafa"
      },
  }));

function Right(props) {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const [SnackbarOpen, setSnackbarOpen] = useState(false);

    const handleEmailText = (event) => {
        setEmail(event.target.value)
    }
    const handleTitleText = (event) => {
        setTitle(event.target.value)
    }
    const handleDesText = (event) => {
        setDescription(event.target.value)
    }
    
    const handleSubmit = () => {

        if(email !== "" && title !== "" && Description !== "") {
            // handle login process
            setSnackbarOpen(true);
            let idea = {
                email: email,
                title: title,
                description: Description,
                votes: 0
            }
            props.addToData(idea)
            setEmail("")
            setTitle("")
            setDescription("")
            // console.log(email, password)
        }
    }
    const handleClose = () => {
        setSnackbarOpen(false);
      };
    return (
        <div class="right">
            {/*Suggestion form*/}
            <div className="card">
                <div className="suggestTitle">Suggest an Idea</div>
                <div className="suggestDes">Welcome to our Co-creation tab. We would love to hear your suggestion</div>
                <form className="suggestionForm">
                    <TextField
                        id="outlined-textarea"
                        label="Enter Email"
                        multiline
                        size="small"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        onChange={handleEmailText}
                        className={classes.root}
                        // inputProps={{styles}}
                    />
                    <div className="spaceDiv" />
                    <TextField
                        id="outlined-textarea"
                        label="Enter Title"
                        multiline
                        size="small"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        className={classes.root}
                        onChange={handleTitleText}
                    />
                    <div className="spaceDiv" />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                          }}
                        className={classes.root}
                        onChange={handleDesText}
                    />
                    <div className="spaceDiv" />
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    <Snackbar 
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                      }}
                    open={SnackbarOpen} 
                    onClose={handleClose}
                    autoHideDuration={6000} 
                    message="Your Suggestion is submitted!"
                    />
                </form>
            </div>
        </div>
    )
}

export default Right
