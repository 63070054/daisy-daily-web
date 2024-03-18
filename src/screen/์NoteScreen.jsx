import React, { cloneElement, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RiEmotionLaughLine, RiEmotionLine, RiEmotionNormalLine, RiEmotionSadLine, RiEmotionUnhappyLine } from 'react-icons/ri';

export const emotions = [
  {
    icon: <RiEmotionLaughLine />,
    color: "black",
    backgroundColor: "#D0AB80",
  },
  {
    icon: <RiEmotionLine />,
    color: "black",
    backgroundColor: "#5D735D",
  },
  {
    icon: <RiEmotionNormalLine />,
    color: "black",
    backgroundColor: "#A15453",
  },
  {
    icon: <RiEmotionSadLine />,
    color: "black",
    backgroundColor: "#5E5466",
  },
  {
    icon: <RiEmotionUnhappyLine />,
    color: "black",
    backgroundColor: "#40465D",
  }
];
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import WriteScreen from "./WriteScreen";

export default function NoteScreen({ navigation, route }) {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate()

  // Accessing date from query parameters
  const date = location.state?.date || params.date;
  var options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  var convertDate = date.toLocaleDateString("en-US", options);

  const [currentNotes, setCurrentNotes] = useState([]);
  const [alreadyNote, setAlreadyNote] = useState(false);
  const [showWriteScreen, setShowWriteScreen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const notes = await localStorage.getItem("notes");
        if (notes !== null) {
          const parseNotes = JSON.parse(notes)
          setCurrentNotes(parseNotes);
          const findNote = parseNotes.find(note => new Date(note.date).getTime() === date.getTime())
          if (findNote) {
            setAlreadyNote(true)
            setNoteData({ ...findNote })
          }
        }
      } catch (error) {
        console.error('Error fetching notes from AsyncStorage:', error);
      }
    };

    fetchData();
  }, []);

  const [noteData, setNoteData] = useState(
    {
      note: "",
      imageSelected: null,
      emotion: null,
      toDoList: [
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        },
        {
          value: ""
        },
      ]
    }
  )


  const base64ToFile = (base64String) => {
    // Split the base64 string to get the data and mime type
    const [mime, data] = base64String.split(';base64,');

    // Decode the base64 data
    const decodedData = atob(data);

    // Create a Uint8Array from the decoded data
    const dataArray = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; ++i) {
      dataArray[i] = decodedData.charCodeAt(i);
    }

    // Create a Blob object from the Uint8Array
    const blob = new Blob([dataArray], { type: mime });

    // Create a File object from the Blob
    return new File([blob], new Date(), { type: mime });
  }

  const onValueChange = (key, value) => {
    const copyNoteData = { ...noteData }
    copyNoteData[key] = value
    setNoteData({ ...copyNoteData })
  }

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        onValueChange("imageSelected", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const openFilePicker = () => {
    document.getElementById('fileInput').click();
  };


  const uploadNote = async () => {

    try {

      if (!noteData.emotion) {
        toast.error("Please select your emotion", {
          autoClose: 1500 // Duration in milliseconds
        });
        return undefined;
      }

      let uploadResult = null

      if (!noteData.imageSelected?.startsWith("https") && noteData.imageSelected) {
        // const s3 = new AWS.S3({
        //   accessKeyId: "AKIA5FTZB77QX5WWSSG5",
        //   secretAccessKey: "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",
        //   region: "us-east-1",
        // });

        // const params = {
        //   Bucket: "daisy-daily",
        //   Key: `${Date.now()}.png`, // Example: Use timestamp as part of the key
        //   Body: base64ToFile(noteData.imageSelected),
        //   ContentType: "image/png",
        // };

        // // Upload the image to S3
        // uploadResult = await s3
        //   .upload(params)
        //   .promise();

      }

      console.log("uploadResult", uploadResult)

      const newNote = {
        note: noteData.note,
        imageSelected: uploadResult ? uploadResult.data.link : noteData.imageSelected,
        emotion: noteData.emotion,
        toDoList: noteData.toDoList,
        date: date
      }

      let newNotes = []

      if (alreadyNote) {
        const copyNotes = [...currentNotes]
        const updateIndex = currentNotes.findIndex(note => new Date(note.date).getTime() === date.getTime())
        copyNotes[updateIndex] = newNote
        newNotes = [...copyNotes]
      } else {
        newNotes = [...currentNotes, newNote]
      }
      await localStorage.setItem(
        'notes',
        JSON.stringify(newNotes),
      );

      toast.success(`${alreadyNote ? 'Note successfully update ' : 'Note successfully add'} on ${convertDate}`)

      await navigate("/")

    } catch (e) {
      console.log("e", e)
    }

  }

  console.log("noteData", noteData)

  const navigateToWriteScreen = () => {
    setShowWriteScreen(true)
  }
  
  const onBack = () => {
    setShowWriteScreen(false)
  }

  return (
    <>
      {
        showWriteScreen ? (
          <WriteScreen value={noteData.note} onValueChange={onValueChange} title={convertDate} onBack={onBack} />
        ) : (
            <div className="container">
              <AiOutlineClose onClick={() => navigate(-1)} style={{ color: "gray", fontSize: 20 }} />
              <h2 style={{ textAlign: "center", fontSize: 18 }}>
                {convertDate}
              </h2>
              <div className="yellow-container">
                <p style={{ display: "flex", justifyContent: "center", fontSize: 16 }}>How was your day?</p>
                <div style={{ display: "flex", justifyContent: "center", gap: 16 }}>
                  {emotions.map((item, index) => (
                    <>
                      {cloneElement(item.icon, {
                        style: {
                          color: item.color,
                          backgroundColor: item.backgroundColor,
                          fontSize: 48,
                          borderRadius: "100%",
                          opacity: noteData.emotion === emotions.length - index ? 1 : 0.5
                        },
                        onClick: () => onValueChange("emotion", emotions.length - index) // Move onClick here
                      })}
                    </>
                  ))}
                </div>
              </div>
              <div className="yellow-container">
                <p >Today's note</p>
                <input onFocus={navigateToWriteScreen} value={noteData.note.replace(/<[^>]+>/g, '')} />
              </div>
              <div className="yellow-container">
                <p style={{ fontSize: 16, marginTop: 5, marginBottom: 10, marginLeft: 10 }}>Today's photo</p>
                <AiOutlineClose onClick={() => onValueChange("imageSelected", null)} style={{ color: "gray", fontSize: 16 }} />
                <div style={{ width: "100%", height: "auto" }}>
                  <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleImageSelect}
                    style={{ display: 'none' }}
                  />
                  {noteData.imageSelected ? (
                    <img onClick={openFilePicker} src={noteData.imageSelected} style={{ width: "100%", aspectRatio: "1/1", marginTop: 16, objectFit: "contain" }} />
                  ) : (
                    <button onClick={openFilePicker} style={{ width: "100%", borderRadius: 10, backgroundColor: "#f5f5f5", display: "flex", alignItems: "center", marginTop: 16 }}>
                      <MdOutlineInsertPhoto style={{ color: "#D9D9D9", backgroundColor: "#f5f5f5", fontSize: 60, margin: 10 }} />
                      <p style={{ fontSize: 14, color: "#D9D9D9", marginLeft: 20, marginRight: 20, marginBottom: 15 }}>Select up to photo</p>
                    </button>
                  )}
                </div>
              </div>
              <div className="yellow-container">
                <p style={{ fontSize: 16, marginTop: 5, marginBottom: 10, marginLeft: 10 }}>To do list</p>
                <div style={{ gap: 12, padding: 15, display: "flex", flexDirection: "column" }}>
                  {
                    noteData.toDoList.map((val, index) => (
                      <div key={index} style={{ flexDirection: "row", gap: 8, alignItems: "center", display: "flex" }}>
                        <p>{index + 1}.</p>
                        <input style={{ width: "100%" }} onChange={(event) => {
                          const newText = event.target.value;
                          const copyToDoList = [...noteData.toDoList]
                          copyToDoList[index].value = newText
                          onValueChange("toDoList", copyToDoList)
                        }} value={val.value} />
                      </div>
                    ))
                  }
                </div>
              </div>
              <button onClick={uploadNote} style={{ display: "flex", justifyContent: "center", backgroundColor: "#FFCF12", borderRadius: 10 }}>
                DONE
              </button>
            </div>
        )
      }
    </>
  );
}
