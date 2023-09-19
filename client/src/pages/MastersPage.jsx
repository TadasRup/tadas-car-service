import React, { useState, useEffect } from 'react';
import axios from 'axios';

export function MastersPage() {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:3001/api/masters');
        if (response.status === 200) {
          setMasters(response.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {masters.map((master) => (
          <div className="col-md-4" key={master.id}>
            <div className="card">
              <img src={`http://localhost:3001/${master.selectedPhoto}`} alt={master.yourName} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{master.yourName} {master.lastName}</h5>
                <p className="card-text">Specialization: {master.specialization}</p>
                <p className="card-text">Service: {master.service}</p>
                <p className="card-text">City: {master.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
