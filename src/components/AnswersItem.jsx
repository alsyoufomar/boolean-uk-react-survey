// Components don't need to be separeted into individual files
// Here we have a smaller component that helps compose the AnswersItem below

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it"
};

function ItemsList ({ list }) {
  return (
    <ul>
      { list.map((item) => (
        <li>{ answersSet[item] }</li>
      )) }
    </ul>
  );
}

// This is the main component being exported from this file
export default function AnswersItem (props) {
  return (
    <li>
      <article className="answer">
        <h3>{ props.formData.username || "Anon" } said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{ props.formData.colour }</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          <ItemsList list={ props.formData.timeSpent } />
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{ props.formData.review }</span>
        </p>
      </article>
    </li>
  );
}
