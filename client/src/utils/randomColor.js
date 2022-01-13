export const randomColor = () => {
  const colors = [
    "#CD9B9B",
    "#FF8247",
    "#EEDD82",
    "#CDE472",
    "#ff7251",
    "#ffca7b",
    "#ffcd74",
    "#ffedbf",
    "#7DB08D",
    "#B98AAA",
    "#9DB6C6",
    "#F5D3C6",
    "#CFF5CD",
    "#BFE3EC",
    "#9ECC86",
    "#C2978F",
    "#5D7CA2",
    "#D17B5C",
    "#62B3E4",
    "#F0B2AA",
    "#F0BF63",
    "#C0DBBD",
    "#BDCCDB",
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
