export const getDate = (myDate: string | number | Date) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();

  return `${yyyy}년 ${mm}월 ${dd}일`;
};
