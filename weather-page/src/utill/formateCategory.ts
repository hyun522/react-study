const pytCode = { 0: "강수 없음", 1: "비", 2: "비/눈", 3: "눈", 5: "빗방울", 6: "진눈깨비", 7: "눈날림" };
const skyCode = { 1: "맑음", 3: "구름많음", 4: "흐림" };

export default function formatCategory(categoryData: string, code: string) {
  switch (categoryData) {
    case "LGT":
      return "낙뢰";
      break;
    case "PTY":
      return pytCode[code];
      break;
    case "SKY":
      return skyCode[code];
      break;
    default:
      return categoryData;
      break;
  }
}
