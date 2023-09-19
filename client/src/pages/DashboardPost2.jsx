import React, { useState } from 'react';
import Wheel from "../assets/wheel.png"

export function DashboardPost2() {
  const [likes, setLikes] = useState(9); 
  const [liked, setLiked] = useState(false); 

  const handleLikeClick = () => {
    if (!liked) {
      setLikes(likes + 1); 
      setLiked(true);       
    }
  };

  return (
    <div className="feature col text-center p-4 container bg bg-light border-4 border-info">
       <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
            </div>
            <img src={Wheel} className="d-block img-fluid  mx-auto d-block py-1 round" alt="Bootstrap Themes"
                 width="150" height="200" loading="lazy"/>
                <h3 className="fs-1 text-body-emphasis text-center">JON BLUE</h3>
                <p>Wheel booster</p>
            <div class="alert alert-info" role="alert">
                From Vilnius
            </div>
                <div class="alert alert-warning" role="alert">
                    OFFERING CAR WHEEL BOOSTER JOB SERVICE 
            </div>
        <div>
           
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill={liked ? 'red' : 'currentColor'}
          className="bi bi-heart"
          viewBox="0 0 16 16"
          onClick={handleLikeClick}
          style={{ cursor: 'pointer' }}>
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
        <p>{likes} LIKE{likes !== 1 ? 'S' : ''}</p>
      </div>
    </div>




    
  );
}
