import React, { useState, Fragment } from 'react';
import * as axios from 'axios';
import './UsersStyles.scss';
import { Column, Container, Row } from '../index';

import userPhoto from '../../assets/images/anonimus.png'

const Users = () => {
  const [users, usersUpdate] = useState([]);

  axios.get(`http://localhost:4022/api/user`)
    .then(res => {
      const usersData = res.data;
      usersUpdate(usersData)
    });

  return (
    <Container className='container' >
    <h1 className="title">Users</h1>
      <div className='wrapContent'>
        {
          users.map((user, index) => (
            <Fragment key={index}>
              <Container>
                <Row>
                  <div className='img'><img src={userPhoto} alt='ava'/></div>
                    <div className='userInfo'>
                      <div>
                        <h2>{`${user.name} ${user.lastName}`}</h2>
                      </div>
                      <div className='userStatus'>
                        {user.status}
                      </div>
                    </div>
                </Row>
              </Container>
            </Fragment>
          ))
          // console.log('test => ', users)
        }
      </div>
    </Container>
  );
};

export default Users;