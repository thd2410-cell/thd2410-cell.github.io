import React, { Suspense, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei'
import './styles.css'

function Orb() {
  const mesh = useRef()

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = state.clock.elapsedTime * 0.22
    mesh.current.rotation.y = state.clock.elapsedTime * 0.32
  })

  return (
    <Float speed={1.7} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={mesh} scale={1.65}>
        <icosahedronGeometry args={[1.4, 5]} />
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#2563eb"
          emissiveIntensity={0.25}
          roughness={0.22}
          metalness={0.55}
          distort={0.42}
          speed={1.5}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[4, 5, 6]} intensity={1.7} />
      <pointLight position={[-4, -2, 4]} intensity={2.2} color="#22d3ee" />
      <Stars radius={70} depth={35} count={1200} factor={4} fade speed={0.35} />
      <Suspense fallback={null}>
        <Orb />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.65} />
    </Canvas>
  )
}

const projects = [
  {
    tag: 'Portfolio',
    title: 'React + R3F Portfolio',
    desc: 'GitHub Pages에서 동작하는 React 기반 개인 포트폴리오입니다. 3D 오브젝트와 반응형 레이아웃을 적용했습니다.',
    link: 'https://github.com/thd2410-cell/thd2410-cell.github.io',
  },
  {
    tag: 'Coming Soon',
    title: '다음 프로젝트 추가 예정',
    desc: '토이 프로젝트, 서버 구축 기록, 자동화 스크립트, 공부 기록 등을 여기에 하나씩 쌓아가면 좋습니다.',
    link: 'https://github.com/thd2410-cell',
  },
]

function App() {
  return (
    <>
      <header className="header">
        <a className="brand" href="#top">song irum</a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">Developer Portfolio</p>
            <h1>만들면서 배우고, 기록하면서 성장하는 개발자</h1>
            <p className="lead">
              안녕하세요, song irum입니다. 웹 개발, 서버, 자동화처럼 실제로 쓸 수 있는 결과물을 만드는 데 관심이 있습니다.
            </p>
            <div className="actions">
              <a className="button primary" href="#projects">프로젝트 보기</a>
              <a className="button ghost" href="https://github.com/thd2410-cell" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
          <div className="sceneCard" aria-label="3D 포트폴리오 오브젝트">
            <Scene />
          </div>
        </section>

        <section id="about" className="section glass">
          <p className="eyebrow">About</p>
          <h2>작게 쪼개고, 직접 구현하고, 꾸준히 개선합니다.</h2>
          <p>
            아직 채워갈 부분이 많지만, 배운 내용을 실제 프로젝트로 연결하는 과정에 집중하고 있습니다.
            이 포트폴리오는 앞으로 만든 것들을 계속 업데이트하는 첫 버전입니다.
          </p>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">Skills</p>
          <h2>현재 다루고 있거나 공부 중인 기술</h2>
          <div className="grid three">
            <article className="card"><h3>Frontend</h3><p>React, HTML, CSS, JavaScript, 반응형 UI</p></article>
            <article className="card"><h3>3D Web</h3><p>Three.js, React Three Fiber, 인터랙티브 웹 표현</p></article>
            <article className="card"><h3>Server / Tools</h3><p>Node.js, GitHub, Docker, 배포, 문서화</p></article>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="eyebrow">Projects</p>
          <h2>Projects</h2>
          <div className="grid two">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <p className="tag">{project.tag}</p>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noreferrer">자세히 보기 →</a>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">Contact</p>
          <h2>프로젝트와 기록은 GitHub에 정리합니다.</h2>
          <a className="button primary" href="https://github.com/thd2410-cell" target="_blank" rel="noreferrer">
            github.com/thd2410-cell
          </a>
        </section>
      </main>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
