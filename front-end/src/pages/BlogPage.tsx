import React, {useState} from 'react';
import CreateBlPost from '../components/CreateBlPost';
import ErrorMessage from '../components/ErrorMessage';
import LoadMessage from '../components/LoadMessage';
import BlPost from '../components/BlPost';
import {useBlPosts} from '../hooks/blPosts'
import { IBlPost } from '../models';
import { Drawer, FloatButton } from 'antd'
import { PlusOutlined} from  '@ant-design/icons'

export default function BlogPage() {
  
  const {loading, error, blPosts, addBlPost} = useBlPosts()
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const createHandler = (blPost: IBlPost) => {
    setOpen(false);
    addBlPost(blPost)
  }

  


  return (
    <div className="pt-5 ">
      {loading && <LoadMessage />}
      {error && <ErrorMessage error={error} />}
      <div className='flex flex-col-reverse justify-center' style={{marginLeft: '15%', marginRight: '15%'}}>
        {blPosts.map(blPost => <BlPost blPost={blPost} key={blPost.id}/>)}
      </div>
      <FloatButton tooltip={<div>Add post</div>} icon={<PlusOutlined />} type='primary' onClick={showDrawer} />
      <Drawer title="Add a new post" placement="right" onClose={onClose} open={open}>
        <CreateBlPost onCreate={createHandler}/>
      </Drawer>
    </div>
    
  );
}
