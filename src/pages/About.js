import React from 'react';
import aboutimg from '../assets/aboutimg.png'
import card from '../assets/card.svg'
import line from '../assets/roadmapline.svg'

const About = () => {
  return (
    <div className='w-full text-white 2xl:max-w-7xl lg:max-w-4xl my-20 mx-auto'>
      <div className='my-40'>
        <div className='text-center pt-20'>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-medium my-4'>Change</h1>
        <h1 className='md:text-6xl sm:text-5xl text-4xl font-medium'>the NFT Culture</h1>
      </div>
        <button className='
          bg-[#D6F866] rounded-md font-semibold 
          md:text-xl sm:text-xl text-0.5xl flex
          my-20 mx-auto px-8 py-3 text-black
        '>
          GO TO DOCS
        </button>
      </div>

    <div className='mx-auto grid md:grid-cols-2 place-items-center my-60'>
      <img 
        className='w-[471px] h-auto'
        src={card}
        alt='card'
        />
        <div className='mx-20'>
        <h2 className='md:text-5xl sm:text-4xl text-3xl font-medium'>Improve the</h2>
        <h2 className='md:text-5xl sm:text-4xl text-3xl font-medium my-4'>NFT investment</h2>
        <h2 className='md:text-5xl sm:text-4xl text-3xl font-medium mb-10'> Culture</h2>
        <p className='box border md:text-xl sm:text-0.5xl border-none w-[420px] h-auto'>
        We seek to improve the nft investment culture by 
        helping manage and track the nft portfolio of all sizes 
        NFT holders from newbies to Whales by giving credit 
        ratings according to trading patterns, majorly 
        based on average holding Period.
        </p>
        </div>
      </div>


      <div className='mx-auto my-60 '>
      <div className='flex flex-col justify-center items-center my-40' >
        <div className='flex flex-col justify-center items-center my-40'>
          <h2 className='
            md:text-5xl sm:text-4xl text-3xl font-medium m-4'>
            To Infinity and
          </h2>
          <h2 className='
            md:text-5xl sm:text-4xl text-3xl font-medium'>
              Beyond
          </h2>
        </div>
        <div className=' flex flex-row space-x-20 space-x-reverse'>
          <p></p>
          <p></p>
        <img 
          className='w-auto h-auto'
          src={line}
          alt='line'
          />
        <div className='grid grid-rows-6 grid-flow-col gap-4 md:text-xl sm:text-0.5xl box border border-none w-[560px] h-auto'>
          <div className=''>
            <p className='pb-4 text-[#626262]'>Feb 07</p>
            <p>Start of NFT Ranks , four blockchain developers and a designer gathered
              together to share the goal.
            </p>
          </div>
          
          <div>
            <p className='pb-4 text-[#626262]'>Mar. 13</p>
            <p>Since our project considers building DAO with service
                users, we have registered our twitter, discord and web
                domain . Here, we are not only coding the service, but
                also working to build a community.
            </p>
          </div>
          
          <div>
            <p className='pb-4 text-[#626262]'>Mar. 31</p>
            <p>Finish UI/UX design and spurring the front-end . While
              the front-end progresses, API development ongoes.
              Also, DB design will be finished.
              </p>
          </div>

          <div>
            <p className='pb-4 text-[#626262]'>Apr. 13</p>
            <p>Actual test with pre-service model ( prototype ) will be
              ready and be done with community members. With the
              feedback, we will modify accordingly.</p>
          </div>

          <div>
            <p className='pb-4 text-[#626262]'>Apr. 30</p>
            <p>NFT portfolio analysis and ranking parameters will be
              more specified with details . Any errors and issues will
              be handled for better services.</p>
          </div>

          <div>
            <p className='pb-4 text-[#626262]'>May. 13</p>
            <p>Start of NFT Ranks , four blockchain developers and a designer gathered
                together to share the goal.</p>
          </div>
        </div>
    </div>
      </div>

        <div className='text-center py-60 pb-7'>
            <h1 className='md:text-6xl sm:text-5xl text-4xl font-medium'>Wanna be Together?</h1>
            <button className='
            bg-[#D6F866] rounded-md font-semibold 
            md:text-xl sm:text-xl text-0.5xl flex
            my-20 mx-auto px-8 py-3 text-black
          '>
            CHECK MY RANK
          </button>
        </div>
        </div>
        <div className='text-[#626262] m-4'>
          <p>© 2022 RAFFLE    |    All rights reserved</p>
        </div>
      </div>
  );
};

export default About;