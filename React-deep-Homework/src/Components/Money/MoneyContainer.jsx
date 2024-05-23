import { useState } from "react";
import MoneyFrom from "./MoneyForm";

const MoneyContainer = () => {
  const [Month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [list, setList] = useState("");
  const [money, setMoney] = useState("");
  const [content, setContent] = useState("");

  return (
    <>
      <MoneyFrom
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

export default MoneyContainer;

//구조잡기 완료!!! 이제 기술을 넣어보자~ ㅠㅠ
//useState를 4개를 만들어서 넘겨줘야 그 값에 해당하는 input값을 저장할 수 있겠찌? 일단 보류
