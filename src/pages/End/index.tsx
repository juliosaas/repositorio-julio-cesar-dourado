import Rectangle5 from '../../assets/images/Rectangle 5.png'
import LogoGroup from '../../assets/images/logo_group (1).png'
import blob from '../../assets/images/yellowblob.png'

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
          width: '250px',
          height: '250px',
          top: '37%',
          zIndex: 3
        }}
      />

      <img
        src={blob}
        alt="Blob"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          zIndex: 2,
          objectFit: 'contain',
        }}
      />

      <svg
        style={{
          position: 'absolute',
          top: '24%',
          left: '46%',
          transform: 'translate(-50%, -50%)',
          zIndex: 4,
          width: '500px',
          height: '300px',
          overflow: 'visible',
        }}
        viewBox="0 0 500 300"
      >
        <defs>
          <path
            id="circlePath"
            d="M 50, 150 A 150, 250 0 1, 0 570, 150"
            fill="none"
          />
        </defs>
        <text
          style={{
            fontSize: '28px',
            fontFamily: 'CooperBlack, serif',
            fill: '#fff',
          }}
        >
          <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
            Obrigado pela sua atenção!
          </textPath>
        </text>
      </svg>

      <span
        style={{
          position: 'absolute',
          top: '48px',
          left: '110px',
          zIndex: 1,
          fontSize: '28px',
          fontWeight: 'bold',
          fontFamily: 'CooperBlack, serif',
          color: '#ffffff',
        }}
      >
Júlio César Dourado. 2026.
      </span>

      <p
        style={{
          position: 'absolute',
          bottom: '48px',
          left: '110px',
          zIndex: 1,
          fontSize: '22px',
          lineHeight: '1.9',
          fontFamily: 'cooperblack, serif',
          color: '#ffffff',
        }}
        >
        juliocesardourado05@gmail.com<br />
        <a href="https://linkedin.com/in/juliocesardourado" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>
          linkedin.com/in/juliocesardourado</a><br />
          <a href="https://wa.me/5519987690757" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'underline' }}>
            whatsapp
          </a>
        
      </p>
    </section>
  )
}