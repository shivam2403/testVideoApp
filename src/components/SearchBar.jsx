import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Paper,IconButton} from '@mui/material'//Paper is just a div with white bg
import {Search} from '@mui/icons-material'

const SearchBar = () => {
    const [searchTerm,setSearchTerm]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

  return (
    <Paper 
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl:1,
            boxShadow:'none',
            mr:{sm:5},
            height:"100px",
            width:"400px"
        }}
    >
        <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
        <IconButton type='submit' sx={{
            p:'0px', color:'red'
        }}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar