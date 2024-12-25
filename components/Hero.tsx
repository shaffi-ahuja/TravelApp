import Image from 'next/image'
import Button from './Button'

const Hero = () => {
    return (
        <section className='max-container padding-container gap-20 py-10 pb-32 md:gap-28 lg:py-20 flex flex-col xl:flex-row'>
            <div className='hero-map' />

            {/*LEFT*/}

            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image src="/camp.svg" alt='camp' width={50} height={50}
                    className='absolute left-[-5px] top-[-30px] w-10 lg:w-[-50px]'
                />
                <h1 className='bold-52 lg:bold-88'>Lorem Ipsum</h1>
                <p className='regular-16 mt-6 text-gray-30 xl:w-[520px]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
                <div className='my-11 flex flexwrap gap-5'>
                    <div className='flex items-center gap-2'>
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src="/star.svg"
                                key={index}
                                alt="star"
                                width={24}
                                height={24}
                            />
                        ))}
                    </div>
                    <p className='bold-16 lg:bold-20 text-blue-70'>
                        198k
                        <span className='regular-16 lg:regular-20 ml-1'>Excellent Reviews</span>
                    </p>
                </div>
                <div className='flex flex-col w-full gap-3 sm:flex-row'>
                    <Button
                        type='button'
                        title='Download App'
                        variant='btn_green'
                    ></Button>
                    <Button
                        type='button'
                        title='How we work?'
                        variant='btn_white_text'
                        icon='/play.svg'
                    ></Button>
                </div>


            </div>

            {/*RIGHT*/}
            <div className='relative flex flex-1 items-start'>
                <div className='relative flex z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8'>
                    
                    <div className='flex flex-col'>
                        <div className='flexBetween'>
                            <p className='regular-16 text-gray-20'>Location</p>
                            <Image src="/close.svg" width={24} height={24} alt='close' />
                        </div>
                        <p className='bold-20 text-white'>Lorem Ipsum</p>
                    </div>

                    <div className='flexBetween'>
                        <div className='flex flex-col'>
                            <p className='regular-16 text-gray-20 block'>Distance</p>
                            <p className='bold-20 text-white'>177.28 km</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='regular-16 text-gray-20 block'>Elevation</p>
                            <p className='bold-20 text-white'>2 km</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero