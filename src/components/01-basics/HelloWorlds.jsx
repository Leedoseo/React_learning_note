// src/components/01-basics/HelloWorld.jsx
import TabViewer from "../common/TabViewer";

function HelloWorld() {
  const resultContent = <h1>Hello, React!🎉</h1>;

  const codeString = `function HelloWorld() {
  return (
    <div>
      <h1>Hello, React! 🎉</h1>
    </div>
  );
}

export default HelloWorld`;

  return (
    <TabViewer
      title="Hello World 예제"
      description="React의 가장 기본적인 컴포넌트입니다."
      resultContent={resultContent}
      codeString={codeString}
    />
  );
}

export default HelloWorld;
