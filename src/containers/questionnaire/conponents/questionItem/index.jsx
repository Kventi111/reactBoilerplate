import React from "react";
import One from '../questionType/one'
import Two from '../questionType/two'

function QuestionItem({ type,questions }) {
  return (
    <div>
      { type === "one" && <One /> }
      { type === "two" && <Two /> }
      { type === "three" && <p>three</p> }
    </div>
  );
}

export default QuestionItem;
