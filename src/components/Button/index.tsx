import React from "react";

interface buttonProps {
  color?: string;
}

export default function Button({ color }: buttonProps): React.ReactElement {
  return <button style={{ color }}></button>;
}
