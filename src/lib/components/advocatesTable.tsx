import React, { useRef } from 'react'
import { Table, TableProps } from 'antd';

import { Advocate } from '../types/advocate';

type Props = {
    data: Advocate[];
    loading: boolean;
};

function AdvocatesTable({ data, loading = false }: Props) {
    const columns = useRef<TableProps<Advocate>['columns']>([
        {
            title: 'First',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last',
            dataIndex: 'lastName',
            key: 'lastName',
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Degree',
            dataIndex: 'degree',
            key: 'degree',
        },
        {
            title: 'Specialties',
            dataIndex: 'specialties',
            key: 'specialties',
            render: (_, advocate: Advocate) => (
                <span>{advocate.specialties.join(', ')}</span>
                // <ul className='max-h-10 overflow-scroll'>{advocate.specialties.map((s) => <li key={s}>{s}</li>)}</ul>
            ),
        },
        {
            title: 'Years of Experience',
            dataIndex: 'yearsOfExperience',
            key: 'yearsOfExperience',
        },
        {
            title: 'Phone',
            dataIndex: 'phoneNumber',
            key: 'phoneNumber',
        },
    ]);

    return (
        <Table<Advocate> loading={loading} bordered columns={columns.current} dataSource={data} />
    );
}
export default React.memo(AdvocatesTable);