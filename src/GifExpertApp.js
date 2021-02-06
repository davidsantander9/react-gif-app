import React, { useState } from 'react';

import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch Man', 'Dragon ball', 'Attack of titans'];
    const [categories, setCategories] = useState(['One Punch Man']);

    // const handleAdd = () => {
    //     // setCategories( [...categories, 'Naruto ']);
    //     setCategories( ctgs => [...ctgs, 'Naruto'] );
    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories = { setCategories } />
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            {
                categories.map( category =>
                    <GifGrid 
                        key={category} 
                        category ={ category }
                    />
                )
            }
        </>
    );
}

export default GifExpertApp;