import React from 'react';
import { Carousel } from 'antd';


export default function HomePage() {



  return (
    <div className="pt-5 flex flex-col">
      <div className='flex flex-row' style={{marginLeft: '15%', marginRight: '15%'}}>
        <div className='w-[100%]'>
          <img className='border rounded-full p-2 bg-white' src='https://sun9-9.userapi.com/impg/8Kf-aQz119g1V3HV02pXMwQ6knHEzspfWBvyWg/hoS4ZOlaZHE.jpg?size=2560x2372&quality=95&sign=198972ea37fde00e26118e1799ca002e&type=album' alt='Nox Auri'></img>
        </div>
        <div className='border rounded-lg py-2 px-4 flex flex-col m-4 bg-white'>
          <h1 className='font-bold text-xl text-blue-400 text-center'>Welcome, wandering soul!</h1>
          <p className='mb-2'>My name is <span className='font-bold text-blue-400'>Nox Auri</span> and this is my little cozy corner of the Internet where i keep my Worlds, OCs and some designs up for sale!</p>
          <p>I love making art and characters and that is something I have been doing my whole life. I want to place info about my oc children here as well as put some of those i create and not use up for adoption, because each of little oc bbys should have a loving home! <span className='font-bold text-blue-400'>♥️</span> If there is anything you would like to ask or tell me about please feel free to send a message! I'm a newbie tho, so pls be patient with me as i can just not notice it. In case you desire, i also have a Discord (Nox#5302), where you can easily add me or text me too! Sending you all the love!~ :3с</p>
        </div>
      </div>
      <div className='flex flex-row' style={{marginLeft: '15%', marginRight: '15%'}}>
        <div className='border rounded-lg py-2 px-4 flex flex-col m-4 bg-white'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis in lacus quis varius. Proin vel mauris id justo tristique sagittis nec eu nibh. Phasellus at dolor iaculis, semper mauris eget, consequat nulla. Aliquam a est at erat lacinia sollicitudin. Mauris sollicitudin et nulla eu ultrices. In at felis tincidunt, rhoncus erat et, tempor quam. Integer non interdum neque. Curabitur luctus gravida ex, non feugiat magna pulvinar ac.</p>
        </div>
        <div className='border rounded-lg py-2 px-4 m-4 bg-white w-[60%] max-h-96'>
         <Carousel autoplay >
          <div >
            <img className='h-80' src='https://sun9-20.userapi.com/impg/vJGJVHMWsWcmlpsr7T_Q_rX9VhvukydH-q_n5A/1h1OLEZy-Fw.jpg?size=2560x961&quality=96&sign=ea5e8800228f8ad3e0a05934845a5d5e&type=album' alt='Carousel pic' />
          </div>
          <div>
            <img className='h-80' src='https://sun9-57.userapi.com/impg/PdsjRlYYggq3y5sAN43Djk0Au0xNRDi2lG9SMg/81yNBBXQWMw.jpg?size=2560x1072&quality=96&sign=c0ba004bd47fc8ecebcd2eeb2ee84901&type=album' alt='Carousel pic' />
          </div>
          <div>
            <img className='h-80' src='https://sun9-38.userapi.com/impg/wJDRVu7L1SQViikrOgHVwk0cWt8STZn1j2g9yg/pFJDZo1js8g.jpg?size=2560x1088&quality=96&sign=79d53d263025aeb33c2a83372401acc9&type=album' alt='Carousel pic' />
          </div>
        </Carousel>
        </div>
        <div className='border rounded-lg py-2 px-4 flex flex-col m-4 bg-white'>
          <p>Vestibulum fermentum elementum dui, et ultrices turpis aliquam quis. Nunc quis efficitur nunc, vitae varius nulla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi dictum in nisl non pulvinar. Phasellus molestie sollicitudin lectus, eget feugiat sem vulputate vel. Maecenas augue velit, rhoncus id tortor non, fermentum eleifend enim. Integer accumsan sem nibh. Aenean massa velit, pretium non ipsum sit amet, pharetra congue urna.</p>
        </div>
      </div>
    </div>
    
  );
}
