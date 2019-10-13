import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


class Story extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>You're outside of a house party what do you want to do?</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryA)}>
                        Wait for your friend before you enter.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryB)}>
                        Go in through the front door.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryA extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>You wait 20 minutes and then your friend arrives and you walk up to the front door. The bouncer asks for your names.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryAA)}>
                        You give him your name.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryAB)}>
                        Your friend says his name.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryAA extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>You give the bouncer your name and he tells you you're not on the list.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryAB)}>
                        Your friend says his name.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryAB extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>The bouncer says you can go in. As you walk in your friend takes you to the table in the back where there are two punch bowls with what appears to be alcohol.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryABA)}>
                        You grab a cup from the bowl on the left.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryABB)}>
                        You grab a cup from the bowl on the right.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABB extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>As soon as you take a sip you spit it out and accidentally spit on someone. It turns out you spit on the owner of the house and he doesn't like getting his new clothes dirty so he kicks you out.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryOver)}>
                        Better luck next week buddy.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABA extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>You take a sip and look up and your friend is already gone talking to a girl. You decide to do the same thing. You look around and your eye catches two pretty girls, a blonde and a brunette.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryABAA)}>
                        Go over and talk to the blonde.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryABAB)}>
                        Go over and talk to the brunette.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABAB extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>The brunette makes eye contact with you and you start walking towards each other. As she gets closer you realize that she's actually just a very feminine looking guy. As you get closer you quickly duck away and make your way out the front door.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryOver)}>
                        Just decide to go home because you realize if you had more to drink you might've had your first same-sex experience.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryABABB)}>
                        Get it together and make your way back in.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABABB extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>You try to re-enter the party but are stopped at the front door by a bouncer. Even through you tell him you were just in there he can't let you back in unless your name is on a list.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryABABBA)}>
                        Call your friend to see if he can come down to let you back into the party.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryBA)}>
                        Try to convince the bouncer to let you back in.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABABBA extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>As you pull out your phone to call your friend you see a text from your friend that says 'I hit it off with a blonde girl at the party, feel free to leave without me.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryOver)}>
                        Big oof, better luck next time.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABAA extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>You make eye contact with the blonde and start walking over towards her. What's the first thing you say to her?</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryABAAA)}>
                        Pretty fun party am I right.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryABAAB)}>
                        If you were a library book, I would check you out.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABAAB extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>She checks you out before saying "Fuck it come with me" and pulls you by your hand upstairs to a bedroom.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryOver)}>
                        Nice.
                    </button>
                </div>
            </div>
        );
    }
}


class StoryABAAA extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>"Sure Whatever," she says as she turns away from you.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryABAB)}>
                        Defeated you try to make your way over to the brunette.
                    </button>
                </div>
            </div>
        )
    }
}


class StoryB extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>You try to enter the party but are stopped at the front door by a bouncer. You tell him your name and looks on the list and says he doesn't see it.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryBA)}>
                        Try and convince the bouncer to let you in.
                    </button>
                    <button onClick={() => this.props.goFunction(StoryA)}>
                        Go back and wait for your friend.
                    </button>
                </div>
            </div>
        )
    }
}


class StoryBA extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>As your about to try and convince the bouncer to let you in someone behind pushes you into the bouncer and he punches you in the face, knocking you out.</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(StoryOver)}>
                        You couldn't even make it into the party.
                    </button>
                </div>
            </div>
        )
    }
}


class StoryOver extends Component {
    render() {
        return (
            <div className='page'>
                <div className='page-header'>
                    <p>Thanks for playing!</p>
                    <p>Written by: Ben Lithgow</p>
                    <p>Developed by: Joel Lithgow</p>
                </div>
                <div className='page-actions'>
                    <button onClick={() => this.props.goFunction(Story)}>
                        Start Story.
                    </button>
                </div>
            </div>
        );
    }
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageClass: Story
    };
  }

  goToPage(pageClass) {
    this.setState({
      pageClass: pageClass
    });
  }

  render() {
    var app = this;

    function setState(key, value) {
      let newState = {};
      newState[key] = value;
      app.setState(newState);
    }

    function goFunction(pageClass) {
      app.goToPage(pageClass);
    }

    return (
      <div className="App">
        <this.state.pageClass
          data={this.state}
          setStateFunction={setState}
          goFunction={goFunction}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
