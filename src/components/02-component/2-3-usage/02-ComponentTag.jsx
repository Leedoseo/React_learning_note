// src/components/02-component/2-3-usage/02-ComponentTag.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 자체 닫기 태그
function Button1() {
  return <button style={{ padding: '10px', margin: '5px' }}>버튼</button>;
}

function Example1() {
  return (
    <div>
      <Button1 />
      <Button1 />
      <Button1 />
    </div>
  );
}

// 예제 2: 여러 컴포넌트 조합
function Header2() {
  return (
    <header style={{ padding: '15px', backgroundColor: '#007bff', color: 'white' }}>
      <h1>My Website</h1>
    </header>
  );
}

function MainContent2() {
  return (
    <main style={{ padding: '20px' }}>
      <p>메인 콘텐츠입니다</p>
    </main>
  );
}

function Footer2() {
  return (
    <footer style={{ padding: '15px', backgroundColor: '#6c757d', color: 'white' }}>
      <p>© 2024</p>
    </footer>
  );
}

function Example2() {
  return (
    <div className="app">
      <Header2 />
      <MainContent2 />
      <Footer2 />
    </div>
  );
}

// 예제 3: 같은 컴포넌트 여러 번 사용
function ProductCard3() {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      margin: '10px',
      width: '150px',
      display: 'inline-block'
    }}>
      <div style={{ width: '100%', height: '100px', backgroundColor: '#eee', marginBottom: '10px' }}></div>
      <h4 style={{ margin: '5px 0' }}>상품명</h4>
      <p style={{ margin: '5px 0' }}>50,000원</p>
    </div>
  );
}

function Example3() {
  return (
    <div className="product-list">
      <ProductCard3 />
      <ProductCard3 />
      <ProductCard3 />
      <ProductCard3 />
      <ProductCard3 />
      <ProductCard3 />
    </div>
  );
}

// 예제 4: 컴포넌트 중첩
function UserAvatar4() {
  return <div style={{ 
    width: '50px', 
    height: '50px', 
    borderRadius: '50%', 
    backgroundColor: '#007bff',
    display: 'inline-block',
    marginRight: '10px'
  }}></div>;
}

function UserName4() {
  return <h3 style={{ display: 'inline-block', margin: 0 }}>홍길동</h3>;
}

function UserProfile4() {
  return (
    <div className="user-profile" style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <UserAvatar4 />
      <UserName4 />
      <p style={{ marginTop: '10px' }}>프론트엔드 개발자</p>
    </div>
  );
}

function Example4() {
  return (
    <div>
      <UserProfile4 />
    </div>
  );
}

function ComponentTag() {
  // 예제 1
  const resultContent1 = <Example1 />;
  
  const codeString1 = `// Button.jsx
function Button() {
  return <button>클릭하세요</button>;
}

export default Button;

// App.jsx
import Button from './Button';

function App() {
  return (
    <div>
      <Button />  {/* ← 자체 닫기 */}
      <Button />
      <Button />
    </div>
  );
}

// 결과:
// <button>클릭하세요</button>
// <button>클릭하세요</button>
// <button>클릭하세요</button>`;

  // 예제 2
  const resultContent2 = <Example2 />;
  
  const codeString2 = `// Header.jsx
function Header() {
  return (
    <header>
      <h1>My Website</h1>
    </header>
  );
}

// MainContent.jsx
function MainContent() {
  return (
    <main>
      <p>메인 콘텐츠입니다</p>
    </main>
  );
}

// Footer.jsx
function Footer() {
  return (
    <footer>
      <p>© 2024</p>
    </footer>
  );
}

// App.jsx
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

function App() {
  return (
    <div className="app">
      <Header />       {/* ← 헤더 컴포넌트 */}
      <MainContent />  {/* ← 메인 컴포넌트 */}
      <Footer />       {/* ← 푸터 컴포넌트 */}
    </div>
  );
}`;

  // 예제 3
  const resultContent3 = <Example3 />;
  
  const codeString3 = `// ProductCard.jsx
function ProductCard() {
  return (
    <div className="product-card">
      <img src="product.jpg" alt="상품" />
      <h3>상품명</h3>
      <p>50,000원</p>
    </div>
  );
}

export default ProductCard;

// ProductList.jsx
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <div className="product-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

// ProductCard를 6번 재사용
// 모두 동일하게 렌더링됨`;

  // 예제 4
  const resultContent4 = <Example4 />;
  
  const codeString4 = `// UserAvatar.jsx
function UserAvatar() {
  return <img src="avatar.jpg" className="avatar" alt="사용자" />;
}

// UserName.jsx
function UserName() {
  return <h3>홍길동</h3>;
}

// UserProfile.jsx
import UserAvatar from './UserAvatar';
import UserName from './UserName';

function UserProfile() {
  return (
    <div className="user-profile">
      <UserAvatar />  {/* ← 작은 컴포넌트 */}
      <UserName />    {/* ← 작은 컴포넌트 */}
      <p>프론트엔드 개발자</p>
    </div>
  );
}

// App.jsx
import UserProfile from './UserProfile';

function App() {
  return (
    <div>
      <UserProfile />  {/* ← 큰 컴포넌트 (안에 작은 컴포넌트들 포함) */}
    </div>
  );
}

// 중첩 구조:
// App → UserProfile → UserAvatar, UserName`;

  // 예제 5: 주의사항
  const resultContent5 = (
    <div style={{ padding: '20px', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
      <h4>⚠️ 주의사항</h4>
      <ul style={{ marginLeft: '20px' }}>
        <li><strong>대문자로 시작:</strong> {'<button>'} (HTML) vs {'<Button>'} (컴포넌트)</li>
        <li><strong>자체 닫기 슬래시 필수:</strong> {'<Button />'} ✅ vs {'<Button>'} ❌</li>
        <li><strong>import 필수:</strong> import 없이 사용 불가</li>
      </ul>
    </div>
  );
  
  const codeString5 = `// ❌ 잘못된 사용
function App() {
  return <button />;  // HTML button
}

// ✅ 올바른 사용
import Button from './Button';

function App() {
  return <Button />;  // React Button 컴포넌트
}

// ❌ 자체 닫기 슬래시 없음
<Button>  // 에러!

// ✅ 슬래시 필수
<Button />
// 또는
<Button></Button>

// ❌ import 없이 사용
function App() {
  return <Button />;  // Button is not defined!
}

// ✅ import 필요
import Button from './Button';
function App() {
  return <Button />;
}`;

  return (
    <div>
      <h2>2-3-2. {'<Component />'} 형태로 사용</h2>
      
      <TabViewer
        title="예제 1: 자체 닫기 태그"
        description="컴포넌트는 <Component /> 형태로 사용. 대문자로 시작"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 여러 컴포넌트 조합"
          description="Header, MainContent, Footer를 조합해서 페이지 구성"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 같은 컴포넌트 여러 번 사용"
          description="ProductCard를 6번 재사용. 재사용의 핵심"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: 컴포넌트 중첩"
          description="작은 컴포넌트(UserAvatar, UserName)를 모아서 큰 컴포넌트(UserProfile) 만들기"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: 주의사항"
          description="컴포넌트 사용 시 반드시 지켜야 할 규칙들"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default ComponentTag;