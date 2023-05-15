import "./Result.css";

export default function Result(props) {
  return (
    <div className="Result-div">
      <img src="./assets/illustration-thank-you.svg" alt="" />
      <p className="selected">You selected {props.value} out of 5</p>
      <h1 className="thanks">Thank you!</h1>
      <p className="info">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
