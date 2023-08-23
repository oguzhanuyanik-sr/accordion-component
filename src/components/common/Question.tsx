import { Arrow } from '../../utils/constants';

type QuestionProps = {
  title: string;
  desc: string;
  isVisible: boolean;
  handleClick: () => void;
};

const Question = ({ title, desc, isVisible, handleClick }: QuestionProps) => {
  return (
    <div
      onClick={handleClick}
      className='border-b-[1px] border-softWhite cursor-pointer'
    >
      <div className='flex justify-between items-center'>
        <p
          className={`title py-3 ${
            isVisible ? 'font-bold text-darkBlue hover:text-darkBlue' : ''
          }`}
        >
          {title}
        </p>
        <img
          className={`h-2 ml-8 ${isVisible ? 'rotate-180' : ''}`}
          src={Arrow}
          alt='Arrow'
        />
      </div>
      <p className={`description pb-4 ${isVisible ? 'block' : 'hidden'}`}>
        {desc}
      </p>
    </div>
  );
};

export default Question;
