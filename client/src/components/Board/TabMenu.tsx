import { styled } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faWheatAwn } from '@fortawesome/free-solid-svg-icons';

import { IFilterInfo } from '../../interface/board.tsx';

interface IStyledProps {
  $isActive: boolean;
}

interface ITabMenuProps {
  tabLeft: boolean;
  setTabLeft: React.Dispatch<React.SetStateAction<boolean>>;
  tabRight: boolean;
  setTabRight: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveGender: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  setActiveFood: React.Dispatch<React.SetStateAction<number | null | undefined>>;
  filterInfo: IFilterInfo;
  setFilterInfo: React.Dispatch<React.SetStateAction<IFilterInfo>>;
}

const TabMenu = ({
  tabLeft,
  setTabLeft,
  tabRight,
  setTabRight,
  setActiveGender,
  setActiveFood,
  filterInfo,
  setFilterInfo,
}: ITabMenuProps) => {
  const handleClickEating = (e: React.MouseEvent<HTMLElement>) => {
    setTabLeft(true);
    setTabRight(false);
    setActiveGender(null);
    setActiveFood(null);
    setFilterInfo({
      ...filterInfo,
      category: (e.target as HTMLButtonElement).value,
      search: '',
      genderTag: null,
      foodTag: null,
    });
  };

  const handleClickShopping = (e: React.MouseEvent<HTMLElement>) => {
    setTabLeft(false);
    setTabRight(true);
    setActiveGender(null);
    setActiveFood(null);
    setFilterInfo({
      ...filterInfo,
      category: (e.target as HTMLButtonElement).value,
      search: '',
      genderTag: null,
      foodTag: null,
    });
  };

  return (
    <TabMenuArea>
      <TabButton
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          handleClickEating(e);
        }}
        $isActive={tabLeft}
        value="밥먹기"
      >
        <FontAwesomeIcon icon={faUtensils} /> 밥 먹기
      </TabButton>
      <TabButton
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          handleClickShopping(e);
        }}
        $isActive={tabRight}
        value="장보기"
      >
        <FontAwesomeIcon icon={faWheatAwn} /> 장 보기
      </TabButton>
    </TabMenuArea>
  );
};

const TabMenuArea = styled.nav`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 200px;
    padding-top: 3.125rem;
    border-right: 1px solid var(--color-gray);
  }
`;

const TabButton = styled.button<IStyledProps>`
  width: 50%;
  height: 2.5rem;
  background-color: ${(props) => (props.$isActive ? '#F0930D' : '#F4F2EF')};
  color: ${(props) => (props.$isActive ? '#ffffff' : '#000000')};
  @media screen and (min-width: 1024px) {
    width: 100%;
    height: 2.5rem;
  }
`;

export default TabMenu;
