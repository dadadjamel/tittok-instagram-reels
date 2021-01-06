import React, { Component } from 'react';
import './videofooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'


const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="videofooter" >
            <div className="videofooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className='videofooter__ticker' >
                    <MusicNoteIcon className='videofooter__icon' />
                    <Ticker className='ticker' mode='smooth' >
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>

            </div>
            <img className='videofooter__logo' src='https://static.thenounproject.com/png/934821-200.png' alt='' />

        </div>
    );
}

export default VideoFooter;