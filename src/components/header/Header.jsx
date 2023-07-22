function Header({ page, setPage }) {
  return (
    <div className='Header'>
      <h1 className='name'>Alisha Barraw</h1>
      <div class='nav'>
        <span onClick={() => setPage('about')}>About</span>
        <span onClick={() => setPage('project')}>Projects</span>
        <span onClick={() => setPage('contact')}>Contact</span>
      </div>
    </div>
  )
}

export default Header
