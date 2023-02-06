import "./search-input.styles.css";

const SearchInput = ({ onChangeHandler, placeholder, className }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchInput;
