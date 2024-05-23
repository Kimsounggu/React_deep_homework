import MoneyInputAdd from "./MoneyInputAdd";
import styled from "styled-components";

const MoneyMonth = ({
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
  const MonthBox = styled.div`
    max-width: 1280px;
    margin: 20px auto;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border: 2px solid black;
    border-radius: 16px;
    text-align: center;
  `;
  const MonthList = styled.div`
    max-width: 1280px;
    margin: 20px auto;
    padding: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid black;
    border-radius: 20px;
    text-align: center;
    display: flex;
  `;
  const Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <MonthList>
        {Months.map((month) => (
          <MonthBox key={month}>{month}</MonthBox>
        ))}
      </MonthList>

      <>
        <MoneyInputAdd
          Month={Month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
          list={list}
          setList={setList}
          money={money}
          setMoney={setMoney}
          content={content}
          setContent={setContent}
        />
      </>
    </>
  );
};

export default MoneyMonth;
