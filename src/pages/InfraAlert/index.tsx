import BackgroundInfraAlert from '../../assets/images/backgroundinfraalert.png'
import InfraAlertLogo from '../../assets/images/infraalertlogo.png'
import Mockup from '../../assets/images/celularmockup.png'
import Bannerbranco from '../../assets/images/infraalertbannerbranco.png'
import Bannerazul from '../../assets/images/infraalertbannerazul.png'
import Feedbackline from '../../assets/images/feedbackline.png'
import Estrelas from '../../assets/images/estrelas.png'
import FerramentasInfraAlert from '../../assets/images/ferramentasinfraalert.png'
import Paleta from '../../assets/images/paletainfraalert.png'
import Tela from '../../assets/images/telainfraalert.png'

export default function InfraAlert({ id }: { id?: string }) {
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
        src={BackgroundInfraAlert}
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

      {/* Logo InfraAlert — lado direito */}
      <img
        src={InfraAlertLogo}
        alt="InfraAlert"
        style={{
          position: 'absolute',
          width: 'min(25.5%, 700px)',
          height: 'auto',
          right: '47%',
          top: '28%',
          transform: 'translateY(-50%)',
          objectFit: 'contain',
          zIndex: 0,
        }}
      />

      {/* Banners — mesmas posições, imagens trocadas */}
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

      {/* Container mockup — lado esquerdo, sem vídeo */}
      <div
        style={{
          position: 'absolute',
          width: '36%',
          height: '85%',
          left: '5.3%',
          top: '7%',
          zIndex: 1,
        }}
      >
        <img
          src={Mockup}
          alt="Mockup"
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            zIndex: 2,
          }}
        />
      </div>

      <img
        src={Tela}
        alt="Tela"
        style={{
          position: 'absolute',
          width: '26%',
          height: '80%',
          top: '9%',
          left: '10%',
          borderRadius: '20px',
          zIndex: 0,
        }}
      />

      {/* Texto grande InfraAlert */}
      <p style={{
        position: 'absolute',
        bottom: '81%',
        left: '56.6%',
        zIndex: 1,
        fontSize: '112px',
        fontFamily: 'Lalezar, sans-serif',
        color: '#fff',
        margin: 0,
        lineHeight: '1',
      }}>
        InfraAlert
      </p>

      {/* Subtítulo — lado direito */}
      <p style={{
        position: 'absolute',
        top: '4%',
        right: '17%',
        zIndex: 1,
        fontSize: '21px',
        fontFamily: 'Cousine, monospace',
        color: '#fff',
      }}>
        Trabalho de Conclusão de Curso <br /> / Mobile App
      </p>

      {/* Título — lado direito */}
      <p style={{
        position: 'absolute',
        top: '18%',
        right: '21%',
        zIndex: 1,
        fontSize: '30px',
        fontFamily: 'Exo, sans-serif',
        maxWidth: '1200px',
        lineHeight: '1',
        fontWeight: 600,
        margin: 0,
        color: '#fff',
        letterSpacing: '-0.5px',
      }}>
        Mobilidade e segurança <br /> urbana.
      </p>

      {/* Descrição principal — lado direito */}
      <p style={{
        position: 'absolute',
        top: '24.8%',
        right: '6%',
        zIndex: 1,
        fontSize: '18px',
        fontFamily: 'Inter, sans-serif',
        color: '#fff',
        width: '37%',
        lineHeight: '1.2',
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
      }}>
        Foi meu projeto de TCC no <b>Colégio Técnico de Campinas (Unicamp)</b>, desenvolvido com foco em mobilidade e segurança urbana. O projeto marcou uma das minhas primeiras experiências com prototipagem no Figma, permitindo estruturar interfaces, organizar fluxos e visualizar funcionalidades antes da etapa de desenvolvimento. Além da prototipagem, também participei da programação e construção do sistema, conectando a parte visual da aplicação com sua implementação prática.      </p>

      {/* Ferramentas — lado direito */}
      <div>
        <img
          src={FerramentasInfraAlert}
          alt="Ferramentas utilizadas"
          style={{
            position: 'absolute',
            top: '47.8%',
            right: '30.9%',
            zIndex: 1,
            width: 'min(13%, 200px)',
            height: 'auto',
            objectFit: 'contain',
          }}
        />
        <p style={{
          position: 'absolute',
          top: '46%',
          right: '25.6%',
          zIndex: 1,
          fontSize: '19px',
          fontFamily: 'Cousine, monospace',
          color: '#ffffff',
          lineHeight: '1.1',
        }}>
          <b>Ferramentas utilizadas</b>
        </p>
      </div>

      {/* Feedback — lado direito */}
      <div>
        <img
          src={Feedbackline}
          alt="Feedback Line"
          style={{
            position: 'absolute',
            width: '38%',
            height: '17%',
            right: '5%',
            top: '54%',
            zIndex: 1,
          }}
        />

        <p style={{
          position: 'absolute',
          top: '55.5%',
          right: '24.4%',
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
            top: '55.2%',
            right: '7%',
            zIndex: 1,
            width: 'min(8%, 200px)',
            height: 'auto',
            objectFit: 'contain',
          }}
        />

        <p style={{
          position: 'absolute',
          top: '57.4%',
          right: '7%',
          zIndex: 1,
          fontSize: '15px',
          fontFamily: 'Inter, sans-serif',
          color: '#ffffffb5',
          width: '34%',
          lineHeight: '1.4',
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
        }}>
          A prototipagem do projeto ajudou diretamente na organização e desenvolvimento da programação, facilitando a visualização das funcionalidades e da estrutura do sistema antes da implementação. O projeto também recebeu feedbacks positivos dos professores, tanto pela proposta apresentada quanto pela construção prática e visual da aplicação.        </p>
      </div>

      {/* Paleta — lado direito */}
      <img
        src={Paleta}
        alt="Paleta de cores"
        style={{
          position: 'absolute',
          top: '73.5%',
          right: '37.9%',
          zIndex: 1,
          width: 'min(5%, 200px)',
          height: 'auto',
          objectFit: 'contain',
        }}
      />

    </section>
  )
}