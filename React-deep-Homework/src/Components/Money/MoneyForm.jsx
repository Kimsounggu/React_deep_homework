import { InputBox, StyledInput } from "../Money/Styled-Component";
import PropTypes from "prop-types";

const MoneyForm = ({
  day,
  setDay,
  item,
  setItem,
  money,
  setMoney,
  content,
  setContent,
  moneyList,
  setMoneyList,
}) => {
  const handleListChange = (e) => setItem(e.target.value);
  const handleMoneyChange = (e) => setMoney(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleSave = () => {
    if (!item.trim() || !money.trim() || !content.trim()) {
      return alert("모든 필드를 입력해주세요.");
    }

    const newItems = {
      id: crypto.randomUUID(),
      day,
      item,
      money,
      content,
    };

    setMoneyList([...moneyList, newItems]);
    setItem("");
    setMoney("");
    setContent("");
  };

  return (
    <>
      <InputBox>
        날짜
        <StyledInput
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        항목
        <StyledInput
          type="text"
          value={item}
          onChange={handleListChange}
          placeholder="지출 항목"
        />
        금액
        <StyledInput
          type="number"
          value={money}
          onChange={handleMoneyChange}
          placeholder="지출 금액"
        />
        내용
        <StyledInput
          type="text"
          value={content}
          onChange={handleContentChange}
          placeholder="지출 내용"
        />
        <button onClick={handleSave}>저장</button>
      </InputBox>
    </>
  );
};

MoneyForm.propTypes = {
  day: PropTypes.string.isRequired,
  setDay: PropTypes.func.isRequired,
  item: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  money: PropTypes.string.isRequired,
  setMoney: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  setContent: PropTypes.func.isRequired,
  moneyList: PropTypes.array.isRequired,
};

export default MoneyForm;
