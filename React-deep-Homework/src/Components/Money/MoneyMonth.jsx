import { useEffect } from "react";
import { MonthBox, MonthList, MonthStyled } from "../Money/Styled-Component";

const MoneyMonth = ({ selectedMonth, setSelectedMonth }) => {
  useEffect(() => {
    const lastSelectedMonth = localStorage.getItem("selectedMonth");
    if (lastSelectedMonth) {
      setSelectedMonth(Number(lastSelectedMonth));
    }
  }, [setSelectedMonth]);

  useEffect(() => {
    if (selectedMonth) {
      localStorage.setItem("selectedMonth", selectedMonth);
    }
  }, [selectedMonth]);

  const Months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <MonthList>
        <MonthStyled>
          {Months.map((month) => (
            <MonthBox
              key={month}
              onClick={() => {
                console.log(`Month ${month}`);
                setSelectedMonth(month);
              }}
            >
              {month}월
            </MonthBox>
          ))}
        </MonthStyled>
      </MonthList>
    </>
  );
};

export default MoneyMonth;
