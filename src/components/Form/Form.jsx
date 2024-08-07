import { FiSearch } from 'react-icons/fi';
import style from './Form.module.css';

export const Form = ({ addTodo, onPhotoSearch, tabIndex }) => {
  const handleSubmit = event => {
    event.preventDefault();
    const inputValue = event.target.search.value.trim();
    tabIndex === 0 ? addTodo(inputValue) : onPhotoSearch(inputValue);
    event.target.reset();
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
