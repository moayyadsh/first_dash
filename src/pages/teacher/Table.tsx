import React, { useState } from 'react'
import useTableColumns from './useTableColumns'
import {Table as DataTable} from 'antd'
import { useGetUsers } from '../../api/users';
function Table() {
    const columns = useTableColumns();
    const { data,isLoading,isError,error} = useGetUsers({});

    
  return (
    <DataTable
    columns = {columns as any} 
    dataSource={data?.data}
    rowKey="key"
    loading={isLoading}
    
    />
    
  )
}
export default Table