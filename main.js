class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header>
        <nav>
            <ul>
                <li><a href="index.html">Ram</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="resume.html">Resume</a></li>
            </ul>
        </nav>
    </header> `
    }
}
customElements.define('my-header',MyHeader)