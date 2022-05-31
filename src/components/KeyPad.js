import React from "react";
import useWordle from "../hook/useWordle";

const KeyPad = () => {
  const { checkKeyPad } = useWordle();
  return (
    <div className="key-pad">
      {checkKeyPad.map((l, i) => (
        <span className={"key " + l.color} key={i}>
          {l.key}
        </span>
      ))}
    </div>
  );
};

export default KeyPad;
