export default function Item({
  id,
  name,
  age,
  rating,
  participantedActivities,
  action,
}) {
  return (
    <>
      <div>{name}</div>
      <div>{age}</div>
      <div>{rating}</div>
      {participantedActivities &&
        participantedActivities.map((activity, index) => (
          <div key={index}>{activity}</div>
        ))}
      <button value={id} onClick={action}>
        Remove
      </button>
    </>
  );
}
