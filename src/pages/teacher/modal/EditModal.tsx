import { Modal } from 'antd'
import React, { useState } from 'react'
import { useUpdateUsers } from '../../../api/users'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'

function EditModal() {
    const [isEdating, setIsEdating] = useState(false)
    const { mutate: updatData } = useUpdateUsers({})
    const onEdit = (record: any) => {

        setIsEdating(true)
    }

    (record: any) => {
        return <>
            <EditOutlined onClick={() => {
                onEdit(record)
            }} />
        </>
    }

    return (
 <Modal
            title="Edit the teacher"
            visible={isEdating}
            onCancel={() => {
                setIsEdating(false)
            }}
            onOk={() => {
                setIsEdating(false)
            }
            }

        />
)
}

export default EditModal