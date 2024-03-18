import { FaSpinner } from "react-icons/fa6";
import LoadingSpinner from "../assets/loading.gif"

export default function LoadingScreen() {
  return (
    <div style={{
      zIndex: 100, opacity: 0.8, justifyContent: "center", alignItems: "center", backgroundColor: "black", flex: 1, position: "absolute", width: '100%', height: '100%'
    }}>
      <img src={LoadingSpinner} style={{width: "100%", height: "100%"}} />
    </div>
  );
}