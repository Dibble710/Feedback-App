import { FaTimes, FaEdit } from "react-icons/fa";

import PropTypes from "prop-types";

import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

import Card from "./shared/Card";

function FeedbackItem({ item  }) {

  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="#ff6a95" size='18' />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="#6a59d1" size='18' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
