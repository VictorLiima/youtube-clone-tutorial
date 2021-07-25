import React from 'react';
import { Box, Grid } from '@material-ui/core';

import Layout from '../components/Layout/Index'
import VideoCard from '../components/VideoCard'

function Home({ data }) {
  return (
    <Layout title="YouTube">
        <Box p={2}>
            <Grid container spacing={4}>
                {data.map((item) => (
                    <Grid key={item._id} item xl={3} lg={3} md={4} sm={6} xs={12}>
                        <VideoCard item={item}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    </Layout>
  );
}

export async function getStaticProps(){
    const data = [
        {
            id: 1,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER 001',
            authorId: 1,
            authorName: 'Lucas Nhimi',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next01.png',
            videoUrl: 'url',
            updatedAt: new Date()
        },
        {
            id: 2,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER 002',
            authorId: 1,
            authorName: 'Lucas Nhimi',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next02.png',
            videoUrl: 'url',
            updatedAt: new Date()
        },
        {
            id: 3,
            title: 'NEXT.JS: O FRAMEWORK QUE VOCÊ DEVERIA CONHECER 003',
            authorId: 1,
            authorName: 'Lucas Nhimi',
            authorAvatar: 'avatarUrl',
            views: 10,
            thumb: '/thumbs/next03.png',
            videoUrl: 'url',
            updatedAt: new Date()
        },
    ]
    return{
        props: {
            data: JSON.parse(JSON.stringify(data))
        }
    }
}

export default Home;
