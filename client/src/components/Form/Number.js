import React from "react";

export const Number = props =>
  <div className="form-group">
    <label>Number of Records to Retrieve</label>
    <select className="form-control" {...props}>
        <option>1</option>
        <option>5</option>
        <option>10</option>
    </select>
  </div>;
