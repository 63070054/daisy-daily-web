import { useEffect, useState } from "react";
import MoodBar from "../components/MoodBar";
import { cloneElement } from "react";
import { emotions } from './์NoteScreen';

export default function StatScreen() {
    const [currentNotes, setCurrentNotes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const notes = await localStorage.getItem("notes");
                if (notes !== null) {
                    const parseNotes = JSON.parse(notes);
                    setCurrentNotes([...parseNotes]);
                }
            } catch (error) {
                console.error('Error fetching notes from AsyncStorage:', error);
            }
        };

        fetchData();
    }, []);

    const getDayDiff = (date, targetDate) => {
        return (date - targetDate) / (1000 * 60 * 60 * 24);
    };

    const today = new Date();

    const filterMood = currentNotes.filter((note) => {
        const noteDate = new Date(note.date);
        const differenceInDays = getDayDiff(today, noteDate);

        return differenceInDays <= 7 && differenceInDays >= 0;
    });

    const moodData = [5, 4, 3, 2, 1].map((emotion) => {
        return {
            percent:
                ((filterMood.filter((note) => note.emotion === emotion).length /
                    filterMood.length) * 100) || 0,
        };
    });

    const pastDates = [];

    // Loop backward for 7 days
    for (let i = 7; i >= 0; i--) {
        // Get the date i days ago
        const pastDate = new Date(today);
        pastDate.setDate(today.getDate() - i);
        pastDates.push(pastDate);
    }

    const isSameDay = (date1, date2) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    return (
        <>
            <div className="yellow-container" style={{gap: 16}}>
                <p style={{ textAlign: "center", fontWeight: "bold" }}>Your mood past 7 days</p>
                <MoodBar moodData={moodData} emotions={emotions} />
            </div>
            <div className="yellow-container">
                <p style={{ textAlign: "center", fontWeight: "bold" }}>Your mood past 7 days</p>
                {pastDates.map((date, index) => {
                    var options = {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                    };
                    var convertDate = date.toLocaleDateString("en-US", options);
                    const getMood = currentNotes.find((note) =>
                        isSameDay(new Date(note.date), date)
                    );
                    return (
                        <div key={index} style={{display: "flex", gap: 8}}>
                            <p style={{ width: "60%", fontSize: 14 }}>{convertDate}</p>
                            {emotions?.[emotions.length - getMood?.emotion]?.icon && (
                                <>
                                    {cloneElement(
                                        emotions?.[emotions.length - getMood?.emotion]?.icon,
                                        {
                                            style: {
                                                color:
                                                    emotions?.[emotions.length - getMood?.emotion]
                                                        ?.color,
                                                backgroundColor:
                                                    emotions?.[emotions.length - getMood?.emotion]
                                                        ?.backgroundColor,
                                                fontSize: 36,
                                                borderRadius: "100%",
                                            },
                                        }
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
