import { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      // ...
      alert.show("Note has been created", "success");
      setValue("");
    } else {
      alert.show("Enter note");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Enter your note . . ."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
