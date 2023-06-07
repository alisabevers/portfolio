import projectImg1 from '../Assets/PlaceholderProfile.jpeg'

function AboutMe() {
    return (
        <div id="aboutMeSection">
            <h1 id="aboutHeader">About Me</h1> 
            <div id="aboutContainer" class="row justify-content-md-center">
                <div class="col">
                    <img src={projectImg1} class="img-fluid rounded-start" alt="placeholder profile pic" />
                </div>
                <div class="col-8 aboutBody">
                    <p id="aboutBodyText" class="card-text">Hi there, and welcome to my page! Here is where I will eventually come up with a better description about myself and my interests. For now, this filler text will have to do. Thanks for your patience :)</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;