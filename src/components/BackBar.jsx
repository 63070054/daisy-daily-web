import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

export default function BackBar({ title }) {

  const navigate = useNavigate();

  return (
    <div className="back-bar-container">
      <FaArrowLeft onClick={() => navigate(-1)} />
      <p>{ title }</p>
    </div>
  )
}