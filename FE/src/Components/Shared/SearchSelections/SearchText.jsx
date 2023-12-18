import { useEffect } from "react";

export default function SearchText({
  inputValue,
  searchLabel,
  textDataKey,
  searchObject,
  setData,
  onSearch,
}) {

  const handleChange = () => {
    setData((prev) => ({
      ...prev,
      [textDataKey]: event.target.value,
    }));
  };

  const handleDelete = () => {
    setData((prev) => ({
      ...prev,
      [textDataKey]: "",
    }));
  }

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  useEffect(() => {
    if(searchObject[textDataKey] === '') {
      onSearch();
    }
  }, [searchObject[textDataKey]])

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
        onClick={handleDelete}
      ></div>
    </div>
  );
}
