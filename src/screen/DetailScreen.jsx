import { useSearchParams } from "react-router-dom";
import DetailScreenBg from "../assets/DetailScreenBackground.jpg"
import { knowledgsData } from './../data/knowledge';
import { useParams } from 'react-router-dom';
import BackBar from "../components/BackBar";
function DetailScreen() {
  const { id } = useParams();

  const findData = knowledgsData.find(data => data.id === id)

  const { title, imageUrl, description, content } = findData

  return (
    <>
      <BackBar title={title} />
      <div
        style={{
          width: "100%",
          height: "auto",
          alignSelf: "center",
          marginTop: -1,
          backgroundImage: `url(${DetailScreenBg})`,
          backgroundSize: "contain",
          padding: 16
        }}
      >
        {imageUrl && (
          <img
            src={imageUrl}
            alt={title}
            style={{
              width: "100%",
              height: "auto",
              alignSelf: "center",
            }}
          />
        )}

        <h2
          style={{
            fontFamily: "ThaiText",
            fontWeight: "bold",
            color: "darkblue",
          }}
        >
          {title}
        </h2>
        <h3
          style={{
            fontFamily: "ThaiText",
            fontWeight: "bold",
            color: "darkblue",
          }}
        >
          {description}
        </h3>
        <p
          style={{
            fontFamily: "ThaiText",
            fontSize: 18,
            color: "#fff",
          }}
        >
          {content}
        </p>
      </div>
    </>
  );
}

export default DetailScreen;
