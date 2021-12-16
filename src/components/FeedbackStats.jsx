import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';



function FeedbackStats() {

    const { feedback } = useContext(FeedbackContext);

    // Calculate Rating Average
    let average = feedback.reduce((acc, cur) => {
        return (acc + cur.rating) 
    }, 0) / feedback.length
    
    // Make sure avg stays at one decimal place, and removes any trailing 0s
    average = average.toFixed(1).replace(/[.,]0$/, '');

  return <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
  </div>;
}


export default FeedbackStats;
