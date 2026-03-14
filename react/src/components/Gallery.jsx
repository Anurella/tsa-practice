import Button from './Button/Button';
import { useState } from 'react';
import { sculptureList } from '../assets/data.js';

export default function Gallery() {

    const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  // if index is 0, then there is no previous sculpture to show, so we disable the button. Otherwise, we enable it.
  let hasPrev = index > 0; 
  // if index is greater than the length of the array 
  let hasNext = index < sculptureList.length - 1;
 
 function handlePrevious() {
    if (hasPrev) {
      setIndex(index - 1);
    }
 }

  function handleClick() {
    setIndex(index + 1);
  }

  function toggleContent() {
     setShowContent(!showContent);
  }


  let sculpture = sculptureList[index];

    return (
        <div>
         <h1> Sculptures </h1>
        <div>
            <Button className="button" onClick={handlePrevious} disabled={!hasPrev}> Previous </Button>
            <button className={hasNext ? "button girl" : "button"} onClick={handleClick} disabled={!hasNext}> Next </button>
          </div>
       <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
      <button onClick={toggleContent}> {showContent ? 'Show less' : 'Show more'} </button>
       { showContent &&  <p> {sculpture.description} </p> }
    </div>
    );
} 
