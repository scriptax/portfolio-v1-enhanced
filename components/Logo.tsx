import { Overpass } from "next/font/google";

const overpass = Overpass({ subsets: ["latin"] });

const Logo = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='45'
      height='40'
      className={overpass.className}
    >
      <text
        id='secondM'
        x='5'
        y='40'
        fontWeight='bold'
        fontSize='40'
        fill='gray'
      >
        M
      </text>
      <text
        id='firstM'
        className='animate-logo'
        x='5'
        y='40'
        fontWeight='bold'
        fontSize='40'
        fill='white'
      >
        M
      </text>
    </svg>
  );
};

export default Logo;
