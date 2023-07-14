
function Header({page, setPage}) {
  return (
    <div className="App">
<nav class="navbar navbar-expand-lg fixed-top navbarScroll">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#home" onClick={() => setPage('home')}>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about" onClick={() => setPage('about')}>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio" onClick={() => setPage('project')}>Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact" onClick={() => setPage('contact')}>Contact</a>
                    </li>
                </ul>

            </div>
        </div>
    </nav>
    </div>
  );
}

export default Header;