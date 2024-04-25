import { useEffect, useState } from 'react';
import style from './scss/Todolist.module.scss'

function Todolist() {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [checkedItems, setCheckedItems] = useState({});


    //이 과정은 컴포넌트가 처음으로 마운트될 때 로컬 스토리지에서 데이터를 가져와서 해당 데이터로 상태를 초기화하기 위해 필요합니다.    
    //마운트란 컴포넌트가 화면에 표시되는 것을 의미합니다. 처음으로 컴포넌트가 마운트될 때는 이전에 저장된 데이터가 없을 가능성이 있으므로, 
    // 이때만 로컬 스토리지에서 데이터를 가져와 상태를 초기화해야 합니다.

    useEffect(() => {
        // 페이지가 로드될 때 로컬 스토리지에서 데이터를 가져와 상태에 설정
        const savedText = localStorage.getItem('displayText');
        const savedCheckedItems = localStorage.getItem('checkedItems');

        if (savedText) {
            //javascript로 바꿔주겠다.
            setDisplayText(JSON.parse(savedText));
        }
        if (savedCheckedItems) {
            setCheckedItems(JSON.parse(savedCheckedItems));
        }
    }, []); // 컴포넌트가 처음 마운트될 때만 실행

    //componentDidMount와 유사한 동작
    useEffect(() => {
        // 상태가 변경될 때마다 로컬 스토리지에 데이터를 저장
        localStorage.setItem('displayText', JSON.stringify(displayText));
        localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
        //displayText 상태를 JSON 문자열로 변환
    }, [displayText, checkedItems]); // displayText나 checkedItems가 변경될 때마다 실행


    const handleText = (e) => {
        setText(e.target.value)
    }

    const handlePutText = () => {
        setDisplayText([...displayText, { text: text, checked: false}])
        setText('')
        console.log(displayText)
    }

    const activeEnter = (e) => {
        if(e.key === "Enter" && e.nativeEvent.isComposing === false) {
            handlePutText();
        }
    } 

    const handleEditButtonClick = (index) => {
        setEditingIndex(index);
        setEditedText(displayText[index].text);
    };
    
    const handleSaveButtonClick = (index) => {
        const updatedItems = [...displayText];
        updatedItems[index].text = editedText;
        setDisplayText(updatedItems);
        setEditingIndex(null);
    };

    const handleCancelButtonClick = () => {
        setEditingIndex(null);
        setEditedText('');
    };

    const handleDelete = (index) => {
        const updatedItems = [...displayText];
        console.log(updatedItems)
        updatedItems.splice(index,1);
        setDisplayText(updatedItems)
        setCheckedItems(index)
        console.log(displayText)

    } 

    const handleCheckboxClick = (index) => {
        const updatedItems = [...displayText];
        updatedItems[index].checked = !updatedItems[index].checked;
        setDisplayText(updatedItems);
        console.log(displayText)
    };

    return (
        <main className={style.main}>
            <div className={style.content}>
                <p className={style.title}>일정관리</p>
                <div className={style.putInputButton}>
                    <input className={style.putText} type='text' value={text} placeholder='할 일을 입력하세요' onChange={handleText} onKeyDown={(e) => activeEnter(e)} />
                    <button className={style.plusButton} onClick={handlePutText}>+</button>
                </div>
                <div className={style.list}>
                    {displayText.map((item, index)=>(
                        <li key={index}>
                            
                            {editingIndex === index ? (
                                <div className={style.editedTextBox}>
                                    <input
                                        type='text' 
                                        value={editedText}
                                        className={style.editTexts}
                                        onChange={(event)=>setEditedText(event.target.value)}
                                    />
                                    <span>
                                        <span className={style.pen} onClick={()=>handleSaveButtonClick(index)}>✅</span>
                                        <span onClick={handleCancelButtonClick}>❌</span>
                                    </span>
                                </div>
                            ) : (
                                <>
                                    <div className={style.putTexts}>
                                        <span>
                                            <input
                                            className={style.checkBox}
                                            type="checkbox"
                                            checked={ displayText[index].checked}
                                            onChange={() => handleCheckboxClick(index)}
                                            />
                                            <span className={displayText[index].checked ? style.checked : ''}>
                                                {item.text}
                                            </span>
                                        </span>
                                        <span>
                                            <span className={style.pen} onClick={() => handleEditButtonClick(index)}>🖊️</span>
                                            <span onClick={() => handleDelete(index)} >🗑️</span>
                                        </span>
                                    </div>
                                </>
                                )}
                        </li>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Todolist;

