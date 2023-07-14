function Home({setPage}) {
  return (
    <div className="Home">
      <h2 className='about' onClick={() => setPage('about')}>About</h2>
      <h2 className='project' onClick={() => setPage('project')}>Projects</h2>
      <h2 className='contact' onClick={() => setPage('contact')}>Contact</h2>
    </div>
  );
}

export default Home;