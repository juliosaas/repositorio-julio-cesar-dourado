import { useRef, useState } from 'react'
import Grid from '../../assets/images/Group 15 (1).png'
import AgiImage from '../../assets/images/agi.png'
import Mockup from '../../assets/images/celularmockup.png'
import Bannerazul from '../../assets/images/agiazulbanner.png'
import Bannerbranco from '../../assets/images/agibrancobanner.png'
import Feedbackline from '../../assets/images/feedbackline.png'
import Estrelas from '../../assets/images/estrelas.png'
import FerramentasAgi from '../../assets/images/ferramentasagi.png'
import Paleta from '../../assets/images/paletaagi.png'

export default function Agi({ id }: { id?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [showControls, setShowControls] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video || isDragging) return
    setProgress((video.currentTime / video.duration) * 100)
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current
    if (!video) return
    const value = Number(e.target.value)
    setProgress(value)
    video.currentTime = (value / 100) * video.duration
  }

  return (
    <section
      id={id}
      className="page-section"
      style={{
        position: 'relative',
        backgroundColor: '#0068FF',
      }}
    >
      <img
        src={Grid}
        alt="Grid"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      />

      <img
        src={AgiImage}
        alt="Agi"
        style={{ position: 'absolute', width: 'min(14.5%, 700px)', height: 'auto', right: '30%', top: '14%', transform: 'translateY(-50%)', objectFit: 'contain', zIndex: 1 }}
      />

      <img
        src={Bannerazul}
        alt="Banner Azul"
        style={{ position: 'absolute', width: '50%', height: 'auto', right: '0%', bottom: '0%', zIndex: 4, objectFit: 'contain' }}
      />

      <img
        src={Bannerbranco}
        alt="Banner Branco"
        style={{ position: 'absolute', width: '50%', height: 'auto', left: '0%', bottom: '0%', zIndex: 5, objectFit: 'contain' }}
      />

      {/* Container único — vídeo + mockup juntos */}
<div
  style={{
    position: 'absolute',
    width: 'min(23%, 400px)',
    left: '15%',
    top: '41%',
    transform: 'translateY(-50%)',
    zIndex: 1,
  }}
>
  {/* Vídeo */}
  <video
    ref={videoRef}
    src="https://res.cloudinary.com/dqx1a8oth/video/upload/agicontrolvideo_wvccij.mp4"
    loop
    muted
    onTimeUpdate={handleTimeUpdate}
    style={{
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '20px',
      filter: 'drop-shadow(-28px 18px 20px rgba(8,8,5,8))',
    }}
  />

  {/* Mockup — sobrepõe o vídeo como borda, relativo ao container */}
  <img
    src={Mockup}
    alt="Mockup"
    style={{
      position: 'absolute',
      width: '140%',       /* ajuste essa % até o mockup enquadrar o vídeo */
      height: '106%',
      top: '51%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      pointerEvents: 'none',
    }}
  />

  {/* Controles — mesma área do vídeo */}
  <div
    onMouseEnter={() => setShowControls(true)}
    onMouseLeave={() => setShowControls(false)}
    style={{
      position: 'absolute',
      inset: 0,
      zIndex: 3,
      borderRadius: '20px',
    }}
  >
    <div
      onClick={togglePlay}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        borderRadius: '20px',
        background: showControls ? 'rgba(0,0,0,0.25)' : 'transparent',
        transition: 'background 0.2s ease',
      }}
    >
      <div
        style={{
          opacity: showControls || !isPlaying ? 1 : 0,
          transition: 'opacity 0.2s ease',
          background: 'rgba(0,0,0,0.45)',
          borderRadius: '50%',
          width: '44px',
          height: '44px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isPlaying ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <rect x="5" y="3" width="4" height="18" rx="1" />
            <rect x="15" y="3" width="4" height="18" rx="1" />
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <polygon points="6,3 20,12 6,21" />
          </svg>
        )}
      </div>
    </div>

    <div
      style={{
        position: 'absolute',
        bottom: '12px',
        left: '10px',
        right: '10px',
        opacity: showControls || !isPlaying ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      <input
        type="range"
        min={0}
        max={100}
        step={0.1}
        value={progress}
        onChange={handleProgressChange}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        style={{
          width: '100%',
          height: '3px',
          appearance: 'none',
          background: `linear-gradient(to right, #fff ${progress}%, rgba(255,255,255,0.35) ${progress}%)`,
          borderRadius: '2px',
          cursor: 'pointer',
          outline: 'none',
        }}
      />
    </div>
  </div>
</div>

      {/* Título */}
      <p style={{ position: 'absolute', top: '23%', left: '55.5%', zIndex: 1, fontSize: '35px', fontFamily: 'Cousine, monospace', color: '#fff', maxWidth: '1200px' }}>
        <b>Melhoria e novidade</b>
      </p>

      {/* Subtítulo */}
      <p style={{ position: 'absolute', top: '4%', left: '55.5%', zIndex: 1, fontSize: '21px', fontFamily: 'Cousine, monospace', color: '#fff', whiteSpace: 'nowrap' }}>
        &lt;devs do Agi&gt; / Banking Mobile App&gt;
      </p>

      {/* Descrição principal */}
      <p style={{ position: 'absolute', top: '26.4%', left: '55.5%', zIndex: 1, fontSize: '18px', fontFamily: 'Inter, sans-serif', color: '#fff', width: '40%', lineHeight: '1.2', wordWrap: 'break-word', overflowWrap: 'break-word', fontWeight: 10 }}>
        Durante minha experiência na <b>Agibank</b>, participei do desenvolvimento de projetos voltados à criação de soluções e melhorias digitais para o aplicativo. Os projetos envolveram a criação de novas funcionalidades, melhorias em fluxos já existentes e reorganização de elementos da interface, buscando tornar a experiência mais clara, funcional e alinhada ao usuário. Além da etapa de prototipagem e concepção das ideias, também participei da programação e desenvolvimento dos protótipos criados, transformando as soluções planejadas em aplicações funcionais.
      </p>

      {/* Ferramentas */}
      <div>
        <img
          src={FerramentasAgi}
          alt="Ferramentas utilizadas"
          style={{ position: 'absolute', top: '50.8%', left: '54.6%', zIndex: 1, width: 'min(13%, 200px)', height: 'auto', objectFit: 'contain' }}
        />
        <p style={{ position: 'absolute', top: '49%', left: '55.5%', zIndex: 1, fontSize: '19px', fontFamily: 'Cousine, monospace', color: '#ffffff', lineHeight: '1.1' }}>
          <b>Ferramentas utilizadas</b>
        </p>
      </div>

      {/* Feedback */}
      <div>
        <img
          src={Feedbackline}
          alt="Feedback Line"
          style={{ position: 'absolute', width: '38%', height: '17%', left: '55.5%', top: '55.5%', zIndex: 1 }}
        />

        <p style={{ position: 'absolute', top: '57%', left: '56.5%', zIndex: 1, fontSize: '19px', fontFamily: 'Cousine, monospace', color: '#ffffffb5', lineHeight: '1.1' }}>
          <b>Resultados e feedback</b>
        </p>

        <img
          src={Estrelas}
          alt="Estrelas"
          style={{ position: 'absolute', top: '56.5%', left: '84.5%', zIndex: 1, width: 'min(8%, 200px)', height: 'auto', objectFit: 'contain' }}
        />

        <p style={{ position: 'absolute', top: '59%', left: '56.5%', zIndex: 1, fontSize: '15px', fontFamily: 'Inter, sans-serif', color: '#ffffffb5', width: '35%', lineHeight: '1.4', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          O protótipo desenvolvido teve boa recepção em relação às melhorias e funcionalidades propostas, principalmente pela organização da experiência e navegação pensada para o usuário. Além dos resultados práticos do projeto, a experiência também me aproximou do time de UX do banco, trazendo aprendizados e insights sobre construção de interfaces e experiência do usuário.
        </p>
      </div>

      {/* Paleta */}
      <img
        src={Paleta}
        alt="Paleta de cores"
        style={{ position: 'absolute', top: '73.5%', left: '55.5%', zIndex: 1, width: 'min(7.5%, 200px)', height: 'auto', objectFit: 'contain' }}
      />

    </section>
  )
}