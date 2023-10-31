import profil from '../assets/profil.jpg';
import blob from '../assets/blob.svg';
import blob2 from '../assets/blob2.svg';
import clsx from 'clsx';
import AboutDescription from '../component/AboutDescription';
import AboutButtonIcon from '../component/AboutButtonIcon';

export default function About() {
  return (
    <section
      id="About"
      className={clsx(
        'flex flex-col items-center gap-3',
        'overflow-clip font-inter',
        'mx-[20vw]'
      )}
    >
      <img
        src={profil}
        alt="Muhammad Randy Profil Photo's"
        className="border-solid border-[#625959] w-[30vw] border-[1px] rounded-2xl z-10 mt-10"
      />
      <div className="flex flex-col gap-1">
        <AboutDescription />
        <AboutButtonIcon />
      </div>
      <div className="absolute w-[600px] right-0 bottom-[-325px] z-[0] hidden">
        <img src={blob} alt="blob" />
        <img src={blob2} alt="blob2" />
      </div>
    </section>
  );
}
