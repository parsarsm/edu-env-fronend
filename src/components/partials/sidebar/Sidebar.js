import React, {Component} from 'react'
import {Card, Container, Header, Icon, List, Menu, Segment, Statistic} from 'semantic-ui-react'
import routes from "../../../routes/_routes";
import {Link, useHistory} from "react-router-dom";

export default class Sidebar extends Component {
    state = {}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    handleSubItemClick = (e, {name, path}) => {
        this.setState({activeSubItem: name})
    }

    render() {
        const {activeItem, activeSubItem} = this.state

        return (
            <Container>
                <Menu vertical fluid>
                    {routes.map((item, index) => (
                        <Menu.Item
                            name={item.title}
                            active={activeItem === item.title}
                            onClick={this.handleItemClick}
                            key={index}
                        >
                            <Header as='h4'>{item.title}</Header>
                            {activeItem === item.title ? (
                                <Menu pointing secondary vertical fluid>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <Menu.Item
                                            as={Link}
                                            to={subItem.path}
                                            name={subItem.title}
                                            active={activeSubItem === subItem.title}
                                            onClick={this.handleSubItemClick}
                                            key={subIndex}
                                        />
                                    ))}
                                </Menu>) : ''}
                        </Menu.Item>

                    ))}
                </Menu>

                <Card fluid
                    // href='#card-example-link-card'
                    // header='زمان کنونی'
                    meta='زمان کنونی'
                    description='سه شنبه ۲۲ بهمن ۱۳۹۸ ۱۰:۴۶:۳۵'
                />
            </Container>
        )
    }
}