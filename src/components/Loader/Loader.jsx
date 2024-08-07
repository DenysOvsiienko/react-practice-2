import { PropagateLoader } from 'react-spinners';
import style from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={style.backdrop}>
      <PropagateLoader color="#63d3fc" />
    </div>
  );
};
