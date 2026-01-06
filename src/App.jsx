"use client"

import { useState } from "react"
import { Instagram, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function App() {
const [expandedSection, setExpandedSection] = useState(null)
const [currentProjectImage, setCurrentProjectImage] = useState("/projects2.jpeg")

  const projects = [
    {
      id: "marketplace",
      title: "Car Marketplace",
      image: "/cardnd2.png",
      description: "Full-stack MERN application with DevOps implementation. Built a comprehensive marketplace platform for renting cars with advanced search, filtering, and user management features.",
      tech: "React, Node.js, Express, MongoDB, Docker, Kubernetes, Terraform, Ansible, Azure",
      company: "Open Lluna - Marrakech",
      link: "https://cardnd.com"
    },
    {
      id: "pos",
      title: "Point of Sale Application",
      image: "/pos.png",
      description: "Developed a modern POS system to facilitate commercial transactions and efficiently manage sales and payments. Features include inventory management, real-time reporting, and payment processing.",
      tech: "React.js, Node.js, Express.js, MongoDB",
      company: "IT Advisor - Kenitra"
    },
    {
      id: "fullstack",
      title: "MERN Stack Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      description: "Front-End: Designed and developed user interfaces with React.js, integrated designs, and optimized UX. Back-End: Configured servers and APIs with Node.js and Express.js, managed MongoDB, and maintained CRUD operations with data validation.",
      tech: "React.js, Node.js, Express.js, MongoDB, REST APIs",
      company: "ARK-X Talent Factory - Rabat"
    },
    {
      id: "fullstack2",
      title: "Full Stack Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      description: "Front-End: Designed and developed user interfaces with React.js, integrated designs, and optimized UX. Back-End: Configured servers and APIs with Node.js and Express.js, managed MongoDB, and maintained CRUD operations with data validation.",
      tech: "React.js, Node.js, Express.js, MongoDB, REST APIs",
      company: "ARK-X Talent Factory - Rabat"
    }
  ]

  return (
    <div className="min-h-screen lg:h-screen bg-[#45372C] text-[#A8977A] p-3 overflow-auto lg:overflow-hidden">
      <div className="max-w-[1400px] mx-auto h-full flex flex-col">
        {/* Header - No animation, stays still */}
        <div className="flex justify-between items-center mb-3 py-2 px-6 bg-[#161711] rounded-[20px]">
          <h1 className="text-xl font-light text-[#A8977A] italic">Abir <span className="font-normal not-italic">Elbahri</span></h1>
          <a 
            href="/abirElbahri_resume.pdf" 
            download="abirElbahri_resume.pdf"
            className="text-[#A8977A] text-medium transition-colors hover:text-[#45372C] cursor-pointer flex items-center gap-2"
          >
            <span>Resume</span>
          </a>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3 lg:mb-2 flex-1">
          {/* LEFT SECTION - Contains Hero, Portrait, About, Contact */}
          <div className="lg:col-span-8 flex flex-col gap-3 lg:h-full">
            {/* First Row: Hero Text and Portrait */}
<div className="grid grid-cols-1 lg:grid-cols-8 gap-3 lg:h-[59%]">
                {/* Hero Text - Order 1 on mobile, normal position on desktop */}
              <motion.div 
                initial={{ x: 350, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="lg:col-span-5 bg-[#161711] rounded-[20px] p-6 lg:p-3 flex flex-col justify-between h-[300px] lg:h-full relative order-1"
              >
              <div className="absolute top-2 right-2">
                <svg viewBox="420 0 100 267" className="w-28 h-28 lg:w-34 lg:h-34 text-[#A8977A] animate-spin" style={{ animationDuration: '8s' }}>
                  <ellipse cx="462.3" cy="133.2" rx="34.2" ry="34.2" fill="currentColor"/>
                  <path d="M461.7,95.5c1.7,0,3.3,0.1,4.9,0.2c1-2.1,2.6-4.7,4.8-7.2c-0.4-1.5-0.8-3.1-0.8-5.2c0.1-4.8,1.9-7,3-8
                    c0.2-0.2,0-0.5-0.2-0.4c-4.3,0.9-11.2,4.8-12.4,13.9c-0.3,2.6-0.2,4.8,0.2,6.7C461.4,95.5,461.5,95.5,461.7,95.5z" fill="currentColor"/>
                  <path d="M436.2,95.5c0.3,3.4,1.3,6.3,2.2,8.5c5.1-4.2,11.3-7,18.1-8.1c0.4-0.1,0.7-0.1,1.1-0.1c-0.3-3.6,0.4-6.9,1-8.5
                    c1.1-3,2.1-7.2,1.5-11.6c-0.5-3.8-2.3-7-10.5-12.1c-6.8-4.2-7.5-11.6-7.5-14.1c0-0.3-0.3-0.4-0.5-0.1c-5.9,8.3-3.9,18.5-0.3,23.9
                    c3.7,5.5-0.1,9.8-0.1,9.8S435.6,88.6,436.2,95.5z" fill="currentColor"/>
                  <path d="M432.1,110.5c1.1-1.4,2.2-2.8,3.5-4c-1-2.1-2.1-5-2.7-8.3c-1.4-0.6-2.9-1.3-4.6-2.7c-3.7-3-4.3-5.9-4.3-7.3
                    c0-0.3-0.4-0.3-0.5-0.1c-2,4-3.2,11.8,3.1,18.4C428.5,108.3,430.4,109.6,432.1,110.5z" fill="currentColor"/>
                  <path d="M488.5,106.1l0.1,0.1c2.6-2.5,5.6-4,7.3-4.5c3-1,6.9-2.8,10-6.1c2.6-2.8,4.1-6.1,3-15.7
                    c-0.9-7.9,4.4-13.1,6.3-14.7c0.2-0.2,0.1-0.5-0.2-0.5c-10.2,0.6-16.9,8.5-18.8,14.7c-2,6.3-7.7,6-7.7,6s-8-0.9-13,3.9
                    c-2.4,2.3-4.1,4.9-5.2,7C477.1,97.8,483.4,101.1,488.5,106.1z" fill="currentColor"/>
                  <path d="M411.7,136.2c-4.7,1-7.3-0.3-8.4-1.2c-0.2-0.2-0.5,0.1-0.4,0.3c1.8,4,7.2,9.9,16.3,9c2.6-0.2,4.7-0.9,6.5-1.7
                    c-0.4-1.7-0.8-3.5-1-5.3c-2.3-0.5-5.2-1.5-8.1-3.1C415.3,135.1,413.8,135.8,411.7,136.2z" fill="currentColor"/>
                  <path d="M502.9,112.4c0.9-1.3,2-2.6,3.6-3.9c3.8-2.9,6.7-2.9,8.1-2.6c0.2,0.1,0.4-0.3,0.2-0.4
                    c-3.4-2.8-10.8-5.8-18.6-1c-2.2,1.3-3.9,2.8-5.2,4.3c1.2,1.4,2.2,2.8,3.2,4.3C496.5,112.7,499.5,112.3,502.9,112.4z" fill="currentColor"/>
                  <path d="M402.2,112.1c6.6,0.5,7.6,6.2,7.6,6.2s0.9,8,6.7,11.8c2.8,1.8,5.7,2.9,8,3.6c-0.1-7.3,2-14.2,5.6-20.1
                    c-3-2-5.2-4.6-6.1-6.1c-1.6-2.7-4.3-6.1-8.1-8.4c-3.3-2-6.9-2.6-16,0.6c-7.5,2.7-13.8-1.4-15.7-2.9c-0.2-0.2-0.5,0-0.4,0.3
                    C386.6,106.9,395.8,111.6,402.2,112.1z" fill="currentColor"/>
                  <path d="M431.3,167c3.2-1,5.8-2.6,7.8-4.1c-5.5-4.3-9.8-10.2-12.3-16.9c-3.5,1.1-6.8,1.1-8.5,0.9
                    c-3.2-0.4-7.5-0.4-11.6,1.1c-3.6,1.4-6.3,3.8-9.5,12.9c-2.6,7.5-9.7,9.9-12.1,10.5c-0.3,0.1-0.3,0.4,0,0.5c9.5,3.9,18.9-0.3,23.3-5
                    c4.5-4.8,9.5-2.1,9.5-2.1S424.7,169.2,431.3,167z" fill="currentColor"/>
                  <path d="M503.8,152c1.5-0.1,3.2-0.1,5.3,0.4c4.6,1.1,6.4,3.4,7.1,4.7c0.1,0.2,0.5,0.1,0.5-0.1
                    c0.1-4.4-2.2-12-10.8-15.2c-2.4-0.9-4.6-1.3-6.6-1.3c-0.4,1.8-0.8,3.5-1.4,5.2C499.7,147.2,501.9,149.3,503.8,152z" fill="currentColor"/>
                  <path d="M548.7,131.8c-6.8-7.6-17.2-7.9-23.2-5.6c-6.2,2.4-9.5-2.3-9.5-2.3s-4.3-6.8-11.2-7.7
                    c-3.3-0.4-6.4-0.2-8.7,0.3c2.5,5,3.8,10.4,3.9,16.2c0,1.5,0,3-0.2,4.4c3.6,0.5,6.6,1.9,8.1,2.9c2.7,1.7,6.5,3.7,11,4
                    c3.8,0.3,7.3-0.6,14.2-7.5c5.6-5.7,13-4.7,15.4-4.2C548.7,132.3,548.9,132,548.7,131.8z" fill="currentColor"/>
                  <path d="M507.2,178.3c-5.7-3.3-4.1-8.8-4.1-8.8s2.6-7.6-0.9-13.6c-1.7-2.9-3.9-5.1-5.7-6.7
                    c-3,6.4-7.8,11.9-13.7,15.7c1.8,3.1,2.6,6.4,2.8,8.1c0.3,3.2,1.2,7.4,3.7,11.1c2.1,3.2,5.1,5.3,14.7,6.4c7.9,0.9,11.8,7.2,12.9,9.4
                    c0.1,0.2,0.5,0.2,0.5-0.1C519,189.8,512.7,181.5,507.2,178.3z" fill="currentColor"/>
                  <path d="M479.6,166.7c-1.6,0.8-3.2,1.5-4.9,2.1c0,2.3-0.3,5.4-1.2,8.6c1,1.2,2.1,2.5,3,4.4
                    c2,4.3,1.3,7.1,0.7,8.5c-0.1,0.2,0.2,0.4,0.4,0.3c3.5-2.7,8-9.2,5.1-17.9C481.8,170.3,480.7,168.3,479.6,166.7z" fill="currentColor"/>
                  <path d="M444.1,173.8c1.4-2.2,2.3-4.2,2.8-6.1c-1.6-0.7-3.2-1.6-4.7-2.5c-1.8,1.5-4.4,3.1-7.5,4.5
                    c-0.3,1.5-0.6,3.2-1.6,5.1c-2.1,4.2-4.8,5.5-6.2,5.8c-0.2,0.1-0.2,0.4,0,0.5C431.2,182,439.1,181.5,444.1,173.8z" fill="currentColor"/>
                  <path d="M462.9,170.9c-4.4,0.1-8.7-0.6-12.7-2c-1.3,3.4-3.4,6-4.6,7.2c-2.3,2.2-5,5.6-6.4,9.8
                    c-1.2,3.7-1,7.3,4.2,15.5c4.3,6.7,1.7,13.7,0.7,16c-0.1,0.2,0.1,0.5,0.4,0.3c9-4.9,11.5-15,10.6-21.4c-1-6.5,4.3-8.7,4.3-8.7
                    s7.6-2.7,10-9.2c1.2-3.1,1.6-6.2,1.7-8.6c-1,0.2-2,0.4-3.1,0.6C466.3,170.8,464.6,170.9,462.9,170.9z" fill="currentColor"/>
                </svg>
              </div>
                <div>
                  <h2 className="italic text-3xl lg:text-[42px] font-light text-[#A8977A] leading-tighter tracking-tighter mt-28 lg:mt-20">
                    Software<span className="font-normal"> Engineering</span>
                    <br />
                    with Passion, Creativity
                    <br />
                    <span className="font-normal">and </span>Innovation.
                  </h2>
                </div>
              </motion.div>

              {/* Portrait Image - Order 2 on mobile, normal position on desktop */}
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:col-span-3 bg-[#161711] rounded-[20px] overflow-hidden h-[400px] lg:h-full order-2"
              >
                <img
                  src="/portrait.png"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Second Row: About and Contact */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:h-[33%]">
                {/* About Box - Order 3 on mobile, normal on desktop */}
                <motion.div 
                  initial={{ x: 150, y: -200, opacity: 0 }}
                  animate={{ x: 0, y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
                  className="bg-[#161711] rounded-[20px] p-6 lg:py-5 lg:px-4 flex flex-col h-auto lg:h-full order-3 lg:order-0"
                >
                <p className="text-[#A8977A] text-[13px] leading-relaxed lg:mt-10 lg:mr-10">
                  <span className="text-[#A8977A] font-normal">Abir Elbahri</span> is a 5th year computer engineering student specializing in 
                  MERN stack development and DevOps. With experience at ARK-X Talent Factory, IT Advisor, and Open Lluna, 
                  she builds innovative web applications and cloud solutions. 
                </p>
              </motion.div>

              {/* Contact Me Box */}
              <motion.div 
                initial={{ x: 0, y: -200, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=elbahri.abir1@gmail.com&su=Let\'s Work Together&body=Hi Abir,%0D%0A%0D%0AI would like to discuss...', '_blank')}                 
                onMouseEnter={(e) => {
                  const arrow = e.currentTarget.querySelector('svg')
                  if (arrow) {
                    arrow.style.transform = 'translate(10px, -14px)'
                  }
                }}
                onMouseLeave={(e) => {
                  const arrow = e.currentTarget.querySelector('svg')
                  if (arrow) {
                    arrow.style.transform = 'translate(0px, 0px)'
                  }
                }}
                className="bg-[#A8977A] rounded-[20px] p-6 cursor-pointer h-[200px] lg:h-full relative order-4"
              >
                <div className="flex flex-col h-full">
                  <p className="text-[#45372C] text-xs mb-1">Let's work together</p>
                  <h3 className="tracking-tighter text-4xl lg:text-5xl xl:text-5xl text-[#45372C] mt-20 lg:mt-21">
                    Contact <span className="italic">me</span>
                  </h3>
                </div>
                <svg
                  className="w-15 h-15 lg:w-10 lg:h-10 text-[#45372C] absolute top-4 right-4 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.25}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M17 7H7M17 7V17"
                  />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* RIGHT SECTION - Contains Projects and Socials */}
          <div className="lg:col-span-4 flex flex-col gap-3 h-auto lg:h-full order-4">
            {/* Scrollable Projects Section - 85% height */}
            <motion.div 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="bg-[#161711] rounded-[20px] overflow-hidden flex flex-col z-10 py-3 px-4 h-[80%]"           
                >
              {/* Projects Title */}
              <h2 className="text-xl font-normal text-[#A8977A] px-3 pb-2">Projects</h2>

              <div className="rounded-[20px] mb-2 relative p-3">
                <img
                  src={currentProjectImage}
                  alt='projects'
                  className="w-full h-50 object-cover rounded-[20px]"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-[#45372C]/40 rounded-[20px] m-3"></div>
                {expandedSection && projects.find(p => p.id === expandedSection)?.link && (
                  <a 
                    href={projects.find(p => p.id === expandedSection).link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#45372C'
                      e.currentTarget.style.color = '#A8977A'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#A8977A'
                      e.currentTarget.style.color = '#45372C'
                    }}
                    className="absolute bottom-6 right-5 px-4 py-2 bg-[#A8977A] text-[#45372C] rounded-full text-[11px] transition-all duration-300 backdrop-blur-sm z-10"
                  >
                    View More
                  </a>
                )}
              </div>
              
              <div className="overflow-y-auto h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {projects.map((project, index) => (
                  <div key={project.id} className={index > 0 ? 'border-t border-[#45372C]' : ''}>                  
                    <div
                      onClick={() => {
                        const isExpanding = expandedSection !== project.id
                        setExpandedSection(isExpanding ? project.id : null)
                        setCurrentProjectImage(isExpanding ? project.image : "/projects2.jpeg")
                      }}                      
                      className="w-full p-3 flex justify-between items-start cursor-pointer transition-colors"
                    >
                      <h3 className="text-lg font-normal text-[#A8977A]">{project.title}</h3>
                      <span className="text-[#A8977A] text-sm ml-2">
                        {expandedSection === project.id ? (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </span>
                    </div>
                    
                    {expandedSection === project.id && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-3 pb-3"
                      >
                        <p className="text-[#A8977A] text-xs leading-relaxed mb-2">
                          {project.description}
                        </p>
                        <div className="mb-2">
                          <p className="text-[#A8977A] text-[10px] font-semibold mb-1">
                            Technologies: <span className="">{project.tech}</span>
                          </p>
                        </div>
                        <p className="text-[#A8977A] text-[10px] italic font-serif italic">{project.company}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Media Icons - 20% height */}
            <motion.div 
              initial={{ x: -150, y: -200, opacity: 0 }}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
              className="lg:h-[12%]"
            >
              <div className="bg-[#161711] rounded-[20px] flex p-6 lg:p-0 justify-center gap-8 h-full items-center">
                <a href="https://www.linkedin.com/in/abir-elbahri" target="_blank" rel="noopener noreferrer" className="text-[#A8977A] hover:text-[#45372C] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://github.com/Abirelbahri" target="_blank" rel="noopener noreferrer" className="text-[#A8977A] hover:text-[#45372C] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/elbahri.aber" target="_blank" rel="noopener noreferrer" className="text-[#A8977A] hover:text-[#45372C] transition-colors">
                  <Instagram className="w-5 h-5"/>
                </a>
                <a href="#" className="text-[#A8977A] hover:text-[#45372C] transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}