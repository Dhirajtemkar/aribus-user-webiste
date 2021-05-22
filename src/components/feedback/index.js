import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import ReactStars from "react-rating-stars-component";
import "./styles.css";

function Feedback() {
    const [firstRate, setFirstRate]= useState(0);
    const [SecondRate, setSecondRate]= useState(0);
    const [ThirdRate, setThirdRate]= useState(0);
    const [FourthRate, setFourthRate]= useState(0);
    const handleSubmit = () => {
        setFirstRate(0)
        setSecondRate(0)
        setThirdRate(0)
        setFourthRate(0)
        alert("Your feedback is recorded!")
    }
    console.log(firstRate)
    return(
        <div className="main1">
            <div className="titleFeedback">Feedback Form</div>
            <div className="feedbackForm">
                <div className="card1">
                    <div className="question">How Did the Co-creation section work?</div>
                    <div className="ratings">
                        <ReactStars
                        count={5}
                        onChange={(e) => {setFirstRate(e)}}
                        size={60}
                        isHalf={true}
                        activeColor="#ffd700"
                        />
                    </div>
                </div>

                <div className="card1">
                    <div className="question">How did Search functionality work?</div>
                    <div className="ratings">
                        <ReactStars
                        count={5}
                        onChange={(e) => {setSecondRate(e)}}
                        size={60}
                        isHalf={true}
                        activeColor="#ffd700"
                        />
                    </div>
                </div>

                <div className="card1">
                    <div className="question">Was the chatbot helpful?</div>
                    <div className="ratings">
                        <ReactStars
                        count={5}
                        onChange={(e) => {setThirdRate(e)}}
                        size={60}
                        isHalf={true}
                        activeColor="#ffd700"
                        />
                    </div>
                </div>

                <div className="card1">
                    <div className="question">Was this project helpful?</div>
                    <div className="ratings">
                        <ReactStars
                        count={5}
                        onChange={(e) => {setFourthRate(e)}}
                        size={60}
                        isHalf={true}
                        activeColor="#ffd700"
                        />
                    </div>
                </div>
                <div className="buttonFeedback">
                    <Button
                        variant="contained"
                        color="primary"
                        // className={classes.button}
                        // endIcon={<SearchRoundedIcon />}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Feedback;