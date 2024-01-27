import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { motion } from 'framer-motion';
import name from '../assets/name.svg'
import tpblogo from '../assets/tpblogo.jpg'
import ryanlogo from '../assets/ryanlogo.png'
import somlogo from '../assets/somlogo.jpg'

import NameSvg from '../assets/nameSvg.jsx'
import typing from "../assets/typing.gif";
import coding from "../assets/Coding.gif";
import learning from "../assets/Learning.gif";
import debug from "../assets/Bug_fixing.gif";

import alumlogo from '../assets/alumlogo.jpeg';
import mugenlogo from '../assets/mugenlogo.jpeg';
import trafflogo from '../assets/trafficlogo.jpeg';
import cslogo from '../assets/cslogo.png';
import firslogo from '../assets/firslogo.jpeg';
import cclogo from '../assets/cclogo.png';
import transllogo from '../assets/transl_logo.png';
import abtlogo from '../assets/abtlogo.jpeg';


import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import opencv from '../assets/opencv.svg'
import java from '../assets/java.png'
import js from '../assets/js.png'
import mongo from '../assets/mongodb.svg'
import firebase from '../assets/firebase.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import flutter from '../assets/flutter.svg'
import python from '../assets/python.png'
import pytorch from '../assets/pytorch.svg'
import redux from '../assets/redux.svg'
import sqlite from '../assets/sqlite.svg'
import figma from '../assets/figma.svg'


import { Carousel } from 'react-responsive-carousel';


const EduCard = ({name,logo,level,percent}) => {
  return(
    <div className={styles.card}>
      <div style={{display:'flex',columnGap:'1.5rem'}}>
        <div>
          <Image src={logo} style={{width:'4rem',height:'4rem',borderRadius:10}} />
        </div>
        <div>
          <div className={styles.heading} style={{fontSize:18,fontWeight:700,marginBottom:'0.2rem'}}>{name}</div>
          <div style={{fontWeight:300}}>{level}</div>
          <div style={{fontWeight:300}}>{percent}</div>
        </div>
      </div>
    </div>
  )
}

const ProjCard = ({name,logo,desc,tech,link}) => {
  return(
    <a href={link}>
    <div className={styles.card}>
      <div style={{display:'flex',columnGap:'1.5rem'}}>
        <div>
          <Image src={logo} style={{width:'6rem',height:'6rem',borderRadius:10}} />
        </div>
        <div>
          <div className={styles.heading} style={{fontSize:18,fontWeight:700,marginBottom:'0.2rem'}}>{name}</div>
          <div style={{fontWeight:300,fontSize:12}}>{desc}</div>
          <div style={{display:'flex',columnGap:'1rem',marginTop:'1rem'}}>
          {tech.map((tech) => {
            return(
              <div>
                <Image src={tech} style={{width:'2rem',height:'2rem',borderRadius:5}} />
              </div>
            )
          })}
          </div>
        </div>
      </div>
    </div>
    </a>
  )
}

export default function Home() {
  const navbar = {
    hidden: {
      y:-100,
      opacity:0,
      transition: {
        y: { stiffness: 1000, velocity: 1 },
        delay:0.1
      }
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: 1 },
        delay:0.1
      }
    },
  }

  const fields = {
    hidden: {
      y:100,
      opacity:0,
      transition: {
        y: { stiffness: 1000, velocity: 1 },
        delay:0.1
      }
    },
    visible: {
      y:0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: 1 },
        delay:0.1,
        duration:1
      }
    },
  }

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const projects = [
    {
      id:1,
      name: 'TranslAItor',
      desc: "Seamlessly bridge language gaps across 9+ Indian regional languages with instant translation on TranslAItor.",
      logo: transllogo,
      tech: [ react, firebase, pytorch, node, opencv],
      link: 'https://github.com/Tavion20/transl'
    },
    {
      id:2,
      name: 'MuGen',
      desc: "Explore limitless music creation through GAN-powered compositions.",
      logo: mugenlogo,
      tech: [ react, firebase, pytorch, node],
      link: 'https://github.com/Tavion20/MuGen'
    },
    {
      id:3,
      name: 'FIRS',
      desc: "Use FIRS to identify food from photos, obtain personalized portion recommendations, and maintain a healthy lifestyle.",
      logo: firslogo,
      tech: [ react, firebase, pytorch, node],
      link: 'https://github.com/Tavion20/FIRS'
    },
    {
      id:4,
      name: 'Alumni Connect',
      desc: "Empower alumni connections with our site, facilitating seamless organization and participation in diverse events",
      logo: alumlogo,
      tech: [ mongo, js, react, node],
      link: 'https://github.com/Tavion20/alumni-connect'
    },
    {
      id:5,
      name: 'Culinary Craft',
      desc: "Explore and craft culinary delights with an extensive recipe library and intuitive creation tools.",
      logo: cclogo,
      tech: [ react, sqlite],
      link: 'https://github.com/Tavion20/CulinaryCraft'
    },
    {
      id:6,
      name: 'CodeSpeed',
      desc: "Boost coding efficiency with our app designed to enhance typing speed for computer science students",
      logo: cslogo,
      tech: [ java ],
      link: 'https://github.com/Tavion20/CodeSpeed'
    },
    {
      id:7,
      name: 'TrafficEye',
      desc: "Stay road-safe with TrafficEye, it detects and predicts vehicle speed to ensure compliance with speed limits.",
      logo: trafflogo,
      tech: [ python, opencv],
      link: 'https://github.com/Tavion20/Vehicle-Detection-Opencv'
    },
    {
      id:8,
      name: 'AboutWheels',
      desc: "With AboutWheels' comprehensive car descriptions, you may make more intelligent judgments when buying a car.",
      logo: abtlogo,
      tech: [ html, css, js ],
      link: 'https://github.com/Tavion20/AboutWheels'
    },
  ]

  const skills = [
    react,
    node,
    opencv,
    java,
    js,
    mongo,
    firebase,
    html,
    css,
    flutter,
    python,
    pytorch,
    redux,
    sqlite,
    figma
  ]

  return (
    <>
    <div className={styles.mainbody}>
      <div className={styles.navbar}>
        <ul>

        <motion.li  initial="hidden" animate="visible" variants={navbar}>
          <a href="#">About</a>
        </motion.li>
        <motion.li  initial="hidden" animate="visible" variants={navbar}>
        <a href="#aca">Academics</a>
        </motion.li>
        <motion.li  initial="hidden" animate="visible" variants={navbar}>
        <a href="#proj">Projects</a>
        </motion.li>
        <motion.li  initial="hidden" animate="visible" variants={navbar}>
        <a href="#skill">Skills</a>
        </motion.li>
        <motion.li   initial="hidden" animate="visible" variants={navbar}>
        <a style={{color:'black',textShadow:'none',cursor:'default'}} href="#">a</a>
        </motion.li>
        </ul>
      </div>
      {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <hr style={{width:'30%'}}></hr>
      </div> */}
      <div id="about" className={styles.body}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <div style={{fontSize:22}}>Hello, I'm</div>
          <NameSvg  />
          <div style={{marginTop:'0.5rem'}}>A Developer from Mumbai</div>
          <div style={{marginTop:'0.5rem'}}>I have a keen Interest in Artificial intelligence (AI) and machine learning (ML) & Web Development</div>
          <motion.div className={styles.field} initial="hidden" animate="visible" variants={fields}>
            <TypeAnimation
              sequence={[
                'Computer Engineer;',
                10000,
                '010100010101110010',
                100,
              ]}
              wrapper="div"
              speed={50}
              className={styles.typer}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div className={styles.field} initial="hidden" animate="visible" variants={fields}>
          <TypeAnimation
            sequence={[
              '(Machine Learning Enthusiast)',
              10000,
              '111100010100',
              100,
            ]}
            wrapper="div"
            speed={50}
            className={styles.typer}
            repeat={Infinity}
          />
          </motion.div>
          <motion.div className={styles.field} initial="hidden" animate="visible" variants={fields}>
            <TypeAnimation
              sequence={[
                '<Full Stack Developer>',
                10000,
                '1000001010011',
                100,
              ]}
              wrapper="div"
              speed={50}
              className={styles.typer}
              repeat={Infinity}
            />
          </motion.div>
          <motion.div className={styles.field} initial="hidden" animate="visible" variants={fields}>
          <TypeAnimation
            sequence={[
              '{Software Developer}',
              10000,
              '0001011100111',
              100,
            ]}
            wrapper="div"
            speed={20}
            className={styles.typer}
            repeat={Infinity}
          />
          </motion.div>

          

        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flex:1}}>
          <div style={{padding:'auto'}}>
            <Image src={typing} style={{width:'25rem',height:'100%'}} />
          </div>
        </div>
      </div>
      
      <div className={styles.contact}>
        <motion.div style={{marginBottom:'1rem',fontSize:22}}>
          Contact Me
        </motion.div>
        <motion.div variants={container}
          initial="hidden"
          animate="visible" 
          style={{opacity:'10%',display:'flex',borderRadius:20,justifyContent:'space-around',alignItems:'center',paddingTop:'0rem',paddingBottom:'1rem',width:'25rem'}}>
            <a href="https://www.linkedin.com/in/tavion-fernandes-0b1196252">
            <motion.div className={styles.contactcard} variants={item}>
              <FaLinkedin size={50} />
            </motion.div>
            </a>
            <a href="https://github.com/Tavion20">
            <motion.div className={styles.contactcard} variants={item}>
              <FaGithub size={50} />
            </motion.div>
            </a>
            <a href="">
            <motion.div className={styles.contactcard} variants={item}>
              <FaPhoneAlt size={50} />
            </motion.div>
            </a>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBpDrvVldlcLdSwJwKzlmDQtmzDsNJBlVChGWlChlKXKVSccTHDnPfbpJMbjgrJcHzLqzdC">
            <motion.div className={styles.contactcard} variants={item}>
              <SiGmail size={60} />
            </motion.div>
            </a>

        </motion.div>
      </div>

      <div id="aca" style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',columnGap:'1rem',marginBottom:'1rem',paddingTop:'1rem'}}>
        <hr style={{width:'35%',height:2}}></hr>
        <div style={{fontSize:18}}>Academics</div>
        <hr style={{width:'35%',height:2}}></hr>
      </div>
      <div className={styles.academicscont}>
        <div style={{flex:1}}>
            <Image src={learning} style={{width:'25rem',height:'25rem'}} />
        </div>
        <div style={{flex:2,display:'flex',justifyContent:'center',alignItems:'center',columnGap:'1rem'}}>
          <div style={{flex:1,display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
            <svg className={styles.timeline} width="21" height="239" viewBox="0 0 21 239" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.5" cy="10.5" r="10.5" fill="#50D6A6"/>
            <circle cx="10.5" cy="119.5" r="10.5" fill="#50D6A6"/>
            <circle cx="10.5" cy="228.5" r="10.5" fill="#50D6A6"/>
            <line x1="10.5" y1="8" x2="10.5" y2="229" stroke="#50D6A6"/>
            </svg>
          </div>
          <div style={{flex:9}}>
            <EduCard name={'K J Somaiya Institute of Technology'} logo={somlogo} level={'B.Tech Computer Engineering'} percent={'Avg CGPA: 9.98'} />
            <EduCard name={'Shri T P Bhatia College of Science'} logo={tpblogo} level={'12th Grade'} percent={'Percentage: 93.83%'} />
            <EduCard name={'Ryan International School'} logo={ryanlogo} level={'10th Grade'} percent={'Percentage: 96%'} />
          </div>
        </div>
      </div>

      <div id='proj' style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',columnGap:'1rem',marginBottom:'1rem',paddingTop:'1rem'}}>
        <hr style={{width:'35%',height:2}}></hr>
        <div style={{fontSize:18}}>Projects</div>
        <hr style={{width:'35%',height:2}}></hr>
      </div>

      <div className={styles.projectscont}>
        <div className={styles.projcardscont}>
          <div style={{flex:1}}>
            {projects.map((project) => {
              if(project.id % 2 !=0)
              {
                return(
                  <ProjCard name={project.name} logo={project.logo} desc={project.desc} tech={project.tech} link={project.link} />
                )
              }
            })}
          </div>
          <div style={{flex:1}}>
            {projects.map((project) => {
                if(project.id % 2 ==0)
                {
                  return(
                    <ProjCard name={project.name} logo={project.logo} desc={project.desc} tech={project.tech} link={project.link} />
                  )
                }
              })}
          </div>
        </div>
        <div style={{flex:1}}>
            <Image src={coding} style={{width:'20rem',height:'20rem'}} />
            <Image src={debug} className={styles.debug} />
        </div>
      </div>

      <div id='skill' style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center',columnGap:'1rem',marginBottom:'1rem',paddingTop:'1rem'}}>
        <hr style={{width:'35%',height:2}}></hr>
        <div style={{fontSize:18}}>Skills</div>
        <hr style={{width:'35%',height:2}}></hr>
      </div>

      <div className={styles.grid}>
        <div className={styles.gridrow}>
          {skills.map((skill) => {
            return(
            <div className={styles.gridbox}>
              <Image src={skill} style={{width:'4rem',height:'4rem'}} />
            </div>
          )})}
        </div>
        
      </div>
          

      </div>
    </>
  );
}
