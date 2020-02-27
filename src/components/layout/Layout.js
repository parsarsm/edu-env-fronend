import React from 'react'
import {Container, Dropdown, Grid, Header as SHeader, Icon, Menu, Message, Segment} from 'semantic-ui-react'
import Header from "../partials/header/Header";
import Sidebar from "../partials/sidebar/Sidebar";

export default class Layout extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Container style={{marginTop: '7em'}}>
                    <Grid>
                        <Grid.Column width={3}>
                            <Sidebar/>

                        </Grid.Column>
                        <Grid.Column width={13}>
                            {this.props.children}
                            <Container>

                                <SHeader as='h2'>
                                    ثبت نام و ترمیم
                                    <SHeader.Subheader>
                                        اطلاعیه ها و امور ثبت نام و ترمیم
                                    </SHeader.Subheader>
                                </SHeader>
                                <Segment>
                                    <Message
                                        info
                                        header='Was this what you wanted?'
                                        content="Did you know it's been a while?"
                                    />
                                    <Message
                                        info
                                        header='Was this what you wanted?'
                                        content="Did you know it's been a while?"
                                    />
                                </Segment>
                                <Segment>
                                    <SHeader as='h3' dividing>
                                        Dividing Header
                                    </SHeader>
                                    tessssssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\d
                                    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                                    ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                                    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    <Segment>
                                        <SHeader as='h3' dividing>
                                            Dividing Header
                                        </SHeader>
                                        tessssssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\d
                                        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
                                        ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                                        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
                                    </Segment>
                                </Segment>
                            </Container>

                        </Grid.Column>
                    </Grid>
                </Container>
            </div>


        )
    }
}