import projectImg1 from '../Assets/PlaceholderProfile.jpeg'

function Projects() {
    return (
        <div id="projectSection">
            <h1 id="projectsHeader">Projects</h1>
            <div class="card projectsCard">
                <div class="row justify-content-md-center">
                    <div class="col projectImages">
                        <img src={projectImg1} class="img-fluid rounded-start" alt="placeholder image for project 1" />
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* WILL ADD PROJECT LINKS LATER */}
                            <a href="#" target="_blank">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card projectsCard">
                <div class="row justify-content-md-center">
                    <div class="col projectImages">
                        <img src={projectImg1} class="img-fluid rounded-start" alt="placeholder image for project 1" />
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* WILL ADD PROJECT LINKS LATER */}
                            <a href="#" target="_blank">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card projectsCard">
                <div class="row justify-content-md-center">
                    <div class="col projectImages">
                        <img src={projectImg1} class="img-fluid rounded-start" alt="placeholder image for project 1" />
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* WILL ADD PROJECT LINKS LATER */}
                            <a href="#" target="_blank">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;