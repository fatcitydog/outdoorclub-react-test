import { useEffect, useState } from "react";

export default function SearchBar({ dataArray }) {
  const [filterList, setFilterList] = useState("");

  const handleSearch = (e) => {
    let input = e.target.value;
    if (input === "") {
      return setFilterList(dataArray);
    }
    const filteredValues = dataArray.filter(
      (item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .indexOf(input.toLowerCase().replace(/\s+/g, "")) !== -1
    );
    setFilterList(filteredValues);
  };

  useEffect(() => {
    setFilterList(dataArray);
  }, []);

  return (
    <>
      <div>
        search:
        <input type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}
