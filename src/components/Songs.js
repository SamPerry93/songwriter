import React from 'react'
import { Link } from 'react-router-dom'

const Songs = ({songbook}) => {
    return (
        <div>
            {songbook.map((song) => {
            return(
                <Link key={`link_${song.id}`} to={`/editor/${song.id}`}>
                   <h2 key={song.id}>{song.title}</h2>
                </Link>
            )
        })}
        </div>
    )
}

export default Songs;
