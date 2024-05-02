import React, { useEffect, useState } from 'react';
import './LinkDetail.scss';
import { motion } from 'framer-motion';
import HandlePhonepe from '../../phonepe/HandlePhonepe';

import { MutatingDots } from 'react-loader-spinner';
import Popup from '../../components/PopupUi/Popup';

import { useAuth } from '../../context/AuthContext';
import BuyerAuth from '../../hooks/BuyerAuth';

const LinkDetail = ({ data }) => {
  const { user } = useAuth();
  // console.log(data);
  const [gatewayLink, setGatewayLink] = useState(false);
  const [loading, setLoading] = useState(false);
  // for form popup
  const [popUp, setPopUp] = useState(false);
  const [id, setId] = useState(data?.uid);

  const extractDate = (date) => {
    const n_date = new Date(date);
    const dateOnlyString = n_date.toISOString().split('T')[0];
    return dateOnlyString;
  };

  // handle pay btn
  const handlePay = async () => {
    try {
      let link;
      if (localStorage.getItem('bTok')) {
        link = await HandlePhonepe(id, localStorage.getItem('bTok'));
      } else if (user) {
        setLoading(true);
        const response = await BuyerAuth(`/buyer/auth/${id}`, {
          type: 'user',
          token: localStorage.getItem('aTok'),
        });
  
        console.log('user', response);
        link = await HandlePhonepe(id, response);
  
        setLoading(false);
      } else {
        setPopUp(!popUp);
        return; 
      }

      setGatewayLink(link);
    } catch (error) {
      console.error('handlePay Error:', error);
    }
  };

  return (
    <div className='detail'>
      <div className='detail-box'>
        <div className='top-box'>
          <div className='title-box'>
            <h3>{data?.title}</h3>
            <p className='detail-txt'>{data?.desc}</p>
          </div>
          <div className='star-box'>⭐⭐⭐</div>
        </div>
        <p className='publish'>Published on {extractDate(data?.created_on)}</p>
        <div className='badges'>
          <div className='badge'>Entertainment</div>
          <div className='badge'>Education</div>
        </div>
        <div className='author'>
          Publised by
          <div className='auth-name'>John kelvin</div>
        </div>
        <div className='pay-box'>
          <button className='payy-btn' onClick={() => handlePay()}>
            pay {data?.price} ₹
          </button>
        </div>

        <Popup
          id={id}
          popUp={popUp}
          setPopUp={setPopUp}
          gatewayLink={gatewayLink}
          setGatewayLink={setGatewayLink}
          setLoading={setLoading}
        />
      </div>

      <div className='alert-box'>
        <div className='head'>Disclaimer</div>
        <p className='d-txt'>
          linktools.io shall not be held responsible for any content or
          materials published, sold, or distributed by content creators on our
          associated apps or websites.
        </p>
      </div>

      {loading && (
        <div className='iframe-scr'>
          <div className='loader'>
            <MutatingDots
              visible={true}
              height='100'
              width='100'
              color='#715DE3'
              secondaryColor='#715DE3'
              radius='12.5'
              ariaLabel='mutating-dots-loading'
              wrapperStyle={{}}
              wrapperClass=''
            />
          </div>
        </div>
      )}

      {gatewayLink && (
        <motion.div className='iframe-scr'>
          <iframe src={gatewayLink} width={200} height={200}></iframe>
        </motion.div>
      )}
      <iframe
        name=''
        id=''
        src='https://mercury.phonepe.com/transact/prefetch'
        sandbox=''
        allow='payment'
        style={{ display: 'none' }}
      ></iframe>
    </div>
  );
};

export default LinkDetail;
