import React from 'react'
import {
    Divider,
    Dropdown,
    Form,
    Grid,
    Header as SHeader,
    Icon,
    Image,
    Input,
    Header,
    List, Menu,
    Segment,
    Table, Select, Button
} from 'semantic-ui-react'
import Message from "../../elements/Message/Message";


const sort = [
    {key: 'bh', value: 'bh', text: 'سپه'},
    {key: 'bd', value: 'bd', text: 'ملت'},
    {key: 'bb', value: 'bb', text: 'سامان'},
]



export default class BankInfo extends React.PureComponent {
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
                    خدمات آموزشی
                    <SHeader.Subheader>
                        ثبت اطلاعات بانکی دانشجو
                    </SHeader.Subheader>
                </SHeader>

                <SHeader as='h5' attached='top' inverted>
                    فرم اطلاعات و ثبت حساب
                </SHeader>
                <Segment attached>
                    <Table definition unstackable>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>تصویر</Table.Cell>
                                <Table.Cell> <Image
                                    src={'https://react.semantic-ui.com/images/avatar/large/matthew.png'} size={'small'}/>
                                </Table.Cell>
                            </Table.Row>

                            <Table.Row>
                                <Table.Cell>شماره دانشجویی</Table.Cell>
                                <Table.Cell>۹۶۱۰۱۶۴۶</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>مقطع تحصیلی</Table.Cell>
                                <Table.Cell>کارشناسی</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>آخرین وضعیت</Table.Cell>
                                <Table.Cell>مجاز به ثبت نام</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>رشته تحصیلی</Table.Cell>
                                <Table.Cell>مهندسی کامپیوتر\مهندسی کامپیوتر-بدون گرایش</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                    <Divider/>
                    <Form loading={false}>
                        <Form.Group widths={"equal"}>
                            <Form.Input label='شماره حساب' icon placeholder='' />
                            <Form.Select label='بانک صادر کننده' placeholder='' options={sort}
                                         defaultSelectedLabel={sort[0]}/>
                            <Form.Button label={"‌‌ \n"}>
                                ثبت
                            </Form.Button>
                        </Form.Group>
                    </Form>
                </Segment>
            </>
        )
    }
}