import bannerImg from '../assets/banner-stack.png'

const HeroSection = () => {
    return (
        <section className='w-full py-12 md:py-20 bg-white overflow-hidden'>
            <div className='container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12'>
    
                <div className='max-w-2xl'>
                    <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-[1.15]'>
                        Build Your Ideal <br />
                        <span className='text-brand-gradient'>Development Stack</span>
                    </h1>
                    
                    <p className='mt-6 text-gray-600 text-base sm:text-lg leading-relaxed'>
                        Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                    </p>

                    <div className='mt-8 flex flex-wrap items-center gap-4'>
                        <a
                            href='#technologies'
                            className='brand-gradient inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-white shadow-sm hover:opacity-95 transition-opacity'
                        >
                            Explore Technologies
                        </a>
                        <a
                            href='#about'
                            className='inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-colors'
                        >
                            Learn More
                        </a>
                    </div>
                </div>
{/* img */}
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-end'>
                    <img 
                        src={bannerImg} 
                        alt='Development Stack 3D Illustration' 
                        className='w-full max-w-md lg:max-w-lg object-contain'
                    />
                </div>

            </div>
        </section>
    )
}

export default HeroSection;