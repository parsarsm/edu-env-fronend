import React from 'react'
import {Header as SHeader, Menu, Segment,} from 'semantic-ui-react'
import _ from 'lodash'
import SortableTable from "../../elements/tables/sortableTable/SortableTable";
import ConsultFormModal from "../../modals/consultFormModal/ConsultFormModal";


export default class ConsultForm extends React.Component {

    render() {
        return (
            <div>
                <SHeader as='h2'>
                    ثبت نام و ترمیم
                    <SHeader.Subheader>
                        فرم مشاوره انتخاب واحد
                    </SHeader.Subheader>
                </SHeader>

                <SHeader as='h5' attached='top' inverted>
                    جدول درخواست ها
                </SHeader>

                <Segment attached>
                    <SortableTable/>
                </Segment>
                <Segment attached>
                    <ConsultFormModal/>
                </Segment>
            </div>
        );
    }
}


