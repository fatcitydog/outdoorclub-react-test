import styled from "styled-components";

const ItemBox = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border-bottom: 2px solid silver;
`;

const Box = styled.div`
  display: flex;
  width: 40rem;
  flex-direction: column;
`;

const RowBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Activity = styled.div`
  margin-right: 0.5rem;
`;
export default function Item({
  id,
  name,
  age,
  rating,
  participantedActivities,
  action,
}) {
  return (
    <ItemBox>
      <Box>
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Rating: {rating}</div>
        <RowBox>
          {participantedActivities &&
            participantedActivities.map((activity, index) => (
              <Activity key={index}>{activity}</Activity>
            ))}
        </RowBox>
      </Box>
      <button value={id} onClick={action}>
        Remove
      </button>
    </ItemBox>
  );
}
