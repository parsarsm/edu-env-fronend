import React from 'react'
import {Container, Dropdown, Icon, Menu} from 'semantic-ui-react'

const trigger = (
    <span>
    <Icon name='user' /> سلام محمد
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
    { key: 'logout', text: 'خروج' },
    { key: 'contactUs', text: 'تماس با ما' },
]

export default class Header extends React.Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const { activeItem } = this.state

        return (
            <>
                    <Menu inverted attached>
                        <Menu.Item
                            // name='home'
                            content={<Dropdown trigger={trigger} options={options} />}
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