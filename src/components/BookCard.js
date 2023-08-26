import React, { useState } from "react";
import Detail from "./Detail";
import CompleteDetail from "./CompleteDetail";

const BookCard = ({ book ,setSelected}) => {
  const [selectedBookIndex, setSelectedBookIndex] = useState(-1);
  const [name, setName] = useState('flex-item');

  const handleSelection = (index,value) => {
    setSelectedBookIndex(prevIndex =>
      prevIndex === index ? -1 : index
    );
   
    setName(name =>
      name === 'display-none' ? 'flex-item' : 'display-none');
  };

  const colors = {
    "0": "#415f71",
    "1": "#573f71",
    "2": "#733f54"
  };

  return (
    <div className="bookCard">
      {book.map((item, index) => (
        index === selectedBookIndex ? (
          <CompleteDetail
            key={item.id}
            book={item}
            handleSelection={handleSelection}
            setSelected={setSelected}
            index={index}
            color={colors[index]}
          />
        ) : (
          <Detail
            setSelected={setSelected}
            key={item.id}
            book={item}
            handleSelection={() => handleSelection(index)}
            index={index}
            name={name}
            color={colors[index]} // Pass the color to Detail component
          />
        )
      ))}
    </div>
  );
};

export default BookCard;
