import React from 'react';
// eslint-disable-next-line import/no-unresolved
import styled from 'styled-components';

function Profile() {
  return (
    <Wrapper>
      <div className="container mt-4">
        <div className="jumbotron">
          <h1 className="display-4">Nikesh Acharya</h1>
          <hr className="my-4" />
          <p> Мой профиль </p>
          <p>Логин : 123456789</p>
          <p>Имя : Nikesh Acharya</p>
          <p>email : Nikesh6598gmail.com</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default Profile;
const Wrapper = styled.div`
  margin-top: 40px;

  img {
    clip-path: circle();
    display: inline;
    width: 10%;
    height: 20%;
    border-radius: 50%;
  }
`;
