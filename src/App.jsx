"use client"

import { useState } from "react"
import { Instagram, Linkedin, Github } from "lucide-react"
import { motion } from "framer-motion"

export default function App() {
  const [expandedSection, setExpandedSection] = useState("marketplace")

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
    }
  ]

  return (
    <div className="h-screen bg-[#45372C] text-[#A8977A] p-3 overflow-hidden">
      <div className="max-w-[1400px] mx-auto h-full flex flex-col">
        {/* Header - No animation, stays still */}
        <div className="flex justify-between items-center mb-3 mt-1 py-2 px-6 bg-[#161711] rounded-[20px]">
          <h1 className="text-xl font-light text-[#A8977A] italic">Abir <span className="font-normal not-italic">Elbahri</span></h1>
            <a 
              href="/abirElbahri_resume.pdf" 
              download="abirElbahri_resume.pdf"
              className="text-[#A8977A] text-medium transition-colors hover:text-[#45372C] cursor-pointer flex items-center gap-2"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" 
                />
              </svg>
              <span>Resume</span>
            </a>
        </div>

        {/* First Row: Hero Text, Portrait, Projects */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-2" style={{height: '53%'}}>
          {/* Hero Text - Slides from portrait position (from right) */}
          <motion.div 
            initial={{ x: 350, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="md:col-span-4 bg-[#161711] rounded-[20px] p-3 flex flex-col justify-between h-full relative"
          >
            <div className="absolute top-3 right-3">
              <svg viewBox="0 0 100 100" className="w-20 h-20 text-[#A8977A]">
                {[...Array(24)].map((_, i) => {
                  const angle = (i * 360) / 24
                  const rad = (angle * Math.PI) / 180
                  const x1 = 50 + 35 * Math.cos(rad)
                  const y1 = 50 + 35 * Math.sin(rad)
                  const x2 = 50 + 45 * Math.cos(rad)
                  const y2 = 50 + 45 * Math.sin(rad)
                  return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" />
                })}
              </svg>
            </div>
            <div>
              <h2 className="text-4xl font-normal text-[#A8977A] leading-tight mt-30">
                <span className="">Software Engineering</span>
                <br />
                with Passion
                <br />
                <span className="">and Innovation.</span>
              </h2>
            </div>
          </motion.div>

          {/* Portrait Image - Appears first */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="md:col-span-3 bg-[#161711] rounded-[20px] overflow-hidden h-full"
          >
            <img
              src="/portrait.png"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Scrollable Projects Section - Slides from portrait (from left) */}
          <motion.div 
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 bg-[#161711] rounded-[20px] overflow-hidden flex flex-col z-10 py-3 px-4" 
            style={{height: '146%'}}
          >
            <div className="overflow-y-auto h-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {projects.map((project, index) => (
                  <div key={project.id} className={index > 0 ? 'border-t-[1.5px] border-[#A8977A]' : ''}>                  
                    <div
                      onClick={() => setExpandedSection(project.id)}
                      className={`w-full p-3 flex justify-between items-start cursor-pointer transition-colors ${
                        expandedSection === project.id ? '' : ''
                      }`}
                    >
                      <h3 className="text-medium font-normal text-[#A8977A]">{project.title}</h3>
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
                        <div className="bg-[#161711] rounded-[20px] overflow-hidden mb-2 relative">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />

                        <div className="absolute top-0 left-0 right-0 h-48 bg-[#45372C]/60"></div>

                          {project.link && (
                            <a 
                              href={project.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="absolute bottom-2 right-2 px-3 py-1 bg-[#45372C] text-[#A8977A] rounded-full text-xs transition-colors backdrop-blur-sm z-10"
                            >
                              View More
                            </a>
                            
                          )}
                        </div>
                        <p className="text-[#A8977A] text-xs leading-relaxed mb-2">
                          {project.description}
                        </p>
                        <div className="mb-2">
                          <p className="text-[#A8977A] text-[10px] font-semibold mb-1">Technologies: <span className="text-[#A8977A] text-[10px] font-normal">{project.tech}</span></p>

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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-2" style={{height: '35%'}}>

          {/* About Box - Slides from portrait position (from top-right) */}
          <motion.div 
            initial={{ x: 150, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="md:col-span-3 bg-[#161711] rounded-[20px] py-5 pl-4 flex flex-col h-full"
          >
            <p className="text-[#A8977A] text-[10px] leading-relaxed mt-10 mr-10">
              <span className="text-[#A8977A] font-normal">Abir Elbahri</span> is a 5th year computer engineering student specializing in 
              MERN stack development and DevOps. With experience at ARK-X Talent Factory, IT Advisor, and Open Lluna, 
              she builds innovative web applications and cloud solutions. Currently seeking a 6-month internship to apply 
              her skills in real-world projects.
            </p>
          </motion.div>

        {/* Contact Me Box - Slides from portrait position (from top) */}
        <motion.div 
          initial={{ x: 0, y: -200, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8, ease: "easeOut" }}
          className="md:col-span-4 bg-[#A8977A] rounded-[20px] p-6 cursor-pointer hover:bg-[#161711] transition-colors group h-full relative"
        >
          <div className="flex flex-col h-full">
            <p className="text-[#45372C] text-xs mb-1 group-hover:text-[#A8977A]">Let's work together</p>
            <h3 className="text-xl md:text-4xl lg:text-5xl font-normal text-[#45372C] mt-21 group-hover:text-[#A8977A]">
              Contact <span className="">me</span>
            </h3>
          </div>
            <svg
              className="w-6 h-6 md:w-10 md:h-10 text-[#45372C] group-hover:text-[#A8977A] group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform absolute top-4 right-4"
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

          {/* Right Column: Social Media - Slides from portrait position (from top-left) */}
          <motion.div 
            initial={{ x: -150, y: -200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
            className="md:col-span-5 flex flex-col gap-3 h-full mt-35"
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