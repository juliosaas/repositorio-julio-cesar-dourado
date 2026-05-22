import Rectangle5 from '../../assets/images/Rectangle 5.png'
import ApresentacaoImg from '../../assets/images/Component 3.png'

export default function Apresentacao({ id }: { id?: string }) {
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
        src={ApresentacaoImg}
        alt="Apresentacao"
        style={{
          position: 'absolute',
          width: '630px',
          height: '580px',
          top: '50%',
          left: '76%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
      />

      <h1
        style={{
          position: 'absolute',
          top: '30%',
          left: '15%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          fontSize: '87px',
          fontFamily: 'CooperBlack, serif',
          color: '#fff',
          margin: 0,
        }}
      >
        Olá!
      </h1>

      <p
        style={{
          position: 'absolute',
          top: '36%',
          left: '29.5%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          fontSize: '35px',
          fontFamily: 'Cousine, monospace',
          color: '#fff',
          maxWidth: '800px',
        }}
      >
        Me chamo <b>Júlio César Dourado</b>.
      </p>

      <div>
      <p
        style={{
          position: 'absolute',
          top: '44%',
          left: '26.6%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          fontSize: '22px',
          fontFamily: 'Inter, sans-serif',
          color: '#fff',
          maxWidth: '520px',
          lineHeight: '1.1',
        }}
      >
        Formado em <b>Desenvolvimento de Sistemas pelo Cotuca (Unicamp)</b> e atualmente cursando <b>Análise e Desenvolvimento de Sistemas na Descomplica</b>.
      </p>

      <p
        style={{
          position: 'absolute',
          top: '59%',
          left: '26.6%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          fontSize: '22px',
          fontFamily: 'Inter, sans-serif',
          color: '#fff',
          maxWidth: '520px',
          lineHeight: '1.1',
        }}
      >
       Apaixonado por prototipagem, interfaces e experiência do usuário, principalmente pela ideia de transformar processos em experiências intuitivas, acessíveis e agradáveis. Exploro a programação como ferramenta para tirar essas ideias do papel, conectando design, funcionalidade e usabilidade em soluções reais.
      </p>
      </div>

    </section>
  )
}