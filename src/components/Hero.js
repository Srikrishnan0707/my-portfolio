import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter,AiOutlineInstagram,AiOutlineLinkedin,AiOutlineGithub} from "react-icons/ai";


export default function Hero() {
  const config = {
    subtitle: "Im a Full-Stack Developer ",
    social : {
      twitter: "https://x.com/sri772003?t=hpgbAynMbW5UH-2SeQktZg&s=09",
      instagram: "https://www.instagram.com/i_krish_07?igsh=bzloZHc2bXVrOXd5",
      linkedin: "https://www.linkedin.com/in/sri-krishnan-r-4a6061239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github:"https://github.com/Srikrishnan0707"
    }
  }

  
   return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
       <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className='text-white'>Srikrishnan</span>
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10'>
            <a href = {config.social.twitter} className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href = {config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
            <a href = {config.social.linkedin}  className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
            <a href = {config.social.github}  className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
          </div>
        </div>
        <img className='md:w-1/3' src={HeroImg} />
    </section>
}