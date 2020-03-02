import React from 'react'
import {Button, Form, Header as SHeader, Icon, Segment, Select, Table} from 'semantic-ui-react'
import _ from 'lodash'

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


export default class CourseList extends React.Component {
    state = {
        column: null,
        data: tableData,
        direction: null,
    }
    handleSort = (clickedColumn) => () => {
        const {column, data, direction} = this.state

        if (column !== clickedColumn) {
            this.setState({
                column: clickedColumn,
                data: _.sortBy(data, [clickedColumn]),
                direction: 'ascending',
            })

            return
        }

        this.setState({
            data: data.reverse(),
            direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const {column, data, direction} = this.state
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
                    <Form loading={false}>
                        <Form.Group widths={"equal"}>
                            <Form.Select label='دانشکده' placeholder='دانشکده مورد نظر را انتخاب کنید'
                                         options={department}/>
                            <Form.Select label='مقطع' placeholder='مقطع مورد نظر را انتخاب کنید' options={y}/>
                        </Form.Group>
                        <Form.Group widths={2}>
                            <Form.Input label='استاد' icon placeholder='قسمتی از نام استاد ...'>
                                <input/>
                                <Icon name='search'/>
                            </Form.Input>
                            <Form.Select label='ترتیب' placeholder='' options={sort}
                                         defaultSelectedLabel={sort[0]}/>
                        </Form.Group>
                    </Form>
                </Segment>
                <SHeader as='h5' attached='top' inverted>
                    لیست دروس ارایه شده توسط دانشکده مهندسی عمران مقطع کارشناسی در نیمسال دوم 99-1398
                </SHeader>
                <Segment attached={"bottom"}>
                    <div style={{overflowX: "scroll"}}>

                        <Table sortable celled unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>شماره درس</Table.HeaderCell>
                                    <Table.HeaderCell>گروه</Table.HeaderCell>
                                    <Table.HeaderCell>واحد</Table.HeaderCell>
                                    <Table.HeaderCell>نام درس</Table.HeaderCell>
                                    <Table.HeaderCell>پیشنیاز</Table.HeaderCell>
                                    <Table.HeaderCell>همنیاز</Table.HeaderCell>
                                    <Table.HeaderCell>ظرفیت</Table.HeaderCell>
                                    <Table.HeaderCell>ثبت نامی</Table.HeaderCell>
                                    <Table.HeaderCell>استاد</Table.HeaderCell>
                                    <Table.HeaderCell>امتحان</Table.HeaderCell>
                                    <Table.HeaderCell>برنامه هفتگی</Table.HeaderCell>
                                    <Table.HeaderCell>ملاحظات</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell>۲۰۰۰۵</Table.Cell>
                                    <Table.Cell>۱</Table.Cell>
                                    <Table.Cell>۳</Table.Cell>
                                    <Table.Cell>آمار و احتمال مهندسی</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۴۰</Table.Cell>
                                    <Table.Cell>۳۶</Table.Cell>
                                    <Table.Cell>هاتف عبدوس</Table.Cell>
                                    <Table.Cell>1399/03/27 - 09:00</Table.Cell>
                                    <Table.Cell>شنبه و دوشنبه 15:0 تا 16:30</Table.Cell>
                                    <Table.Cell>فقط دانشجویان پردیس تهران قبولی در درس ریاضی 1 الزامی است</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>۲۰۰۰۵</Table.Cell>
                                    <Table.Cell>۱</Table.Cell>
                                    <Table.Cell>۳</Table.Cell>
                                    <Table.Cell>آمار و احتمال مهندسی</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۴۰</Table.Cell>
                                    <Table.Cell>۳۶</Table.Cell>
                                    <Table.Cell>هاتف عبدوس</Table.Cell>
                                    <Table.Cell>1399/03/27 - 09:00</Table.Cell>
                                    <Table.Cell>شنبه و دوشنبه 15:0 تا 16:30</Table.Cell>
                                    <Table.Cell> </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>۲۰۰۰۵</Table.Cell>
                                    <Table.Cell>۱</Table.Cell>
                                    <Table.Cell>۳</Table.Cell>
                                    <Table.Cell>آمار و احتمال مهندسی</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۴۰</Table.Cell>
                                    <Table.Cell>۳۶</Table.Cell>
                                    <Table.Cell>هاتف عبدوس</Table.Cell>
                                    <Table.Cell>1399/03/27 - 09:00</Table.Cell>
                                    <Table.Cell>شنبه و دوشنبه 15:0 تا 16:30</Table.Cell>
                                    <Table.Cell> </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>۲۰۰۰۵</Table.Cell>
                                    <Table.Cell>۱</Table.Cell>
                                    <Table.Cell>۳</Table.Cell>
                                    <Table.Cell>آمار و احتمال مهندسی</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۴۰</Table.Cell>
                                    <Table.Cell>۳۶</Table.Cell>
                                    <Table.Cell>هاتف عبدوس</Table.Cell>
                                    <Table.Cell>1399/03/27 - 09:00</Table.Cell>
                                    <Table.Cell>شنبه و دوشنبه 15:0 تا 16:30</Table.Cell>
                                    <Table.Cell> </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>۲۰۰۰۵</Table.Cell>
                                    <Table.Cell>۱</Table.Cell>
                                    <Table.Cell>۳</Table.Cell>
                                    <Table.Cell>آمار و احتمال مهندسی</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۴۰</Table.Cell>
                                    <Table.Cell>۳۶</Table.Cell>
                                    <Table.Cell>هاتف عبدوس</Table.Cell>
                                    <Table.Cell>1399/03/27 - 09:00</Table.Cell>
                                    <Table.Cell>شنبه و دوشنبه 15:0 تا 16:30</Table.Cell>
                                    <Table.Cell> </Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>۲۰۰۰۵</Table.Cell>
                                    <Table.Cell>۱</Table.Cell>
                                    <Table.Cell>۳</Table.Cell>
                                    <Table.Cell>آمار و احتمال مهندسی</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۲۲۰۱۵</Table.Cell>
                                    <Table.Cell>۴۰</Table.Cell>
                                    <Table.Cell>۳۶</Table.Cell>
                                    <Table.Cell>هاتف عبدوس</Table.Cell>
                                    <Table.Cell>1399/03/27 - 09:00</Table.Cell>
                                    <Table.Cell>شنبه و دوشنبه 15:0 تا 16:30</Table.Cell>
                                    <Table.Cell> </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>


                <SHeader as='h5' attached='top' inverted>
                    نمونه جدول با قابلیت تنظیم ترتیب!
                </SHeader>
                <Segment attached={"bottom"}>
                    <div style={{overflowX: "scroll"}}>
                        <Table sortable celled fixed unstackable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell
                                        sorted={column === 'name' ? direction : null}
                                        onClick={this.handleSort('name')}
                                    >
                                        نام
                                    </Table.HeaderCell>
                                    <Table.HeaderCell
                                        sorted={column === 'age' ? direction : null}
                                        onClick={this.handleSort('age')}
                                    >
                                        سن
                                    </Table.HeaderCell>
                                    <Table.HeaderCell
                                        sorted={column === 'gender' ? direction : null}
                                        onClick={this.handleSort('gender')}
                                    >
                                        جنسیت
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {_.map(data, ({ age, gender, name }) => (
                                    <Table.Row key={name}>
                                        <Table.Cell>{name}</Table.Cell>
                                        <Table.Cell>{age}</Table.Cell>
                                        <Table.Cell>{gender}</Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                </Segment>
            </div>
        );
    }
}


