import React, { useEffect, useState } from "react";

const work = ['img1','img2','img3'];

export default function Demo() {
  const [index, setIndex] = useState(0);
  

  useEffect(() => {
    const tick = () => setIndex(i => i + 1);

    const id = setInterval(tick, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
    <div>{work[index % work.length]}</div>
    </div>
  );
}