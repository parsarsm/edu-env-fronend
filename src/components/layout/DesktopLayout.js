import React from 'react'
import {Container, Grid, Header as SHeader, Message, Segment} from 'semantic-ui-react'
import Header from "../partials/header/Header";
import Sidebar from "../partials/sidebar/Sidebar";

export default class DesktopLayout extends React.Component {

    render() {
        return (
            <>
                <div
                    // style={{maxWidth: '1300px'}}
                    // todo
                >
                    <Container fluid style={{marginTop: '5em', width: '90%'}}>
                        <Grid>
                            <Grid.Column width={4}>
                                <Sidebar/>

                            </Grid.Column>
                            <Grid.Column width={12}>
                                {this.props.children}
                            </Grid.Column>
                        </Grid>
                    </Container>
                </div>
            </>

        )
    }
}