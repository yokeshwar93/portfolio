import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput, TerminalInput } from 'react-terminal-ui';

const commands = [
          <TerminalOutput><span className='available-commands'>view-resume</span></TerminalOutput>,
          <TerminalOutput><span className='available-commands'>about</span></TerminalOutput>,
          <TerminalOutput><span className='available-commands'>primary-skills</span></TerminalOutput>,
          <TerminalOutput><span className='available-commands'>secondary-skills</span></TerminalOutput>,
          <TerminalOutput><span className='available-commands'>experience</span></TerminalOutput>,
          <TerminalOutput><span className='available-commands'>projects</span></TerminalOutput>,
          <TerminalOutput><span className='available-commands'>social-links</span></TerminalOutput>,
]

const availableCommands = [
    <TerminalOutput><span className='command-title'>The following commands will help you to learn more about me:</span>
        <span>
            (Type help to learn more)
        </span>
    </TerminalOutput>,
          <TerminalOutput></TerminalOutput>,
          ...commands
]

const primarySkills = [
    'React',
    'Redux',
    'Typescript',
    'Javascript',
    'Nodejs',
    'Nestjs',
    'HTML',
    'CSS',
    'Git',
    'GCP',
    'AWS',
    'postgresql',
    'MongoDb',
]

const secondarySkills = [
    'CI/CD',
    'Cypress',
    'Supertest',
    'Jenkins',
    'Elastic',
    'Kibana',
    'Docker',
    'Kubernetes',
    'OpenAPI',
    'Langchain',
    'OpenAI',
    'Jest',
    'Github Actions',
    'Product Management'
]

const experiences = [
    {
        name: 'Marfeel',
        position: 'Senior Full stack Engineer',
        location: 'Barcelona, Spain',
        date: 'May 2023 - Dec 2023'
    },
    {
        name: 'Glovo',
        position: 'Software Engineer ||',
        location: 'Barcelona, Spain',
        date: 'Jun 2022 - Mar 2023'
    },
    {
        name: 'Walmart',
        position: 'Software Engineer |||',
        location: 'Chennai, India',
        date: 'Jun 2020 - May 2022'
    },
    {
        name: 'AgileTech Info Solutions',
        position: 'Full stack Engineer',
        location: 'Chennai, India',
        date: 'May 2019 - Jun 2020'
    },
    {
        name: 'Full Creative',
        position: 'Software Engineer',
        location: 'Chennai, India',
        date: 'May 2015 - Apr 2019'
    }
]

const projects = [
    {
        name: 'Marfeel Compass App',
        description: 'Web application for news companies to handle digital space.',
        stack: 'React/ TypeScript/ Node JS/ Postgres/ ClickHouse.'
    },
    {
        name: 'Partner Web App - Glovo',
        description: 'Web applica􏰁on for business owners to create and track orders in real-time.',
        stack: 'Vue.js/ TypeScript/ OpenAPI/ Datadog/ GitHub Ac􏰁ons.'
    },
    {
        name: 'SAMS Club Web App - Walmart',
        description: 'Web applica􏰁on for viewing different reports of sales numbers.',
        stack: 'React/ Redux/ JavaScript/ Node JS/ Java/ Spring boot/ MySQL.'
    }
]

const socials = [
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/connectyokesh/'
    },
    {
        name: 'Github',
        link: 'https://github.com/yokeshwar93'
    }
]
const PrimarySkillsComponent = () => {
    return (
        <div className='primary-skills-div'>
            {primarySkills.map(skill => <div className='primary-skills-content'>{skill}</div>)}
        </div>
    )
}
const SecondarySkillsComponent = () => {
    return (
        <div className='primary-skills-div'>
            {secondarySkills.map(skill => <div className='secondary-skills-content'>{skill}</div>)}
        </div>
    )
}

const ExperienceComponent = () => {
    return (
        <div className='experience-div'>
            {experiences.map(experience => (
                <div className='experience-inner'>
                    <p className='experience-name'>{experience.name}</p>
                    <p className='experience-position'>{experience.position}</p>
                    <p className='experience-location'>{experience.location}</p>
                    <p className='experience-date'>{experience.date}</p>
                </div>
            ))}
        </div>
    )
}

const ProjectsComponent = () => {
    return (
        <div>
            {projects.map(project => (
                <div className='projects-div'>
                    <p className='projects-name'>{project.name}</p>
                    <p className='projects-description'>{project.description}</p>
                    <p className='projects-stack'>{project.stack}</p>
                </div>
            ))}
        </div>
    )
}

const SocialComponent = () => {
    return (
        <div>
            {socials.map(social => (
                <a className='linkedIn' href={social.link} target='_blank'>{social.name}</a>
            ))}
        </div>
    )
}

const TerminalComponent = (props = {}) => {
        const [colorMode, setColorMode] = useState(ColorMode.Dark);
        const [lineData, setLineData] = useState([
          <TerminalOutput>Hi there, This is <span className='name'>Yokesh</span> and welcome to my protfolio website!&#128075;</TerminalOutput>,
          <TerminalOutput></TerminalOutput>,
          ...availableCommands
        ]);
      
        function toggleColorMode (e) {
          e.preventDefault();
          setColorMode(colorMode === ColorMode.Light ? ColorMode.Dark : ColorMode.Light);
        }
      
        function onInput (input) {
            let ld = [...lineData];
            ld.push(<TerminalInput>{input}</TerminalInput>);
            const command = input.toLocaleLowerCase();
            switch(command) {
                case 'help':
                    ld.push(...availableCommands);
                    break;
                case 'about':
                    ld.push(
                    <div className='about-div'>
                        <p>
                            As a <text className='highlight'>Senior Full Stack Developer</text>, I work on developing and maintaining web applications that enhance
                             the <text className='highlight'>user experience</text> and <text className='highlight'>drive business impact</text>. I use my skills in 
                             <text className='highlight'> Reactjs, Typescript, Nodejs </text>, and 
                             other web technologies to create <text className='highlight'>responsive, dynamic, and interactive web pages</text> that meet the client's
                             requirements and expectations.
                        </p> 
                        <p>
                            I am also a <text className='highlight'>Certified Scrum Developer</text> and <text className='highlight'>Scrum Master</text>, 
                            which enables me to <text className='highlight'>collaborate effectively</text> with 
                            my team and deliver <text className='highlight'>high-quality products</text> in an agile environment. 
                            I have over <text className='highlight'>9+ years</text> of experience in software engineering, 
                            including a stint as the CEO of Gozo Virtual Experiences, a startup that 
                            offered immersive and personalised virtual tours of various destinations. 
                            I am passionate about <text className='highlight'>generating new ideas, solving problems, and 
                            learning from failures</text>. My goal is to <text className='highlight'>create innovative 
                            and scalable solutions that make an impact</text>.
                        </p>
                    </div>);    
                    break;  
                case 'primary-skills':
                    ld.push(PrimarySkillsComponent())    
                    break;  
                case 'secondary-skills':
                    ld.push(SecondarySkillsComponent())    
                    break;
                case 'experience':
                    ld.push(ExperienceComponent());
                    break;  
                case 'projects':
                    ld.push(ProjectsComponent());
                    break;                   
                case 'view-resume':
                    window.open('https://drive.google.com/file/d/12TCmlzLR_WwE7brtWOK3YGQXdK0Ux1on/view?usp=sharing','_blank');
                    break;    
                case 'clear':
                    ld = [];
                    break;
                case 'social-links':
                    ld.push(SocialComponent());
                    break;    
                default:
                    ld.push(
                        <TerminalOutput>
                            <div className='default-command'>
                            Unrecognized command! Available commands are :
                            </div>
                        </TerminalOutput>
                    )
                    ld.push(...commands)

                     

            }
        //   if (input.toLocaleLowerCase().trim() === 'view-source') {
        //     ld.push(<TerminalInput><b>TEst</b></TerminalInput>)
        //   } else if (input.toLocaleLowerCase().trim() === 'view-react-docs') {
        //     window.open('https://reactjs.org/docs/getting-started.html', '_blank');
        //   } else if (input.toLocaleLowerCase().trim() === 'clear') {
        //     ld = [];
        //   } else if (input) {
        //     ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>);
        //   }
          setLineData(ld);
        }
      
        const redBtnClick = () => {
          console.log("Clicked the red button.");
        }
      
        const yellowBtnClick = () => {
          console.log("Clicked the yellow button.");
        }
      
        const greenBtnClick = () => {
          console.log("Clicked the green button.");
        }
      
        const btnClasses = ['btn'];
        if (colorMode === ColorMode.Light) {
          btnClasses.push('btn-dark');
        } else {
          btnClasses.push('btn-light');
        }
        return (
          <div className="container" >
            {/* <div className="d-flex flex-row-reverse p-2">
              <button className={ btnClasses.join(' ') } onClick={ toggleColorMode } >Enable { colorMode === ColorMode.Light ? 'Dark' : 'Light' } Mode</button>
            </div> */}
            <Terminal 
              name=''
              colorMode={ colorMode }  
              onInput={ onInput } 
              redBtnCallback={ redBtnClick } 
              yellowBtnCallback={ yellowBtnClick } 
              greenBtnCallback={ greenBtnClick }
            >
              {lineData}
            </Terminal>
          </div>
        )
}

export default TerminalComponent;