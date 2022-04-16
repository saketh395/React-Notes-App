import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setnotes] = useState([]);

  function addnote(note) {
    setnotes((prevnotes) => {
      return [...prevnotes, note];
    });
  }

  function deletenote(key) {
    setnotes((prevnotes) => {
      return prevnotes.filter((noteitem, index) => {
        return key !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onadd={addnote} />
      {notes.map((noteitem, index) => {
        return (
          <Note
            ondelete={deletenote}
            key={index}
            id={index}
            title={noteitem.title}
            content={noteitem.content}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
