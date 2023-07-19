import Video from '../../../images/Projects/GODMODEVideo.mp4'

function Godmode() {
  return (
    <div className="Godmode pr">
     <div className="BM">GODMODE</div>
  <p>GODMODE is a game recomendation app that allows the user to refine results based on parameters such as number of players and minimum age of players. Filtered results are returned in order of highest rated game first.</p>
      <video controls autoPlay loop muted>
          <source src={Video} type="video/mp4"></source>
        </video>
    </div>
  );
}

export default Godmode;