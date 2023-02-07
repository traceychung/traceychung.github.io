export default function Contact() {
    return (
        <div className="container mt-3">
             <section className="contact" id="contact">
                <h1 className="header">> Connect With Me</h1>

                <div className="contact-wrapper">
                    <div className="first-set animate__animated animate__pulse">
                    <a href="https://github.com/traceychung" target="_blank" rel="noreferrer">
                        <img
                        src="https://img.icons8.com/nolan/256/1A6DFF/C822FF/github.png"
                        width={100}
                        height={100}
                        alt="github"
                        loading="lazy"
                        className="connect-logo icon-card mb-5"
                    />
                    </a>
                    <a href="https://www.linkedin.com/in/tracey-chung/" target="_blank" rel="noreferrer">
                    <img
                        src="https://img.icons8.com/nolan/256/1A6DFF/C822FF/linkedin-circled.png"
                        width={100}
                        height={100}
                        alt="linkedin"
                        loading="lazy"
                        className="connect-logo icon-card mb-5"
                    />
                    </a>
                    </div>
                </div>
                </section>
        </div>
    )

}
