// src/components/01-basics/JSXExample.jsx
import TabViewer from "../common/TabViewer";

function JSXExample() {
  // 예제 1: className 사용
  const resultContent1 = (
    <div>
      <p className="highlight">className을 사용합니다. (class가 아님)</p>
      <p style={{ color: "blue" }}>HTML의 class는 JSX의 className임</p>
    </div>
  );

  const codeString1 = `function ClassNameExample() {
  return (
    <div>
      <p className="highlight">className을 사용합니다. (class가 아님)</p>
      <p style={{ color: 'blue' }}>HTML의 class는 JSX의 className임</p>
    </div>
  );
}`;

  // 예제 2: camelCase 속성명
  const resultContent2 = (
    <div>
      <button onClick={() => alert("클릭!")}>클릭</button>
      <p>HTML: onclick은 JSX: onClick</p>
      <label htmlFor="input1">HTML: for는 JSX: htmlFor</label>
      <imput id="input1" type="text" />
    </div>
  );

  const codeString2 = `function CamelCaseExample() {
  return (
    <div>
    <button onClick={() => alert('클릭!')}>클릭</button>
    <p>HTML: onclick은 JSX: onClick</p>
    <label htmlFor="input1">HTML: for는 JSX: htmlFor</label>
    <imput id="input1" type="text" />
  </div>
  );
}`;

  // 예제 3: self-closing 태그
  const resultContent3 = (
    <div>
      <p>JSX에서는 모든 태그를 닫아야 합니다</p>
      <input type="text" />
      <br />
      <img src="" alt="example" />
    </div>
  );

  const codeString3 = `function SelfClosingExample() {
  return (
    <div>
      <p>JSX에서는 모든 태그를 닫아야 합니다</p>
      <input type="text" />
      <br />
      <img src="" alt="example" />
    </div>
  );
}`;

  return (
    <div>
      <TabViewer
        title="JSX 규칙1 - className 사용"
        description="HTML의 class 대신 className을 사용"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="JSX 규칙2 - camelCase 속성명"
          description="HTML 속성명을 camelCase로 작성"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="JSX 규칙3 - self-closing 태그"
          description="모든 태그는 반드시 닫아야함"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default JSXExample;
