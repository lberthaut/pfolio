import React from 'react';
import Caroussel from '../components/caroussel'
import Usercontent from '../components/usercontent';
import Carousselstyle from '../styles/carousselstyle';
import Indexstyle from '../styles/indexstyle.js';
import Usercontentstyle from '../styles/usercontentstyle';


export default function Main() {

    return (
        <>
            <div className='background'></div>
            <Indexstyle />
            <Usercontent /><Usercontentstyle />
            <Caroussel /><Carousselstyle />
        </>
    )
}