// src/components/02-component/2-1-concept/01-WhatIsComponent.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 간단한 컴포넌트
function SimpleGreeting() {
  return <h1>안녕하세요, React 컴포넌트입니다!</h1>;
}

// 예제 2: HTML처럼 보이지만 컴포넌트인 것
function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

// 예제 3: 컴포넌트 조합
function UserProfile() {
  return (
    <div className="profile">
      <img src="avatar.jpg" alt="사용자" />
      <h2>이도서</h2>
      <p>프론트엔드 개발자</p>
    </div>
  );
}

function UserList() {
  return (
    <div>
      <h1>사용자 목록</h1>
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
  );
}

function WhatIsComponent() {
  // 예제 1
  const resultContent1 = <SimpleGreeting />;

  const codeString1 = `function SimpleGreeting() {
  return <h1>안녕하세요, React 컴포넌트입니다!</h1>;
}

export default SimpleGreeting;`;

  // 예제 2
  const resultContent2 = <Header />;

  const codeString2 = `function Header() {
  return (
    <header>
      <h1>My Website</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;`;

  // 예제 3
  const resultContent3 = <UserList />;

  const codeString3 = `function UserProfile() {
  return (
    <div className="profile">
      <img src="avatar.jpg" alt="사용자" />
      <h2>홍길동</h2>
      <p>프론트엔드 개발자</p>
    </div>
  );
}

function UserList() {
  return (
    <div>
      <h1>사용자 목록</h1>
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </div>
  );
}

export default UserList;`;

  return (
    <div>
      <h2>2-1-1. 컴포넌트 개념</h2>

      <TabViewer
        title="예제 1: 간단한 컴포넌트"
        description="가장 기본적인 함수형 컴포넌트. JSX를 반환함"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 여러 요소를 포함한 컴포넌트"
          description="header 태그로 여러 요소를 감싸서 반환"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 컴포넌트 조합"
          description="작은 컴포넌트(UserProfile)를 여러 번 사용해서 큰 컴포넌트(UserList) 만들기"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default WhatIsComponent;
