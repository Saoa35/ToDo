import { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState("");

  return (
    <form>
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
