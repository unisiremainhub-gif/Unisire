import React, { useEffect, useState } from "react";
import NoteContainer from "./sections/CreateNotePage/NoteContainer/NoteContainer";
import Sidebar from "./sections/CreateNotePage/SideBar/SideBar";
import "./css/CreateNote.css";
import { FaSearch, FaFilter } from "react-icons/fa";

function CreateNote() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );
  const [searchText, setSearchText] = useState("");
  const [dayRange, setDayRange] = useState("all");

  const addNote = (color) => {
    const tempNotes = [...notes];
    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      title: "",
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateNote = (title, text, id) => {
    const tempNotes = [...notes];
    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;
    tempNotes[index].title = title;
    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  const calculateDaysAgo = (time) => {
    const currentTime = Date.now();
    const differenceInTime = currentTime - time;
    return Math.floor(differenceInTime / (1000 * 3600 * 24));
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  const filterNotes = (notes) => {
    return notes
      .filter(
        (note) =>
          note.text.toLowerCase().includes(searchText.toLowerCase()) ||
          note.title.toLowerCase().includes(searchText.toLowerCase())
      )
      .filter((note) => {
        const daysAgo = calculateDaysAgo(note.time);
        if (dayRange === "0-7") return daysAgo <= 7;
        if (dayRange === "7-31") return daysAgo > 7 && daysAgo <= 31;
        if (dayRange === "31+") return daysAgo > 31;
        return true;
      });
  };

  const filteredNotes = filterNotes(notes);

  return (
    <div className="Appic">
      <Sidebar addNote={addNote} />
      <div style={{ flex: 1 }}>
        <div
          className="note-search-container"
          style={{ marginBottom: "10px", display: "flex", gap: "10px" }}
        >
          <div
            className="resources-searchbar"
            style={{ borderRadius: "100px", padding: "7px 20px" }}
          >
            <input
              type="text"
              placeholder="Search Notes..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <span className="search-icon">
              <FaSearch />
            </span>
          </div>
          <select
            value={dayRange}
            onChange={(e) => setDayRange(e.target.value)}
            style={{
              margin: "0px",
              padding: "7px 20px",
              width: "10%",
              borderRadius: "100px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
            }}
          >
            <option value="all">All Time</option>
            <option value="0-7">Last 7 Days</option>
            <option value="7-31">Last 7-31 Days</option>
            <option value="31+">Older than 31 Days</option>
          </select>
        </div>
        <NoteContainer
          notes={filteredNotes}
          deleteNote={deleteNote}
          updateNote={updateNote} // ✅ Properly passed here
        />
      </div>
    </div>
  );
}

export default CreateNote;
