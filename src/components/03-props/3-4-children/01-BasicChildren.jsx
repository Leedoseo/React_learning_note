// src/components/03-props/3-4-children/01-BasicChildren.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 가장 간단한 children
function SimpleCard(props) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #007bff', 
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      {props.children}
    </div>
  );
}

// 예제 2: 구조분해로 children 받기
function Card({ children }) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #28a745', 
      borderRadius: '8px',
      margin: '10px 0',
      backgroundColor: '#f8f9fa'
    }}>
      {children}
    </div>
  );
}

// 예제 3: children + 다른 props
function CardWithTitle({ title, children }) {
  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      overflow: 'hidden'
    }}>
      <div style={{ 
        padding: '15px', 
        backgroundColor: '#007bff', 
        color: 'white',
        fontWeight: 'bold'
      }}>
        {title}
      </div>
      <div style={{ padding: '20px' }}>
        {children}
      </div>
    </div>
  );
}

// 예제 4: 문자열 children
function Button({ children }) {
  return (
    <button style={{ 
      padding: '10px 20px',
      margin: '5px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}>
      {children}
    </button>
  );
}

// 예제 5: 컴포넌트 children
function Container({ children }) {
  return (
    <div style={{ 
      maxWidth: '800px',
      margin: '20px auto',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px'
    }}>
      {children}
    </div>
  );
}

function Header() {
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: '#007bff', 
      color: 'white',
      borderRadius: '4px',
      marginBottom: '10px'
    }}>
      <h1 style={{ margin: 0 }}>헤더</h1>
    </header>
  );
}

function Main() {
  return (
    <main style={{ 
      padding: '20px', 
      backgroundColor: 'white',
      borderRadius: '4px',
      marginBottom: '10px'
    }}>
      <p>메인 콘텐츠입니다</p>
    </main>
  );
}

function Footer() {
  return (
    <footer style={{ 
      padding: '15px', 
      backgroundColor: '#6c757d', 
      color: 'white',
      borderRadius: '4px',
      textAlign: 'center'
    }}>
      <p style={{ margin: 0 }}>© 2024 My Website</p>
    </footer>
  );
}

function BasicChildren() {
  // 예제 1
  const resultContent1 = (
    <SimpleCard>
      <h3>제목</h3>
      <p>이것은 children으로 전달된 내용입니다</p>
    </SimpleCard>
  );

  const codeString1 = `function Card(props) {
  return (
    <div className="card">
      {props.children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h3>제목</h3>
      <p>이것은 children으로 전달된 내용입니다</p>
    </Card>
  );
}

// <Card>와 </Card> 사이의 내용이 children
// props.children으로 접근`;

  // 예제 2
  const resultContent2 = (
    <Card>
      <h3>사용자 프로필</h3>
      <p>이름: 홍길동</p>
      <p>나이: 25세</p>
      <p>직업: 개발자</p>
    </Card>
  );

  const codeString2 = `function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <h3>사용자 프로필</h3>
      <p>이름: 홍길동</p>
      <p>나이: 25세</p>
      <p>직업: 개발자</p>
    </Card>
  );
}

// 구조분해로 children 받기 (더 일반적)`;

  // 예제 3
  const resultContent3 = (
    <div>
      <CardWithTitle title="공지사항">
        <p>시스템 점검이 예정되어 있습니다.</p>
        <p>일시: 2024.12.27 02:00 ~ 04:00</p>
      </CardWithTitle>
      
      <CardWithTitle title="이벤트">
        <h4>신규 회원 혜택</h4>
        <ul>
          <li>30% 할인 쿠폰</li>
          <li>무료 배송</li>
        </ul>
      </CardWithTitle>
    </div>
  );

  const codeString3 = `function Card({ title, children }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Card title="공지사항">
        <p>시스템 점검이 예정되어 있습니다.</p>
        <p>일시: 2024.12.27 02:00 ~ 04:00</p>
      </Card>
      
      <Card title="이벤트">
        <h4>신규 회원 혜택</h4>
        <ul>
          <li>30% 할인 쿠폰</li>
          <li>무료 배송</li>
        </ul>
      </Card>
    </div>
  );
}

// title은 일반 props, 내용은 children
// 유연하고 재사용 가능한 컴포넌트`;

  // 예제 4
  const resultContent4 = (
    <div>
      <Button>저장</Button>
      <Button>취소</Button>
      <Button>삭제</Button>
    </div>
  );

  const codeString4 = `function Button({ children }) {
  return (
    <button className="btn">
      {children}
    </button>
  );
}

function App() {
  return (
    <div>
      <Button>저장</Button>
      <Button>취소</Button>
      <Button>삭제</Button>
    </div>
  );
}

// 문자열도 children으로 전달 가능
// 버튼 텍스트를 children으로`;

  // 예제 5
  const resultContent5 = (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );

  const codeString5 = `function Container({ children }) {
  return (
    <div className="container">
      {children}
    </div>
  );
}

function Header() {
  return <header>헤더</header>;
}

function Main() {
  return <main>메인 콘텐츠</main>;
}

function Footer() {
  return <footer>푸터</footer>;
}

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

// 컴포넌트도 children으로 전달 가능
// 레이아웃 컴포넌트에 자주 사용`;

  return (
    <div>
      <h2>3-4-1. 기본 children</h2>

      <TabViewer
        title="예제 1: 가장 간단한 children"
        description="컴포넌트 태그 사이의 내용이 children. props.children으로 접근"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 구조분해로 children 받기"
          description="{ children }로 받는 게 더 일반적"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: children + 다른 props"
          description="title은 props, 내용은 children. 유연한 컴포넌트"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: 문자열 children"
          description="버튼 텍스트같은 간단한 문자열도 children으로"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: 컴포넌트 children"
          description="컴포넌트도 children으로 전달. 레이아웃 컴포넌트에 유용"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default BasicChildren;