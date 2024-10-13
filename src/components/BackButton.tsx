import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BackButtonProps {
  text?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ text = 'Back' }) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default BackButton;
