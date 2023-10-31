import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

const AboutButtonIcon = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <button className="bg-black text-white rounded p-1 text-xs">
          Download CV
        </button>
        <div className="flex text-2xl gap-2">
          <AiFillGithub />
          <AiFillTwitterCircle />
          <AiFillLinkedin />
        </div>
      </div>
    </>
  );
};

export default AboutButtonIcon;
