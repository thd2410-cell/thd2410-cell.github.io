import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const projects = [
  {
    title: 'Shoppy',
    type: 'Team Project / Web Service',
    desc: '실시간 공유 쇼핑을 주제로 만든 웹 서비스입니다. React 기반 프론트엔드와 Spring Boot 백엔드, WebSocket/OpenVidu 등 실시간 기능을 포함한 프로젝트입니다.',
    stack: ['React', 'TypeScript', 'Spring Boot', 'WebSocket', 'OpenVidu', 'MySQL', 'Docker'],
    repo: 'https://github.com/thd2410-cell/Shoppy',
  },
  {
    title: 'DailyLog',
    type: 'Personal Project',
    desc: '일상과 기록을 정리하기 위한 프로젝트입니다. 앞으로 기능과 설명을 더 채워가며 포트폴리오용 프로젝트 카드로 개선할 예정입니다.',
    stack: ['Project Log', 'Documentation', 'GitHub'],
    repo: 'https://github.com/thd2410-cell/Dailylog',
  },
]

function App() {
  return (
    <>
      <header className="header">
        <a className="logo" href="#top">song irum</a>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <p className="label">Portfolio</p>
          <h1>안녕하세요. 개발자로 성장 중인 song irum입니다.</h1>
          <p className="lead">
            웹 서비스와 서버 개발을 공부하며, 직접 만들고 배포해보는 과정으로 성장하고 있습니다.
            이 페이지는 제가 만든 프로젝트와 기록을 정리하는 포트폴리오입니다.
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">프로젝트 보기</a>
            <a className="button" href="https://github.com/thd2410-cell" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </section>

        <section id="about" className="section about">
          <div>
            <p className="label">About</p>
            <h2>작게 나누고, 끝까지 구현하는 개발자</h2>
          </div>
          <p>
            기능을 그냥 만드는 것보다 “왜 필요한지”, “어떻게 안정적으로 동작하게 할지”를 고민하려고 합니다.
            현재는 React 기반 프론트엔드, Spring Boot 백엔드, 배포와 협업 흐름을 중심으로 경험을 쌓고 있습니다.
          </p>
        </section>

        <section className="section skills">
          <p className="label">Skills</p>
          <h2>Tech Stack</h2>
          <div className="skillList">
            {['React', 'JavaScript', 'TypeScript', 'Spring Boot', 'Java', 'MySQL', 'Git', 'Docker'].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <p className="label">Projects</p>
          <h2>Selected Projects</h2>
          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="projectTop">
                  <p>{project.type}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="projectDesc">{project.desc}</p>
                <div className="stack">
                  {project.stack.map((item) => <span key={item}>{item}</span>)}
                </div>
                <a className="projectLink" href={project.repo} target="_blank" rel="noreferrer">GitHub Repository →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="label">Contact</p>
          <h2>더 자세한 코드는 GitHub에서 확인할 수 있습니다.</h2>
          <a className="button primary" href="https://github.com/thd2410-cell" target="_blank" rel="noreferrer">github.com/thd2410-cell</a>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} song irum. Built with React.</p>
      </footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
