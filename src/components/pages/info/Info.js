import React from 'react'
import {Dropdown, Header as SHeader, Icon, Input, List, Segment, Table} from 'semantic-ui-react'
import Message from "../../elements/Message/Message";

export default class Info extends React.PureComponent {
    state = {visible: true}

    handleDismiss = () => {
        this.setState({visible: false})

        setTimeout(() => {
            this.setState({visible: true})
        }, 2000)
    }

    render() {
        return (
            <>
                <SHeader as='h2'>
                    ثبت نام و ترمیم
                    <SHeader.Subheader>
                        اطلاعیه ها و امور ثبت نام و ترمیم
                    </SHeader.Subheader>
                </SHeader>

                <SHeader as='h5' attached='top' inverted>
                    اعلامیه ها
                </SHeader>
                <Segment attached={"bottom"}>
                    <List>
                        <List.Item as='a'>وب سایت معاونت آموزشی و تحصیلات تکمیلی</List.Item>
                        <List.Item as='a'>فرمها؛ آئین نامه ها و مقررات آموزشی جدید</List.Item>
                        <List.Item as='a'>راهنمای ثبت نام نیمسال جاری</List.Item>
                    </List>
                </Segment>
                <SHeader as='h5' attached={"top"} inverted>
                    راهنما
                </SHeader>
                <Segment attached>
                    <div style={{overflowX: "scroll"}} >
                        <Table celled unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>مورد</Table.HeaderCell>
                                    <Table.HeaderCell>وضعیت</Table.HeaderCell>
                                    <Table.HeaderCell>توضیحات</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                <Table.Row positive>
                                    <Table.Cell>
                                        استاد راهنما
                                    </Table.Cell>
                                    <Table.Cell>
                                        تعیین شده
                                    </Table.Cell>
                                    <Table.Cell>
                                        استاد راهنمای شما خانم/آقای جعفر حبیبی است.
                                    </Table.Cell>

                                </Table.Row>
                                <Table.Row positive>
                                    <Table.Cell>مجوز ثبت نام توسط استاد راهنما </Table.Cell>
                                    <Table.Cell>
                                        صادر شده
                                    </Table.Cell>
                                    <Table.Cell>مجوز ثبت نام شما در نیمسال 13982 توسط استاد راهنما صادر شده است.
                                    </Table.Cell>
                                </Table.Row>
                                <Table.Row negative>
                                    <Table.Cell>ساعت ثبت نام </Table.Cell>
                                    <Table.Cell>تعیین نشده </Table.Cell>
                                    <Table.Cell>
                                        زمان ثبت نام برای شما تعیین نشده است.به آموزش دانشکده مراجعه کنید.
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>

                </Segment>
            </>
        )
    }
}