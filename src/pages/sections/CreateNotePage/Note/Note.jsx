// import React from "react";
// import deleteIcon from "../../assets/delete.svg";
// import "./Note.css";

// let timer = 500,
//   timeout;

// function Note(props) {
//   const formatDate = (value) => {
//     if (!value) return "";

//     const date = new Date(value);
//     const monthNames = [
//       "Jan",
//       "Feb",
//       "March",
//       "April",
//       "May",
//       "Jun",
//       "Jul",
//       "Aug",
//       "Sept",
//       "Oct",
//       "Nov",
//       "Dec",
//     ];

//     let hrs = date.getHours();
//     let amPm = hrs >= 12 ? "PM" : "AM";
//     hrs = hrs ? hrs : "12";
//     hrs = hrs > 12 ? 24 - hrs : hrs;

//     let min = date.getMinutes();
//     min = min < 10 ? "0" + min : min;

//     let day = date.getDate();
//     const month = monthNames[date.getMonth()];

//     return `${hrs}:${min} ${amPm} ${day} ${month}`;
//   };

//   const debounce = (func) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(func, timer);
//   };

//   const updateNote = (title, text, id) => {
//     debounce(() => props.updateNote(title, text, id));
//   };

//   return (
//     <div className="note" style={{ backgroundColor: props.note.color }}>
//       <input
//         type="text"
//         className="note_title"
//         defaultValue={props.note.title}
//         onChange={(event) =>
//           updateNote(event.target.value, props.note.text, props.note.id)
//         }
//         placeholder="Title"
//       />
//       <textarea
//         className="note_text"
//         defaultValue={props.note.text}
//         onChange={(event) =>
//           updateNote(props.note.title, event.target.value, props.note.id)
//         }
//       />
//       <div className="note_footer">
//         <p>{formatDate(props.note.time)}</p>
//         <img
//           src={deleteIcon}
//           alt="DELETE"
//           onClick={() => props.deleteNote(props.note.id)}
//         />
//       </div>
//     </div>
//   );
// }

// export default Note;

import React from "react";
import deleteIcon from "../../assets/delete.svg";
import "./Note.css";

let timer = 500,
  timeout;

function Note(props) {
  const formatDate = (value) => {
    if (!value) return "";

    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    let hrs = date.getHours();
    let amPm = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12;
    hrs = hrs || 12; // Convert 0 to 12 for 12-hour format

    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;

    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hrs}:${min} ${amPm} ${day} ${month}`;
  };

  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateNote = (title, text, id) => {
    debounce(() => props.updateNote(title, text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <input
        type="text"
        className="note_title"
        defaultValue={props.note.title}
        onChange={(event) =>
          updateNote(event.target.value, props.note.text, props.note.id)
        }
        placeholder="Title"
      />
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) =>
          updateNote(props.note.title, event.target.value, props.note.id)
        }
        placeholder="Take a note..."
      />
      <div className="note_footer">
        <p>{formatDate(props.note.time)}</p>
        <img
          src={deleteIcon}
          alt="DELETE"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
}

export default Note;
