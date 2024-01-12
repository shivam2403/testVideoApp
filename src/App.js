import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Box } from '@mui/material'
import {Navbar,SearchFeed,VideoDetail,ChannelDetail,Feed} from './components';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

const App=()=> (
    <BrowserRouter>
        <Box sx={{backgroundColor:'#000'}}>
            <Routes>
                <Route path='/' exact element={<Feed/>}/>
                <Route path='/login' exact element={<Login/>}/>
                <Route path='/signup' exact element={<Signup/>}/>
                <Route path='/video/:id' element={<VideoDetail/>}/>
                <Route path='/channel/:id' element={<ChannelDetail/>}/>
                <Route path='/search/:searchTerm' element={<SearchFeed/>}/>
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App;
