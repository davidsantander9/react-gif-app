import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__flash animate__delay-1s'>{ category }</h3>
            { loading && <p className='animate__animated animate__flash animate__delay-1s'>Cargando...</p>}
            <div className='card-grid'>
                {
                    //    images.map(
                    //    img => <li key={img.id}> {img.title}</li>
                    //    )
                    images.map( (img) =>
                        <GifGridItem 
                            key={ img.id }
                            {...img }
                        />
                    )
                } 
            </div>
        </>
    )
}

export default GifGrid;