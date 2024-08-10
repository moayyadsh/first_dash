
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import Modal from 'antd/es/modal/Modal'
import useModalStore from '../../stateMangment/model';
import ModalComponent from './modal/ModalForm';



function useTableColumns() {
    const { toggleModal } = useModalStore();

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
            render: () => {
                
              return <>
                <EditOutlined
                onClick={toggleModal}
                />
                <ModalComponent />

              </>
            }
          },
    ]

   return columns

}

export default useTableColumns
