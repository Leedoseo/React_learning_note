// src/components/02-component/2-2-creation/03-NamingRules.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 올바른 이름 (PascalCase)
function Button() {
  return <button>버튼</button>;
}

function UserProfile() {
  return <div>사용자 프로필</div>;
}

function ProductCard() {
  return <div>상품 카드</div>;
}

function ShoppingCart() {
  return <div>장바구니</div>;
}

// 예제 2: HTML 태그 vs 컴포넌트
function TagExample() {
  return (
    <div>
      <h3>HTML 태그 (소문자)</h3>
      <div>div 태그</div>
      <button>button 태그</button>
      <input type="text" />
      
      <h3 style={{ marginTop: '20px' }}>React 컴포넌트 (대문자)</h3>
      <Button />
      <UserProfile />
      <ProductCard />
    </div>
  );
}

// 예제 3: 여러 단어 컴포넌트
function UserProfileCard() {
  return <div>사용자 프로필 카드</div>;
}

function ShoppingCartItem() {
  return <div>장바구니 항목</div>;
}

function ProductDetailPage() {
  return <div>상품 상세 페이지</div>;
}

function NavigationBar() {
  return <nav>네비게이션 바</nav>;
}

// 예제 4: 축약어 포함
function HtmlEditor() {
  return <div>HTML 에디터 (권장)</div>;
}

function ApiClient() {
  return <div>API 클라이언트 (권장)</div>;
}

// 참고: HTMLEditor, APIClient도 가능하지만 HtmlEditor, ApiClient가 더 일반적

function NamingRules() {
  // 예제 1
  const resultContent1 = (
    <div>
      <Button />
      <UserProfile />
      <ProductCard />
      <ShoppingCart />
    </div>
  );
  
  const codeString1 = `// ✅ 올바른 PascalCase
function Button() {
  return <button>버튼</button>;
}

function UserProfile() {
  return <div>사용자 프로필</div>;
}

function ProductCard() {
  return <div>상품 카드</div>;
}

function ShoppingCart() {
  return <div>장바구니</div>;
}

// ❌ 잘못된 이름들
function button() { }        // 소문자
function userProfile() { }   // camelCase
function user_profile() { }  // snake_case`;

  // 예제 2
  const resultContent2 = <TagExample />;
  
  const codeString2 = `function App() {
  return (
    <div>
      {/* HTML 태그 (소문자) */}
      <div>div 태그</div>
      <button>button 태그</button>
      <input type="text" />
      
      {/* React 컴포넌트 (대문자) */}
      <Button />
      <UserProfile />
      <ProductCard />
    </div>
  );
}

// React는 대문자로 시작하면 컴포넌트로 인식
// 소문자로 시작하면 HTML 태그로 인식`;

  // 예제 3
  const resultContent3 = (
    <div>
      <UserProfileCard />
      <ShoppingCartItem />
      <ProductDetailPage />
      <NavigationBar />
    </div>
  );
  
  const codeString3 = `// 여러 단어는 각 단어의 첫 글자를 대문자로
function UserProfileCard() {
  return <div>사용자 프로필 카드</div>;
}

function ShoppingCartItem() {
  return <div>장바구니 항목</div>;
}

function ProductDetailPage() {
  return <div>상품 상세 페이지</div>;
}

function NavigationBar() {
  return <nav>네비게이션 바</nav>;
}`;

  // 예제 4
  const resultContent4 = (
    <div>
      <HtmlEditor />
      <ApiClient />
      <p style={{ fontSize: '12px', color: '#666', marginTop: '10px' }}>
        축약어 첫 글자만 대문자 (권장)
      </p>
    </div>
  );
  
  const codeString4 = `// ✅ 권장: 축약어 첫 글자만 대문자
function HtmlEditor() {
  return <div>HTML 에디터</div>;
}

function ApiClient() {
  return <div>API 클라이언트</div>;
}

function CssLoader() {
  return <div>CSS 로더</div>;
}

// ⚠️ 가능하지만 덜 일반적
function HTMLEditor() { }
function APIClient() { }
function CSSLoader() { }`;

  return (
    <div>
      <h2>2-2-3. 컴포넌트 이름 규칙 (대문자 시작)</h2>
      
      <TabViewer
        title="예제 1: 올바른 PascalCase"
        description="컴포넌트 이름은 반드시 대문자로 시작. 각 단어의 첫 글자를 대문자로"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: HTML 태그 vs React 컴포넌트"
          description="소문자는 HTML 태그, 대문자는 컴포넌트로 인식됨"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 여러 단어 컴포넌트 이름"
          description="여러 단어를 붙여쓰고 각 단어의 첫 글자를 대문자로"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: 축약어가 포함된 경우"
          description="HTML, API 등 축약어는 첫 글자만 대문자로 하는 게 일반적"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>
    </div>
  );
}

export default NamingRules;