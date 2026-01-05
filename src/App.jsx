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
      id: "fullstack",
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

        {/* First Row: Hero Text, Portrait, Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3 lg:mb-3 lg:h-[53%]">
          {/* Hero Text - Order 1 on mobile, normal position on desktop */}
          <motion.div 
            initial={{ x: 350, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 bg-[#161711] rounded-[20px] p-6 lg:p-3 flex flex-col justify-between h-[300px] lg:h-full relative order-1"
          >
            <div className="absolute top-4 right-2">
              <svg viewBox="0 0 100 100" className="w-28 h-28 text-[#A8977A] animate-spin" style={{ animationDuration: '8s' }}>
                <circle cx="50" cy="50" r="20" fill="currentColor" />
                {[...Array(16)].map((_, i) => {
                  const angle = (i * 360) / 16
                  const rad = (angle * Math.PI) / 180
                  const baseX = 50 + 22 * Math.cos(rad)
                  const baseY = 50 + 22 * Math.sin(rad)
                  
                  // Create triangular rays
                  const length = 18
                  const width = 6
                  
                  const tipX = 50 + (22 + length) * Math.cos(rad)
                  const tipY = 50 + (22 + length) * Math.sin(rad)
                  
                  const perpAngle1 = rad + Math.PI / 2
                  const perpAngle2 = rad - Math.PI / 2
                  
                  const x1 = baseX + (width / 2) * Math.cos(perpAngle1)
                  const y1 = baseY + (width / 2) * Math.sin(perpAngle1)
                  const x2 = baseX + (width / 2) * Math.cos(perpAngle2)
                  const y2 = baseY + (width / 2) * Math.sin(perpAngle2)
                  
                  return (
                    <polygon
                      key={i}
                      points={`${x1},${y1} ${x2},${y2} ${tipX},${tipY}`}
                      fill="currentColor"
                    />
                  )
                })}
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

          {/* About Box - Order 3 on mobile only, hidden on desktop in this row */}
          <motion.div 
            initial={{ x: 150, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="bg-[#161711] rounded-[20px] py-5 px-4 flex flex-col h-auto order-3 lg:hidden"
          >
            <p className="text-[#A8977A] text-[13px] leading-relaxed">
              <span className="text-[#A8977A] font-normal">Abir Elbahri</span> is a 5th year computer engineering student specializing in 
              MERN stack development and DevOps. With experience at ARK-X Talent Factory, IT Advisor, and Open Lluna, 
              she builds innovative web applications and cloud solutions. 
            </p>
          </motion.div>

          {/* Scrollable Projects Section - Order 4 on mobile, normal position on desktop */}
         <motion.div 
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-4 bg-[#161711] rounded-[20px] overflow-hidden flex flex-col z-10 py-3 px-4 h-auto order-4" 
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
        </div>

        {/* Second Row: About, Contact, Social Media Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 mb-3 lg:mb-2 lg:h-[35%]">

          {/* About Box - Hidden on mobile, shown on desktop */}
          <motion.div 
            initial={{ x: 150, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="hidden lg:flex lg:col-span-4 bg-[#161711] rounded-[20px] py-5 px-4 flex-col h-auto lg:h-full"
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
                onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=elbahri.abir1@gmail.com&su=Let\'s Work Together&body=Hi Abir,%0D%0A%0D%0AI would like to discuss...', '_blank')}                 onMouseEnter={(e) => {
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
              className="lg:col-span-4 bg-[#A8977A] rounded-[20px] p-6 cursor-pointer h-[200px] lg:h-full relative"
            >
              <div className="flex flex-col h-full">
                <p className="text-[#45372C] text-xs mb-1">Let's work together</p>
                <h3 className="tracking-tighter text-4xl lg:text-5xl xl:text-5xl text-[#45372C] lg:mt-21">
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

          {/* Right Column: Social Media */}
          <motion.div 
            initial={{ x: -150, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col gap-3 h-auto lg:h-full"
          >
            {/* Social Media Icons */}
            <div className="bg-[#161711] rounded-[20px] p-5 flex justify-center gap-8">
              <a href="https://www.linkedin.com/in/abir-elbahri" target="_blank" rel="noopener noreferrer" className="text-[#A8977A] hover:text-[#45372C] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/Abirelbahri" className="text-[#A8977A] hover:text-[#45372C] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/elbahri.aber" className="text-[#A8977A] hover:text-[#45372C] transition-colors">
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
  )
}