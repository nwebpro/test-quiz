import React from 'react';

const Hero = () => {
    return (
        <section className="relative -z-20">
            <img
                src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                    <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                        The quick, brown fox <br className="hidden md:block" />
                        jumps over a{' '}
                        <span className="text-teal-accent-400">lazy dog</span>
                    </h2>
                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudan, totam rem aperiam, eaque ipsa
                        quae.
                    </p>
                    </div>
                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                    <div>
                        <img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="quiz" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;