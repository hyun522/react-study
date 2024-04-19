import { useState } from 'react'
import styled from 'styled-components'


const Main = styled.main`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:1rem;
    min-height:100vh;
`

const Square = styled.div`  
    border:1px solid #C3CEDD;
`

const SquareBox = styled.div`
    border-bottom:1px solid #000;
    padding:15px;
    background-color:#333;
    color:#fff;
    font-size:32px;
    font-weight:bold;
    text-align:right;
`
const Button = styled.button`
    width:50px; 
    height:50px;
    border:.5px solid #CCCCCD ;
`

const Gray = styled(Button)`
    width:150px;
    background-color:#ccc;
`

const LightGray = styled(Button)`
    width:150px;
`


const Orange = styled(Button)`
    background-color:#FFA500;
`


// 구현할 기능 
// 1. 기능은 계산기의 표시되는 숫자를 바꾸는 함수 
// 2. 표시되는 숫자를 한개씩 삭제하는 함수, nan 값 해결
// 3. 더하기, 빼기, 나누기 등의 명령어를 눌렀을때 처리 하는 함수 
// 4. = 을 눌렀을때 계싼 결과가 나오게 하는 함수 
// 5. ac 눌렀을떄 숫자 초기화

function Calculator() {
    const [number, setNumber] = useState(0);
    const [holdNumber, setHoldNumber] = useState(0);
    const [operation, setOperation] = useState('');

    // 1.
                                //함수가 받을 값 1,2,3,4,  버튼을 눌렀을떄 받을 값
    const handelChangeNumber = (enteredNumber) => {
        setNumber(parseFloat(String(number) + enteredNumber))
    }
    
    //3.                           연사자를 받는다.
    const handleClickOperation = (enteredOperation) => {
        //이미 표시된 숫자의 값이 0이 아닐때만 처리해야합니다. 0 * 1, 0 * 2 의미가 없다
        if ( number !== 0 ) {
            // 먼저 명령어를 저장합니다.
            setOperation(enteredOperation)
            // 그다음은 기존에 입력되어 있는 값을 상태로 저장합니다.
            setHoldNumber(number)
            // 그 다음 화면에 표시된 숫자를 0으로 초기화 해줍니다. 새로운 값을 받기 위함
            setNumber(0)
        }
    } 

    //4.
    const handleCalculation = () => {
        switch ( operation ) {
            case '+':
                //+ 기호는 더하기 이기 때문에 holdenumber(메인 숫자) +  number(화면에 표시된 값)을 더해줍니다. 
                setNumber(holdNumber + number);
                break;
            case '-':
                setNumber(holdNumber - number);
                break;
            case 'X':
                setNumber(holdNumber * number);
                break;  
            case '/':
                setNumber(holdNumber / number);
                break;  
            default:
                setNumber(holdNumber + number)
                break;
            
        }
    }


    return (
        <Main>
            <Square>
                <SquareBox>{number}</SquareBox>
                <div>
                    <Gray onClick= {() => setNumber(0)}>AC</Gray>
                    <Orange onClick={() => handleClickOperation('/')}>/</Orange>
                </div>
                <div>
                    <Button onClick={() => handelChangeNumber(7)} >7</Button>
                    <Button onClick={() => handelChangeNumber(8)} >8</Button>
                    <Button onClick={() => handelChangeNumber(9)}>9</Button>
                    <Orange onClick={() => handleClickOperation('X')}>X</Orange>
                </div>
                <div>
                    <Button onClick={() => handelChangeNumber(4)}>4</Button>
                    <Button onClick={() => handelChangeNumber(5)}>5</Button>
                    <Button onClick={() => handelChangeNumber(6)}>6</Button>
                    <Orange onClick={() => handleClickOperation('-')}>-</Orange>
                </div>
                <div>
                    <Button onClick={() => handelChangeNumber(1)}>1</Button>
                    <Button onClick={() => handelChangeNumber(2)}>2</Button>
                    <Button onClick={() => handelChangeNumber(3)}>3</Button>
                    <Orange onClick={() => handleClickOperation('+')} >+</Orange>
                </div>
                <div>
                    <LightGray onClick={() => handelChangeNumber(0)}>0</LightGray>
                    <Orange onClick={handleCalculation}>=</Orange>
                </div>
            </Square>
        </Main>
    );
}

export default Calculator;