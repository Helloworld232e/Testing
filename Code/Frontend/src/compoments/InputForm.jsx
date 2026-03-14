import { useState } from "react";
// import { getPrediction } from "../services/api";

function InputForm() {

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User input:", text);
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter data"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">Predict</button>

    </form>
  );
}

export default InputForm;