import React, {useState} from 'react';
import SendMessage from '../components/SendMessage';
import {useMsgs} from '../hooks/msgs'
import { IMsg } from '../models';
import { Drawer, Button} from 'antd'

export default function CommisionsPage() {
  const {addMsg} = useMsgs()
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
  };
  
  const createHandler = (msg: IMsg) => {
    setOpen(false);
    addMsg(msg)
  }


  return (
    <>
      <div className="pt-5 flex flex-col">
        <div className='flex flex-row justify-center' style={{marginLeft: '15%', marginRight: '15%'}}>
          <img className='border rounded-full p-2 bg-white w-1/3' src='https://sun9-31.userapi.com/impg/sJRqHQUIlLoi0rHBmIjfCOcpIhynHfd793E8cw/pVuG1j6fUxE.jpg?size=2440x1988&quality=95&sign=186cd60ae67e10423c762083806f3d23&type=album' alt='Nox Auri'></img>
        </div>
        <div className='flex flex-row justify-center mt-5'>
          <Button className='font-bold text-xl bg-blue-400 border rounded-full  text-white w-1/3' onClick={showDrawer}>Contact me!</Button>
        </div>
        <div className='flex flex-row' style={{marginLeft: '15%', marginRight: '15%'}}>
          <div className='border rounded-lg py-2 px-4 flex flex-col m-4 bg-white'>
            <h1 className='font-bold text-xl text-blue-400 text-center'>♡ Commissions ♡</h1>
            <p><span className='font-bold text-xl text-blue-400'>·</span> In order to get a commission, you should message me directly. That can be done on this page or through my Twitter, Discord (Nox#5302) or DeviantArt.</p>
            <p><span className='font-bold text-xl text-blue-400'>·</span> Once the commission is discussed, I will ask for prepayment. After that, you will get your place in queue. I try my best to work on the commissions as fast and at the same time as thorough as possible.</p>
            <p><span className='font-bold text-xl text-blue-400'>·</span> The rules are listed here, but you can ask me any questions you want, if needed. I don’t bite! ^^</p>
          </div>
          <div className='border rounded-lg py-2 px-4 flex flex-col m-4 bg-white'>
            <h1 className='font-bold text-xl text-blue-400 text-center'>♡ Rules and Terms of Service ♡</h1>
            <p><span className='font-bold text-xl text-blue-400'>·</span> Commissions are always open and slots are unlimited, but there is a queue.</p>
            <p><span className='font-bold text-xl text-blue-400'>·</span> Final product includes un-watermarked image files with full commercial rights (unless otherwise stated)</p>
            <p><span className='font-bold text-xl text-blue-400'>·</span> Do not claim the design or the commission as your own work.</p>
            <p><span className='font-bold text-xl text-blue-400'>·</span> Once your order is processed and payment has been received, your order will be given a labeled card and placed in the appropriate queue.</p>
            <p><span className='font-bold text-xl text-blue-400'>·</span> If your order has been approved you can ask for changes at any stage of work.</p>
            <p><span className='font-bold text-xl text-blue-400'>·</span> Refunds will not be offered regardless of the order progress.</p>
          </div>
        </div>
      </div>
      <Drawer title="Send me a message" placement="bottom" onClose={onClose} open={open}>
        <SendMessage onCreate={createHandler}/>
      </Drawer>
    </>
    
  );
}
