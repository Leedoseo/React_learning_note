// src/components/02-component/2-4-separation/01-WhenToSeparate.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 재사용성 기준 - 분리 전
function LoginPageBefore() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>로그인</h1>
      <button style={{ padding: '10px', background: 'blue', color: 'white', margin: '5px' }}>
        로그인
      </button>
      <button style={{ padding: '10px', background: 'blue', color: 'white', margin: '5px' }}>
        회원가입
      </button>
    </div>
  );
}

// 예제 1: 재사용성 기준 - 분리 후
function ButtonReuse() {
  return (
    <button style={{ padding: '10px', background: 'blue', color: 'white', margin: '5px' }}>
      버튼
    </button>
  );
}

function LoginPageAfter() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>로그인</h1>
      <ButtonReuse />
      <ButtonReuse />
    </div>
  );
}

// 예제 2: 독립적 기능 기준 - 분리 전
function HeaderBefore() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1>쇼핑몰</h1>
      
      {/* 검색 기능 */}
      <div className="search" style={{ margin: '10px 0' }}>
        <input 
          type="text" 
          placeholder="상품 검색"
          style={{ padding: '8px', marginRight: '5px' }}
        />
        <button style={{ padding: '8px' }}>검색</button>
      </div>
      
      <nav style={{ marginTop: '10px' }}>
        <a href="/" style={{ margin: '0 10px' }}>홈</a>
        <a href="/cart" style={{ margin: '0 10px' }}>장바구니</a>
      </nav>
    </header>
  );
}

// 예제 2: 독립적 기능 기준 - 분리 후
function SearchBar() {
  return (
    <div className="search" style={{ margin: '10px 0' }}>
      <input 
        type="text" 
        placeholder="상품 검색"
        style={{ padding: '8px', marginRight: '5px' }}
      />
      <button style={{ padding: '8px' }}>검색</button>
    </div>
  );
}

function HeaderAfter() {
  return (
    <header style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1>쇼핑몰</h1>
      <SearchBar />
      <nav style={{ marginTop: '10px' }}>
        <a href="/" style={{ margin: '0 10px' }}>홈</a>
        <a href="/cart" style={{ margin: '0 10px' }}>장바구니</a>
      </nav>
    </header>
  );
}

// 예제 3: 코드 길이 기준
function ProductPageComplex() {
  return (
    <div style={{ padding: '20px' }}>
      <header style={{ padding: '15px', backgroundColor: '#f8f9fa', marginBottom: '20px' }}>
        <h1>상품 페이지</h1>
      </header>
      
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <div style={{ width: '200px', height: '200px', backgroundColor: '#ddd' }}></div>
        <div>
          <h2>무선 이어폰</h2>
          <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>89,000원</p>
          <button style={{ padding: '10px 20px', marginTop: '10px' }}>구매하기</button>
        </div>
      </div>
      
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3>상품 설명</h3>
        <p>최고급 무선 이어폰입니다...</p>
      </div>
      
      <footer style={{ padding: '15px', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
        <p>© 2024</p>
      </footer>
      
      {/* 실제로는 200줄 이상... */}
    </div>
  );
}

// 예제 3: 분리 후
function ProductHeader3() {
  return (
    <header style={{ padding: '15px', backgroundColor: '#f8f9fa', marginBottom: '20px' }}>
      <h1>상품 페이지</h1>
    </header>
  );
}

function ProductInfo3() {
  return (
    <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
      <div style={{ width: '200px', height: '200px', backgroundColor: '#ddd' }}></div>
      <div>
        <h2>무선 이어폰</h2>
        <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>89,000원</p>
        <button style={{ padding: '10px 20px', marginTop: '10px' }}>구매하기</button>
      </div>
    </div>
  );
}

function ProductDescription3() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <h3>상품 설명</h3>
      <p>최고급 무선 이어폰입니다...</p>
    </div>
  );
}

function ProductFooter3() {
  return (
    <footer style={{ padding: '15px', backgroundColor: '#f8f9fa', marginTop: '20px' }}>
      <p>© 2024</p>
    </footer>
  );
}

function ProductPageSimple() {
  return (
    <div style={{ padding: '20px' }}>
      <ProductHeader3 />
      <ProductInfo3 />
      <ProductDescription3 />
      <ProductFooter3 />
    </div>
  );
}

function WhenToSeparate() {
  // 예제 1
  const resultContent1Before = <LoginPageBefore />;
  const resultContent1After = <LoginPageAfter />;
  
  const codeString1 = `// ❌ 분리 전 - 버튼 코드가 반복됨
function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <button style={{ padding: '10px', background: 'blue' }}>
        로그인
      </button>
      <button style={{ padding: '10px', background: 'blue' }}>
        회원가입
      </button>
    </div>
  );
}

// ✅ 분리 후 - Button 컴포넌트로 재사용
function Button() {
  return (
    <button style={{ padding: '10px', background: 'blue' }}>
      클릭
    </button>
  );
}

function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <Button />
      <Button />
    </div>
  );
}

// 분리 이유: 버튼이 여러 페이지에서 재사용됨`;

  // 예제 2
  const resultContent2Before = <HeaderBefore />;
  const resultContent2After = <HeaderAfter />;
  
  const codeString2 = `// ❌ 분리 전 - 헤더에 검색 기능이 섞여있음
function Header() {
  return (
    <header>
      <h1>쇼핑몰</h1>
      
      {/* 검색 기능 */}
      <div className="search">
        <input type="text" placeholder="상품 검색" />
        <button>검색</button>
      </div>
      
      <nav>
        <a href="/">홈</a>
        <a href="/cart">장바구니</a>
      </nav>
    </header>
  );
}

// ✅ 분리 후 - 검색바를 독립적인 컴포넌트로
function SearchBar() {
  return (
    <div className="search">
      <input type="text" placeholder="상품 검색" />
      <button>검색</button>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>쇼핑몰</h1>
      <SearchBar />  {/* 검색 기능 분리 */}
      <nav>
        <a href="/">홈</a>
        <a href="/cart">장바구니</a>
      </nav>
    </header>
  );
}

// 분리 이유: 검색은 독립적인 기능이고, 나중에 다른 곳에서도 쓸 수 있음`;

  // 예제 3
  const resultContent3Before = <ProductPageComplex />;
  const resultContent3After = <ProductPageSimple />;
  
  const codeString3 = `// ❌ 분리 전 - 200줄이 넘는 거대한 컴포넌트
function ProductPage() {
  return (
    <div>
      {/* 헤더 (20줄) */}
      <header>...</header>
      
      {/* 상품 정보 (40줄) */}
      <div>...</div>
      
      {/* 상품 설명 (50줄) */}
      <div>...</div>
      
      {/* 리뷰 (40줄) */}
      <div>...</div>
      
      {/* 푸터 (20줄) */}
      <footer>...</footer>
    </div>
  );
}

// ✅ 분리 후 - 각 섹션을 독립된 컴포넌트로
function ProductPage() {
  return (
    <div>
      <Header />
      <ProductInfo />
      <ProductDescription />
      <Reviews />
      <Footer />
    </div>
  );
}

// 분리 이유: 200줄이 넘어서 읽기 어려움 → 각 섹션별로 분리`;

  return (
    <div>
      <h2>2-4-1. 언제 컴포넌트를 나눌까?</h2>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>분리 전 (버튼 반복)</h3>
        <TabViewer
          title="예제 1-1: 재사용성 기준 - 분리 전"
          description="버튼 코드가 반복됨. 비효율적"
          resultContent={resultContent1Before}
          codeString={codeString1}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>분리 후 (Button 컴포넌트)</h3>
        <TabViewer
          title="예제 1-2: 재사용성 기준 - 분리 후"
          description="Button 컴포넌트로 분리. 여러 페이지에서 재사용 가능"
          resultContent={resultContent1After}
          codeString={codeString1}
        />
      </div>

      <div style={{ marginTop: "40px", marginBottom: '20px' }}>
        <h3>분리 전 (검색 기능 섞임)</h3>
        <TabViewer
          title="예제 2-1: 독립적 기능 기준 - 분리 전"
          description="헤더에 검색 기능이 섞여있음"
          resultContent={resultContent2Before}
          codeString={codeString2}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>분리 후 (SearchBar 분리)</h3>
        <TabViewer
          title="예제 2-2: 독립적 기능 기준 - 분리 후"
          description="검색바를 독립적인 컴포넌트로 분리"
          resultContent={resultContent2After}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "40px", marginBottom: '20px' }}>
        <h3>분리 전 (너무 긴 코드)</h3>
        <TabViewer
          title="예제 3-1: 코드 길이 기준 - 분리 전"
          description="200줄 이상의 거대한 컴포넌트. 읽기 어려움"
          resultContent={resultContent3Before}
          codeString={codeString3}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <h3>분리 후 (섹션별 분리)</h3>
        <TabViewer
          title="예제 3-2: 코드 길이 기준 - 분리 후"
          description="각 섹션을 독립된 컴포넌트로. 10줄로 축소!"
          resultContent={resultContent3After}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default WhenToSeparate;