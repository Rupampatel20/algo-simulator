import React from 'react'
import IMG from '../../assets/logo.png'
import { SearchingCard } from './SearchingCard';

export const Cards = () => {
    const searching = [
            {
                name:'binary',
                img:IMG
            },
            {
                name:'linear',
                img:IMG
            }
        ];
    return (
        <div>
            {searching.map((element, index) => (
                <SearchingCard key={index} data={element} />
            ))}
        </div>
    )
}
