import styled from 'styled-components'
import backgroundImage from '../../assets/Img/pds.jpg'

export const Container = styled.div`
background-image: url(${backgroundImage});
background-position: center;
background-size: cover;
background-repeat: no-repeat;

  align-items: center;
  height: 200vh;





  .pokemon-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 20px;
  }

  .pokemon {
    margin: 10px;
    text-align: center;
    cursor: pointer;

    img {
      width: 100px;
      height: 100px;
      border: 2px solid #ccc;
      border-radius: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    h1 {
      font-size: 14px;
      color: #ffffff;
      margin-top: 5px;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    width: 400px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    h2 {
      font-size: 24px;
      margin-bottom: 10px;
    }

    img {
      width: 150px;
      height: 150px;
      margin-bottom: 20px;
    }

    p {
      font-size: 16px;
      color: #666;
      margin: 5px 0;
    }

    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: none;
      border: none;
      font-size: 24px;
      cursor: pointer;
      color: #333;

      &:hover {
        color: red;
      }
    }
  }
`