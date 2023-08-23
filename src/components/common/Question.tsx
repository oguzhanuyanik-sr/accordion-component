import Arrow from '../../assets/icon-arrow-down.svg';

type Props = {};

const Question = ({ title, desc, handleClick, isVisible }: Props) => {
  return (
    <div
      onClick={handleClick}
      className='border-b-[1px] border-softWhite cursor-pointer'
    >
      <div className='flex justify-between items-center'>
        <p
          className={`title py-3 ${isVisible ? 'font-bold text-darkBlue' : ''}`}
        >
          {title}
        </p>
        <img className='h-2 ml-8' src={Arrow} alt='Arrow' />
      </div>
      <p className={`description pb-4 ${isVisible ? 'block' : 'hidden'}`}>
        {desc}
      </p>
    </div>
  );
};

export default Question;
