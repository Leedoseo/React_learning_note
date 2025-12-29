// src/components/02-props/PropsChildren.jsx
import TabViewer from "../common/TabViewer";

// children Props란? 컴포넌트 태그 사이에 들어가는 내용을 전달하는 특별한 Props

// 예제 2: 기본 children 사용
const SimpleCard = ({ children }) => {
  return (
    <div style={{ border: "1px solid #fff", padding: "20px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};

// 예제 3: title과 children 함께 사용
const TitleCard = ({ title, children }) => {
  return (
    <div style={{ border: "2px solid #667eea", padding: "20px", borderRadius: "8px" }}>
      <h3 style={{ color: "#667eea", marginBottom: "10px" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

// 예제 4: 여러 children 전달
const Layout = ({ children }) => {
  return (
    <div style={{ border: "1px solid #999", padding: "15px" }}>
      <div>레이아웃 시작</div>
      {children}
      <div>레이아웃 끝</div>
    </div>
  );
};

// 예제 5: children으로 컴포넌트 전달
const Container = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};

function PropsChildren() {
  // 예제 1: Children Props란?
  const resultContent1 = (
    <div>
      <h4>Children Props</h4>
      <p>컴포넌트 태그 사이에 들어가는 내용을 자동으로 전달받는 특별한 Props</p>
      <ul>
        <li>태그 사이의 모든 내용이 children으로 전달됨</li>
        <li>텍스트, JSX, 다른 컴포넌트 등 모두 가능</li>
        <li>재사용 가능한 레이아웃 컴포넌트 만들 때 유용</li>
      </ul>
    </div>
  );

  const codeString1 = `// Children Props의 기본 개념
function Button({ children }) {
  return <button>{children}</button>;
}

// 사용 예시
<Button>클릭하세요</Button>
// "클릭하세요"가 children으로 전달됨

<Button>
  <span>아이콘</span>
  <span>텍스트</span>
</Button>
// 여러 요소도 children으로 전달 가능`;

  // 예제 2: 기본 children 사용

  const resultContent2 = (
    <div>
      <SimpleCard>
        <p>카드 안의 내용</p>
        <p>이 텍스트는 children으로 전달</p>
      </SimpleCard>
    </div>
  );

  const codeString2 = `// 기본 children 사용
const SimpleCard = ({ children }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};

// 사용 예시
<SimpleCard>
  <p>카드 안의 내용</p>
  <p>이 텍스트는 children으로 전달</p>
</SimpleCard>`;

  // 예제 3: title과 children 함께 사용
  const resultContent3 = (
    <div>
      <TitleCard title="공지사항">
        <p>오늘은 날씨가 좋음</p>
        <p>children과 일반 props를 함께 사용할 수 있음</p>
      </TitleCard>
    </div>
  );

  const codeString3 = `// title과 children 함께 사용
const TitleCard = ({ title, children }) => {
  return (
    <div style={{ border: "2px solid #667eea", padding: "20px", borderRadius: "8px" }}>
      <h3 style={{ color: "#667eea", marginBottom: "10px" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

// 사용 예시
<TitleCard title="공지사항">
  <p>오늘은 날씨가 좋음</p>
  <p>children과 일반 props를 함께 사용할 수 있음</p>
</TitleCard>`;

  // 예제 4: 여러 children 전달
  const resultContent4 = (
    <div>
      <Layout>
        <h4>제목</h4>
        <p>본문 내용</p>
        <button>버튼</button>
      </Layout>
    </div>
  );

  const codeString4 = `// 여러 children 전달
const Layout = ({ children }) => {
  return (
    <div style={{ border: "1px solid #999", padding: "15px" }}>
      <div>레이아웃 시작</div>
      {children}
      <div>레이아웃 끝</div>
    </div>
  );
};

// 사용 예시 - 여러 요소를 children으로 전달
<Layout>
  <h4>제목</h4>
  <p>본문 내용</p>
  <button>버튼</button>
</Layout>`;

  // 예제 5: children으로 컴포넌트 전달
  const resultContent5 = (
    <div>
      <Container>
        <TitleCard title="안내">
          <p>children으로 다른 컴포넌트도 전달할 수 있음</p>
        </TitleCard>
      </Container>
    </div>
  );

  const codeString5 = `// children으로 컴포넌트 전달
const Container = ({ children }) => {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
      {children}
    </div>
  );
};

const TitleCard = ({ title, children }) => {
  return (
    <div style={{ border: "2px solid #667eea", padding: "20px", borderRadius: "8px" }}>
      <h3 style={{ color: "#667eea", marginBottom: "10px" }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

// 사용 예시 - 다른 컴포넌트를 children으로 전달
<Container>
  <TitleCard title="안내">
    <p>children으로 다른 컴포넌트도 전달할 수 있어요!</p>
  </TitleCard>
</Container>`;

  return (
    <div>
      <TabViewer
        title="Children Props란?"
        description="태그 사이의 내용을 전달하는 특별한 Props"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="기본 children 사용"
          description="태그 사이의 내용이 children으로 전달됨"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="children과 일반 props 함께 사용"
          description="title 같은 일반 props와 children을 동시에 사용"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="여러 children 전달"
          description="여러 요소를 children으로 전달하기"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="children으로 컴포넌트 전달"
          description="다른 컴포넌트도 children으로 전달 가능"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default PropsChildren;
