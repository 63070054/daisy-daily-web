import { Link } from "react-router-dom";
import DDCalendar from "../components/DDCalendar";
import { useEffect, useState } from "react";
import { knowledgsData } from './../data/knowledge.jsx';
import DetailScreen from "./DetailScreen.jsx";


export default function MonthScreen({ navigation }) {
  const [currentNotes, setCurrentNotes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notes = await localStorage.getItem("notes");
        if (notes !== null) {
          setCurrentNotes(JSON.parse(notes));
        }
      } catch (error) {
        console.error('Error fetching notes from AsyncStorage:', error);
      }
    };

    fetchData();

  }, []);

  const [activeScreen, setActiveScreen] = useState(0);

  const rendeActiveScreen = () => {
    switch (activeScreen) { 
      case 0:
        return (
          <>
            <DDCalendar navigation={navigation} currentNotes={currentNotes} />
            <div className="card-container">
              {knowledgsData.map((item, index) => (
                <div key={item.id} style={{ height: "100%" }}>
                  <Link to={`/detail/${item.id}`} className="link-card">
                    <img
                      className="suggest-image"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: 20,
                        left: 10,
                      }}
                    >
                      <div className="flex flex-col">
                        <p className="card-text">{index + 1}</p>
                        <p className="card-text">{item.title}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        )
      case 1:
        return (
          <DetailScreen />
        )
     }
  }


  return (
    <>
      {rendeActiveScreen()}
    </>
  );
}
