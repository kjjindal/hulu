import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate'
import { ThumbUpSharp } from '@material-ui/icons';


const base_url="https://image.tmdb.org/t/p/original";


const VideoCard= forwardRef( ({movie},ref)=>{
    return (
        <>
        <div className='videocard' ref={ref}>
        <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt={movie.title} />
        <TextTruncate  
        line={1}
        element="p"
        truncateText='...'
        text={movie.overview}
            
         />
        <h4> {movie.title || movie.original_name}</h4>
        <p className="videocard__stats">
        {movie.media_type && `${movie.media_type}`}
        {movie.release_date || movie.first_air_date} 
         <ThumbUpSharp/>  {movie.vote_count} </p>
        

        </div>




        </>

    )
});


export default VideoCard