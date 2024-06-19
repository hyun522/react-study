import Button from "../components/button/button"
export default function ButtonPage(){
  return(<>
<Button disabled={false}children="large" color="green"/>
<Button disabled={false} children="small" small color="yellow"/>
<Button disabled={false} children="middle" middle color="purple"/>
<Button disabled={true} children="disable" color="blue"/>
    </>)
}