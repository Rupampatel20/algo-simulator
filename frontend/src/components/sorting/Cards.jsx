import React from 'react'
import { SortingCard } from './SortingCard'
import IMG from "../../assets/logo.png"

export const Cards = () => {
    const sorting = [
        {
            name:'heap',
            img:IMG
        },
        {
            name:'merge',
            img:IMG
        },
        {
            name:'quick',
            img:IMG
        },
        {
            name:'insertion',
            img:IMG
        },
        {
            name:'bubble',
            img:IMG
        },
        {
            name:'selection',
            img:IMG
        },
    ];
  return (
    <div
        className='grid grid-cols-3 gap-7 px-14 py-7'
    >
        {sorting.map((element, index) => (
            <SortingCard key={index} data={element}/>
        ))}
    </div>
  )
}

/*
{
    name:""
    img:""
    description:""
    link:""
    linkText:""
    color:""
}
*/