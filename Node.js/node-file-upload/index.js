const express = require('express');
const multer = require('multer');

const app = express();

// Define Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // File name
    }
});

// Define Multer file filter configuration
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error('Only .jpg, .jpeg, and .png file types are allowed'), false);
    }
};

// Define Multer upload configuration with restrictions
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB file size limit
    },
    fileFilter: fileFilter
});

app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});

// Define route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

app.get('/file', (req, res) => {
    res.send(`
    <html>
        <head></head>
        <body>
            <form method="post" action="/upload/ui" enctype="multipart/form-data">
                <h1>Upload a file</h1>
                <input type="file" name="file" accept="image/*" />
                <input type="submit" value="Upload" />
            </form>
        </body>
    </html>
    `);
});

app.post('/upload/ui', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully');
});

app.listen(3000, () => {
    console.log(`Server started at 3000`)
});