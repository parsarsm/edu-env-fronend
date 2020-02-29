import React from 'react'
import {Message as Msg} from 'semantic-ui-react'

export default class Message extends React.PureComponent {
    state = {visible: true}

    handleDismiss = () => {
        this.setState({visible: false})
    }

    render() {
        return (
            <>
                {
                    this.state.visible ? (<Msg
                        info
                        header=''
                        content={this.props.children}
                        onDismiss={this.handleDismiss}
                    />) : ''
                }
            </>
        )
    }
}

