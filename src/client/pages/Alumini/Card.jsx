import React from 'react';
import { Link } from 'react-router-dom';
import kabi from '../../assets/team/kabi.png'
import { useNavigate } from 'react-router-dom';
const Card = () => {
  const navigate=useNavigate()
  const view=()=>{
    navigate('/aluminidashboard')
  }
  return (
<>
</>
  
  );
};

export default Card;
