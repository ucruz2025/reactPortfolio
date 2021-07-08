import React from 'react';
import nasa from '../assests/images/NASA_logo.png';
import workday from '../assests/images/workdaySchedule.png';
import fitness from '../assests/images/FitnessTracker.jpeg';




const Projects = () => {
    return(
        <section>
            <h2>Past Projects</h2>
            <h5>Click on Buttons to View Websites!</h5>

            <div class="row row-col1 row-cols-md-3">
                <div class="col">
                    <div class="card">
                        <img src={nasa} class="img-fluid card-img-top"/>
                        <div class="card-body">
                        <h3 class="card-title">NASA Quick Education Project</h3>
                        <p class="card-text">A website that gives you some quick information about NASA's Image of the Day. Uses one of NASA's API's to gather this information.</p>
                        <a type="button" class="btn btn-outline-secondary btn-sm" href="https://ucruz2025.github.io/Project-1-/">Into the Cosmos</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src={workday} class="img-fluid card-img-top"/>
                        <div class="card-body">
                        <h3 class="card-title">Work Day Schedule Website</h3>
                        <p class="card-text">Need a simple planner for your work schedule? Here's a website that does just that!</p>
                        <a type="button" class="btn btn-outline-primary btn-sm" href="https://ucruz2025.github.io/WorkDayScheduleList/">Work Day Schedule</a>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <img src={fitness} class="img-fluid card-img-top"/>
                        <div class="card-body">
                        <h3 class="card-title">Fitness Tracker App</h3>
                        <p class="card-text">Tracks and displays all recorded workouts. Uses MongoDB and is deployed in Heroku</p>
                        <a type="button" class="btn btn-outline-success btn-sm" href="https://friendly-eh-56333.herokuapp.com/">Fitness Tracker</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects