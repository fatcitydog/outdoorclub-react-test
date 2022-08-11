import { useEffect, useState } from "react";

import { memberData, activities } from "../utils/content";
import Item from "./Item";

export default function ItemList() {
  const [selectedActivity, setSelectedActivity] = useState("");
  const [filterList, setFilterList] = useState("");

  const handleSearch = (e) => {
    let input = e.target.value;
    if (filterList.length < 1) return;
    if (input === "") {
      return setFilterList(memberData);
    }
    const filteredValues = memberData.filter(
      (item) =>
        item.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .indexOf(input.toLowerCase().replace(/\s+/g, "")) !== -1
    );
    setFilterList(filteredValues);
  };

  const handleFilterByAct = (e) => {
    let selectedValue = e.target.value;
    setSelectedActivity(selectedValue);
    if (filterList.length < 1) return;
    if (selectedValue === "") {
      return setFilterList(memberData);
    }
    const activitiesArray = memberData.map((act) => {
      let selected = act.participantedActivities.filter(
        (item) => item.indexOf(selectedValue) !== -1
      );
      if (selected > 1) {
        return act;
      }
      
    });
    console.log(activitiesArray);

    // setFilterList(activitiesArray);
  };

  const handleRemove = (e) => {
    const selectedItem = parseInt(e.target.value);
    console.log(selectedItem);
    const removeArray = filterList.filter((item) => item.id !== selectedItem);
    setFilterList(removeArray);
  };

  useEffect(() => {
    setFilterList(memberData);
  }, []);

  return (
    <div>
      <div>
        search:
        <input type="text" onChange={handleSearch} />
      </div>
      <div>
        Choosing an activity:
        <select
          name="activities"
          value={selectedActivity}
          onChange={handleFilterByAct}
        >
          <option>-- select an option --</option>
          {activities.map((activity, index) => (
            <option value={activity} key={index}>
              {activity}
            </option>
          ))}
        </select>
      </div>

      {filterList &&
        filterList.map((member) => (
          <Item
            key={member.id}
            name={member.name}
            age={member.age}
            rating={member.rating}
            participantedActivities={member.participantedActivities}
            action={handleRemove}
            id={member.id}
          />
        ))}
      <div>Hiking: {} people</div>
      <div>Running: {} people</div>
      <div>Biking: {} people</div>
    </div>
  );
}
