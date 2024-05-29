import { AddBox, InputAddBox } from "./Styled-Component";

const MoneyInputAdd = ({ moneyList }) => {
  return (
    <>
      <AddBox>
        <div>
          {moneyList.map((list) => (
            <InputAddBox key={list.id}>
              <span>날짜 : {list.day}</span>
              <span>항목 : {list.item}</span>
              <span>금액 : {list.money}</span>
              <span>내용 : {list.content}</span>
            </InputAddBox>
          ))}
        </div>
        <div></div>
      </AddBox>
    </>
  );
};

export default MoneyInputAdd;
