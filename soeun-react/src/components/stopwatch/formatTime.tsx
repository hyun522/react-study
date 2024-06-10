export default function formatTime(time: number): string {

  const seconds = Math.floor(time / 1000);
  const getSeconds = `0${seconds % 60}`.slice(-2);
  const minutes = Math.floor(seconds / 60);
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(minutes / 60)}`.slice(-2);

  return `${getHours}:${getMinutes}:${getSeconds}`;
}
// export default function formatTime(timeInMillis:number):string{
// const hours = Math.floor(timeInMillis/360000);
//     const minutes = Math.floor((timeInMillis%360000)/60000);
//     const seconds = Math.floor((timeInMillis%6000)/1000);
//     const formattedTime = `${hours}:${minutes<10?'0':''}${minutes}:${seconds <10 ? '0':''}${seconds}`;
//     return formattedTime;
// }
//  const formatTime =(timeInMillis:number):string=>{
//     
//   }