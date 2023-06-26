function Navbar() {
    return (
        <div>
            <nav id="nav" class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a href="#aboutMeSection">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a href="#educationSection">Education</a>
                        </li>
                        <li class="nav-item">
                            <a href="#projectSection">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a href="#skillSection">Skills</a>
                        </li>
                        <li class="nav-item">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;