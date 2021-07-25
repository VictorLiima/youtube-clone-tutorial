import nc from 'next-connect';
import upload from '../../utils/upload';

const handler = nc()
    .use(upload.single('file'))
    .post((req, res) => {
        const { title, authorName, authorAvatar, videoIrl } = req.body;
        
    })
    .patch(async (req, res) => {
        throw new Error('deu pau');
    });

export default handler;