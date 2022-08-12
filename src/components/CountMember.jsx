export default function CountMember({ countMember, activity }) {
  return (
    <div>
      {activity} : {countMember(activity)} people
    </div>
  );
}
