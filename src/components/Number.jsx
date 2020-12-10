import React, { useEffect, useState } from 'react';
import '../css/number.css';

export default function Number({ number }) {
  const [displayNumber, setDisplayNumber] = useState({});

  useEffect(() => {
    display(number);
  }, [number]);

  function display(number) {
    let one, two, three, four, five, six, seven;
    if (number === '1') {
      one = { display: 'none' };
      two = { display: 'none' };
      three = { display: 'block' };
      four = { display: 'block' };
      five = { display: 'none' };
      six = { display: 'none' };
      seven = { display: 'none' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '2') {
      one = { display: 'none' };
      two = { display: 'block' };
      three = { display: 'block' };
      four = { display: 'none' };
      five = { display: 'block' };
      six = { display: 'block' };
      seven = { display: 'block' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '3') {
      one = { display: 'none' };
      two = { display: 'none' };
      three = { display: 'block' };
      four = { display: 'block' };
      five = { display: 'block' };
      six = { display: 'block' };
      seven = { display: 'block' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '4') {
      one = { display: 'block' };
      two = { display: 'none' };
      three = { display: 'block' };
      four = { display: 'block' };
      five = { display: 'none' };
      six = { display: 'block' };
      seven = { display: 'none' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '5') {
      one = { display: 'block' };
      two = { display: 'none' };
      three = { display: 'none' };
      four = { display: 'block' };
      five = { display: 'block' };
      six = { display: 'block' };
      seven = { display: 'block' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '6') {
      one = { display: 'block' };
      two = { display: 'block' };
      three = { display: 'none' };
      four = { display: 'block' };
      five = { display: 'block' };
      six = { display: 'block' };
      seven = { display: 'block' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '7') {
      one = { display: 'none' };
      two = { display: 'none' };
      three = { display: 'block' };
      four = { display: 'block' };
      five = { display: 'block' };
      six = { display: 'none' };
      seven = { display: 'none' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '8') {
      one = { display: 'block' };
      two = { display: 'block' };
      three = { display: 'block' };
      four = { display: 'block' };
      five = { display: 'block' };
      six = { display: 'block' };
      seven = { display: 'block' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '9') {
      one = { display: 'block' };
      two = { display: 'none' };
      three = { display: 'block' };
      four = { display: 'block' };
      five = { display: 'block' };
      six = { display: 'block' };
      seven = { display: 'block' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }

    if (number === '0') {
      one = { display: 'block' };
      two = { display: 'block' };
      three = { display: 'block' };
      four = { display: 'block' };
      five = { display: 'block' };
      six = { display: 'none' };
      seven = { display: 'block' };
      setDisplayNumber({ one, two, three, four, five, six, seven });
    }
  }

  const { one, two, three, four, five, six, seven } = displayNumber;
  return (
    <div className="numberContainer">
      <div className="number">
        <div className="block one" style={one}></div>
        <div className="block two" style={two}></div>
        <div className="block three" style={three}></div>
        <div className="block four" style={four}></div>
        <div className="block five" style={five}></div>
        <div className="block six" style={six}></div>
        <div className="block seven" style={seven}></div>
      </div>
    </div>
  );
}
