import React from 'react'
import {Container, Dropdown, Icon, Menu, Message} from 'semantic-ui-react'

const trigger = (
    <span>
    <Icon name='user'/> سلام محمد
  </span>
)
const options = [
    {
        key: 'user',
        text: (
            <span>
        به عنوان <strong>محمد رستمی</strong> وارد شدید
      </span>
        ),
        disabled: true,
    },
    {key: 'logout', text: 'خروج'},
    {key: 'contactUs', text: 'تماس با ما'},
]
const items = [
    'You can now have cover images on blog pages',
    'Drafts will now auto-save while writing',
]
export default class Header extends React.Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})
    state = {visible: true}

    handleDismiss = () => {
        this.setState({visible: false})
    }

    render() {
        const {activeItem, visible} = this.state


        return (
            <>
                {visible ? (<Message
                    color={"black"}
                    attached
                    // header='Welcome to our site!'
                    onDismiss={this.handleDismiss}
                    // content='Fill out the form below to sign-up for a new account'
                >
                    <Message.Header>New Site Features</Message.Header>
                    <Message.List items={items} />
                </Message>) : ''}

                <Menu inverted attached>
                    <Menu.Item
                        // name='home'
                        content={<Dropdown trigger={trigger} options={options}/>}
                        // active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        position={"right"}
                        name='سامانه آموزش شریف‬'

                        // content={'آخرین ورود : ‪۱۳۹۸/۱۲/۹ ۱۹:۸‬'}
                        // active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                </Menu>
            </>


        )
    }
}