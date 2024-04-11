import React, { forwardRef } from "react";

interface PropsType {
  title: String;
  choice: String;
  result: string;
}

// ref를 props로 전달받아 사용할 때는 React에 forwardRef를 사용한다.
export default forwardRef<HTMLDivElement, PropsType>(function Box(props, ref) {
  const { title, choice, result } = props;

  return (
    <div className="box" ref={ref}>
      <h1>{title}</h1>
      <p>{choice}</p>
      <h1>{result}</h1>
    </div>
  );
});

// 또는 아래와 같은 형태로 구현할 수 있다.
// const Box = forwardRef<HTMLDivElement, PropsType>((props, ref) => {
//   const { title, choice, result } = props;
//   return (
//     <div className="box" ref={ref}>
//       <h1>{title}</h1>
//       <p>{choice}</p>
//       <h1>{result}</h1>
//     </div>
//   );
// });
// export default Box;
