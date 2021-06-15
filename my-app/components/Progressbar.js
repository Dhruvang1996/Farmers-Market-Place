import React, { useEffect } from 'react';
import useStorage from '../firebase/useStorage';

const Progressbar = ({file}) => {

    const { url, progress } = useStorage(file);
    return (
        <div>
            <div style={{height:'10px', 
                         backgroundColor:'lightgrey',
                         borderRadius:'4px', 
                         width: progress+'%',
                         maxWidth:'300px',
                         marginLeft: '70px',
                         marginTop:'10px'}}>
            </div>
            <div style={{marginLeft:'210px',
                         fontFamily:`'Times New Roman', Times, serif`,
                         color:'gray'}}>
                {!url && file ? progress + '%' : ''}
            </div> 
        </div>
    )
}

export default Progressbar;