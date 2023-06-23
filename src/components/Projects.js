import projectImg1 from '../Assets/PlaceholderProfile.jpeg';
import bvImg from '../Assets/BonVoyageIcon.png';

function Projects() {
    return (
        <div id="projectSection">
            <h1 id="projectsHeader">Projects</h1>

            <div class="card projectsCard col-8 mx-auto">
                <div class="row justify-content-md-center">
                    <div class="col projectImages">
                        <img src={bvImg} class="img-fluid rounded-start" alt="Bon Voyage logo icon"/>
                    </div>
                    <div class="col-9 projectCardBody">
                        <div class="card-body">
                            <h5 class="card-title">Bon Voyage</h5>
                            <p class="card-text">This full-stack application was developed as my coding bootcamp's final project, in a one-week sprint. Myself and four other teammates created Bon Voyage with the intent of making travel planning simple and seemless. The app includes login authentication using JWT, and full CRUD capabilities.</p>
                            <a class="projectLinks" href="https://travel-app-gt.herokuapp.com/" target="_blank">View Project</a>
                            <a class="projectLinks" href="https://github.com/alisabevers/Travel_App" target="_blank">View Repo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card projectsCard col-8 mx-auto">
                <div class="row justify-content-md-center">
                    <div class="col projectImages">
                        <span id="note-taker-icon" role="img" aria-label="Memo">📝</span>
                    </div>
                    <div class="col-9 projectCardBody">
                        <div class="card-body">
                            <h5 class="card-title">Note Taker</h5>
                            <p class="card-text">This note-taking app was one of the assignments provided to me from my coding bootcamp. The front-end was part of the starter code, and I coded the back-end using express. </p>
                            <a class="projectLinks" href="https://note-taker-hwk.herokuapp.com/" target="_blank">View Project</a>
                            <a class="projectLinks" href="https://github.com/alisabevers/note-taker" target="_blank">View Repo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card projectsCard col-8 mx-auto">
                <div class="row justify-content-md-center">
                    <div class="col projectImages">
                        <img src={projectImg1} class="img-fluid rounded-start" alt="placeholder image for project 1" />
                    </div>
                    <div class="col-9 projectCardBody">
                        <div class="card-body">
                            <h5 class="card-title">Project title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            {/* WILL ADD PROJECT LINKS LATER */}
                            <a class="projectLinks" href="#" target="_blank">View Project</a>
                            <a class="projectLinks" href="#" target="_blank">View Repo</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects;