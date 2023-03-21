import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Form({ getUserResponse }) {
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let handleOnSubmit = (event) => {
    event.preventDefault();
    getUserResponse({ Sender: "You", content: response });
    setResponse("");
    setIsLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: response }),
    })
      .then((res) => res.json())
      .then((data) => {
        getUserResponse(data);
        setIsLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleOnSubmit}
      className="input-group mb-3 "
      style={{ margin: "auto", width: "80%", paddingTop: "30px" }}
    >
      <input
        type="text"
        className="form-control"
        value={response}
        onChange={(e) => setResponse(e.target.value)}
      />
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        Send
      </button>
    </form>
  );
}

export default Form;
