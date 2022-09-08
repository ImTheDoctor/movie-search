import React from 'react'

function Popup({ selected, closePopup }) {
    return (
        <section className='popup'>
            <div className='content'>
                <h2>{selected.Title} <span>({selected.Year})</span></h2>
                <p className='rating'>Rating : {selected.imdbRating}</p>
                <div className='plot'>
                    <img src={selected.Poster} alt='poster'/>
                    <p>{selected.Plot}</p>
                    <p>Rating : {selected.Rated}</p>
                    <p>Released : {selected.Released}</p>
                    <p>Runtime : {selected.Runtime}</p>
                    <p>Genre : {selected.Genre}</p>
                    <p>Director : {selected.Director}</p>
                    <p>Writer : {selected.Writer}</p>
                    <p>Actors : {selected.Actors}</p>
                    <p>Awards : {selected.Awards}</p>
                </div>
                <button className='close' onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup