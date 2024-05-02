import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import fetchData from '../../hooks/fetchData';
import LinkDetail from '../LinkDetail/LinkDetail';

import { MutatingDots } from 'react-loader-spinner';

import { jwtDecode } from 'jwt-decode';

const RedirectPage = ({ setPage }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  // handle navbar from app and navbar
  setPage(false);
  // console.log(params.id);

  let response;
  useEffect(() => {
    const dataFetch = async () => {
      response = await fetchData(params.id);
      setData(response);
    };
    dataFetch();
    if (params.id === 'undefined') {
      window.location.href = '/404';
    }
  }, []);

  window.addEventListener('message', function (event) {
    if (event.origin !== 'https://mercury-uat.phonepe.com') {
      return;
    }
    // Handle the redirection data received from the iframe
    if (event.data) {
      console.log(event);
      const decodedData = jwtDecode(event?.data, { header: true });
      if (decodedData.bridgeContext.code == 'CONCLUDED') {
        window.location.href = `/purchase/${params.id}`;
      }else{
        window.location.reload();
      }
    }
  });

  return (
    <div>
      {data.monetize ? (
        <LinkDetail data={data} />
      ) : (
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
      )}
    </div>
  );
};

export default RedirectPage;
