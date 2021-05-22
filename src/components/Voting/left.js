import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { makeStyles } from '@material-ui/core/styles';



const IndividualIdeas = (props) => {
    
    let[counter, setCounter] = useState(0);
    let[isClicked, setIsClicked] = useState(false);
    
    useEffect(() => {
        setCounter(props.idea.votes)
    }, [props.idea])

    const incrementCounter = () => {
        if(isClicked == false){
            setIsClicked(true)
            setCounter(counter+1)
        }
    }

    return (
        <div className="listMain">
            <div className="voting">
                <Button variant={isClicked ? "contained": "outlined"} color="primary" className="votingBtn" onClick={() => incrementCounter()}>
                    <div className="votingBtnInside">
                        <span><FavoriteIcon /></span>
                        <span className="btnTag">{counter}</span>
                    </div>
                </Button>
            </div>
            <div className="info">
                <div className="title">{props.idea.title}</div>
                <div className="description">{props.idea.description}</div>
            </div>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(0),
      marginLeft: theme.spacing(1),
    },
  }));
function Left(props) {
    const [ideaData, setIdeaData] = useState([]);
    const [searched, setSearched] = useState("");
    const classes = useStyles();
    useEffect(() => {
        let data = props.data;
        data = data.sort((a, b) => b.votes - a.votes);
        if(searched){} else {
            setIdeaData(data);
        }
    }, [props.data, searched, props.submitted])

    const handleSearch = (event) => {
        setSearched(event.target.value)
        if(searched === ""){
            setIdeaData(props.data)
        }
    }

    function findIssueInfo(ideas, searchString){
        return ideas.toLowerCase().includes(searchString.toLowerCase());
    }
    const handleSearchBtn = () => {
        let data = props.data;
        data = data.sort((a, b) => b.votes - a.votes);
        if(searched === null || searched === "") {
            setIdeaData(data)
        } else {
            let searchResult = data.filter(i => findIssueInfo(i.title, searched));
            setIdeaData(searchResult);
            // setPageSelected(1);
        }
    }

    return (
        <div class="left">
            {/*search bar and filters*/}
            <div className="searchDiv">
                <TextField
                    id="outlined-textarea"
                    label="Search Ideas"
                    placeholder="Idea"
                    multiline
                    size="small"
                    variant="outlined"
                    onChange={handleSearch}
                    // className=""
                />
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<SearchRoundedIcon />}
                    onClick={handleSearchBtn}
                >
                    Search
                </Button>
            </div>
            {/*idea list*/}
            <div>
            
            {
                ideaData.map((e) => {
                    return (
                        <IndividualIdeas idea={e}/>
                    )
                })
            }
            
            </div>
        </div>
    )
}

export default Left
