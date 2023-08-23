import { useState } from 'react';
import {
  QuestionData,
  Hero,
  Shadow,
  BigHero,
  BigBox,
  BigShadow,
} from '../utils/constants';
import Question from './common/Question';

const Faq = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = (index: number) => {
    setCurrentQuestion(index);
  };

  return (
    <div>
      <div className='flex md:hidden justify-center relative mb-[-75px] mx-[45px]'>
        <img className='w-full max-w-[237px]' src={Hero} alt='Hero' />
        <img
          className='absolute bottom-[-25px] w-full max-w-[240px]'
          src={Shadow}
          alt='Shadow'
        />
      </div>
      <main className='bg-white rounded-[23px] px-6 pt-[120px] pb-[50px] md:flex md:py-[64px] md:pr-[40px] lg:pr-[96px] md:justify-between max-w-[920px] md:mx-10'>
        <div className='hidden md:flex relative items-center ml-[-25px]'>
          <img className='absolute left-[-100px]' src={BigBox} alt='Box' />
          <div className='overflow-hidden'>
            <img className='ml-[-60px]' src={BigHero} alt='Hero' />
          </div>
          <img className='absolute left-[-60px]' src={BigShadow} alt='Shadow' />
        </div>
        <div className='md:w-[50%]'>
          <h1 className='heading text-center mb-[30px]'>FAQ</h1>
          <div>
            {QuestionData.map((item, index) => (
              <Question
                key={index}
                handleClick={() => handleClick(index)}
                isVisible={currentQuestion === index}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Faq;
