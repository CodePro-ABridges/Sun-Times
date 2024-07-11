import styled from "styled-components";

export const MainWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #6e8efb, #a777e3);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .container {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    color: #ffffff;
    width: 90%;
    max-width: 400px;
    max-height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  .searchArea {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    background: rgba(255, 255, 255, 0.2);
    padding: 12px;
    border-radius: 50px;
    width: calc(100% - 60px);
    color: #ffffff;
    font-size: 16px;
    transition: all 0.3s ease;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }

    &:focus {
      background: rgba(255, 255, 255, 0.3);
    }
  }

  .searchCircle {
    background: rgba(255, 255, 255, 0.2);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    > .searchIcon {
      font-size: 20px;
      color: #ffffff;
    }
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 20px;

    > .icon {
      font-size: 5rem;
      margin-bottom: 10px;
    }

    > h1 {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: 5px;
    }

    > h2 {
      font-size: 1.2rem;
      font-weight: 400;
      text-transform: capitalize;
      letter-spacing: 1px;
    }
  }

  .bottomInfoArea {
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 15px;
    margin-bottom: 20px;
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;

    .windIcon,
    .humidIcon {
      font-size: 2rem;
      margin-right: 10px;
      color: rgba(255, 255, 255, 0.8);
    }

    .humidInfo {
      h1 {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 2px;
      }

      p {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }

  .loading {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .loadingIcon {
      font-size: 3rem;
      color: #ffffff;
      animation: spin 1.5s linear infinite;
    }

    p {
      font-size: 1rem;
      margin-top: 20px;
      color: rgba(255, 255, 255, 0.8);
    }
  }

  .hourlyForecast {
    display: flex;
    overflow-x: auto;
    padding: 10px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;

    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 3px;
    }

    .hourlyItem {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 20px;
      min-width: 60px;

      p {
        font-size: 0.8rem;
        margin: 5px 0;
      }

      img {
        width: 40px;
        height: 40px;
      }
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 480px) {
    .container {
      padding: 1.5rem;
    }

    .weatherArea {
      > .icon {
        font-size: 4rem;
      }

      > h1 {
        font-size: 2.5rem;
      }

      > h2 {
        font-size: 1rem;
      }
    }

    .bottomInfoArea {
      flex-direction: column;
      align-items: center;

      .humidityLevel,
      .wind {
        margin-bottom: 10px;
      }
    }
  }
`;
