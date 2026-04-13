import React from 'react'
import { Footer } from "./Footer";
import "../index.css";

 const Home = () => {
    return (
        <>
            <main>

                <section className="view-3">
                    <div className="left1">
                        <h1>Featured <br /> Work</h1>
                        <p>Showcasing our standout projects that blend creativity, strategy, and cutting-edge design.</p>
                        <button>Get our service</button>

                    </div>
                    <div className="line"></div>
                    <div>

                        <div className='w-full' >
                            <img src="./assets/feature1.webp" className='rounded-2xl mb-5' alt="" />
                            <div className='flex items-center justify-between'>
                                <p>dancing start</p>
                                <p>2023</p>
                            </div>
                        </div>
                        <div className="right1 ">
                            <div className="boxs">
                                <div className="box">
                                    <img src="./assets/f1.avif" className='rounded-2xl mb-5' alt="" />
                                    <div className='flex items-center justify-between'>
                                        <p>Enjoy Silence</p>
                                        <p>2023</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <img src="./assets/f2.avif" className='rounded-2xl mb-5' alt="" />
                                    <div className='flex items-center justify-between'>
                                        <p>Pure Vision</p>
                                        <p>2023</p>
                                    </div>
                                </div>
                            </div>
                            <div className="boxs">
                                <div className="box">
                                    <img src="./assets/f3.avif" className='rounded-2xl mb-5' alt="" />
                                    <div className='flex items-center justify-between'>
                                        <p>Boring Brand</p>
                                        <p>2023</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <img src="./assets/f4.avif" className='rounded-2xl mb-5' alt="" />
                                    <div className='flex items-center justify-between'>
                                        <p>New Culture</p>
                                        <p>2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <hr />
                <section className="view-4 mb-10">
                    <div className="left">
                        <div>
                            <p>How we work</p>
                            <h2 className='text-7xl mt-10'>We help our clients succeed with innovative strategies.</h2>
                        </div>
                        <svg viewBox="0 0 80 81" id="svg11069714695">
                            <path
                                d="M 79.8 39.338 C 79.666 39.282 79.547 39.305 79.445 39.407 L 67.089 51.793 L 67.089 26.695 C 67.089 26.551 67.021 26.45 66.887 26.396 C 66.754 26.34 66.635 26.363 66.533 26.465 L 54.177 38.851 L 54.177 13.753 C 54.167 13.617 54.098 13.523 53.973 13.475 C 53.846 13.425 53.733 13.446 53.633 13.537 L 41.278 25.924 L 41.278 0.825 C 41.273 0.683 41.207 0.585 41.077 0.531 C 40.946 0.476 40.829 0.497 40.727 0.595 L 0.094 41.346 C -0.004 41.448 -0.025 41.565 0.029 41.695 C 0.083 41.827 0.181 41.893 0.323 41.896 L 25.345 41.896 L 13.004 54.282 C 12.902 54.384 12.879 54.503 12.933 54.637 C 12.989 54.771 13.089 54.838 13.233 54.838 L 38.251 54.838 L 25.906 67.224 C 25.804 67.328 25.781 67.445 25.835 67.579 C 25.891 67.713 25.989 67.78 26.135 67.78 L 51.157 67.78 L 38.81 80.166 C 38.71 80.27 38.685 80.387 38.741 80.521 C 38.795 80.655 38.895 80.722 39.039 80.722 L 79.674 80.722 C 79.764 80.722 79.841 80.69 79.904 80.628 C 79.968 80.563 80 80.488 80 80.396 L 80 39.652 C 80.006 39.501 79.939 39.397 79.8 39.338 Z M 1.109 41.244 L 40.633 1.613 L 40.633 26.576 L 25.995 41.244 Z M 40.633 27.485 L 40.633 41.244 L 26.915 41.244 Z M 14.015 54.188 L 26.264 41.896 L 40.959 41.896 C 41.048 41.896 41.125 41.864 41.188 41.802 C 41.252 41.737 41.284 41.659 41.284 41.57 L 41.284 26.839 L 53.539 14.549 L 53.539 39.509 L 38.906 54.188 Z M 53.539 40.429 L 53.539 54.186 L 39.821 54.186 Z M 26.919 67.126 L 39.17 54.84 L 53.865 54.84 C 53.954 54.84 54.029 54.808 54.094 54.744 C 54.156 54.681 54.19 54.604 54.19 54.514 L 54.19 39.777 L 66.443 27.485 L 66.443 52.445 L 51.812 67.126 Z M 66.443 53.369 L 66.443 67.126 L 52.727 67.126 Z M 79.349 80.064 L 39.831 80.064 L 52.08 67.778 L 66.768 67.778 C 66.858 67.778 66.935 67.746 67 67.682 C 67.062 67.619 67.094 67.542 67.094 67.452 L 67.094 52.717 L 79.349 40.429 Z"
                                fill="var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(25, 25, 25))"></path>
                        </svg>
                    </div>
                    <div className="line"></div>
                    <div className="right">
                        <h3>Through careful analysis, creative thinking, and a deep understanding of their goals, we empower businesses to surpass expectations and thrive in today's dynamic and competitive landscape.</h3>
                        <button>Get our service</button>
                    </div>
                </section>
                <br />
                <hr />
                <br />
                <section className="view-4 mb-10">
                    <div className="left">
                        <div>
                            <p>Contact</p>
                            <h1>Let’s bring your brand to the next level</h1>
                        </div>
                        <svg viewBox="0 0 80 81" id="svg11069714695">
                            <path
                                d="M 79.8 39.338 C 79.666 39.282 79.547 39.305 79.445 39.407 L 67.089 51.793 L 67.089 26.695 C 67.089 26.551 67.021 26.45 66.887 26.396 C 66.754 26.34 66.635 26.363 66.533 26.465 L 54.177 38.851 L 54.177 13.753 C 54.167 13.617 54.098 13.523 53.973 13.475 C 53.846 13.425 53.733 13.446 53.633 13.537 L 41.278 25.924 L 41.278 0.825 C 41.273 0.683 41.207 0.585 41.077 0.531 C 40.946 0.476 40.829 0.497 40.727 0.595 L 0.094 41.346 C -0.004 41.448 -0.025 41.565 0.029 41.695 C 0.083 41.827 0.181 41.893 0.323 41.896 L 25.345 41.896 L 13.004 54.282 C 12.902 54.384 12.879 54.503 12.933 54.637 C 12.989 54.771 13.089 54.838 13.233 54.838 L 38.251 54.838 L 25.906 67.224 C 25.804 67.328 25.781 67.445 25.835 67.579 C 25.891 67.713 25.989 67.78 26.135 67.78 L 51.157 67.78 L 38.81 80.166 C 38.71 80.27 38.685 80.387 38.741 80.521 C 38.795 80.655 38.895 80.722 39.039 80.722 L 79.674 80.722 C 79.764 80.722 79.841 80.69 79.904 80.628 C 79.968 80.563 80 80.488 80 80.396 L 80 39.652 C 80.006 39.501 79.939 39.397 79.8 39.338 Z M 1.109 41.244 L 40.633 1.613 L 40.633 26.576 L 25.995 41.244 Z M 40.633 27.485 L 40.633 41.244 L 26.915 41.244 Z M 14.015 54.188 L 26.264 41.896 L 40.959 41.896 C 41.048 41.896 41.125 41.864 41.188 41.802 C 41.252 41.737 41.284 41.659 41.284 41.57 L 41.284 26.839 L 53.539 14.549 L 53.539 39.509 L 38.906 54.188 Z M 53.539 40.429 L 53.539 54.186 L 39.821 54.186 Z M 26.919 67.126 L 39.17 54.84 L 53.865 54.84 C 53.954 54.84 54.029 54.808 54.094 54.744 C 54.156 54.681 54.19 54.604 54.19 54.514 L 54.19 39.777 L 66.443 27.485 L 66.443 52.445 L 51.812 67.126 Z M 66.443 53.369 L 66.443 67.126 L 52.727 67.126 Z M 79.349 80.064 L 39.831 80.064 L 52.08 67.778 L 66.768 67.778 C 66.858 67.778 66.935 67.746 67 67.682 C 67.062 67.619 67.094 67.542 67.094 67.452 L 67.094 52.717 L 79.349 40.429 Z"
                                fill="var(--token-efbc6c56-80fe-4475-9b37-9684d6e92632, rgb(25, 25, 25))"></path>
                        </svg>
                    </div>
                    <div className="line"></div>
                    <div className="right">
                        <h3>Together, let's elevate your brand to new heights by unleashing its full potential and captivating your target audience.</h3>
                        <button>Get in Touch</button>
                    </div>
                </section>

                <hr />
                <div className='mb-10'>
                    <div className="top flex justify-between mb-10 mt-10 w-full gap-4 items-center">
                        <h1 className='text-2xl md:text-7xl tracking-widest uppercase'>Latest News</h1>
                        <p className='border rounded-lg tracking-widest text-sm px-5 py-2 h-fit '>See All</p>
                    </div>
                    <hr />
                    <div className='flex flex-col md:flex-row gap-10 '>
                        <div className='md:w-1/3 md:mt-16 md:mb-20 mb-5 mt-10'>
                            <img src="./assets/news1.avif" className='rounded-2xl mb-4' alt="" />
                            <p className='text-xl font-extralight tracking-wide text-gray-800'>Branding</p>
                            <p className='text-2xl tracking-wide'>Things to Look for When Comparing Branding Alternatives</p>
                        </div>
                        <div className='md:w-1/3 md:mt-16 md:mb-20 mb-5 mt-5'>
                            <img src="./assets/news2.avif" className='rounded-2xl mb-4' alt="" />
                            <p className='text-xl font-extralight tracking-wide text-gray-800'>Branding</p>
                            <p className='text-2xl tracking-wide'>Things to Look for When Comparing Branding Alternatives</p>
                        </div>
                        <div className='md:w-1/3 md:mt-16 md:mb-20 mb-15 mt-5'>
                            <img src="./assets/news3.avif" className='rounded-2xl mb-4' alt="" />
                            <p className='text-xl font-extralight tracking-wide text-gray-800'>Branding</p>
                            <p className='text-2xl tracking-wide'>Things to Look for When Comparing Branding Alternatives</p>
                        </div>
                    </div>
                    <hr />
                </div>
                <Footer />
            </main>
        </>
    )
}
export default Home