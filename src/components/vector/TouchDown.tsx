import * as React from "react";

function TouchDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={36}
      height={36}
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path
        d="M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"
        fill="rgba(119,125,131,1)"
      />
    </svg>
  );
}

export default TouchDown;
