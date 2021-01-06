import React, { Component, u, useState } from 'react';
import './VideoSidebar.css'
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const VideoSidebar = ({likes, share, messages}) => {
    const [liked,setliked] = useState(false)
    return (
        <div className='videosidebar' >
            <div className='videosidebar__button'  >
                {
                    liked ? (<FavoriteIcon fontSize='large' onClick={e => setliked(!liked)} />) : (<FavoriteBorderIcon fontSize='large' onClick={e => setliked(!liked)} />)
                }
                <p>{liked? likes + 1 : likes}</p>
            </div>
            <div className='videosidebar__button' >
                <MessageIcon fontSize='large' />
                <p>{share}</p>
            </div>
            <div className='videosidebar__button' >
                <ShareIcon fontSize='large' />
                <p>{messages}</p>
            </div>


        </div>
    );
}

export default VideoSidebar;