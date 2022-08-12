import Item from "./Item";
import CountMember from "./CountMember";
import { activities } from "../utils/content";

export default function ItemList({
  handleRemove,
  dataList,
  searchValue,
  selectedActivity,
}) {
  const filteredbyNameData = dataList.filter((result) => {
    if (searchValue === "") {
      return result;
    }
    const input = searchValue.toLowerCase().replace(/\s+/g, "");
    return result.name.toLowerCase().replace(/\s+/g, "").indexOf(input) !== -1;
  });

  const filteredbyActivityData = filteredbyNameData.filter((result) => {
    if (selectedActivity === "") {
      return result;
    }
    return result.participantedActivities.indexOf(selectedActivity) !== -1;
  });

  const countMember = (activity) => {
    const count = dataList.filter((item) => {
      return item.participantedActivities.indexOf(activity) !== -1;
    });
    return count.length;
  };

  return (
    <div>
      {filteredbyActivityData &&
        filteredbyActivityData.map((member) => (
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
      {filteredbyActivityData.length < 1 && <div>No memeber found</div>}
      {activities.map((item, index) => (
        <CountMember key={index} countMember={countMember} activity={item} />
      ))}
    </div>
  );
}
