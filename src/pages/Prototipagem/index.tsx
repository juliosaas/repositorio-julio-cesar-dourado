import Papers from '../../assets/images/Group 200.png'
import Grid from '../../assets/images/Group 15 (1).png'
import Prototip from '../../assets/images/prototipagem.png'
import Program from '../../assets/images/Group 201 (1).png'
import Linhas from '../../assets/images/linhas.png'

export default function Prototipagem({ id }: { id?: string }) {
  return (
    <section 
    id={id} 
    className="page-section" 
    style={{ 
      position: 'relative',
      backgroundColor: '#383838'
    }}>

      <img
        src={Grid}
        alt="Grid"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0
        }}
      />

      <img
        src={Papers}
        alt="Papers"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1
        }}
      />

      <img
        src={Prototip}
        alt="Prototipagem"
        style={{
          position: 'absolute',
          right: '130px',
          top: '23%',
          width: '50%',
          height: '60%',
          zIndex: 2
        }}
      />

      <img 
        src={Program}
        alt="Programação"
        style={{
          position: 'absolute',
          right: '870px',
          top: '43.5%',
          width: '180px',
          height: '50px',
          zIndex: 4
        }}
      />

      <img
        src={Linhas}
        alt="Linhas"
        style={{
          position: 'absolute',
          width: '30%',
          height: '25%',
          left: '12.5%',
          top: '33%',
          zIndex: 3
        }}
      />

      <p
        style={{
          position: 'absolute',
          top: '45%',
          left: '210px',
          transform: 'translateY(-50%)',
          zIndex: 3,
          fontSize: '80px',
          fontFamily: 'CooperBlack, serif',
          color: '#FF8D46',
          lineHeight: '0.9',
        }}
      >
        Prototi-<br />pagem
      </p>

    </section>
  )
}