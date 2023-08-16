export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""} `;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div index={index} onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
