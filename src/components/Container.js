import React from 'react'
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./Home";
import Work from "./Work";
import Resume from "./Resume";
import Contact from "./Contact";

const Container = ({ location }) => {
    return (
        <Wrapper className="wrapper">
            <TransitionGroup className="transition-group">
                <CSSTransition
                    key={location.key} classNames="roll" timeout={{ enter: 300, exit: 300 }}
                >
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path="/" component={Home} />
                            <Route path="/resume" component={Resume} />
                            <Route path="/work" component={Work} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
                    </section>
                </CSSTransition>
            </TransitionGroup>
        </Wrapper>
    )
}

const Wrapper = styled.div`

.roll-appear{
    opacity:0;
  }
  .roll-enter{
    opacity:0;
  }
  .roll-enter-done{
    transform: rotate(-360deg) scale(1);
    opacity:1;
    transition: transform 1000ms, opacity 1000ms;
  }
  .roll-exit{
    transform: rotate(360deg) scale(1);
    opacity:1;
  }
  .roll-exit-active{
    transform:rotate(0deg) scale(1);
    opacity: 1;
    transition: transform 1000ms, opacity 1000ms;
  }
  
`;


export default withRouter(Container);
