// src/components/02-props/Component.jsx
import TabViewer from "../common/TabViewer";

// 컴포넌트의 첫글자는 대문자로 해야함
// Header 컴포넌트처럼 Component 컴포넌트 내부에 포함된 컴포넌트를 자식 컴포넌트라고 함
function Header() {
  return (
    <div className="component-header">
      <h1>header</h1>
    </div>
  );
}

// 화살표 함수로도 가능!
const Main = () => {
  return (
    <div className="component-main">
      <h2>main</h2>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="component-footer">
      <h3>footer</h3>
    </div>
  );
};

function Card() {
  return (
    <div className="card">
      <h3>카드 제목</h3>
      <p>내용</p>
    </div>
  );
}

// JSX를 반환하는 함수를 컴포넌트라고 함
// 컴포넌트는 재사용 가능하며, 하나의 최상위 요소(또는 Fragment)만 반환해야 함
function Component() {
  // 예제 1: 부모 컴포넌트
  const resultContent1 = (
    <>
      <Header />
      <Main />
      <Footer />
      <Card />
    </>
  );

  const codeString1 = `function Component() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Card />
    </>
  );
}`;

  // 예제 2: 자식 컴포넌트 - Header
  const resultContent2 = <Header />;

  const codeString2 = `function Header() {
  return (
    <div className="component-header">
      <h1>header</h1>
    </div>
  );
}`;

  // 예제 3: 자식 컴포넌트 - Main (화살표 함수)
  const resultContent3 = <Main />;

  const codeString3 = `const Main = () => {
  return (
    <div className="component-main">
      <h2>main</h2>
    </div>
  );
}`;

  // 예제 4: 자식 컴포넌트 - Footer (화살표 함수)
  const resultContent4 = <Footer />;

  const codeString4 = `const Footer = () => {
  return (
    <div className="component-footer">
      <h3>footer</h3>
    </div>
  );
}`;

  // 예제 5: 카드 컴포넌트
  const resultContent5 = <Card />;

  const codeString5 = `function Card() {
  return (
    <div className="card">
      <h3>카드 제목</h3>
      <p>내용</p>
    </div>
  );
}`;

  return (
    <div>
      <TabViewer
        title="부모 컴포넌트"
        description="자식 컴포넌트를 담는 컴포넌트"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="자식 컴포넌트 - Header"
          description="Component 컴포넌트 내부에 들어가는 자식컴포넌트"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="자식 컴포넌트 - Main (화살표 함수)"
          description="컴포넌트는 화살표 함수로도 만들 수 있음"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="자식 컴포넌트 - Footer (화살표 함수)"
          description="컴포넌트의 첫글자는 꼭 대문자로 시작해야함"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="카드 컴포넌트"
          description="재사용 가능한 카드 컴포넌트 예제"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default Component;
