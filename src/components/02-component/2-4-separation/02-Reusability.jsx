// src/components/02-component/2-4-separation/02-Reusability.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 재사용 불가능 (하드코딩)
function UserCardNotReusable() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h3>홍길동</h3>
      <p>25세</p>
    </div>
  );
}

function Example1NotReusable() {
  return (
    <div>
      <UserCardNotReusable />
      <p style={{ color: '#999', fontSize: '12px' }}>홍길동만 표시 가능... 다른 사용자는?</p>
    </div>
  );
}

// 예제 1: 재사용 가능 (Props - 나중에 배울 내용이지만 개념만)
// 실제로는 Props를 사용하지만, 지금은 여러 개 만들어서 보여줌
function UserCard1() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px', display: 'inline-block' }}>
      <h3>홍길동</h3>
      <p>25세</p>
    </div>
  );
}

function UserCard2() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px', display: 'inline-block' }}>
      <h3>김철수</h3>
      <p>30세</p>
    </div>
  );
}

function UserCard3() {
  return (
    <div style={{ border: '1px solid #ddd', padding: '20px', margin: '10px', borderRadius: '8px', display: 'inline-block' }}>
      <h3>이영희</h3>
      <p>28세</p>
    </div>
  );
}

function Example1Reusable() {
  return (
    <div>
      <UserCard1 />
      <UserCard2 />
      <UserCard3 />
      <p style={{ color: '#007bff', fontSize: '12px', marginTop: '10px' }}>
        Props를 사용하면 하나의 컴포넌트로 다양한 데이터 표시 가능 (다음 챕터에서 배움!)
      </p>
    </div>
  );
}

// 예제 2: 버튼 재사용
function BlueButton() {
  return <button style={{ padding: '10px 20px', background: '#007bff', color: 'white', margin: '5px', border: 'none', borderRadius: '4px' }}>파란 버튼</button>;
}

function GreenButton() {
  return <button style={{ padding: '10px 20px', background: '#28a745', color: 'white', margin: '5px', border: 'none', borderRadius: '4px' }}>초록 버튼</button>;
}

function RedButton() {
  return <button style={{ padding: '10px 20px', background: '#dc3545', color: 'white', margin: '5px', border: 'none', borderRadius: '4px' }}>빨간 버튼</button>;
}

function Example2() {
  return (
    <div>
      <BlueButton />
      <GreenButton />
      <RedButton />
      <p style={{ color: '#007bff', fontSize: '12px', marginTop: '10px' }}>
        Props로 색상을 받으면 하나의 Button 컴포넌트로 가능!
      </p>
    </div>
  );
}

// 예제 3: 아이콘 버튼
function LikeButton() {
  return <button style={{ padding: '10px', margin: '5px' }}>❤️ 좋아요</button>;
}

function ShareButton() {
  return <button style={{ padding: '10px', margin: '5px' }}>🔗 공유</button>;
}

function CommentButton() {
  return <button style={{ padding: '10px', margin: '5px' }}>💬 댓글</button>;
}

function SaveButton() {
  return <button style={{ padding: '10px', margin: '5px' }}>🔖 저장</button>;
}

function Example3() {
  return (
    <div>
      <LikeButton />
      <ShareButton />
      <CommentButton />
      <SaveButton />
      <p style={{ color: '#007bff', fontSize: '12px', marginTop: '10px' }}>
        Props로 아이콘과 텍스트를 받으면 하나의 IconButton 컴포넌트로 가능!
      </p>
    </div>
  );
}

function Reusability() {
  // 예제 1 - 재사용 불가능
  const resultContent1Not = <Example1NotReusable />;
  
  const codeString1Not = `// ❌ 재사용 불가능 - 하드코딩됨
function UserCard() {
  return (
    <div>
      <h3>홍길동</h3>  {/* 하드코딩됨 */}
      <p>25세</p>
    </div>
  );
}

// 홍길동만 표시 가능... 다른 사용자는?`;

  // 예제 1 - 재사용 가능
  const resultContent1Reusable = <Example1Reusable />;
  
  const codeString1Reusable = `// ✅ 재사용 가능 - Props 활용 (다음 챕터에서 배움!)
function UserCard({ name, age }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{age}세</p>
    </div>
  );
}

// 사용
<UserCard name="홍길동" age={25} />
<UserCard name="김철수" age={30} />
<UserCard name="이영희" age={28} />

// 핵심: 고정된 값 대신 Props로 받기!`;

  // 예제 2
  const resultContent2 = <Example2 />;
  
  const codeString2 = `// ❌ 각 색상마다 별도 컴포넌트
function BlueButton() {
  return <button style={{ background: 'blue' }}>파란 버튼</button>;
}

function GreenButton() {
  return <button style={{ background: 'green' }}>초록 버튼</button>;
}

function RedButton() {
  return <button style={{ background: 'red' }}>빨간 버튼</button>;
}

// ✅ 하나의 재사용 가능한 컴포넌트 (Props 사용)
function Button({ text, color }) {
  return (
    <button style={{ background: color }}>
      {text}
    </button>
  );
}

// 다양하게 사용 가능
<Button text="로그인" color="blue" />
<Button text="확인" color="green" />
<Button text="삭제" color="red" />`;

  // 예제 3
  const resultContent3 = <Example3 />;
  
  const codeString3 = `// ❌ 각 버튼마다 별도 컴포넌트
function LikeButton() {
  return <button>❤️ 좋아요</button>;
}

function ShareButton() {
  return <button>🔗 공유</button>;
}

function CommentButton() {
  return <button>💬 댓글</button>;
}

// ✅ 하나의 재사용 가능한 컴포넌트
function IconButton({ icon, label }) {
  return (
    <button>
      <span>{icon}</span>
      {label}
    </button>
  );
}

// 다양하게 사용
<IconButton icon="❤️" label="좋아요" />
<IconButton icon="🔗" label="공유" />
<IconButton icon="💬" label="댓글" />
<IconButton icon="🔖" label="저장" />`;

  return (
    <div>
      <h2>2-4-2. 재사용성 고려하기</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>재사용 불가능 (하드코딩)</h3>
        <TabViewer
          title="예제 1-1: 재사용 불가능한 컴포넌트"
          description="특정 데이터에 의존. 홍길동만 표시 가능"
          resultContent={resultContent1Not}
          codeString={codeString1Not}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>재사용 가능 (Props 활용)</h3>
        <TabViewer
          title="예제 1-2: 재사용 가능한 컴포넌트"
          description="Props로 데이터를 받아서 다양한 사용자 표시 가능"
          resultContent={resultContent1Reusable}
          codeString={codeString1Reusable}
        />
      </div>

      <div style={{ marginTop: "40px" }}>
        <TabViewer
          title="예제 2: 버튼 컴포넌트 재사용"
          description="Props로 text와 color를 받으면 하나의 컴포넌트로 다양한 버튼 생성"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 아이콘 버튼 재사용"
          description="Props로 icon과 label을 받으면 하나의 컴포넌트로 다양한 아이콘 버튼 생성"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
      
      <div style={{ 
        marginTop: '30px', 
        padding: '20px', 
        backgroundColor: '#fff3cd', 
        borderRadius: '8px',
        border: '1px solid #ffc107'
      }}>
        <h3>💡 중요한 점</h3>
        <p>지금은 Props를 아직 배우지 않았지만, <strong>"재사용 가능하게 만든다 = Props로 데이터를 받는다"</strong>는 개념만 이해하면 됨!</p>
        <p>다음 챕터 "Props"에서 자세히 배울 예정임.</p>
      </div>
    </div>
  );
}

export default Reusability;
