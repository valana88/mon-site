import styled from "styled-components";

export const MarginLayout = styled.div`
  margin-top: 5rem;
`;

export const ImgMainBack = styled.main`
  height: 100vh;
  /* background-image: url('/backSymbiose.webp'); */
  background-image: url("/pin.webp");
  background-size: cover;
  background-position: center;
  object-fit: cover;
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const TextsContainer = styled.div`
  margin-top: 5rem;
  font-family: "Fredoka", sans-serif;
  font-size: clamp(23px, 1.2vw, 25px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border-radius: 56px; */
  color: #fbfbfb;
  background-color: #00565f71;
  padding: 5rem;
  width: calc(100% - 28vw);
  height: calc(100% - 7.5rem);

  @media screen and (max-width: 542px) {
    padding-top: 6rem;
    border: none;
    height: calc(100% - 10rem);
    padding: 10rem 4vw 0 4vw;
    width: calc(100% - 8vw);
    background-color: #00565f91;
  }
`;

export const Djeeling = styled.div`
  font-size: clamp(30px, 3vw, 42px);
  font-weight: 800;
  /* font-family: 'Poppins', sans-serif; */
  color: white;
`;

export const TitleLanding = styled.div`
  text-align: center;
  /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  /* font-family: 'Fredoka', sans-serif; */
  /* font-family: 'Open Sans', sans-serif; */
  font-family: "Poppins", sans-serif;
  font-size: clamp(33px, 4vw, 48px);
  letter-spacing: -0.5px;
  /* border: 2px solid blue; */
  font-weight: 500;
  padding-bottom: 2.5rem;
  line-height: 1.3;
  text-shadow: -1px 5px 5px #003036a6;
`;

export const SubtitleLanding = styled.div`
  font-size: clamp(19px, 1.6vw, 29px);
  font-weight: 400;
  line-height: 1.4;
  text-align: center;
  /* font-family: 'Poppins', sans-serif; */
  color: white;
  margin: 2rem 0 3rem 0;

  @media screen and (max-width: 542px) {
    margin: 1.5rem 0 2rem 0;
  }
`;

export const How = styled.div`
  display: flex;
  /* text-align: end; */
  /* justify-content: flex-end; */
  justify-content: center;
  transition: all ease-in-out 0.2s;
  padding-top: 7rem;
  /* border: 4px solid green; */

  @media screen and (max-width: 542px) {
    padding-top: 4rem;
  }

  a {
    display: inline-block;
    /* justify-content: flex-end; */
    bottom: 0;
    right: 50vw;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
    color: rgba(255, 255, 255, 0.7);
    font-size: clamp(18px, 1.4vw, 20px);
    /* letter-spacing: 1px; */
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.3s;
    transition-property: color;
    transition-timing-function: ease-in 0.1;
    transition-duration: 2s;
    padding-top: 2rem;
  }

  :hover {
    /* color: rgb(255, 255, 255); */
    /* transition: all ease-in-out 0.2s; */
    opacity: 0.7;
  }

  a span {
    position: absolute;
    top: 0;
    left: 50%;
    width: clamp(16px, 1vw, 20px);
    height: clamp(16px, 1vw, 20px);
    margin-left: -12px;
    border-left: 3px solid rgb(255, 200, 0);
    border-bottom: 2px solid rgb(255, 200, 0);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
`;

export const IconMenuSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.9rem;
  height: 50px;
  width: 50px;
  background-color: #004cff;
  border-radius: 50%;
  color: white;
  /* font-size: clamp(30px, 2vw, 35px); */
  transition: ease-in 0.2s;

  &:hover {
    transition: ease-in 0.15s;
    transform: scale(1.05);
    font-weight: 900;
  }
`;

export const TextMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  /* padding: 0.5rem 3rem 0.5rem 0.5rem; */
  font-size: clamp(19px, 1.4vw, 25px);
  justify-content: inherit;
  align-items: start;
  font-family: "Quicksand", sans-serif;
  color: #002f55;
  box-shadow: 0 0.5rem 4px 4px rgba(56, 56, 56, 0.3);
  font-weight: 600;
  transition: ease-out 0.2s;

  :hover {
    transition: ease-in 0.2s;
    color: #003a69;
  }
`;

export const HomeBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 4vw;
  /* top: 7rem; */
  /* border: 4px solid black; */
  z-index: 2;

  @media screen and (max-width: 542px) {
    /* flex-direction: row;
    right: inherit; */
    top: 6rem;
    flex-direction: row;
  }
`;

// Home1

export const Home1Back = styled.div`
  display: flex;
  flex-direction: row;
  /* height: calc(100vh - 5rem); */
  /* margin-top: 5rem; */
  height: 100vh;
  width: 100%;

  @media screen and (max-width: 1048px) {
    flex-direction: column;
    /* height: calc(100vh - 5rem); */
    height: auto;
  }
`;

export const Home1Img = styled.div`
  display: flex;
  background-image: url("/peopleLand.webp");
  background-size: cover;
  background-position: center;
  object-fit: cover;
  min-width: 45%;
  /* border-top-left-radius: 56%; */
  border-bottom-left-radius: 56%;
  /* box-shadow: 0 0 0.5rem 0 rgba(117, 117, 117, 0.55); */

  @media screen and (max-width: 1048px) {
    height: 290px;
    /* width: 100%; */
    margin: 0 10vw;
    width: calc(100% - 20vw);
  }

  @media screen and (max-width: 742px) {
    width: 100%;
    margin: 0;
  }
`;

export const Home1Texts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  /* border-top-right-radius: 56px; */
  /* margin-top: 5rem; */
  /* height: calc(100% - 5rem); */
  padding: 4rem 8vw 5rem 12vw;
  /* border-top: 4px solid #00a197;
  border-left: 8px solid #333333; */
  /* border: 2px solid black; */

  @media screen and (max-width: 1048px) {
    width: calc(100% - 16vw);
    padding: 5rem 8vw 1rem 8vw;
  }

  @media screen and (max-width: 542px) {
    padding: 6rem 4vw 1rem 4vw;
    width: calc(100% - 8vw);
  }
`;

export const Home1Subtitle = styled.div`
  text-align: center;
  font-size: clamp(24px, 1.8vw, 28px);
  font-weight: 600;
  line-height: 1.7;
`;

export const Home1Title = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  /* font-family: 'Open Sans', sans-serif; */
  /* font-family: 'Fredoka', sans-serif; */
  /* font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; */
  font-family: "Poppins", sans-serif;
  /* font-family: 'Urbanist', sans-serif; */
  font-size: clamp(33px, 3.8vw, 44px);
  font-weight: 600;
  line-height: 1.5;
  padding-bottom: 3rem;
  background: linear-gradient(
    180deg,
    rgb(34, 5, 85) 10%,
    rgb(9, 46, 124) 25%,
    rgb(0, 51, 93) 50%,
    rgb(0, 92, 80) 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
  box-decoration-break: clone;

  @media screen and (max-width: 1048px) {
  }
  @media screen and (max-width: 742px) {
    font-size: clamp(26px, 3.5vw, 28px);
    /* text-align: left; */
  }
`;

// CATEGORIES

export const Home1CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 7rem 10vw 2rem 10vw;

  @media screen and (max-width: 1048px) {
    padding: 7rem 6vw 0rem 6vw;
  }

  @media screen and (max-width: 842px) {
    padding: 8rem 0;
  }
`;

export const CategoryContain = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (max-width: 842px) {
    margin-bottom: 2rem;
    flex-direction: column-reverse;
  }
`;

export const CategoryContainReverse = styled(CategoryContain)`
  flex-direction: row-reverse;

  @media screen and (max-width: 842px) {
    flex-direction: column-reverse;
  }
`;

export const ImgCategory = styled.img`
  height: 42vh;
  min-width: 42vh;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  /* border-bottom-left-radius: 242px; */
  border-radius: 21px;

  @media screen and (max-width: 1048px) {
    height: 320px;
    min-width: 33vw;
  }

  @media screen and (max-width: 842px) {
    height: 270px;
    width: 100%;
    border-radius: 0;
  }
`;
export const TextsCategory = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 4vw 1.5rem 4vw;
  /* border: 4px solid orange; */

  @media screen and (max-width: 1048px) {
    padding: 1.5rem 2rem;
  }

  @media screen and (max-width: 842px) {
    padding: 1.5rem;
  }
`;

export const TitleCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* font-family: 'Fredoka', sans-serif; */
  font-family: "Open Sans", sans-serif;
  /* font-family: 'Poppins', sans-serif; */
  /* font-family: 'Urbanist', sans-serif; */
  font-size: clamp(24px, 2.4vw, 42px);
  font-weight: 700;
`;

export const TextCategory = styled.div`
  /* color: #333333; */
  font-size: clamp(20px, 1.6vw, 26px);
  line-height: 1.8;
  padding: 0.8rem 0 0 0;
  font-weight: 500;
  /* font-family: 'Poppins', sans-serif; */

  @media screen and (max-width: 842px) {
    padding: 0.5rem 0 0 0;
  }
`;
