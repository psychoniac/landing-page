import React from 'react';

function Hero() {
    return (
        <section className='section-hero'>
            <div className='left-colum'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ratione esse sunt, asperiores dolore adipisci perferendis!
                </p>
            </div>
            <div className='center-colum'></div>
            <div className='right-colum'>
                <div className='icon-list'>
                    <ul>
                        <li>activite 1</li>
                        <li>activite 2</li>
                        <li>activite 3</li>
                    </ul>
                </div>
                <button className='call-to-action'>RESERVEZ</button>
            </div>
        </section>
    );
}

export default Hero;
