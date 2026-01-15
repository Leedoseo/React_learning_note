// src/components/03-props/3-3-receiving/02-Destructuring.jsx
import TabViewer from "../../common/TabViewer";

// 예제 1: 기본 구조분해
function GreetingDestructure({ name, age }) {
  return (
    <div style={{ padding: '15px', backgroundColor: '#e3f2fd', borderRadius: '8px', margin: '10px 0' }}>
      <h3>안녕하세요, {name}님!</h3>
      <p>나이: {age}세</p>
    </div>
  );
}

// 예제 2: props vs 구조분해 비교
function UserCardProps(props) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <h3>{props.name}</h3>
      <p>{props.age}세</p>
      <p>{props.job}</p>
    </div>
  );
}

function UserCardDestructure({ name, age, job }) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <h3>{name}</h3>
      <p>{age}세</p>
      <p>{job}</p>
    </div>
  );
}

// 예제 3: 객체 Props 구조분해
function ProductCard({ product }) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      width: '250px'
    }}>
      <h3>{product.name}</h3>
      <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>
        {product.price.toLocaleString()}원
      </p>
      <p>{product.description}</p>
    </div>
  );
}

// 예제 3-2: 중첩 구조분해
function ProductCardNested({ product: { name, price, description } }) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      width: '250px'
    }}>
      <h3>{name}</h3>
      <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>
        {price.toLocaleString()}원
      </p>
      <p>{description}</p>
    </div>
  );
}

function Destructuring() {
  // 예제 1
  const resultContent1 = (
    <GreetingDestructure name="홍길동" age={25} />
  );

  const codeString1 = `// props 객체로 받기
function Greeting(props) {
  return <h3>안녕하세요, {props.name}님!</h3>;
}

// 구조분해 할당으로 받기
function Greeting({ name, age }) {
  return (
    <div>
      <h3>안녕하세요, {name}님!</h3>
      <p>나이: {age}세</p>
    </div>
  );
}

// { name, age } = props
// 이렇게 바로 구조분해해서 받음`;

  // 예제 2
  const resultContent2 = (
    <div>
      <h4>props 객체로 받기</h4>
      <UserCardProps name="홍길동" age={25} job="개발자" />
      
      <h4 style={{ marginTop: '20px' }}>구조분해 할당으로 받기</h4>
      <UserCardDestructure name="김철수" age={30} job="디자이너" />
    </div>
  );

  const codeString2 = `// 방법 1: props 객체
function UserCard(props) {
  return (
    <div>
      <h3>{props.name}</h3>  {/* props. 계속 써야 함 */}
      <p>{props.age}세</p>
      <p>{props.job}</p>
    </div>
  );
}

// 방법 2: 구조분해 할당 (더 간결)
function UserCard({ name, age, job }) {
  return (
    <div>
      <h3>{name}</h3>  {/* props. 불필요 */}
      <p>{age}세</p>
      <p>{job}</p>
    </div>
  );
}

// 구조분해가 더 간결하고 가독성 좋음
// 실무에서 더 많이 사용`;

  // 예제 3
  const productData = {
    name: '무선 이어폰',
    price: 89000,
    description: '고음질 블루투스 이어폰'
  };

  const resultContent3 = (
    <div>
      <h4>방법 1: product로 받기</h4>
      <ProductCard product={productData} />
      
      <h4 style={{ marginTop: '20px' }}>방법 2: 중첩 구조분해</h4>
      <ProductCardNested product={productData} />
    </div>
  );

  const codeString3 = `// 방법 1: product 객체로 받기
function ProductCard({ product }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>{product.price}원</p>
      <p>{product.description}</p>
    </div>
  );
}

// 방법 2: 중첩 구조분해
function ProductCard({ product: { name, price, description } }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{price}원</p>
      <p>{description}</p>
    </div>
  );
}

// 방법 1이 더 일반적
// 방법 2는 너무 복잡하면 피하기`;

  return (
    <div>
      <h2>3-3-2. 구조분해 할당으로 받기</h2>

      <TabViewer
        title="예제 1: 구조분해 기본"
        description="{ name, age }로 바로 구조분해. props. 불필요"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: props vs 구조분해 비교"
          description="구조분해가 더 간결하고 가독성 좋음. 실무에서 더 많이 사용"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 객체 Props 구조분해"
          description="객체 Props는 한 단계만 구조분해하는 게 일반적"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default Destructuring;