import AboutImg from "../assets/about.png"

export default function About() {
    const config = {
        line1: "Hi, I'm Srikrishnan, a passionate Full Stack Web Developer who specializes in building modern, high-performance websites using React.js and Tailwind CSS. I love turning ideas into elegant and responsive user experiences. With a keen eye for design and performance optimization, I focus on creating fast, scalable, and user-friendly applications. Whether it's developing sleek UI components or integrating powerful backend functionalities, I aim to deliver seamless digital solutions. Let's build something amazing together!",
    }



    return <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
        <div className="py-5 md:w-1/2">
            <img src={AboutImg} />
        </div>
        <div className="md:w-1/2 flex justify-center">
             <div className="flex flex-col justify-center text-white">
                  <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">About Me</h1>
                  <p className="pb-5">{config.line1}</p>
                  <p className="pb-5"> {config.line2}</p>
                  <p className="pb-5">{config.line3}</p>


             </div>
     </div>
    </section>



}