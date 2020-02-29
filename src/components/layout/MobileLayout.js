import React from 'react'
import {Button, Container, Grid, Header as SHeader, Message, Segment} from 'semantic-ui-react'
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
                        circular color='facebook' icon={this.state.showNav ? 'close' : 'arrows alternate'}
                        size={"huge"}/>
                </div>

                {/*{this.state.showNav ? (*/}
                <div style={{display: this.state.showNav ? 'unset' : 'none'}}>
                    <Container fluid style={{marginTop: '2em', width: '100%'}}>
                        <Sidebar/>
                    </Container>
                </div>
                {/*) : (*/}
                <div style={{display: !this.state.showNav ? 'unset' : 'none'}}>
                    <Container fluid style={{marginTop: '3em', width: '90%'}}>
                        <Grid>
                            <Grid.Column>
                                {this.props.children}
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>

                {/*)}*/}
            </>


        )
    }
}