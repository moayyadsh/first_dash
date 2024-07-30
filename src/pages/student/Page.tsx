// import React, { useState } from 'react'
// import { Button,  Modal,Table, Form, Input, Select } from 'antd'
// import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
// import { useAuthState } from "../../stateMangment/AuthState"
// import { useDeleteUsers, useGetUsers, useUpdateUsers } from "../../api/users"
// import useTable from './Table'





// function App() {


//     const [isEdating, setIsEdating] = useState(false)

//     const [dataSource, setDataSource] = useState([] as any)
//     const { AuthState, setAuthState, token } = useAuthState()
//     console.log(token);


//     const { data } = useGetUsers({});
//     const onGetStudent = () => {
//         setDataSource(data['data']);


//         const student = {
//             id: dataSource,
//             name: dataSource,
//             contact_information: dataSource,
//             address: dataSource
//         }

//         setDataSource((pre: any) => {

//             return [...pre, student]

//         })

//     }



//     const onAddStudent = () => {
//         const randomNumber = parseInt("Math.random()*1000")
//         const newStudent = {

//             id: randomNumber,
//             name: 'Name' + randomNumber,
//             contact_information: randomNumber,
//             address: 'Address' + randomNumber

//         }
//         setDataSource((pre: any) => {
//             return [...pre, newStudent]
//         })
//     }

//     const { mutate: deleteUser } = useDeleteUsers({
//     });
//     const onDelete = (record: any) => {

//         Modal.confirm({
//             title: 'Are you sure, you want to delet this student',
//             onOk: () => {
//                 deleteUser({ id: 1 })

//             }
//         })

//     }


//     const { mutate: updatData } = useUpdateUsers({})
//     const onEdit = (record: any) => {

//         setIsEdating(true)
//     }
//     const columns = useTable();

//     // const columns = [
//     //     {
//     //         key: '1',
//     //         title: 'ID',
//     //         dataIndex: 'id'
//     //     },
//     //     {
//     //         key: '2',
//     //         title: 'Name',
//     //         dataIndex: 'name'
//     //     },
//     //     {
//     //         key: '3',
//     //         title: 'contact_information',
//     //         dataIndex: 'contact_information'
//     //     },
//     //     {
//     //         key: '4',
//     //         title: 'Address',
//     //         dataIndex: 'address'
//     //     },
//     //     {
//     //         key: '5',
//     //         title: 'Action',
//     //         render: (record: any) => {
//     //             return <>
//     //                 <EditOutlined onClick={() => {
//     //                     onEdit(record)
//     //                 }} />
//     //                 <DeleteOutlined onClick={() => {
//     //                     onDelete(record)
//     //                 }} style={{ color: "red", marginLeft: 12 }} />
//     //             </>
//     //         }
//     //     },

//     // ];
    
//     console.log(columns);
    


//     return (
//         <div className='App'>
//             <header className='App-header'>
//                 <Button onClick={onAddStudent}>AddNewStudent</Button>
//                 <Button onClick={onGetStudent}>Fetch data</Button>
//                <Table
                

            
//                    columns = {columns as any} 
//                    dataSource={dataSource}
//                    rowKey="key"
                 
//                 > 
//                 </Table>
//                 <Modal
//                     title="Edit the student"
//                     visible={isEdating}
//                     onCancel={() => {
//                         setIsEdating(false)
//                     }}
//                     onOk={() => {
//                         setIsEdating(false)
//                     }
//                     }
//                 >

//                     <Form.Item
//                         name="Name" label="FullName"

//                     >
//                         <Input placeholder="Inter Your Name" />
//                     </Form.Item>
//                     <Form.Item
//                         name="Email" label="Email   "

//                     >
//                         <Input placeholder="Inter Your Email" />
//                     </Form.Item>
//                     <Form.Item
//                         name="Address" label="Address"

//                     >
//                         <Input placeholder="Inter Your Address" />
//                     </Form.Item> 
//                 </Modal>
//             </header>
//         </div>
//     )
// }

// export default App


