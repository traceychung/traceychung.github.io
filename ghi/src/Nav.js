import TC_Resume from './images/TC_Resume.pdf'

function Nav() {
  return (
    <nav>
        <a href="#about"><h1>TRACEY CHUNG</h1></a>
        <ul>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <button>
              <a href={TC_Resume} download>Resume</a>
            </button>
        </ul>
    </nav>
  )
}

export default Nav;
