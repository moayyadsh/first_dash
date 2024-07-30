import React, { useState } from 'react'
import { useGetUsers } from '../../api/users';
import { Button, Modal } from 'antd';
import Table from './Table';
import EditModal from './modal/EditModal';

const Page = () => {

  return (
    <div className='App'>
           <Table/>
           <EditModal/>
        </div>
  )
}

export default Page