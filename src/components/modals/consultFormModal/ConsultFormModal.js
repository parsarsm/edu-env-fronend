import React from 'react'
import {Button, Form, Header, Icon, Modal, Segment} from 'semantic-ui-react'
import SortableTable from "../../elements/tables/sortableTable/SortableTable";


const department = [
    {key: 'c', value: 'ce', text: 'مهندسی کامپیوتر'},
    {key: 'bd', value: 'bd', text: 'مهندسی شیمی'},
    {key: 'bb', value: 'bb', text: 'مهندسی برق'},
    {key: 'by', value: 'by', text: 'مرکز معارف اسلامی'},
    {key: 'be', value: 'be', text: 'مرکز کارگاه ها'},
]

const y = [
    {key: 'c', value: 'ce', text: 'کارشناسی'},
    {key: 'bd', value: 'bd', text: 'کارشناسی ارشد'},
    {key: 'bb', value: 'bb', text: 'دکترا'},
]

const sort = [
    {key: 'bh', value: 'bh', text: 'تاریخ امتحان'},
    {key: 'bd', value: 'bd', text: 'زمان کلاس'},
    {key: 'bb', value: 'bb', text: 'ظرفیت باقی مانده'},
]

const tableData = [
    {name: 'محمد رستمی', age: 15, gender: 'مرد'},
    {name: 'علی علیپور', age: 40, gender: 'مرد'},
    {name: 'رضا علیزاده', age: 25, gender: 'زن'},
    {name: 'بابک باکان', age: 70, gender: 'زن'},
]


export default class ConsultFormModal extends React.Component {
    render() {
        return (
            <Modal trigger={<Button size={"small"}>فرم جدید</Button>} basic size='large'>
                <Header icon='archive' content='صدور مجوز تبت نام'/>
                <Modal.Content>
                    <Header color={"teal"} size={"medium"}>
                        درخواست مجوز ثبت نام نیمسال دوم ۱۳۹۸-۹۹
                    </Header>
                    <Header color={"blue"} size={"small"}>
                        دروس ثبت شده
                    </Header>
                    <SortableTable/>
                    <Header color={"blue"} size={"small"}>
                        ثبت درس جدید
                    </Header>
                    <Segment attached={"top"}>

                        <Form loading={false}>

                            <Form.Group widths={2}>
                                <Form.Input label='شماره درس' icon placeholder='شماره درس را وارد کنید ...'>
                                    <input/>
                                    <Icon name='search'/>
                                </Form.Input>
                                <Form.TextArea rows={1} label='توضیحات' placeholder='توضیجات جهت اعلام به استاد راهنما ...'/>
                            </Form.Group>
                        </Form>
                    </Segment>
                    <Button attached='bottom' >ثبت درس</Button>

                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='red' inverted>
                        <Icon name='remove'/> خروج
                    </Button>
                    <Button color='green' inverted>
                        <Icon name='checkmark'/> ذخیره فرم
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}