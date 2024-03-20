import React from 'react'
import unique from '../assets/images/unique.webp'

function Roguesec() {
    return (
        <div className='position-relative overflow-x-clip z-1'>
            <div className="container py-lg-5">
                <img src={unique} alt="uniqueimg" className='border-radius-img w-100' />
                <div className="row pt-4 pb-md-5">
                    <div className="col-lg-4 pt-3 "  data-aos="fade-right">
                        <li className='btn_center'><a href="" className='font-roboto fs-sm fw-bold lh-27 text-white link-btn box '>name@domain.com</a></li>
                        <li className='mt_lg_btn btn_center '><a href="" className='font-roboto fs-sm fw-bold lh-27 px-5 text-white common-btn five '>Make Your Move</a></li>
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0"  data-aos="fade-left">
                        <p className='font-roboto fs-s fw-normal lh-24 off-gray text_c_center'>Unveiled is a unique <span className='text-white fw-semibold'>collectible card game</span> in which you gain fervour for your ventures, spending it on mercenaries, spies, automata, and influence.</p>
                        <p className='font-roboto fs-s fw-normal lh-24 off-gray text_c_center'>You play <span className='text-white fw-semibold'>a rogue merchant trader</span> allied to a noble house, alongside your <span className='text-white fw-semibold'>cryptid-humanoid companions</span> in a game of ambition and alliance, deception and miracles, manipulation and annihilation. Bells chime in the harbour, and markets are opening. Guards have swept the streets of the more obvious dangers.</p>
                        <p className='font-roboto fs-s fw-semibold lh-24 text-white text_c_center'> What’s your next move?</p>
                    </div>
                </div>
            </div>
            <div className='position-absolute rougue-ellipse z-n1 d-none d-lg-block'></div>
        </div>
    )
}
export default Roguesec
