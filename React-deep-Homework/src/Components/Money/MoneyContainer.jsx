import { useState } from "react";
import MoneyForm from "./MoneyForm";
import MoneyMonth from "./MoneyMonth";
import MoneyInputAdd from "./MoneyInputAdd";

const MoneyContainer = () => {
  const [day, setDay] = useState("");
  const [item, setItem] = useState("");
  const [money, setMoney] = useState("");
  const [content, setContent] = useState("");
  const [moneyList, setMoneyList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  return (
    <>
      <MoneyForm
        day={day}
        setDay={setDay}
        item={item}
        setItem={setItem}
        money={money}
        setMoney={setMoney}
        content={content}
        setContent={setContent}
        moneyList={moneyList}
        setMoneyList={setMoneyList}
      />
      <MoneyMonth
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
      />
      <MoneyInputAdd moneyList={moneyList} setMoneyList={setMoneyList} />
    </>
  );
};

export default MoneyContainer;

//구조잡기 완료!!! 이제 기술을 넣어보자~ ㅠㅠ
//useState를 4개를 만들어서 넘겨줘야 그 값에 해당하는 input값을 저장할 수 있겠찌? 일단 보류
