import React, {Component} from 'react'
import {
    Accordion,
    Card,
    Container, Divider,
    Form,
    Header as SHeader,
    Header,
    Icon,
    List,
    Menu,
    Segment,
    Statistic
} from 'semantic-ui-react'
import routes from "../../../routes/_routes";
import {Link, useHistory} from "react-router-dom";


const ColorForm = (
    <Form>
        <Form.Group grouped>
            <Form.Checkbox label='Red' name='color' value='red'/>
            <Form.Checkbox label='Orange' name='color' value='orange'/>
            <Form.Checkbox label='Green' name='color' value='green'/>
            <Form.Checkbox label='Blue' name='color' value='blue'/>
        </Form.Group>
    </Form>
)


export default class MobileSidebar extends Component {
    // state = {}
    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    handleSubItemClick = (e, {name, path}) => {
        this.setState({activeSubItem: name})
    }

    state = {activeIndex: 0}

    handleClick = (e, titleProps) => {
        const {index} = titleProps
        const {activeIndex} = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({activeIndex: newIndex})
    }

    render() {
        const {activeItem, activeSubItem, activeIndex} = this.state

        return (
            <div>

                <Menu vertical fluid>
                    <SHeader as='h5' attached='top' inverted>
                        فهرست
                    </SHeader>
                    {routes.map((item, index) => (
                        <>
                            <Menu.Item
                                header
                                name={item.title}
                                active={activeItem === item.title}
                                onClick={this.handleItemClick}
                                key={index}
                            >
                                {item.title}
                            </Menu.Item>


                            {activeItem === item.title ? (
                                <Menu.Item>
                                    <Menu pointing secondary vertical fluid>
                                        {item.subItems.map((subItem, subIndex) => (
                                            <Menu.Item
                                                as={Link}
                                                to={subItem.path}
                                                name={subItem.title}
                                                icon={subItem.icon}
                                                active={activeSubItem === subItem.title}
                                                onClick={this.handleSubItemClick}
                                                key={subIndex}
                                            />
                                        ))}
                                    </Menu>
                                </Menu.Item>

                            ) : ''}
                        </>
                    ))}
                </Menu>


                <Card fluid
                    // href='#card-example-link-card'
                    // header='زمان کنونی'
                      meta='زمان کنونی'
                      description='سه شنبه ۲۲ بهمن ۱۳۹۸ '
                />
            </div>
        )
    }
}