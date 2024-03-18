import React, { useCallback, useEffect, useState } from "react";
import { Calendar } from "@natscale/react-calendar";
import "@natscale/react-calendar/dist/main.css";
import { useNavigate } from "react-router-dom"

export default function DDCalendar({navigation, currentNotes}) {
  const [value, setValue] = useState(new Date());
  const navigate = useNavigate();

  const onChange = useCallback(
    (val) => {
      navigate("/note", {
        state: {
          date: val
        }
      })
    },
  );
  const isHighlight = useCallback((date) => {
    const alreadyNote = currentNotes.some(note => new Date(note.date).getTime() === date.getTime())
    return alreadyNote;

  }, [currentNotes]);

  return (
    <div>
      <Calendar isHighlight={isHighlight} value={value} onChange={onChange} />
    </div>
  );
}
