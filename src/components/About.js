import projectImg1 from '../Assets/PlaceholderProfile.jpeg';

function AboutMe() {
    return (
        <div id="aboutMeSection">
            <h1 id="aboutHeader">About Me</h1> 
            <div class="card col-10 mx-auto">
                <div id="aboutContainer" class="row justify-content-md-center">
                    <div class="col">
                        <img src={projectImg1} class="img-fluid rounded-start" alt="placeholder profile pic" />
                    </div>
                    <div class="col-8 aboutBody">
                        <p id="aboutBodyText" class="card-text">Hi there, and welcome to my page! I'm Alisa, recent graduate from Georgia Institute of Technology's full-stack coding bootcamp. I am an Atlanta based web developer, passionate about building a variety of full-stack applications using JavaScript.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;