import React, { useState } from "react";

function Note(props) {
  function deletenotes(event) {
    props.ondelete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={deletenotes}>DELETE</button>
    </div>
  );
}

export default Note;
