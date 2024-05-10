import { useEffect, useState } from "react";
import React from 'react';
import { Button, Card, Popconfirm, Rate, Space, Table } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const query = "https://dummyjson.com/products";
const columns = [
  {
      title: 'Id',
      dataIndex: 'id',
      key: 'id'
  },
  {
      title: 'Image',
      dataIndex: 'thumbnail',
      key: 'thumbnail',
  },
  {
      title: 'Name',
      dataIndex: 'title',
      key: 'name'
  },
  {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (text) => <span>{text}$</span>
  },
  {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      render: (text) => <Rate allowHalf disabled defaultValue={text} />
  },
  {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
                <Popconfirm
                  title="Delete the product"
                  description={`Are you sure to delete ${record.title}?`}
                  okText="Yes"
                  cancelText="No"
                  placement="left"
              >
                  <Button danger></Button>
              </Popconfirm>
          </Space>
      ),
  },
];
export default function Posts() {

  const [posts, setProducts] = useState([]);

  const loadProducts = async () => {
    const response = await fetch(query);
    const data = await response.json();

    setProducts(data.posts);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="post-container" >
      <Card
        style={{
          width: '100%',
        }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >

        {/* <Table columns={columns} dataSource={products} pagination={{ pageSize: 5 }} rowKey="id" /> */}
      </Card>
    </div>
  );
}