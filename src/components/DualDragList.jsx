//컴포넌트는 개별 드래그 가능한 아이템을 나타내며, 드래그 앤 드롭 이벤트를 처리
//일반적으로 드래그 앤 드롭의 로직은 해당 컴포넌트의 상위 컴포넌트에서 처리됩니다.
export default function DualDragList({
  item, //item
  index, // index
  listIdentifier, // list1
  handleDragStart, //handleDragStart
  handleDragEnter, //handleDragEnter
  handleDragEnd, //handleDragEnd
}) {
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, index, listIdentifier)}
      onDragEnter={(e) => handleDragEnter(e, index, listIdentifier)}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => e.preventDefault()}
      style={{
        padding: '8px',
        border: '1px solid black',
        marginBottom: '4px',
        cursor: 'move',
      }}
    >
      {item}
    </div>
  );
}
