// src/components/02-component/2-3-usage/03-ComponentNesting.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 1단계 중첩
function UserAvatar1() {
  return (
    <div style={{
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      display: 'inline-block'
    }}></div>
  );
}

function UserProfile1() {
  return (
    <div className="user-profile" style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px' 
    }}>
      <UserAvatar1 />
      <h2 style={{ margin: '10px 0' }}>홍길동</h2>
      <p>프론트엔드 개발자</p>
    </div>
  );
}

// 예제 2: 2단계 중첩
function Icon2() {
  return <span style={{ marginRight: '5px' }}>👤</span>;
}

function Button2() {
  return (
    <button style={{ padding: '10px 20px', cursor: 'pointer' }}>
      <Icon2 />
      프로필
    </button>
  );
}

function Header2() {
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1>My App</h1>
      <Button2 />
    </header>
  );
}

// 예제 3: 복잡한 중첩 구조
function Logo3() {
  return <div style={{ 
    width: '40px', 
    height: '40px', 
    backgroundColor: '#007bff',
    borderRadius: '4px'
  }}></div>;
}

function NavItem3() {
  return <a href="/" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>메뉴</a>;
}

function Navigation3() {
  return (
    <nav style={{ display: 'flex', gap: '10px' }}>
      <NavItem3 />
      <NavItem3 />
      <NavItem3 />
    </nav>
  );
}

function Header3() {
  return (
    <header style={{ 
      padding: '20px', 
      backgroundColor: '#f8f9fa',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Logo3 />
      <Navigation3 />
    </header>
  );
}

// 예제 4: 카드 컴포넌트 중첩
function CardImage4() {
  return <div style={{ 
    width: '100%', 
    height: '150px', 
    backgroundColor: '#ddd',
    marginBottom: '10px'
  }}></div>;
}

function CardTitle4() {
  return <h3 style={{ margin: '5px 0' }}>무선 이어폰</h3>;
}

function CardPrice4() {
  return <p className="price" style={{ color: '#007bff', fontWeight: 'bold' }}>89,000원</p>;
}

function CardButton4() {
  return <button style={{ width: '100%', padding: '10px', marginTop: '10px' }}>장바구니 담기</button>;
}

function ProductCard4() {
  return (
    <div className="product-card" style={{ 
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '15px',
      width: '200px'
    }}>
      <CardImage4 />
      <CardTitle4 />
      <CardPrice4 />
      <CardButton4 />
    </div>
  );
}

function ProductList4() {
  return (
    <div className="product-list" style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
      <ProductCard4 />
      <ProductCard4 />
      <ProductCard4 />
    </div>
  );
}

// 예제 5: 페이지 레벨 중첩
function HeroSection() {
  return <div style={{ padding: '40px', backgroundColor: '#007bff', color: 'white', textAlign: 'center' }}>
    <h1>환영합니다</h1>
    <p>React 컴포넌트 학습 페이지입니다</p>
  </div>;
}

function FeaturesSection() {
  return <div style={{ padding: '40px', textAlign: 'center' }}>
    <h2>주요 기능</h2>
    <p>컴포넌트 기반 개발</p>
  </div>;
}

function FooterSection() {
  return <footer style={{ padding: '20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
    <p>© 2024 My Website</p>
  </footer>;
}

function HomePage5() {
  return (
    <div className="home-page">
      <Header3 />
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
}

function ComponentNesting() {
  // 예제 1
  const resultContent1 = <UserProfile1 />;
  
  const codeString1 = `// UserAvatar.jsx
function UserAvatar() {
  return <img src="avatar.jpg" alt="사용자" className="avatar" />;
}

export default UserAvatar;

// UserProfile.jsx
import UserAvatar from './UserAvatar';

function UserProfile() {
  return (
    <div className="user-profile">
      <UserAvatar />  {/* ← UserProfile 안에 UserAvatar */}
      <h2>홍길동</h2>
      <p>프론트엔드 개발자</p>
    </div>
  );
}

export default UserProfile;

// 중첩 구조:
// UserProfile
//   └─ UserAvatar`;

  // 예제 2
  const resultContent2 = <Header2 />;
  
  const codeString2 = `// Icon.jsx
function Icon() {
  return <span>👤</span>;
}

// Button.jsx
import Icon from './Icon';

function Button() {
  return (
    <button>
      <Icon />  {/* ← Button 안에 Icon */}
      프로필
    </button>
  );
}

// Header.jsx
import Button from './Button';

function Header() {
  return (
    <header>
      <h1>My App</h1>
      <Button />  {/* ← Header 안에 Button (Button 안엔 Icon) */}
    </header>
  );
}

// 중첩 구조:
// Header
//   └─ Button
//       └─ Icon`;

  // 예제 3
  const resultContent3 = <Header3 />;
  
  const codeString3 = `// Logo.jsx
function Logo() {
  return <img src="logo.png" alt="로고" />;
}

// NavItem.jsx
function NavItem() {
  return <a href="/">메뉴</a>;
}

// Navigation.jsx
import NavItem from './NavItem';

function Navigation() {
  return (
    <nav>
      <NavItem />
      <NavItem />
      <NavItem />
    </nav>
  );
}

// Header.jsx
import Logo from './Logo';
import Navigation from './Navigation';

function Header() {
  return (
    <header>
      <Logo />
      <Navigation />
    </header>
  );
}

// 중첩 구조:
// Header
//   ├─ Logo
//   └─ Navigation
//       ├─ NavItem
//       ├─ NavItem
//       └─ NavItem`;

  // 예제 4
  const resultContent4 = <ProductList4 />;
  
  const codeString4 = `// CardImage.jsx
function CardImage() {
  return <img src="product.jpg" alt="상품" />;
}

// CardTitle.jsx
function CardTitle() {
  return <h3>무선 이어폰</h3>;
}

// CardPrice.jsx
function CardPrice() {
  return <p className="price">89,000원</p>;
}

// CardButton.jsx
function CardButton() {
  return <button>장바구니 담기</button>;
}

// ProductCard.jsx
import CardImage from './CardImage';
import CardTitle from './CardTitle';
import CardPrice from './CardPrice';
import CardButton from './CardButton';

function ProductCard() {
  return (
    <div className="product-card">
      <CardImage />
      <CardTitle />
      <CardPrice />
      <CardButton />
    </div>
  );
}

// ProductList.jsx
import ProductCard from './ProductCard';

function ProductList() {
  return (
    <div className="product-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

// 중첩 구조:
// ProductList
//   └─ ProductCard (×3)
//       ├─ CardImage
//       ├─ CardTitle
//       ├─ CardPrice
//       └─ CardButton`;

  // 예제 5
  const resultContent5 = <HomePage5 />;
  
  const codeString5 = `// HomePage.jsx
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';

function HomePage() {
  return (
    <div className="home-page">
      <Header />      {/* 각각 안에 더 작은 컴포넌트들 */}
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

// 전체 구조:
// HomePage
//   ├─ Header
//   │   ├─ Logo
//   │   └─ Navigation
//   │       └─ NavItem (×4)
//   ├─ Hero
//   │   ├─ HeroTitle
//   │   └─ HeroButton
//   ├─ Features
//   │   └─ FeatureCard (×3)
//   └─ Footer
//       └─ Copyright`;

  return (
    <div>
      <h2>2-3-3. 컴포넌트 중첩하기</h2>
      
      <TabViewer
        title="예제 1: 1단계 중첩"
        description="UserProfile 안에 UserAvatar를 포함. 간단한 중첩"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 2단계 중첩"
          description="Header > Button > Icon. 3단계 중첩 구조"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 복잡한 중첩 구조"
          description="Header 안에 Logo와 Navigation. Navigation 안에 여러 NavItem"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: 카드 컴포넌트 중첩"
          description="ProductCard를 작은 컴포넌트들로 나누고, ProductList에서 여러 번 사용"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 5: 페이지 레벨 중첩"
          description="HomePage에 여러 섹션 컴포넌트를 포함. 실무에서 가장 흔한 패턴"
          resultContent={resultContent5}
          codeString={codeString5}
        />
      </div>
    </div>
  );
}

export default ComponentNesting;