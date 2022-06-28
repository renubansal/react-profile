import React, { Component } from "react";
import Projects from "./Projects.js";
import profile from  "../assets/profile.png"
import SocialProfiles from "./SocialProfiles.js";
import Title from "./Title.js";
import Jokes from "./Jokes.js";

class App extends Component {
    constructor() {
        super();
        this.state = { displayBio: false };
        console.log('component this', this);
        this.toggleBio = this.toggleBio.bind(this);
    }   

    toggleBio()  {
        this.setState({ displayBio: !this.state.displayBio})
    }

    render() {
        return (
            <div>
                <img src={profile} alt='profile' className="profile"/>
                <h1>Hello!</h1>
                <p>I am Renu Bansal</p>
                <Title/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus orci, laoreet nec metus et, commodo varius dui. Mauris non felis finibus augue elementum pretium. </p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>Suspendisse et nulla lobortis ligula mattis porta. Nunc metus magna, pulvinar et nulla id, varius mollis lectus. </p>
                            <p>Quisque fringilla euismod felis, quis tincidunt tortor ultricies quis. Sed euismod, augue eu faucibus ornare, nisi risus tincidunt erat, in bibendum purus ex sed odio.</p>
                            <button onClick={this.toggleBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleBio}>Read More</button>
                        </div>
                    )
                }
                <hr/>
                <Projects/>
                <hr/>
                <SocialProfiles/>
                <hr/>
                <Jokes/>
            </div>
        )
    }
}

export default App;
