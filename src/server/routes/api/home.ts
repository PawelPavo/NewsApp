import * as express from 'express'
import * as multer from 'multer'
import * as path from 'path'
import * as multerS3 from 'multer-s3'
import * as aws from 'aws-sdk'
import * as mysql from 'mysql'
import * as crypto from 'crypto'
import config from '../../config'

const router = express.Router();
const s3 = new aws.S3({
    accessKeyId: config.keys.aws_key_id,
    secretAccessKey: config.keys.aws_key
})

// extract db from here ====
const pool = mysql.createPool({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database
});

// pre configure the upload before uploading it

//==== uploads to AWS-S3 =====
const storage = multerS3({
    s3: s3, // you can shot-hand to just use s3
    bucket: 'news-api',
    acl: 'public-read',
    metadata: function (req, file, cb) {
        cb(null, { fieldname: file.fieldname })
    },
    key: function (req, file, cb) {
        cb(null, Date.now().toString() + path.extname(file.originalname))
    },
});

//========= writes the upload file to a .uploads file ========
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });

// makes express upload middleware
const upload = multer({ storage })

router.post('/', upload.single('avatar'), (req: any, res, next) => {
    const id = crypto.randomBytes(16).toString('hex')
    const username = req.body.username;
    //you can insert req.file.location to the DB for a usable image in the src in front end
    const avatar_url = req.file.location;

    pool.query('INSERT INTO users (username, avatar_url, id) VALUE (?)', [[username, avatar_url, id]], (err, results) => {
        if (err) {
            res.status(500).json({ msg: 'Error uploading to db!', err })
        } else {
            res.json({ msg: `uploaded ${req.file.originalname}`, url: req.file.location, insertedId: id });
        }
    })
})

router.get('/users', (req, res) => {
    pool.query('SELECT * FROM users', (err, results) =>{
        if (err) {
            res.status(500).json({msg: 'Unable to get users from DB!', err})
        } else {
            res.json(results)
        }
    })
})

export default router;