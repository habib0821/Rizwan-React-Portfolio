import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          {toggle === 'thumbnail' ?
            <ToggleButton active value="thumbnail" onClick={() => setToggle('thumbnail')}>Thumbnail</ToggleButton>
            :
            <ToggleButton value="thumbnail" onClick={() => setToggle('thumbnail')}>Thumbnail</ToggleButton>
          }
          {toggle === 'poster' ?
            <ToggleButton active value="poster" onClick={() => setToggle('poster')}>Poster</ToggleButton>
            :
            <ToggleButton value="poster" onClick={() => setToggle('poster')}>Poster</ToggleButton>
          }
          {toggle === 'card' ?
            <ToggleButton active value="card" onClick={() => setToggle('card')}>Card</ToggleButton>
            :
            <ToggleButton value="card" onClick={() => setToggle('card')}>Card</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects