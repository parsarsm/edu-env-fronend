import React from 'react'
import {Button, Container, Grid, Header as SHeader, Message, Segment, Transition} from 'semantic-ui-react'
import Header from "../partials/header/Header";
import Sidebar from "../partials/sidebar/Sidebar";

export default class MobileLayout extends React.Component {
    state = {
        showNav: false
    }

    handleShowNav = () => {
        this.setState({showNav: !this.state.showNav})
    }

    render() {
        return (
            <>
                <div style={{position: "fixed", bottom: '50px', left: '50px', zIndex: 40000}}>
                    <Button
                        onClick={this.handleShowNav}
                        circular color='blue'
                        icon={this.state.showNav ? 'close' : 'arrows alternate'}
                        id={'navButton'}
                        size={"huge"}/>
                </div>

                <div style={{display: this.state.showNav ? 'unset' : 'none'}}>
                    <Transition.Group animation={"fade up"} duration={400}>
                        {this.state.showNav && (
                            <Container fluid style={{marginTop: '2em', width: '100%'}}>
                                <Sidebar/>
                            </Container>
                        )}
                    </Transition.Group>

                </div>
                <div style={{display: !this.state.showNav ? 'unset' : 'none'}}>
                    <Container fluid style={{marginTop: '3em', width: '90%'}}>
                                {this.props.children}
                    </Container>
                </div>

            </>


        )
    }
}