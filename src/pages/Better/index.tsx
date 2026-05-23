import { useRef, useState } from 'react'
import BackgroundBetter from '../../assets/images/backgroundbetter.png'
import BetterLogo from '../../assets/images/betterlogo.png'
import Mockup from '../../assets/images/celularmockup.png'
import Bannerdegradê from '../../assets/images/betterbannerdegrade.png'
import Bannerpreto from '../../assets/images/betterbannerpreto.png'
import Feedbackline from '../../assets/images/feedbackline.png'
import Estrelas from '../../assets/images/estrelas.png'
import Figma from '../../assets/images/figmalogo.png'
import Paleta from '../../assets/images/paletabetter.png'
import CelularBetterFundo from '../../assets/images/celularbettefundo.png'

export default function Better({ id }: { id?: string }) {
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
        backgroundColor: '#000000',
      }}
    >
      {/* Background */}
      <img
        src={BackgroundBetter}
        alt="Background"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.9,
        }}
      />

      {/* Logo Better — espelhado do AgiImage, agora à esquerda */}
      <img
        src={BetterLogo}
        alt="Better"
        style={{
          position: 'absolute',
          width: 'min(25.5%, 700px)',
          height: 'auto',
          left: '5%',
          top: '13%',
          transform: 'translateY(-50%)',
          objectFit: 'contain',
          zIndex: 1,
        }}
      />

      {/* Banners — mesmas posições do Agi, imagens trocadas */}
      <img
        src={Bannerpreto}
        alt="Banner Preto"
        style={{ position: 'absolute', width: '50%', height: 'auto', right: '0%', bottom: '0%', zIndex: 4, objectFit: 'contain' }}
      />
      <img
        src={Bannerdegradê}
        alt="Banner Degradê"
        style={{ position: 'absolute', width: '50%', height: 'auto', left: '0%', bottom: '0%', zIndex: 5, objectFit: 'contain' }}
      />

      {/* Container vídeo + mockup — lado direito */}
      <div
        style={{
          position: 'absolute',
          width: 'min(23%, 400px)',
          right: '10%',
          top: '51%',
          transform: 'translateY(-50%)',
          zIndex: 1,
        }}
      >
        {/* Vídeo */}
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dqx1a8oth/video/upload/betterprototipagem_vx6jqm.mp4"
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

        {/* Mockup — sobrepõe o vídeo como borda */}
        <img
          src={Mockup}
          alt="Mockup"
          style={{
            position: 'absolute',
            width: '140%',
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
              bottom: '81px',
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

      {/* Subtítulo — lado esquerdo */}
      <p style={{
        position: 'absolute',
        top: '4%',
        left: '5%',
        zIndex: 1,
        fontSize: '21px',
        fontFamily: 'Cousine, monospace',
        color: '#fff',
        whiteSpace: 'nowrap',
      }}>
        Projeto pessoal / Mobile App
      </p>

      {/* Título — lado esquerdo */}
      <p style={{
        position: 'absolute',
        top: '18%',
        left: '5%',
        zIndex: 1,
        fontSize: '45px',
        fontFamily: 'Homenaje',
        maxWidth: '1200px',
        fontWeight: 100,
        margin: 0,
        backgroundImage: 'linear-gradient(135deg, #660a9b 30%, #ffe48d 99%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}>
        <b>Inovação e tecnologia</b>
      </p>

      {/* Descrição principal — lado esquerdo */}
      <p style={{
        position: 'absolute',
        top: '23.8%',
        left: '5%',
        zIndex: 1,
        fontSize: '18px',
        fontFamily: 'IBM Plex Mono, monospace',
        color: '#fff',
        width: '38%',
        lineHeight: '1.2',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      }}>
O Better é um projeto voltado à inovação e tecnologia, desenvolvido com foco em usabilidade e retenção de usuários. Atuei principalmente na prototipagem das interfaces e construção da experiência do aplicativo, buscando criar uma navegação intuitiva, organizada e alinhada à proposta da plataforma.      </p>

      {/* Ferramentas — lado esquerdo */}
      <div>
        <img
          src={Figma}
          alt="Ferramentas utilizadas"
          style={{
            position: 'absolute',
            top: '44.8%',
            left: '4.3%',
            zIndex: 1,
            width: 'min(3%, 200px)',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <p style={{
          position: 'absolute',
          top: '43%',
          left: '5%',
          zIndex: 1,
          fontSize: '19px',
          fontFamily: 'Cousine, monospace',
          color: '#ffffff',
          lineHeight: '1.1',
        }}>
          <b>Ferramentas utilizadas</b>
        </p>
      </div>

      {/* Feedback — lado esquerdo */}
      <div>
        <img
          src={Feedbackline}
          alt="Feedback Line"
          style={{
            position: 'absolute',
            width: '38%',
            height: '17%',
            left: '5%',
            top: '52%',
            zIndex: 1,
          }}
        />

        <p style={{
          position: 'absolute',
          top: '54%',
          left: '6%',
          zIndex: 1,
          fontSize: '19px',
          fontFamily: 'Cousine, monospace',
          color: '#ffffffb5',
          lineHeight: '1.1',
        }}>
          <b>Resultados e feedback</b>
        </p>

        <img
          src={Estrelas}
          alt="Estrelas"
          style={{
            position: 'absolute',
            top: '53.5%',
            left: '34%',
            zIndex: 1,
            width: 'min(8%, 200px)',
            height: 'auto',
            objectFit: 'contain',
          }}
        />

        <p style={{
          position: 'absolute',
          top: '56%',
          left: '6%',
          zIndex: 1,
          fontSize: '15px',
          fontFamily: 'Inter, sans-serif',
          color: '#ffffffb5',
          width: '35%',
          lineHeight: '1.4',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}>
O projeto trouxe resultados positivos em relação à organização da experiência e construção das interfaces, reforçando a importância da usabilidade e retenção dentro da proposta do aplicativo. A experiência também contribuiu para aprofundar minha visão sobre prototipagem e desenvolvimento de fluxos voltados ao usuário.
        </p>
      </div>

      {/* Paleta — lado esquerdo */}
      <img
        src={Paleta}
        alt="Paleta de cores"
        style={{
          position: 'absolute',
          top: '72.5%',
          left: '5.5%',
          zIndex: 1,
          width: 'min(9.5%, 200px)',
          height: 'auto',
          objectFit: 'contain',
        }}
      />

      <img 
        src={CelularBetterFundo}
        alt="Celular Better Fundo"
        style={{
          position: 'absolute',
          top: '61%',
          left: '40%',
          transform: 'translateY(-50%)',
          width: '60%',
          height: 'auto',
          zIndex: 0,
          objectFit: 'contain',
        }}
       />

    </section>
  )
}