import React from 'react'
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
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 px-10 py-7'>
        {sorting.map((element, index) => (
                <Card key={index} className='cursor-pointer transition-transform transform hover:scale-105 shadow-lg rounded-lg overflow-hidden' onClick={() => navigate(element.link)}>
                    <CardHeader className='flex items-center justify-center bg-gray-100'>
                        <img src={element.img} alt={element.name} className='h-20 w-20 object-contain' />
                    </CardHeader>
                    <CardContent className='text-center p-4'>
                        <CardTitle className='text-xl font-semibold mb-2'>{element.name}</CardTitle>
                        <p className='text-gray-600 text-sm mb-4'>{element.description}</p>
                        <Button onClick={() => navigate(element.link)} variant='outline' className='w-full'>Explore</Button>
                    </CardContent>
                </Card>
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



