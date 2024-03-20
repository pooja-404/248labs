import React from 'react'


const productcard = [
    {
        heading: "World Building",
        para: "Every pixel, every character, every puzzle is a testament to the harmonious marriage of imagination and engineering precision"
    },
    {
        heading: "Game Design",
        para: "Every frame becomes a brushstroke, every motion a choreographed dance, contributing to a symphony of visuals that captivate players' senses and ignite their imagination."
    },
    {
        heading: "Art and Sound",
        para: "In the realm of game design, art and animation are the storytellers, whispering tales of wonder and excitement, etching memories that linger long after the controller is set down."
    },

];

const Gamesec = () => {

    const list = productcard.map((productcard, p) => (
        <div className='col-lg-4 col-md-6 pt-3 ' key={p} >
            <div className=" game-card cursor-pointer  overflow-hidden px-4 pt-5 light-black box game-card2 position-relative" data-aos="flip-up">
                <h2 className='font-roboto fs-lg lh-38 fw-bold text-white'>{productcard.heading}</h2>
                <p className='font-roboto fs-s lh-24 fw-normal off-gray'>{productcard.para}</p>
                <div className='card-game-shadow  position-absolute '></div>
            </div>
        </div>
    ));
    return (
        <div className='pt-5 pb-lg-5 position-relative z-1 overflow-x-clip' id='about'>
            <div className="container pt-lg-5 pb-3">
                <div className="row py-lg-5">
                    <div className="col-lg-7" data-aos="fade-right">
                        <li className='btn_center'>
                            <a href="" className='font-roboto fs-s lh-19 fw-normal graident-btnn  color-gradient box '>DOERS OVER TALKERS</a></li>
                        <h2 className='font-roboto fs-xl lh-62 fw-bold text-white pt-4  text_c_center'>Game  <span className='d-lg-block'>First.Always.</span></h2>
                    </div>
                    <div className="col-lg-5 pt-4" data-aos="fade-left">
                        <h2 className='font-roboto fs-sm lh-21 fw-medium text-white pt-lg-5 text_c_center'>This is difficult</h2>
                        <p className='font-roboto fs-s lh-24 fw-normal off-gray mb-0 text_c_center '>Web3 Games have a notoriously high barrier-to-entry for casual gamers who make up the vast majority of players. “Link your wallet” before gameplay is not just off-putting, it’s boring. We’re solving that with <span className='fw-bold'>world-class storytelling,</span> world-building, game design, art and sound. And fun.</p>
                    </div>
                </div>
            </div>
            <div className="container py-lg-5">
                <div className="row pb-md-5 justify-content-center ">
                    {list}
                </div>
            </div>
            <p className='fs-2xl fw-bold lh-225 font-roboto  text-white opicity-6 position-absolute z-n1   text-position'>About Us</p>
            <div className='games-ellipse z-n1 position-absolute d-none d-lg-block'></div>
        </div>
    )
}
export default Gamesec
