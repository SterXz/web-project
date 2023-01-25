import React, {useState} from 'react';
import CreatePic from '../components/CreatePic';
import ErrorMessage from '../components/ErrorMessage';
import LoadMessage from '../components/LoadMessage';
import Picture from '../components/Picture';
import {usePics} from '../hooks/pics'
import { IPic } from '../models';
import { Drawer, Segmented, FloatButton } from 'antd'
import { PlusOutlined} from  '@ant-design/icons'

export default function GalleryPage() {
  const [filt, setFilt] = useState<string | number>('All')
  
  const {loading, error, pics, addPic} = usePics()
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const createHandler = (pic: IPic) => {
    setOpen(false);
    addPic(pic)
  }

  


  return (
    <div className="pt-5 ">
      {loading && <LoadMessage />}
      {error && <ErrorMessage error={error} />}
      <div className='flex flex-wrap justify-center'>
        <Segmented options={['All', 'OCs', 'Adopts', 'Commisions']} value={filt} onChange={setFilt} />
      </div>
      <div className='flex flex-wrap-reverse justify-center'>
        {filt==='All' && pics.map(pic => <Picture pic={pic} key={pic.id}/>)}
        {filt==='OCs' && pics.filter(pic => pic.category==="oc").map(pic => <Picture pic={pic} key={pic.id} />)}
        {filt==='Adopts' && pics.filter(pic => pic.category==="adopt").map(pic => <Picture pic={pic} key={pic.id} />)}
        {filt==='Commisions' && pics.filter(pic => pic.category==="commision").map(pic => <Picture pic={pic} key={pic.id} />)}
      </div>
      <FloatButton tooltip={<div>Add pic</div>} icon={<PlusOutlined />} type='primary' onClick={showDrawer} />
      <Drawer title="Add a new pic" placement="right" onClose={onClose} open={open}>
        <CreatePic onCreate={createHandler}/>
      </Drawer>
    </div>
    
  );
}
