import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faBars } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderPositioner>
        <HeaderLeftContents>
          <LocationIcon icon={faLocationDot} />
        </HeaderLeftContents>
        <HeaderTitle># 밥친구</HeaderTitle>
        <HeaderRightContents>
          <HeaderRightItems>보드</HeaderRightItems>
          <HeaderRightItems>마이페이지</HeaderRightItems>
          <HeaderRightItems>로그아웃</HeaderRightItems>
          <HeaderHamburgerIcon icon={faBars} />
        </HeaderRightContents>
      </HeaderPositioner>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  height: 4.375rem;
  background-color: var(--color-green);

  @media screen and (max-width: 768px) {
    height: 3.125rem;
  }
`;

const HeaderPositioner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin-left: 3.125rem;
  margin-right: 3.125rem;

  @media screen and (max-width: 375px) {
    margin-left: 1.875rem;
    margin-right: 1.875rem;
  }
`;

const LocationIcon = styled(FontAwesomeIcon)`
  width: 1.5625rem;
  height: 1.5625rem;
  color: #fff;
`;

const HeaderLeftContents = styled.div`
  display: flex;
  width: 16.25rem;

  @media screen and (max-width: 768px) {
    width: 1.875rem;
  }
`;

const HeaderTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.3125rem;
  color: #fff;
  font-family: Tenada;
  font-size: 2rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const HeaderRightContents = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 16.25rem;

  @media screen and (max-width: 768px) {
    width: 1.875rem;
  }
`;

const HeaderRightItems = styled.div`
  margin-left: 1.875rem;
  color: #fff;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderHamburgerIcon = styled(FontAwesomeIcon)`
  display: none;
  width: 1.5625rem;
  height: 1.5625rem;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Header;
