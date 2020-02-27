import React from 'react'
import {Message} from 'semantic-ui-react'

export default class Info extends React.PureComponent {
    render() {
        return (
            <Message
                info
                header='Was this what you wanted?'
                content="Did you know it's been a while?"
            />
        )
    }
}

