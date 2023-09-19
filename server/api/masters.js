import express from 'express';
import { connection } from '../setupDb.js';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve('../client/public/images'));
    },
    filename: (req, file, cb) => {
        cb(null, 'cover_' + file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1e7,
    
    }
});

const masters = express.Router();

masters.get('/all', async (req, res) => {
    try {
      const selectQuery = `SELECT * FROM master`;
      const [mastersData] = await connection.execute(selectQuery);
      return res.json(mastersData);
    } catch (error) {
      console.error('Error fetching data:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  


masters.post('/', upload.single('selectedPhoto'), async (req, res) => {
    try {
      if (req.body.yourName && req.body.lastName && req.body.specialization && req.body.service && req.body.city) {
        const insertQuery = `INSERT INTO master 
          (yourName, lastName, specialization, service, city, selectedPhoto)
          VALUES (?, ?, ?, ?, ?, ?);`;
        const [insertRes] = await connection.execute(insertQuery, [
          req.body.yourName,
          req.body.lastName,
          req.body.specialization,
          req.body.service,
          req.body.city,
          req.file ? req.file.filename : ''
        ]);
        return res.json({});
      } else {
        return res.status(400).json({ error: 'Validation failed' });
        }
    } catch (error) {
    console.error('Error submitting Post:', error);
    return res.status(500).json({ error: 'Internal server error' });

};
});

 



export default campaigns;