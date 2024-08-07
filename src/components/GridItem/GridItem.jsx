import style from './GridItem.module.css';
// import { RiDeleteBinLine } from 'react-icons/ri';
// import { Text } from 'components';

export const GridItem = ({ children }) => {
  return <li className={style.item}>{children}</li>;
};
