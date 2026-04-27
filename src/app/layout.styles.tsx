import Link from "next/link";
import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  height: 5rem;
  position: fixed;
  z-index: 10;
  width: 100%;
  box-shadow: 0 1.5px 3px 0 rgba(136, 136, 136, 0.2);
`;

export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffffee;
  width: 100%;
  padding: 0 2rem;

  @media screen and (max-width: 542px) {
    padding: 0 0.5rem;
  }
`;

export const NavCategory = styled(Link as any)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  font-weight: 600;
  cursor: pointer;
  font-size: clamp(15px, 1.5vw, 17px);
  transition: ease-out 0.1s;
  color: white;

  &:hover {
    transition: ease-in 0.2s;
    transform: scale(1.02);
    font-weight: 700;
    /* text-decoration: underline; */
  }

  &:focus {
    outline: none;
    font-weight: 700;
  }

  @media screen and (max-width: 1048px) {
    min-width: 40px;
  }
`;

export const IconSymbioseLinkContainer = styled(Link as any)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  /* position: sticky; */
  font-weight: 600;

  &:hover {
    transition: ease-in-out 0.1s;
    /* transform: scale(1.05); */
    font-weight: 700;
    color: #000000;
  }
`;

export const Djeeling = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #212121;
  font-weight: 700;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  font-size: clamp(21px, 3vw, 26px);
  transition: ease-in-out 0.2s;

  @media screen and (max-width: 742px) {
    display: none;
  }
`;

export const UserAvatar = styled.img`
  display: flex;
  justify-content: center;
  /* background-image: url('/images/profiles.webp'); */
  border: 2.5px solid #00aaa4;
  width: 46px;
  height: 46px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  border-radius: 50%;
  background: #414141d2;
  box-shadow: 0 2px 1.5px 0 rgba(101, 101, 101, 0.3);
  transition: ease-out 0.2s;

  :hover {
    transition: ease-in 0.2s;
    transform: scale(1.02);
    box-shadow: 0 0 6px 0 rgba(130, 130, 130, 0.3);
  }

  @media screen and (max-width: 742px) {
    width: 42px;
    height: 42px;
  }
`;

export const UserAvatarMenu = styled(UserAvatar)`
  width: 33px;
  height: 33px;
  margin-right: 0.5rem;
  border: none;
  box-shadow: 0 2px 3px 0 rgba(101, 101, 101, 0.35);
  transition: ease-out 0.2s;

  :hover {
    transition: ease-in 0.2s;

    transform: scale(1.02);
    box-shadow: 0 0 8px 0 rgba(101, 101, 101, 0.35);
  }
`;

export const Search = styled.div`
  padding: 0 0.8rem;
  font-weight: 500;

  @media screen and (max-width: 1048px) {
    display: none;
    padding: 0 0 0 0;
  }
`;

export const Create = styled(Search)`
  padding: 0 0 0 0.5rem;
  font-weight: 600;

  @media screen and (max-width: 542px) {
    display: none;
  }
`;

export const SearchHome = styled.div`
  display: flex;
  font-weight: 500;
  transition: ease-in-out 0.2s;

  :hover {
    transition: ease-in-out 0.1s;
    font-weight: 600;
  }
`;

export const SearchText = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;
export const SearchNone = styled.span`
  padding-left: 0.25rem;

  @media screen and (max-width: 970px) {
    display: none;
  }
`;

export const NotifsUserContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const User = styled(Create)`
  padding: 0 0 0 0.5rem;
  color: #101010;
`;

export const MenuUserContainer = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: sticky;
  font-weight: 600;

  &:hover {
    transition: ease-in-out 0.1s;
    /* transform: scale(1.05); */
    font-weight: 700;
    color: #000000;
  }
`;

export const MenuLinks = styled(Link as any)`
  display: flex;
  /* justify-content: flex-end; */
  font-size: clamp(16.5px, 0.8vw, 19px);
  font-weight: 600;
  min-width: 100px;
  color: #505050;
`;

export const HomeSearchLinks = styled(Link as any)`
  display: flex;
  align-items: center;
  font-size: clamp(18px, 1vw, 20px);
  font-weight: 600;
  min-width: 100px;
  height: 42px;
  color: #505050;
`;
