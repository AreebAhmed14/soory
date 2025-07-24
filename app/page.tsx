import React from 'react'
import { Caveat_Brush } from "next/font/google";
import Link from 'next/link';
import Image from 'next/image';

const CaveatBrush = Caveat_Brush({
  weight: "400",
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
    <div className='flex flex-col'>
      {/* main */}
      <div className="w-[100%] h-[100vh] bg-[url('/static/bg.png')] bg-cover bg-center flex flex-col justify-between">

      {/* header */}
       <div className='w-full h-[20vh] flex justify-between max-[912px]:h-[15vh]'>
        <div className='w-[30vw] relative h-full overflow-hidden max-[380px]:w-[50vw]'>
              <h2 className={`text-5xl text-white flex justify-center items-center ${CaveatBrush.className} w-full h-full max-[912px]:text-3xl max-[660px]:text-2xl max-[510px]:text-[20px] max-[380px]:text-[25px]`}> <p className=' mx-5 max-[560px]:m-3'>S<span className='text-blue-500'>OO</span>RY SHAJ<span className='text-blue-500'>EE</span></p> </h2>
        </div>
        <div className={`w-[20vw] h-full flex justify-center items-center mx-3 text-[18px] ${CaveatBrush.className} animate-pulse`}>{`(｡•́︿•̀｡)`}</div>
       </div>

      {/* haeding */}
      <div className='w-full h-[50vh] flex justify-between items-center'>
        <div className={`w-[50vw] h-full flex flex-col px-5 justify-center ${CaveatBrush.className} max-[700px]:w-full`}>
          <p className='text-5xl m-2 max-[600px]:text-3xl max-[400px]:m-0 max-[400px]:my-3'>
            <span className='text-blue-500'>{`I'm`}</span> sorry for the pain I caused,
          </p>
          <p className='text-5xl m-2 max-[600px]:text-3xl max-[400px]:m-0 max-[400px]:my-3'>
          My <span className='text-blue-500'>love</span> for you never paused.
          </p>
          </div>
        <div className='w-[30vw] h-full max-[700px]:hidden'></div>
      </div>

      </div>

      {/* para  */}
      <div className='flex flex-col'>
        <h1 className={`m-5 text-5xl ${CaveatBrush.className} animate-pulse max-[550px]:text-3xl text-blue-500`}>Whispers of Regret</h1>
        <p className={`${CaveatBrush.className} text-2xl max-[400px]:text-[20px] mx-3`}>
          {`
          I never meant to hurt you — not even for a moment.
Every second without your smile feels like a lifetime of silence.
Please know my heart is heavy with guilt and longing.
You matter more to me than words can ever show.
All I ask is a chance to make things right again.
          `}
        </p>  

        <center>
          
            <div className="relative w-[90vw] rounded-3xl overflow-hidden h-[40vh] m-5">
  <Image
    src="/static/soory.jpg"
    alt="Soory"
    fill
    className="object-cover"
  />
</div>

            </center>

        <center>
          <Link href={"https://wa.me/+923709180147"} target='_blank'><button className='px-4 animate-bounce py-2 hover:text-[15px] my-7 bg-blue-400 m-4 rounded-md'>TEXT ME</button></Link>
        </center>
      </div>

      </div>
    </>
  )
}

export default page
