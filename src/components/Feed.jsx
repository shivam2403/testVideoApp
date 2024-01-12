import {useState,useEffect} from 'react'
import { Box, Stack,Typography } from '@mui/material'
import {Navbar, Sidebar,Videos} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import LoadMore from './LoadMore'
import { firebaseAuth } from '../utils/firebase-config'
import { onAuthStateChanged } from 'firebase/auth'

const Feed = () => {
    const [selectedCategory,setSelectedCategory]=useState('New');
    const [videos,setVideos]=useState([])
    const [user,setUser]=useState(false);

    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (currentUser) setUser(true);
        else setUser(false);
    });

    useEffect(()=>{
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>setVideos(data.items))
    },[selectedCategory])

  return (
    <>
    <Navbar page="home"/>
    <Stack sx={{ flexDirection: { sx:"column", md:"row"}}}>
        <Box sx={{ height:{sx:'auto', md:'92vh'},borderRight: '1px solid #3d3d3d', px:{sx:0, md:2}}}>
            {/* <Sidebar setVideos={setVideos} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/> */}
            <Typography className='copyright' variant='body2' sx={{mt:1.5, color:'#fff'}}>
                <h2 style={{color:'#F31503'}}>UTube We</h2>
            </Typography>
        </Box>

        <Box p={2} sx={{overflowY: 'auto', height:'90vh', flex:2}}>
            <Typography variant='h4' fontWeight='bold' mb={2} sx={{
                color:'white'
            }}>
                {selectedCategory} <span style={{color:'#F31503'}}>videos</span>
            </Typography>

            <Videos videos={videos}/>
            <LoadMore selectedCategory={selectedCategory}/>
        </Box>
    </Stack>
                </>
  )
}

export default Feed
