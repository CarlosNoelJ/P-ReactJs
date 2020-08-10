import React from 'react'

import './styles/PageLoader.css';
import Loader from '../components/Loader';

function PageLoading () {
    return (
        <div className="PageLoading">
            <Loader/>
        </div>
    );
}

export default PageLoading;