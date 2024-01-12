import { Box,CardContent,CardMedia,Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"

const ChannelCard = ({channelDetail,marginTop}) => {
  return (
    <Box sx={{
            boxShadow:'none',
            borderRadius:'20px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            width:{xs:'356px', md:'315px'},
            height:'326px',
            margin:'auto',
            marginTop:marginTop
        }}>
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
                <CardMedia 
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{borderRadius:'50%', height:'180px', width:'180px'}}
                />
                <Typography variant="h6" display='flex' alignItems='center'>
                    {channelDetail?.snippet?.title}
                    <CheckCircle sx={{fontSize:16, color:'gray', marginLeft:'3px'}}/>
                </Typography>
                {/* Hum jb channel pe click krke uss channel ke page pe pahuchenge tb hum subscriber count ko deikhana chanhte hain(jb videos ke sth channel show ho rha hai tb nhi dikhana chhate) uske liye ye code likha hai niche wala */}
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard