import style from './scss/Todolist.module.scss'

function Todolist() {
    return (
        <div className={style.content}>
            <p className={style.title}>일정관리</p>
            <div className={style.putInputButton}>
                <input className={style.putText} placeholder='할 일을 입력하세요'></input>
                <button className={style.plusButton}>+</button>
            </div>
            {/* 입력할 값이 담길 곳 */}
            <div className={style.list}>

            </div>
        </div>
    );
}

export default Todolist;