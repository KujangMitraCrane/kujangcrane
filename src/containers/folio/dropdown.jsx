const Dropdown = (props) => {
  const { isDropdownOpen, setIsDropdownOpen, selectedCategory, handleCategory } = props;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const categories = ['All', 'Construction', 'Infrastructure', 'Material lift'];

  return (
    <div className="dropdown">
      <div className="selected-category" onClick={toggleDropdown}>
        {selectedCategory} <span className="arrow">&#9660;</span>
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          {categories.map((category) => (
            <li key={category} className={selectedCategory === category ? 'active' : ''} onClick={() => handleCategory(category)}>
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
