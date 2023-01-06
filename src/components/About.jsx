import React from 'react';
import terminal from '../assets/dogethstyleroadmap.png'

const About = () => {
  return (
    <div className='w-full bg-black text-white text-center'>
      <div className='max-w-[1240px] mx-auto px-4 py-16 '>
        <div id="roadmap">
        <h1> ABOUT $OP</h1>
        <p className='text-3xl'>The goal of Old PYRO, a hyper deflationary token is to increase its value over time, as the decreasing supply makes the remaining tokens more scarce and therefore more valuable. These types of tokens often have built-in mechanisms to encourage holding and discourage selling, such as rewarding token holders with a portion of the fees from transactions made using the token.</p>


        <img className='justify-center' src={terminal} alt="/" />
        <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">BUY OLD PYRO!</button>
        <button type="button" class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900">CHECK DEXTOOLS!</button>
          <div>
<iframe className='py-4 w-full aspect-video' src="https://dexscreener.com/ethereum/0xe634d0fe65a0825dc70e8d3463c311bd2590bbff" title="dexchart"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
