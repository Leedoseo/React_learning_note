// src/components/02-component/2-1-concept/02-ReusableUIBlock.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 재사용되는 버튼
function Button() {
  return (
    <button style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }}>
      클릭하세요
    </button>
  );
}

function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <Button />
      <Button />
    </div>
  );
}

// 예제 2: 상품 카드 재사용
function ProductCard() {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '10px'
    }}>
      <img src="product.jpg" alt="상품" style={{ width: '100%' }} />
      <h3>무선 이어폰</h3>
      <p className="price">89,000원</p>
      <p>고음질 블루투스 이어폰</p>
      <button>장바구니 담기</button>
    </div>
  );
}

function ProductList() {
  return (
    <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap' }}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

function ReusableUIBlock() {
  // 예제 1
  const resultContent1 = <LoginPage />;
  
  const codeString1 = `function Button() {
  return (
    <button style={{
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px'
    }}>
      클릭하세요
    </button>
  );
}

function LoginPage() {
  return (
    <div>
      <h1>로그인</h1>
      <input type="text" placeholder="아이디" />
      <input type="password" placeholder="비밀번호" />
      <Button />  {/* 재사용 1 */}
      <Button />  {/* 재사용 2 */}
    </div>
  );
}`;

  // 예제 2
  const resultContent2 = <ProductList />;
  
  const codeString2 = `function ProductCard() {
  return (
    <div className="product-card">
      <img src="product.jpg" alt="상품" />
      <h3>무선 이어폰</h3>
      <p className="price">89,000원</p>
      <button>장바구니 담기</button>
    </div>
  );
}

function ProductList() {
  return (
    <div className="product-grid">
      <ProductCard />  {/* 6번 재사용 */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}`;

  return (
    <div>
      <h2>2-1-2. 재사용 가능한 UI 블록</h2>
      
      <TabViewer
        title="예제 1: 버튼 재사용"
        description="Button 컴포넌트를 한 번 만들고 여러 곳에서 재사용"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 상품 카드 재사용"
          description="ProductCard를 6번 재사용해서 상품 목록 만들기"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>
    </div>
  );
}

export default ReusableUIBlock;