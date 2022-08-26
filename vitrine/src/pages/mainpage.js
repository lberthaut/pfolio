import React from 'react';
import Caroussel from '../components/caroussel'
import Loadingspinner from '../components/loadingspinner';
import Usercontent from '../components/usercontent';
import Carousselstyle from '../styles/carousselstyle';
import Indexstyle from '../styles/indexstyle.js';
import Loadingspinnerstyle from '../styles/loadingspinnerstyle';
import Usercontentstyle from '../styles/usercontentstyle';


export default function Main() {

    return (
        <>
            <div className='background'></div>
            <Indexstyle />
            <Loadingspinner /><Loadingspinnerstyle />
            <Usercontent /><Usercontentstyle />
            <Caroussel /><Carousselstyle />
        </>
    )
}