import { React } from 'react'
import UF from '../assets/uf.png'
import UCF from '../assets/ucf.png'

function Academic() {
    return (
        <div>
            <h2>Academic History</h2>
            <div className='u-florida'>
                <img 
                    src={UF}
                    width={100}
                    height={100}/>
                <p>University of Florida</p>
                <ul>Bachelor of Science, Computer Science</ul>
                <ul>May 2021 - December 2024</ul>
            </div>

            <div className='ucf'>
            <img 
                    src={UCF}
                    width={100}
                    height={100}/>
                <p>University of Central Florida</p>
                <ul>Bachelor of Science, Health Sciences</ul>
                <ul>June 2015 - August 2019</ul>
            </div>
            
        </div>
    );
}

export default Academic;