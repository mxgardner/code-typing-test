import React, { useState } from 'react';

function TypingTest({ text }) {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const renderCharacters = () => {
    return text.split('').map((char, i) => {
      const typedChar = input[i];
      let className = '';
      if (typedChar == null) className = '';
      else if (typedChar === char) className = 'correct';
      else className = 'incorrect';

      return (
        <span key={i} className={className}>
          {char}
        </span>
      );
    });
  };

  return (
    <div>
      <div className="code-display">{renderCharacters()}</div>
      <textarea
        value={input}
        onChange={handleChange}
        rows={6}
        placeholder="Start typing here..."
        style={{ width: '100%', marginTop: '1rem' }}
      />
    </div>
  );
}

export default TypingTest;