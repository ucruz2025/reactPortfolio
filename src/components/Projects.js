import React from 'react';
import cosmos from "../assets/Images/groupProject.png";
import passwordGenerator from "../assets/Images/passwordGenerator.png"
import workdayPlanner from "../assets/Images/workdayPlanner.png"
import workoutTracker from "../assets/Images/FitnessChart.png"
import './style.css';




const Projects = () => {
    return(
        <div id="projects" class="projects">
            <h3>Projects</h3>
            <div class="projectsContainer">
                <div class="row align-items-start">
                    <div class="col">
                        <h4>Into the Cosmos</h4>
                        <a href="https://chapstick24.github.io/Project-1-/">
                            <img src={cosmos} class="img-fluid" alt="Into the Cosmos Project"/>
                        </a>    
                    </div>
                    <div class="col">
                        <h4>Password Generator</h4>
                        <a href="https://wmalos.github.io/passwordGenerator//">
                            <img src={passwordGenerator} class="img-fluid" alt="Password Generator"/>
                        </a>    
                    </div>
                </div>
                <div class="row align-items-start">
                    <div class="col">
                        <h4>Workday Planner</h4>
                        <a href="https://wmalos.github.io/workdayPlanner/">
                            <img src={workdayPlanner} class="img-fluid" alt="Weekday Planner"/>
                        </a>    
                    </div>
                    <div class="col">
                        <h4>Workout Tracker</h4>
                        <a href="https://nameless-meadow-19680.herokuapp.com/">
                            <img src={workoutTracker} class="img-fluid" alt="Fitness Chart"/>
                        </a>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects