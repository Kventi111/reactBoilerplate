import React from "react";
import One from '../questionType/one'
import Two from '../questionType/two'
import Three from '../questionType/three'

function QuestionItem({ type,title,questions }) {
  return (
    <div>
      { type === "one" && <One title={title} questions={questions} /> }
      { type === "two" && <Two title={title} questions={questions} /> }
      { type === "three" && <Three title={title} questions={questions} /> }
    </div>
  );
}

export default QuestionItem;
