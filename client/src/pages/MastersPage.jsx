import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

export function MastersPage() {
  const [formData, setFormData] = useState({
    yourName: '',
    lastName: '',
    specialization: '',
    service: '',
    city: '',
    selectedPhoto: null, 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const selectedPhoto = e.target.files[0]; 
    setFormData({ ...formData, selectedPhoto });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('yourName', formData.yourName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('specialization', formData.specialization);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('selectedPhoto', formData.selectedPhoto);

    const response = await axios.post('http://localhost:3001/api/masters', formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(response);

      if (response.ok) {
        console.log('Post submitted successfully');
      } else {
        console.error('Failed to submit Post');
      }
    } catch (error) {
      console.error('Error submitting Post:', error);
   
    }
  };

  return (
    <div className="container">
      <div className="row">
        <p className="col-12 display-6 text-center py-3">Place yourself!</p>
        <form className="col-12 col-sm-8 col-md-6 col-lg-4 m-auto py-2" onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="MastersTitle">Your Name</label>
            <input
              type="text"
              id="YourName"
              name="MastersTitle"
              class="form-control"
              value={formData.yourName}
              onChange={handleInputChange}
            />
          </div>
          <div>
          <div class="form-group">
            <label for="MastersTitle">Last Name</label>
            <input
              type="text"
              id="YourName"
              name="MastersTitle"
              class="form-control"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label for="MastersTitle">Specialization </label>
            <input
              type="text"
              id="YourName"
              name="MastersTitle"
              placeholder="Etc. Mechanic"
              class="form-control"
              value={formData.specialization}
              onChange={handleInputChange}
            />
          </div>
          </div>
          <div class="form-group">
            <label for="MastersTitle">Service </label>
            <input
              type="text"
              id="YourName"
              name="MastersTitle"
              class="form-control"
              value={formData.service}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group">
            <label for="MastersTitle">City </label>
            <input
              type="text"
              id="YourName"
              name="MastersTitle"
              class="form-control"
              value={formData.city}
              onChange={handleInputChange}
            />
          </div>
          <div class="form-group py-3">
            <label for="photoUpload">Upload Photo</label>
            <input
              type="file"
              id="photoUpload"
              name="selectedPhoto"
              accept="image/*"
              onChange={handlePhotoChange}
            />
          </div>

          <button type="submit" className="btn btn-info m-auto text-center ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
