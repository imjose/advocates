import React from 'react'
import { Table, TableProps } from 'antd';

import { Advocate } from '@/lib/types/advocate';
import { PaginatedResult, SearchPaginationParams } from '@/lib/types/params';

type Props = {
    loading: boolean;
    tableData: PaginatedResult<Advocate> | undefined;
    paginationOptions: SearchPaginationParams;
    onPageChange: (page: number, pageSize: number) => void;
};

const tableColumns: TableProps<Advocate>['columns'] = [
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
];

function AdvocatesTable({ tableData, loading = false, paginationOptions, onPageChange }: Props) {
    const paginationConfig: TableProps<Advocate>['pagination'] = {
        defaultCurrent: paginationOptions.page ?? 1,
        total: tableData?.totalItems,
        onChange: onPageChange,
    };

    return (
        <Table<Advocate> bordered pagination={paginationConfig} loading={loading} columns={tableColumns} dataSource={tableData?.data} />
    );
}
export default React.memo(AdvocatesTable);