import MoneyMonth from "./MoneyMonth";
import styled from "styled-components";

const InputBox = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 20px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 16px;
  text-align: center;
`;
const MoneyForm = ({
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
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const day = formData.get("day");
    const list = formData.get("list");
    const money = formData.get("money");
    const content = formData.get("content");

    if (!day.trim() || !list.trim() || !money.trim() || !content.trim()) {
      return alert("모든 필드를 입력해주세요.");
    }
    setDay(day);
    setList(list);
    setMoney(money);
    setContent(content);

    e.target.reset();
  };

  return (
    <>
      <InputBox>
        <form onSubmit={handleSubmit}>
          날짜
          <input type="text" name="day" placeholder="현재날짜넣기" />
          항목
          <input type="text" name="list" placeholder="지출 항목" />
          금액
          <input type="text" name="money" placeholder="지출 금액" />
          내용
          <input type="text" name="content" placeholder="지출 내용" />
          <button type="submit">저장</button>
        </form>
      </InputBox>
      <MoneyMonth
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
  );
};

export default MoneyForm;
