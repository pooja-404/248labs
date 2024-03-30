
import React from 'react'
import behindimg1 from '../assets/images/behind1.webp'
import behindimg2 from '../assets/images/behind2.webp'
import behindimg3 from '../assets/images/behind3.webp'
import behindimg4 from '../assets/images/behind4.webp'
import behindimg5 from '../assets/images/behind5.webp'
import behindimg6 from '../assets/images/behind6.webp'
import behindimg7 from '../assets/images/behind7.webp'
import behindimg8 from '../assets/images/behind8.webp'


const productcard = [
    {
        img: behindimg1,
        heading: "James Vuong",
        head: "(Co-CEO)",
        para: "James is a dynamic CEO leading two thriving companies. He co-founded ROOMERANG, elevating it from $0 to $8 million in annual net revenue in just 5 years. Additionally, as a co-founder of KEYNINJA, James achieved an ",
        text: "impressive 50% year-over-year net revenue growth within the same timeframe. With a background in property valuation, sales, and technology, James brings a unique blend of skills to drive innovation and success in both ventures.",
        animation: "fade-down-right"
    },
    {
        img: behindimg2,
        heading: "Tricia Yong",
        head: "(Co-CEO)",
        para: "Tricia is a Marketing Director with 15 years of expertise, co-founded ROOMERANG and KEYNINJA with James Vuong, bringing a wealth of knowledge from the tech industry, property valuation, and consumer  ",
        text: "products. With a background in consumer behavior, UI/UX design, and marketing strategies, she adeptly navigates the convergence of technology and marketing. Tricia is renowned for crafting compelling narratives that deeply resonate with both business clients and consumers, propelling the company to success in the ever-evolving tech landscape.",
        animation: "fade-down-left"
    },
    {
        img: behindimg3,
        heading: "Kevin Li",
        head: "(CFO)",
        para: "Kev is a seasoned CFO with 15 years of expertise in the Big Pharma sector, demonstrated his leadership by establishing a successful branch office in Myanmar, overseeing its growth to 70 employees in just 24 months. His ",
        text: "strategic pricing initiatives for life-saving medications not only gained eligibility onto the government reimbursement list in Singapore, Sri Lanka, and the Maldives but also significantly alleviated the financial burden on patients grappling with the costs of disease.",
        animation: "fade-down-right"
    },
    {
        img: behindimg4,
        heading: "Ryan Ang",
        head: "(Lorem Ipsum)",
        para: "Experienced in investing in traditional equity markets and blockchain companies. Early adopter of digital assets and co-founded a decentralised finance application that provides walletservices, swaps and DeFi ",
        text: "products. Previously in the private equity arm of one of Singapore’s leading asset management funds, Dymon Asia Capital. Previously the fund manager at Blockchain Ventures.",
        animation: "fade-down-left"
    },
    {
        img: behindimg5,
        heading: "Dylan",
        head: "(Executive Producer)",
        para: "Lorem ipsum dolor sit amet consectetur. Quis in ullamcorper molestie velit proin est. Vestibulum eget eu in egestas. Consequat mi consequat eu eu id integer est. Eget at egestas morbi vitae platea imperdiet sed egestas dignissim.",
        text: "Lorem ipsum dolor sit amet consectetur. Amet erat condimentum.",
        animation: "fade-down-right"
    },
    {
        img: behindimg6,
        heading: "Ralf",
        head: "(Lorem Ipsum)",
        para: "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim. ",
        text: "Lorem ipsum dolor sit amet consectetur. Cursus vulputate facilisis mattis diam consectetur molestie ultrices. Laoreet sagittis facilisis consequat dignissim viverra etiam gravida. Eu cursus scelerisque purus pharetra enim.",
        animation: "fade-down-left"
    },
    {
        img: behindimg7,
        heading: "Jordan Stratford",
        head: "(Creative Director)",
        para: "Jordan is an international best-selling author of the Wollstonecraft Detective Agency series with Penguin Random House, which was adapted to a mobile game for iOS, Android, and Nintendo Switch, and is in development",
        text: "for television with the world’s largest streaming producer.",
        animation: "fade-down-right"
    },
    {
        img: behindimg8,
        heading: "Jae Sik Choi",
        head: "(Lorem Ipsum)",
        para: "Early adopter of digital assets since 2011, founded Garuda Crypto, The Cryptocurrency Fund Project and Kalian Cryptocurrency Fund, along with being deeply experienced in DeFi and dApps since 2019. Previously an ex-NAB",
        text: "Specialised Transaction Management Associate, experienced in fixed income structured products, KYC/AML, FATCA and CRS reporting. Holds a Master of Applied Finance from Monash University.",
        animation: "fade-down-left"
    },

];


const Behindsec = () => {
    const list = productcard.map((productcard, p) => (
        <div className='col-md-6 col-12 pt-sm-4 pt-3  text_c_center ' key={p} >
            <div className={`behind-card  border-radius-img overflow-hidden px-3 pt-3 pb-md-5 light-black position-relative`} data-aos={`${productcard.animation}`}
                data-aos-duration="5000">
                <div className='row '>
                    <div className="col-lg-5">
                        <img src={productcard.img} alt="img" className='border-radius-img  behind-w  object-fit-cover' />
                    </div>
                    <div className="col-lg-7">
                        <div className='d-xl-flex gap-2 align-items-center pt-3 pt-lg-0'>
                            <h2 className='font-roboto fs-m lh-24 fw-semibold text-white mb-0 text-nowrap'>{productcard.heading}</h2>
                            <p className='font-roboto fs-s lh-19 fw-normal color-gradient mb-0 text-nowrap'>{productcard.head}</p>
                        </div>
                        <p className='font-roboto fs-s lh-24 fw-normal off-gray mb-0 pt-3 max-w -283'>{productcard.para}</p>
                    </div>
                </div>
                <p className='font-roboto fs-s lh-24 fw-normal off-gray pt-3  max-w-530'>{productcard.text}</p>
            </div>
        </div>
    ));
    return (
        <div className='position-relative z-1 overflow-hidden' id='our'>
            <div className="container py-lg-5 pb-3">
                <div className="d-flex justify-content-center text mt-5 " >
                    <p className='font-roboto fs-s lh-19 text fw-normal graident-btnn box color-gradient border-0'>OUR TEAM</p>
                </div>
                <h2 className='font-roboto fs-xl fw-bold lh-62 text-white text-center py-lg-3 pt-2' data-aos="zoom-in">Behind our expertise</h2>
                <div className="row pt-3">
                    {list}
                </div>
            </div>
            <div className='behind-ellipse position-absolute behind-position z-n1 d-lg-block d-none'></div>
            <div className='behind-ellipse position-absolute  behind-position-right z-n1 d-lg-block d-none'></div>
            <p className='fs-2xl fw-bold lh-225 font-roboto  text-white opicity-6 position-absolute z-n1  behind-text-ellipse mt-5'>Our Team</p>
        </div>
    )
}
export default Behindsec

