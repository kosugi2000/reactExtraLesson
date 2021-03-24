import React, { useState, useEffect } from "react"; 

const Booklist = (props) => {
    const [bookData, setBookData] = useState(null); 
    useEffect(() => {
      const result = 
        props.getData?.(props.language)
        .then((response) => setBookData(response));
    }, [props]); 
    return (
        <div>
        {
          bookData === null ? (
            <p>now loading...</p>
          ) : (
            bookData.data.items.map((x, index) => (
              <li key={index}>【書籍名】{x.volumeInfo.title}  【著者】{x.volumeInfo.authors}</li>
            ))
          )
        }
      </div>
    );
  };

export default Booklist
