import styled from "styled-components";

const MoneyInputAdd = ({
  Month,
  setMonth,
  day,
  setDay,
  list,
  setList,
  money,
  setMoney,
  content,
  setContent,
}) => {
  const AddBox = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
    border-radius: 16px;
    text-align: center;
  `;
  return (
    <>
      <AddBox></AddBox>
    </>
  );
};

export default MoneyInputAdd;
