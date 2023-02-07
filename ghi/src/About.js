import TC from './images/TC.png';

export default function About() {
    return (
        <div
        id="about"
        className="mb-3"
        >
          <div className="container">
            <div className="row">
                <div className="col-8 mt-3 about-text">
                    <h2 className='header'> > Hi, I'm Tracey!</h2>
                    <p className='about-sub'>
                        I'm a <strong>full-stack software engineer</strong> who is an eager learner and a passionate problem solver.
                        I was first exposed to coding when I was accepted into Code In Place where I learned the core fundamentals of introductory programming using Python.
                        Since then, I have fallen in love with the process of coding -- everything from breaking down problems, to debugging code and finally seeing how everything comes together.
                        I’m excited to explore all that this field has to offer and continue growing as a software engineer.
                    </p>
                </div>
                <div className="col">
                    <img src={TC} className="mt-3" width={350} alt="TC" />
                </div>
            </div>
          </div>
      </div>
    )
}
