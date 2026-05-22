import Rectangle5 from '../../assets/images/Rectangle 5.png'
import LogoGroup from '../../assets/images/logo_group (1).png'
import Flor from '../../assets/images/Flor completa 1.png'


export default function Home({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="page-section"
      style={{
        position: 'relative',
      }}
    >
      <img
        src={Rectangle5}
        alt="Background"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />

      <img
        src={LogoGroup}
        alt="Logo Group"
        style={{
          position: 'absolute',
          width: '130px',
          height: '130px',
          top: '5px',
          right: '75px',
          zIndex: 1
        }}
      />

      <img
        src={Flor}
        alt="Flor"
        style={{
          position: 'absolute',
          width: '83px',
          height: '81px',
          bottom: '51%',
          left: '50.9%',
          zIndex: 3
        }}
      />

      <h1
        style={{
          position: 'absolute',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          fontSize: '87px',
          fontFamily: 'CooperBlack, serif',
          color: '#fff',
          margin: 0,
          wordSpacing: '0.55em',
        }}
      >
        Portf lio.
      </h1>

      <div
        style={{
          position: 'absolute',
          top: '52%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          zIndex: 2,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: '15px',
            fontFamily: 'Cousine, monospace',
            color: '#E9B300',
            textAlign: 'center',
          }}
        >
          UI/UX<p style={{ margin: 0 }}></p>Designer
        </p>

        <span
          style={{
            fontSize: '32px',
            fontFamily: 'Cousine, monospace',
            color: '#E9B300',
          }}
        >
          /
        </span>

        <p
          style={{
            margin: 0,
            fontSize: '15px',
            fontFamily: 'Cousine, monospace',
            color: '#E9B300',
            textAlign: 'center',
          }}
        >
          Desenvolvedor<p style={{ margin: 0 }}></p>Front-end
        </p>

        <span
          style={{
            fontSize: '32px',
            fontFamily: 'Cousine, monospace',
            color: '#E9B300',
          }}
        >
          /
        </span>

        <p
          style={{
            margin: 0,
            fontSize: '15px',
            fontFamily: 'Cousine, monospace',
            color: '#E9B300',
            textAlign: 'center',
          }}
        >
          Desenvolvedor<p style={{ margin: 0 }}></p>Back-end
        </p>
      </div>

      <span
        style={{
          position: 'absolute',
          top: '25px',
          left: '110px',
          zIndex: 1,
          fontSize: '20px',
          fontWeight: 'regular',
          fontFamily: 'Cousine, monospace',
          color: '#fff'
        }}
      >
        22 Mai, 2026
      </span>

            <span
        style={{
          position: 'absolute',
          top: '48px',
          left: '110px',
          zIndex: 1,
          fontSize: '28px',
          fontWeight: 'bold',
          fontFamily: 'Cousine, monospace',
          color: '#E9B300',
        }}
      >
        Apresentação<p>Criativa</p>
      </span>

            <span
        style={{
          position: 'absolute',
          top: '101px',
          left: '110px',
          zIndex: 1,
          fontSize: '20px',
          fontWeight: 'regular',
          fontFamily: 'Cousine, monospace',
          color: '#fff'
        }}
      >
        Por: Júlio César Dourado.
      </span>

    </section>
  )
}