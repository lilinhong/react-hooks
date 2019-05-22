import React, { useState, useEffect } from 'react';

interface Props {
  value: number,
  onChange: (num: number) => any
}

export default function Counter({ value, onChange }: Props) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    value && setCount(value);
  }, [value]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => onChange(count + 1)}>
        点击+1
      </button>
    </>
  )
}  