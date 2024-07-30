import React from 'react'

function useTable() {
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Name',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'contact_information',
            dataIndex: 'contact_information'
        },
        {
            key: '4',
            title: 'Address',
            dataIndex: 'address'
        },
        {
            key: '5',
            title: 'Action',
            // render: (record: any) => {
            //     function onEdit(record: any) {
            //         throw new Error('Function not implemented.')
            //     }

            //     function onDelete(record: any) {
            //         throw new Error('Function not implemented.')
            //     }

            //     return <>
            //         <EditOutlined onClick={() => {
            //             onEdit(record)
            //         }} />
            //         <DeleteOutlined onClick={() => {
            //             onDelete(record)
            //         }} style={{ color: "red", marginLeft: 12 }} />
            //     </>
            // }
        },

    ]

   return columns

}

export default useTable
