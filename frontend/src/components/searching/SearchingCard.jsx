import React from 'react'

export const SearchingCard = ({data}) => {
    return (
        <div className='border border-black p-4'>
        <div className=''>{data.name}</div>
        <img src={data.img} height={100} width={100}/>
        </div>
      )
}
