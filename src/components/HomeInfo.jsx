import React from 'react';
import { Link } from 'react-router-dom';

import arrow  from '../assets/icons/arrow.svg';

const InfoBox = ({ text, link, btnText }) => {
    return (
        <div className={ 'info-box neo-brutalism-blue' }>
            <p className={'font-medium sm:text-xl text-center'}> { text }</p>
            <Link to={ link } className={'neo-brutalism-white neo-btn'}>
                { btnText }
                <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
            </Link>
        </div>
    );
};

const renderContent = {
    1: (
        <h1 className={ 'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5' }>
            Hi, I'm
            <span className="font-semibold mx-2 text-white">Divya</span>
            👩‍🦰
            <br />
            A Web Developer from India 🇮🇳
        </h1>
    ),
    2: (
        <InfoBox
            text={ 'Worked with many companies and picked up many skills along the way' }
            link={'/about'}
            btnText={'Read More'}
        />
    ),
    3: (
        <InfoBox
            text={ 'Led multiple projects to success over the years. Curious about the impact?' }
            link={'/projects'}
            btnText={'Visit my portfolio'}
        />
    ),
    4: (
        <InfoBox
            text={ 'Need a project done or looking for a dev? I\'m just a few keystrokes away' }
            link={'/contact'}
            btnText={"Let's talk"}
        />
    ),

};


const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
};
export default HomeInfo;
