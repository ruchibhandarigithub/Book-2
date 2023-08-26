const CompleteDetail = ({ book, handleSelection,color,setSelected }) => {
    if (!book || !book.volumeInfo) {
        return <div>Loading...</div>; // You can show a loading message or handle this case accordingly
    }

    const selection = () => {
        handleSelection(-1,false);
        setSelected(false);
    };

    const bookData = {
        "img": book.volumeInfo.imageLinks?.thumbnail || "", // Use optional chaining to handle potential undefined properties
        "author":book.volumeInfo.authors,
        "title": book.volumeInfo.title || "",
        "descrip": book.volumeInfo.description || "",
        "previewLink":book.volumeInfo.previewLink,
        "infoLink":book.volumeInfo.infoLink,
        "averageRating":book.volumeInfo.averageRating,
        "ratingCount":book.volumeInfo.ratingsCount,
        "publisher":book.volumeInfo.publisher,
        "language":book.volumeInfo.language
    };

    console.log(bookData.descrip.length);

    return (
        <div className="flex-expand" style={{ backgroundColor:color}} >
          <div class="image" onClick={selection}>
                <img  src={bookData.img} alt="book" />
            </div>
            <div className="info">
                <h3>{bookData.title}</h3>
                <p style={{fontSize:"14px", margin:"4px 0px"}}><b>{bookData.author}</b></p>

                <div className="descrip">
                 
                         {bookData.descrip.length >= 200 ? bookData.descrip.substring(0,200) : bookData.descrip}
                         {(bookData.descrip.length ===0 || bookData.descrip.length >=50)  && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
            aliquip ex ea commodo consequat. </p>}
                  

                </div>
                <div className="rating">
                    <div style={{color:"white"}}>
                        <b>Average Rating : {bookData.averageRating}</b>
                    </div>
                    <div style={{color: "white"}}>
                        <b> | </b>
                    </div>
                    <div style={{color : "white"}}>
                        <b> Rating Count : {bookData.ratingCount} </b>
                    </div>
                    <div style={{color: "white"}}>
                        <b> | </b>
                    </div>
                    <div style={{color:"white"}}>
                        <b> Publisher : {bookData.publisher} </b>
                    </div>
                    <div style={{color:"white"}}>
                        <b> | </b>
                    </div>
                    <div style={{color:"white"}}>
                        <b> language : {bookData.language} </b>
                    </div>

                </div>
                <div class="btn">
                      <a href={bookData.previewLink}>Read More</a>
                      <a href={bookData.infoLink}>More Info</a>
                </div>

            </div>
            
        </div>
    );
};

export default CompleteDetail;
