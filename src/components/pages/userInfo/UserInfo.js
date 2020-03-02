import React from 'react'
import {Button, Form, Header as SHeader, Icon, Segment, Select, Table} from 'semantic-ui-react'
import _ from 'lodash'

export default class UserInfo extends React.Component {

    render() {
        return (
            <div>
                <SHeader as='h2'>
                    ثبت نام و ترمیم
                    <SHeader.Subheader>
                        لیست دروس ارائه شده در ترم جاری
                    </SHeader.Subheader>
                </SHeader>

                <SHeader as='h5' attached='top' inverted>
                    جستجو
                </SHeader>
                <Segment attached={"bottom"}>
                    aaaaaaaa
                </Segment>

            </div>
        );
    }
}


