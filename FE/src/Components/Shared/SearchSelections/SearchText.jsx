export default function SearchText({
  inputValue,
  searchLabel,
  textDataKey,
  setData,
  onSearch,
}) {

  const handleChange = () => {
    setData((prev) => ({
      ...prev,
      [textDataKey]: event.target.value,
    }));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-text-container">
      <div className="search-glass-icon"></div>
      <input
        type="text"
        value={inputValue}
        placeholder={searchLabel}
        onChange={handleChange}
        onKeyDown={(event) => handleKeyDown(event)}
        className="search-text"
      />
      <div
        className="delete-input icon-5"
        onClick={() =>
          setData((prev) => ({
            ...prev,
            [textDataKey]: "",
          }))
        }
      ></div>
    </div>
  );
}
