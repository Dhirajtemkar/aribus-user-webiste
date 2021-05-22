import React, { Component } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import TourScreen from "./tourMainScreen";
import Header from "./Reproduction/Header";
import Tour from "reactour";

import "./tourstyle.css";

class TourCard extends Component {
  constructor() {
    super();
    this.state = {
      isTourOpen: true,
      isShowingMore: false
    };
  }

  componentDidMount() {
    window.addEventListener("keyup", this.keyHandling);
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.keyHandling);
  }

  disableBody = target => disableBodyScroll(target);
  enableBody = target => enableBodyScroll(target);

  toggleShowMore = () => {
    this.setState(prevState => ({
      isShowingMore: !prevState.isShowingMore
    }));
  };

  closeTour = () => {
    this.setState({ isTourOpen: false });
  };

  openTour = () => {
    this.setState({ isTourOpen: true });
  };

  render() {
    const { isTourOpen, isShowingMore } = this.state;
    const accentColor = "#5cb7b7";
    return (
      <div className="App">
        <Header />
        <TourScreen
          openTour={this.openTour}
          toggleShowMore={this.toggleShowMore}
          isShowingMore={isShowingMore}
        />
        <Tour
          onRequestClose={this.closeTour}
          steps={tourConfig}
          isOpen={isTourOpen}
          maskClassName="mask"
          className="helper"
          rounded={5}
          accentColor={accentColor}
          onAfterOpen={this.disableBody}
          onBeforeClose={this.enableBody}
        />
      </div>
    );
  }
}

const tourConfig = [
  {
    selector: '[data-testid="Search-id"]',
    content: `Search in webpage`
  },
  {
    selector: '[data-testid="Support-id"]',
    content: `Resolve/report issue`
  },
  {
    selector: '[data-testid="Measure-id"]',
    content: `Measure your performance`
  },
  {
    selector: '[data-testid="Involve-id"]',
    content: `Contribute to improve your experience`
  },
  {
    selector: '[data-testid="Feedback-id"]',
    content: `Submit feedback...`
  },
  {
    selector: '[data-testid="assistive-touch-id"]',
    content: `helps to easily navigate through the application`
  }
];

export default TourCard;