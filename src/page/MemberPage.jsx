import { useState, useEffect } from "react";
import styled from "styled-components";

import { memberData, activities } from "../utils/content";
import ItemList from "../components/ItemList";
import { Box, Input } from "../styles/globalStyles";

const InputBox = styled.div`
  width: 50%;
  margin: 1rem 0;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid silver;
`;

export default function MemberPage() {
  const [dataList, setDataList] = useState([]);

  const [searchValue, setSearchValue] = useState("");
  const [selectedActivity, setSelectedActivity] = useState("");

  const handleRemove = (e) => {
    const selectedItem = parseInt(e.target.value);
    const removeArray = dataList.filter((item) => item.id !== selectedItem);
    setDataList(removeArray);
  };

  useEffect(() => {
    setDataList(memberData);
  }, []);

  return (
    <Box>
      <InputBox>
        <div>search:</div>
        <Input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <div>Choosing an activity:</div>
        <select
          name="activities"
          value={selectedActivity}
          onChange={(e) => setSelectedActivity(e.target.value)}
        >
          <option>-- select an option --</option>
          {activities.map((activity, index) => (
            <option value={activity} key={index}>
              {activity}
            </option>
          ))}
        </select>
      </InputBox>
      {dataList && (
        <ItemList
          handleRemove={handleRemove}
          dataList={dataList}
          searchValue={searchValue}
          selectedActivity={selectedActivity}
        />
      )}
    </Box>
  );
}
