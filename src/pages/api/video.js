import nc from 'next-connect';
import upload from '../../utils/upload';
import connectToDatabase from '../../utils/mongodb'
import { ObjectId } from 'bson';

const handler = nc()
    .use(upload.single('file'))
    .post(async (req, res) => {
        const { title, authorId, authorName, authorAvatar, videoUrl } = req.body;
        const { database } = await connectToDatabase();
        const collection = database.collection('videos');

        await collection.insertOne({
            title,
            authorId: ObjectId(authorId),
            authorName,
            authorAvatar,
            views: 0,
            thumb: req.file.location,
            videoUrl,
            updatedAt: new Date(),
        });

        return res.status(200).json({message : "Vídeo inserido com sucesso"});
    })
    .patch(async (req, res) => {
        throw new Error('deu pau');
    });

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;