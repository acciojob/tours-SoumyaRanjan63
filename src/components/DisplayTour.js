import React from 'react';
import { useState } from 'react';
import { tourlist } from './TourList';

const DisplayTour = () => {
    const [tours, setTours] = useState(tourlist);
    const [showMore, setShowMore] = useState('');
    const [buttonClicked,setButtonClicked]=useState(false);

    const handleShowMore = (id) => {
        setShowMore((info)=>{
            const updateInfo=tours.find((tour)=>tour.id===id).info;
            setButtonClicked(!buttonClicked);
            return info !==updateInfo.substring(0,200)?updateInfo.substring(0,200):updateInfo;
        })
    };

    const handleDeleteBtn = (id) => {
        setTours(tours.filter((tour) => tour.id !== id));
    };

    const renderTour = () => {
        return (
            <ul className='single-tour'>
                {tours.map((tour) => (
                    <li key={tour.id}>
                        <h1>{tour.name}</h1>
                        <p>
                            {showMore !== tour.info.substring(0, 200) ? tour.info.substring(0, 20) : tour.info}
                            {!buttonClicked && (
                                <button onClick={() => handleShowMore(tour.id)}>See more</button>
                            )}
                        </p>
                        <img src={tour.image} alt={tour.name} />
                        <p>{tour.price}</p>
                        <button className='delete-btn' onClick={() => handleDeleteBtn(tour.id)}>
                            Delete Tour
                        </button>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div>
            <h1 className='title'>My Tour App</h1>
            {tours.length > 0 ? renderTour() : <p className='no-tours-left'>No more tours</p>}
            <button className='btn' onClick={() => window.location.reload()}>
                Refresh
            </button>
        </div>
    );
};

export default DisplayTour;
