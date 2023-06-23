import projectImg1 from '../Assets/PlaceholderProfile.jpeg';
import bvImg from '../Assets/BonVoyageIcon.png';
import weatherImg from '../Assets/weather-icon.png';

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
                            <a class="projectLinks" href="https://travel-app-gt.herokuapp.com/">View Project</a>
                            <a class="projectLinks" href="https://github.com/alisabevers/Travel_App">View Repo</a>
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
                            <a class="projectLinks" href="https://note-taker-hwk.herokuapp.com/">View Project</a>
                            <a class="projectLinks" href="https://github.com/alisabevers/note-taker">View Repo</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card projectsCard col-8 mx-auto">
                <div class="row justify-content-md-center">
                    <div class="col projectImages">
                        <img src={weatherImg} class="img-fluid rounded-start" alt="placeholder image for project 1" />
                    </div>
                    <div class="col-9 projectCardBody">
                        <div class="card-body">
                            <h5 class="card-title">Weather App</h5>
                            <p class="card-text">This weather app allows you to search any city in the world, and accurately display the current weather, as well as a 5-day forecast.</p>
                            <a class="projectLinks" href="https://alisabevers.github.io/weather-dashboard/">View Project</a>
                            <a class="projectLinks" href="https://github.com/alisabevers/weather-dashboard">View Repo</a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Projects;