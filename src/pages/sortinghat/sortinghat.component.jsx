import { render } from '@testing-library/react';
import React from 'react'; 
import Banner from '../../components/Banner/banner.component';

import './sortinghat.style.scss'

class SortingHat extends React.Component {
    state={

    }

    componentDidMount(){

    }
    render()
    {
        return (
            <div>
                <Banner content='Which house do you belong to? Get Sorted!'/>
                <h2>Sorting Hat!</h2>
            </div>
        )
        
    }
}

   

export default SortingHat; 