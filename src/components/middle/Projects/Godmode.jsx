import Video from '../../../images/Projects/GODMODEVideo.mp4'

function Godmode() {
  return (
    <div className="Godmode pr">
     <div className="BM">GODMODE</div>
  <p>GODMODE is a game recomendation app that allows the user to refine results based on parameters such as number of players and minimum age of players. Filtered results are returned in order of highest rated game first.</p>
  <div  className='GM'>
      <video style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }}>
          <source src={Video} type="video/mp4"></source>
        </video>
  </div>
    </div>
  );
}

export default Godmode;