import Image from "next/image"
import React from "react"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]"> Guide you to easy path</h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="flexCenter max-container relative w-full">
        <Image src="/boat.png" alt="boat" width={1440} height={580}
          className="w-full object-cover object-center 2xl:rounded-5xl" />
        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image src="/meter.svg" alt="meter"
            height={158}
            width={16}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 ml-5 text-green-50">48 mins</p>
              </div>
              <p className="bold-20 mt-2">Lorem Ipsum</p>
            </div>
            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start Track</p>
              <h4 className="bold-20 mt-2 whitespace-nowrap">Ipsum Ipsum</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide