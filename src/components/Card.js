import React from "react"
import map from '../img/map.svg'

export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.imageUrl} className="card__image" />
            <div className='card__info'>
                <div className='card__upperbox'>
                    <img src={map} className="card__icon" />
                    <p className='card__country'>{props.location}</p>
                    <a href={props.googleMapsUrl} className='card__link'>View on Google Maps</a>
                </div>
                <h1 className='card__title'>{props.title}</h1>
                <h3 className='card__dates'>{props.startDate} - {props.endDate}</h3>
                <p className='card__about'>{props.description}</p>
            </div>
        </div>
    )
}