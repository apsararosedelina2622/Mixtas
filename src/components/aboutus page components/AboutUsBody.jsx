import React from 'react'

import { Tab, Tabs } from 'react-bootstrap'

import { assets } from '../../assets/assets'

const AboutUsBody = () => {
    return (
        <>

            <div className='container-fluid m-0 p-0'>

                <div className='text-center bg-dark text-light display-4 p-lg-5 p-md-4 p-3'>
                    <p className='p-lg-5'><b className='p-lg-5'>Discover the Art of Dressing Where <br /> Every Stitch Tells a Story and Every <br /> Outfit Paints a Picture</b></p>
                </div>

            </div>

            <div className='container'>

                <Tabs defaultActiveKey="about" id="justify-tab-example" className="mt-3" justify >

                    <Tab eventKey="about" title="About Mixtas">
                        <hr className='m-0' />
                        <div className='row my-5'>

                            <div className="col-lg-6">
                                <img src={assets.about_us_img} alt="" className='w-100' />
                            </div>

                            <div className="col-lg-6">

                                <div className='my-lg-5 my-3 p-lg-5 '>

                                    <p className='text-dark mb-5 display-5'><b>Unveiling Your Unique Fashion Journey</b></p>

                                    <p className='text-secondary fs-5 my-2'>Welcome to Mixtas Store, where fashion meets individuality, and style is more than just clothing – it's a statement. Our passion for fashion drives us to curate a collection that celebrates diversity, embraces trends, and empowers you to express yourself through clothing.</p>

                                </div>

                            </div>

                        </div>
                    </Tab>

                    <Tab eventKey="story" title="Our Story">
                        <hr className='m-0' />
                        <div className='container text-secondary my-5'>

                            <div className='my-4'>
                                <p>In the heart of [Your City], a dream was woven into the fabric of reality – the dream of creating a clothing haven that resonates with style enthusiasts, trendsetters, and those who seek to express themselves through fashion. Welcome to [Your Store Name], where every stitch tells a story.</p>
                            </div>

                            <div className='my-4'>
                                <p>Founded [Year], [Your Store Name] emerged from a passion for clothing and a commitment to providing a curated collection that transcends mere fashion trends. Our journey began with the belief that clothing is not just about covering the body; it’s a canvas for self-expression, an art form that reflects individuality.</p>
                            </div>

                            <div className='my-4'>
                                <p>What sets us apart is our dedication to offering more than just garments – we curate experiences. From the luxurious touch of premium fabrics to the meticulous craftsmanship of each design, every piece at [Your Store Name] is a testament to our commitment to quality and style. Our curated selection embraces the essence of contemporary trends while celebrating the enduring charm of timeless classics.</p>
                            </div>

                            <div className='my-4'>
                                <p>At [Your Store Name], we understand that fashion is more than a fleeting moment; it’s an ongoing narrative. Our collections are thoughtfully curated to tell stories that resonate with diverse tastes, preferences, and lifestyles. We believe in empowering our customers to embrace their unique identities through the choices they make in our store.</p>
                            </div>

                            <div className='my-4'>
                                <p>Beyond the racks of clothing, [Your Store Name] is a community – a gathering place for fashion enthusiasts to connect, explore, and celebrate the art of dressing well. Our team is passionate about assisting you in creating looks that speak volumes and stand the test of time.</p>
                            </div>

                            <div className='my-4'>
                                <p>As we continue to evolve, our commitment remains unwavering – to inspire confidence, foster self-expression, and redefine the way you experience fashion. Thank you for being a part of our story, and we look forward to helping you script your own fashion narrative at [Your Store Name].”</p>
                            </div>

                            <div className='my-4'>
                                <p>Feel free to customize the details to align with your store’s unique history and vision.</p>
                            </div>

                        </div>
                    </Tab>

                    <Tab eventKey="mission" title="Our Mission">
                        <hr className='m-0' />
                        <div className='container text-secondary my-5'>

                            <div className='my-4'>
                                <p>At [Your Store Name], we are driven by a singular mission: to empower individuals through the art of fashion. We believe that clothing is not just a means of covering the body but a powerful tool for self-expression, confidence, and individuality.</p>
                            </div>

                            <div>
                                <ol>

                                    <li className='my-4'><b>Curate Exceptional Style:</b> We are committed to curating a diverse and exceptional collection of clothing that transcends the boundaries of fashion. Our mission is to offer a carefully selected range of garments that reflect the latest trends, timeless classics, and unique pieces that resonate with our customers.</li>

                                    <li className='my-4'><b>Quality Craftsmanship:</b> We prioritize quality craftsmanship in every stitch and detail. Our dedication to superior craftsmanship ensures that each garment is not just a piece of clothing but a work of art, designed to stand the test of time.</li>

                                    <li className='my-4'><b>Celebrate Diversity: </b>Fashion is a universal language, and we celebrate the diversity of styles and tastes. Our mission is to provide a space where individuals from all walks of life can find clothing that aligns with their unique identity and personal expression.</li>

                                    <li className='my-4'><b>Customer Empowerment:</b> We strive to empower our customers to embrace their individuality with confidence. Our team is committed to providing personalized assistance, style advice, and a seamless shopping experience that goes beyond transactions to create lasting connections.</li>

                                    <li className='my-4'><b>Sustainable Choices:</b> As stewards of the environment, we are dedicated to making sustainable choices in our business practices. We actively seek eco-friendly materials, ethical manufacturing processes, and sustainable packaging options to contribute to a more conscious and responsible fashion industry.</li>

                                    <li className='my-4'><b>Community Engagement:</b> [Your Store Name] is more than just a place to shop; it’s a community. Our mission extends beyond fashion to create a space where like-minded individuals can connect, share inspiration, and foster a sense of belonging.</li>

                                    <li className='my-4'><b>Innovation and Adaptability:</b> In a dynamic and ever-changing fashion landscape, we embrace innovation and adaptability. Our mission is to stay ahead of the curve, offering the latest trends and technological advancements that enhance the overall shopping experience.</li>

                                </ol>
                            </div>

                            <div className='my-4'>
                                <p>At [Your Store Name], our mission is not just about selling clothes; it’s about fostering a culture of confidence, creativity, and self-expression. Join us on this journey as we continue to redefine the way you experience fashion.”</p>
                            </div>

                            <div className='my-4'>
                                <p>Feel free to modify the mission statement to align with the specific values and goals of your clothing store.</p>
                            </div>

                        </div>
                    </Tab>

                    <Tab eventKey="contact" title="Connect with Us">
                        <hr className='m-0' />
                        <div className='container my-5'>

                            <p className='fs-1'><b>Affilate Program</b></p>

                            <ul className='text-secondary'>

                                <li className='my-3'>Build your own online sporting goods store!</li>

                                <li className='my-3'>If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.</li>

                                <li className='my-3'><span className='text-dark'>Click here to join now</span> and earn commissions of up to 6%</li>

                            </ul>

                        </div>
                    </Tab>

                </Tabs>

            </div>

        </>
    )
}

export default AboutUsBody