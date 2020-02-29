import React from 'react'
import {Container, Grid, Header as SHeader, Message, Responsive, Segment} from 'semantic-ui-react'
import Header from "../partials/header/Header";
import Sidebar from "../partials/sidebar/Sidebar";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

export default class Layout extends React.Component {

    render() {
        return (
            <>
                <Header/>

                    <Responsive minWidth={768}>
                        <DesktopLayout>
                            {this.props.children}
                        </DesktopLayout>
                    </Responsive>
                    <Responsive maxWidth={768}>
                        <MobileLayout>
                            {this.props.children}
                        </MobileLayout>
                    </Responsive>
            </>


        )
    }
}