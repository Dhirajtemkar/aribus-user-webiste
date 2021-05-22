import React from 'react';
import { AssistiveTouch } from "./temp";
import SearchIcon from '@material-ui/icons/Search';
import FeedbackIcon from '@material-ui/icons/Feedback';
import ExploreIcon from '@material-ui/icons/Explore';
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake, faChartLine, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const getMenuItems = () => {
  const toChatbot = () => {
    window.location.href = "http://127.0.0.1:5000/";
  }
  return [{
    icon: <div><SearchIcon style={{fill: "white", fontSize: 40}}/></div>,
    label: "Search"
  },{
    icon: <div onClick={() => toChatbot()}><HeadsetMicIcon style={{fill: "white", fontSize: 35}}/></div>,
    label: "Support"
  },{
    icon: <div><FontAwesomeIcon icon={faChartLine} style={{color: "white", fontSize: 30}}/></div>,
    label: "Measure"
  },{
    icon: <Link className={`link`} to={{ pathname: "/voting", state: {  }, query: {  } }}><div><FontAwesomeIcon icon={faHandshake} style={{color: "white", fontSize: 30}}/></div></Link>,
    label: "Involve"
  },{
    icon: <div><ExploreIcon style={{fill: "white", fontSize: 35}}/></div>,
    label: "Tour"
  },{
    icon: <Link className={`link`} to={{ pathname: "/feedback", state: {  }, query: {  } }}><div><FeedbackIcon style={{fill: "white", fontSize: 30}}/></div></Link>,
    label: "Feedback"
  }];
  }

const AssistiveTouchIcon = () => {
  
  const showSideBar = () => {
    return (<assistiveMenuBar/>);
  }
return (
    <AssistiveTouch data-test-id={"assistive-touch-id"} size="L" behaviour="freeflow" initialPos={{ left: 0, top: 200 }} menuItems={getMenuItems()}/>
  );

}

export default AssistiveTouchIcon;