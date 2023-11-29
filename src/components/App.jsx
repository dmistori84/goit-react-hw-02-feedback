import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

    changeState = (value) => { 
        this.setState(prevState => ({
            [value]: prevState[value] + 1,
        }))
    }

    countTotalFeedback = () => {   
      return (this.state.good + this.state.neutral + this.state.bad)
    }
    
    countPositiveFeedbackPercentage = () => {
        return Math.round(this.state.good/this.countTotalFeedback()*100)
    }
  
  render() {
    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.changeState}
          /> 
        </Section>
        <Section title={"Statistics"}>
          { this.countTotalFeedback() ?
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> :
            <Notification message="There is no feedback" />
          }         
        </Section>    
      </div>        
    )
  }
}
export default App;