import './Welcome.css';
import Navbar from './Navbar';

function Home() {
    return (
        <div id="backgroundImg">
            <Navbar />
            <h1 id="myName">
                ALISA BEVERS
            </h1>
            <h2 id="myTitle">
                Full-Stack Web Developer
            </h2>
        </div>
    )
}

export default Home;