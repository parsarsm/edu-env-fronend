import React, {Component} from 'react'
import {Header, Menu} from 'semantic-ui-react'
import routes from "../../../routes/_routes";
import {Link, useHistory} from "react-router-dom";

export default class Sidebar extends Component {
    state = {}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    handleSubItemClick = (e, {name, path}) => {
        this.setState({activeSubItem: name})

        // let history = useHistory()
        // history.push(path)
    }

    render() {
        const {activeItem, activeSubItem} = this.state

        return (
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
                            <Menu pointing secondary vertical>
                                {item.subItems.map((subItem, subIndex) => (
                                    <Menu.Item
                                        name={subItem.title}
                                        active={activeSubItem === subItem.title}
                                        path={subItem.path}
                                        onClick={this.handleSubItemClick}
                                        key={subIndex}
                                    />
                                ))}
                            </Menu>) : ''}
                    </Menu.Item>

                ))}
            </Menu>
        )
    }
}