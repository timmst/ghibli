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
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
