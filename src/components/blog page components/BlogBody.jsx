import React, { useContext } from 'react'

import { Link, useParams } from 'react-router-dom'
import { MyContext } from '../../context/ContextProvider'

import { blog_page, blog } from '../../assets/assets'

const BlogBody = () => {

    const { navigate } = useContext(MyContext)

    const { id } = useParams()

    const blogs = blog?.find((e) => e.id === Number(id))

    let nextId = Number(id) + 1
    let prevId = Number(id) - 1
    let nextDesc = ''
    let prevDesc = ''

    let max_id = Object.keys(blog).length
    {
        blog.map((e) => {

            if (nextId === e.id) {
                nextDesc = e.desc
            }
            if (prevId == e.id) {
                prevDesc = e.desc
            }
        })
    }

    return (

        <div className='container'>

            <div className='col-12'>

                <div className='m-lg-5 m-3'>
                    <h1 className='display-5'><b>{blogs?.desc}</b></h1>

                    <div className="d-flex">
                        <div>
                            <img src={blog_page.admin_img} className='rounded-circle' width={30} alt="" />
                        </div>
                        <div>
                            <Link className='text-decoration-none text-dark mx-3'>admin <span className='text-secondary'>• December 14, 2023</span></Link>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={blogs?.img} className='w-100' alt="" />
                </div>

                <div className='row'>

                    <div className="col-lg-2"></div>

                    <div className="col-lg-8 col-12">

                        <div className='my-3'>
                            <p className='text-secondary fs-5'>What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell us the story behind one of their most prized possessions.</p>
                        </div>

                        <div className='my-3'>
                            <h3 className='fs-2 my-4'>Who?</h3>
                            <p className='text-secondary fs-5'>Phoebe Sung and Peter Buer met and fell in love as fashion school students in mid-aughts Boston. After they graduated, the couple began to craft together as a way to decompress from their corporate fashion jobs. They made jewelry, then bags, then home goods like wall hangings, which were ultimately the gateway to launching their now-beloved New York–based textile brand Cold Picnic.</p>
                        </div>

                        <div>
                            <img src={blog_page.blog_img} className='w-100' alt="" />
                            <p className='text-secondary my-2'>Phoebe and Peter in their Ridgewood home</p>
                        </div>

                        <div className='my-3'>
                            <p className='text-secondary fs-5'>Since 2010, Phoebe and Peter have been designing colorful, abstract rugs and bath mats that double as works of art. Nearly every collection is informed by old movies, either in composition (they print out stills and trace shapes over them) or palette (think retro hues). “There was one series of films that we were really inspired by that were all set in the desert, so the colors were very chalky and powdery but still saturated,” Phoebe shares. “We still use a lot of peaches and mints and citrons and tans.”</p>
                        </div>

                        <div className='my-3'>
                            <h3 className='fs-2 my-4'>What?</h3>
                            <p className='text-secondary fs-5'>The couple’s 1910s Ridgewood, Queens, home is filled with their own creations, including a HAY sofa (the <span className='text-dark'>Mags Soft Low sectional</span> to be exact) that they reupholstered using hand-tufted rugs after the sofa’s original pink tweed got ruined. “We were trying to think of what kind of upholstery we could actually live with and the rugs are pretty durable,” Phoebe says. “We thought that something a little bit heartier with a lot of color and design would survive our family.”</p>
                        </div>

                        <div className='my-3'>
                            <p className='text-secondary fs-5'>For the sofa’s seat and back cushions, Phoebe and Peter chose designs from their Beau Travail collections, which are an homage to the Claire Denis film of the same name. But instead of using the handmade, high-low pile wool rugs that are sold on the Cold Picnic website, Peter tufted the rugs himself—twice. “He bought a frame and a gun and he watched all these videos, but we used the wrong glue backing, so it was too stiff and he had to do it all over again,” Phoebe laments.</p>
                        </div>

                        <div className='my-3'>
                            <h3 className='fs-2 my-4'>Where and When?</h3>
                            <p className='text-secondary fs-5'>Peter undertook this grueling project at home in 2021—injuring his back in the process. “Everything he does, he does very intensely. He just wanted to finish it, but then he put his back out and couldn’t walk or get out of bed for a week after. He paid for it, but it was worth it,” Phoebe says, adding that a <span className='text-dark'>local upholsterer </span> then covered the HAY sofa in the hand-tufted rugs and a greenish-mustard wide wale corduroy.</p>
                        </div>

                        <div className='my-3'>
                            <h3 className='fs-2 my-4'>Why?</h3>
                            <p className='text-secondary fs-5'>In addition to being durable and stylish, the one of a kind sectional holds lots of sentimental value for the couple. “I actually had a mustard corduroy sofa growing up, so it’s nostalgic, but it is our take on it,” Phoebe explains. “And that’s how we think about designing. That’s why we always use old movies and these ’70s powdery palettes. It’s exactly our personal style, which is hard to encapsulate.”</p>
                        </div>

                        <div className='my-3'>
                            <p className='text-secondary fs-5'>Phoebe and Peter paired their special sofa with one of the rugs that’s featured in the design, the <span className='text-dark'>Denis Denis, </span>, as well as a vintage coffee table, a Noguchi-style pendant, and a papier-mâché tulip lamp they made during the pandemic. “We thought using one of the rugs that it was based on would be too much, so we made a brown rug to go with it, but actually that was too much,” Phoebe says. “The effect was more low-key when we just really went for it and did the whole room in the same print.”</p>
                        </div>

                        <div className='d-flex my-4'>
                            <i className="bg-dark text-light p-2 m-1 fa-brands fa-facebook"></i>
                            <i className="bg-dark text-light p-2 m-1 fa-brands fa-x-twitter"></i>
                            <i className="bg-dark text-light p-2 m-1 fa-brands fa-linkedin"></i>
                        </div>

                        <hr />

                        <div className="d-flex gap-5 justify-content-between">

                            {Number(id) >= 2 ?
                                <div className="d-flex" onClick={() => navigate(`/blog/${blogs.id - 1}`)} >
                                    <div>
                                        <i className="fa-solid text-secondary fa-arrow-left mx-3"></i>
                                    </div>
                                    <div>
                                        <Link className='text-decoration-none text-dark'>PREV POST</Link>
                                        <p className='my-2'>{prevDesc.slice(0, 40)} . . .</p>
                                    </div>
                                </div>
                                : <div className="d-flex gap-2 align-items-center"></div>}

                            {Number(id) === max_id ? ('') :
                                <div>
                                    <div className="d-flex text-end" onClick={() => navigate(`/blog/${blogs.id + 1}`)} >
                                        <div>
                                            <Link className='text-decoration-none text-dark'>NEXT POST</Link>
                                            <p className=' my-2'>{nextDesc.slice(0, 40)} . . .</p>
                                        </div>
                                        <div>
                                            <i className="fa-solid text-secondary fa-arrow-right mx-3"></i>
                                        </div>
                                    </div>
                                </div>
                            }

                        </div>

                        <hr className='m-0' />

                        <div>

                            <div className='my-5'>
                                <h3>Leave a Reply</h3>
                                <p className='text-secondary'>Your email address will not be published. Required fields are marked *</p>
                            </div>

                            <div className='my-4'>
                                <p>Comment *</p>
                                <textarea name="" className='w-100' rows={8} id=""></textarea>
                            </div>

                            <div className='row my-4'>

                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <p>Name *</p>
                                    <input type="text" className='w-100 p-2' />
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <p>Email *</p>
                                    <input type="email" className='w-100 p-2' />
                                </div>

                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <p>Website</p>
                                    <input type="url" className='w-100 p-2' />
                                </div>

                            </div>

                            <div>
                                <input type="checkbox" />
                                <label htmlFor="" className='mx-3 text-secondary'>Save my name, email, and website in this browser for the next time I comment.</label>
                            </div>

                            <button className='btn btn-dark px-4 py-2 my-5'>Post Comment</button>

                        </div>

                    </div>

                    <div className="col-lg-2"></div>

                </div>


            </div>

        </div>

    )
}

export default BlogBody