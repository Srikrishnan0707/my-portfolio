import WebsiteImg1 from '../assets/Capture.PNG'
import WebsiteImg2 from '../assets/ecommerce-websites.jpg'
import WebsiteImg3 from '../assets/download.jpeg'

export default function Projects() {
    const config = {
        projects : [
        {
            image: WebsiteImg1,
            description: "Designed and developed a responsive website to promote Thilahomam services, achieving a 25% improvement in user engagement and accessibility.",
            link: "https://naveensharma.in/"
        },
        {
            image: WebsiteImg2,
            description: "Developed a web scraping-based site for e-commerce product analysis named epicart, automating data extraction with 95% accuracy.",
            link: "https://github.com/sureshkrish24/epiccart"
        },
        {
            image: WebsiteImg3,
            description: "Developed a web-based hospital management system to streamline administrative and patient-related tasks, improving efficiency by 40%.",
            link: "https://github.com/sureshkrish24/Hospital-Management-System"
        },
    ]
} 



    return  <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id="projects">
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
        <p>These are some of My best Projects. I have built these with React, MERN and Vanilla CSS. Check them out.</p>

        </div>
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
            
            {config.projects.map((project) => (
             <div className='relative'>
            <img className='h-[200px] w-[500px]'  src= {project.image}/>
            <div className='project-desc'>
                <p className='text-center px-5 py-5'> {project.description}</p>
                <div className='flex justify-center'>
                <a className='button' target='_blank' href={project.link}>View Project</a>
            </div>
            </div>
           </div>
           
        ))}
            
        
          </div>
        </div>
        
    </section>
}