import React from 'react'
import {Segment, Table} from 'semantic-ui-react'
import _ from 'lodash'


const columns = [
    {en: 'row', fa: 'ردیف'},
    {en: 'grade', fa: 'مقطع'},
    {en: 'status', fa: 'وضعیت'},
    {en: 'department', fa: 'دانشکده'},
    {en: 'stdId', fa: 'شماره دانشجویی'},
    {en: 'fullName', fa: 'نام و نام خانوادگی'},
    {en: 'receivingDate', fa: 'تاریخ دریافت'},
    {en: 'currentStatus', fa: 'مرحله فعلی'},
    {en: 'actionDate', fa: 'تاریخ اقدام'}
]

const tableData = [
    {
        row: '1',
        grade: 'کارشناسی',
        status: 'مجاز به ثبت نام',
        department: 'مهندسی کامپیوتر',
        stdId: '۹۶۱۰۱۶۴۶',
        fullName: 'محمد رستمی',
        receivingDate: '-',
        currentStatus: 'منتظر دانشجو',
        actionDate: '-'
    },
]


export default class SortableTable extends React.Component {
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
                   <div style={{overflowX: "scroll"}}>
                        <Table sortable celled unstackable>
                            <Table.Header>
                                <Table.Row>
                                    {
                                        columns.map(
                                            col => (
                                                <Table.HeaderCell
                                                    sorted={column === col.en ? direction : null}
                                                    onClick={this.handleSort(col.en)}
                                                >
                                                    {col.fa}
                                                </Table.HeaderCell>
                                            )
                                        )

                                    }
                                </Table.Row>
                            </Table.Header>
                            <Table.Body>
                                {
                                    data.map((row, index) => (
                                        <Table.Row key={index}>
                                            {columns.map(col =>(
                                                <Table.Cell>{row[col.en]}</Table.Cell>
                                            ) )}
                                        </Table.Row>
                                    ))
                                }
                            </Table.Body>
                        </Table>
                    </div>

        );
    }
}


