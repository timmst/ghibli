export const randomColor = () => {
  // const colors = [
  //   "#CD9B9B",
  //   "#FF8247",
  //   "#EEDD82",
  //   "#ffca7b",
  //   "#ffcd74",
  //   "#7DB08D",
  //   "#B98AAA",
  //   "#9DB6C6",
  //   "#F5D3C6",
  //   "#CFF5CD",
  //   "#BFE3EC",
  //   "#9ECC86",
  //   "#C2978F",
  //   "#5D7CA2",
  //   "#D17B5C",
  //   "#62B3E4",
  //   "#F0B2AA",
  //   "#F0BF63",
  //   "#C0DBBD",
  //   "#BDCCDB",
  // ];
  const colors = [
    "linear-gradient(to left, #be93c5, #7bc6cc)",
    "linear-gradient(to left, #ffd89b, #19547b)",
    "linear-gradient(to left, #808080, #3fada8)",
    "linear-gradient(to left, #eecda3, #ef629f)",
    "linear-gradient(to left, #fd746c, #ff9068)",
    "linear-gradient(to left, #ddd6f3, #faaca8)",
    "linear-gradient(to left, #d53369, #cbad6d)",
    "linear-gradient(to left, #757f9a, #d7dde8)",
    "linear-gradient(to left, #b79891, #94716b)", //copper
    "linear-gradient(to left, #83a4d4, #b6fbff)",
  ];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
};
