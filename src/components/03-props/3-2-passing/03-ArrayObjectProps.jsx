// src/components/03-props/3-2-passing/03-ArrayObjectProps.jsx
import TabViewer from "../../common/TabViewer";

// 예제용 컴포넌트
function TagList(props) {
  return (
    <div style={{ padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '8px', margin: '10px 0' }}>
      <h3>태그 목록:</h3>
      <div>
        {props.tags.map((tag, index) => (
          <span 
            key={index}
            style={{
              display: 'inline-block',
              padding: '5px 10px',
              margin: '5px',
              backgroundColor: '#007bff',
              color: 'white',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function UserProfile(props) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      <h3>{props.user.name}</h3>
      <p>나이: {props.user.age}세</p>
      <p>직업: {props.user.job}</p>
      <p>이메일: {props.user.email}</p>
    </div>
  );
}

function ProductCard(props) {
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #ddd', 
      borderRadius: '8px',
      margin: '10px 0',
      width: '300px'
    }}>
      <h3>{props.product.name}</h3>
      <p style={{ color: '#007bff', fontSize: '20px', fontWeight: 'bold' }}>
        {props.product.price.toLocaleString()}원
      </p>
      <p>{props.product.description}</p>
      <div>
        <strong>사양:</strong>
        <ul>
          {props.product.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
      <div>
        <strong>태그:</strong>
        {props.product.tags.map((tag, index) => (
          <span 
            key={index}
            style={{
              display: 'inline-block',
              padding: '3px 8px',
              margin: '2px',
              backgroundColor: '#e3f2fd',
              borderRadius: '3px',
              fontSize: '12px'
            }}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ArrayObjectProps() {
  // 예제 1
  const myTags = ['HTML', 'CSS', 'JavaScript'];

  const resultContent1 = (
    <div>
      <TagList tags={['React', 'Vue', 'Angular']} />
      <TagList tags={myTags} />
    </div>
  );

  const codeString1 = `function TagList(props) {
  return (
    <div>
      <h3>태그 목록:</h3>
      <ul>
        {props.tags.map((tag, index) => (
          <li key={index}>#{tag}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const myTags = ['HTML', 'CSS', 'JavaScript'];
  
  return (
    <div>
      {/* 방법 1: 직접 배열 전달 */}
      <TagList tags={['React', 'Vue', 'Angular']} />
      
      {/* 방법 2: 변수 사용 */}
      <TagList tags={myTags} />
    </div>
  );
}

// 배열은 중괄호로 감싸서 전달`;

  // 예제 2
  const userData = {
    name: '김철수',
    age: 30,
    job: '디자이너',
    email: 'kim@example.com'
  };

  const resultContent2 = (
    <div>
      <UserProfile 
        user={{
          name: '홍길동',
          age: 25,
          job: '개발자',
          email: 'hong@example.com'
        }}
      />
      <UserProfile user={userData} />
    </div>
  );

  const codeString2 = `function UserProfile(props) {
  return (
    <div>
      <h3>{props.user.name}</h3>
      <p>나이: {props.user.age}세</p>
      <p>직업: {props.user.job}</p>
      <p>이메일: {props.user.email}</p>
    </div>
  );
}

function App() {
  const userData = {
    name: '김철수',
    age: 30,
    job: '디자이너',
    email: 'kim@example.com'
  };
  
  return (
    <div>
      {/* 방법 1: 직접 객체 전달 */}
      <UserProfile 
        user={{
          name: '홍길동',
          age: 25,
          job: '개발자',
          email: 'hong@example.com'
        }}
      />
      
      {/* 방법 2: 변수 사용 (더 깔끔) */}
      <UserProfile user={userData} />
    </div>
  );
}

// 객체는 이중 중괄호 {{}} 필요
// 바깥 {} : JSX 표현식
// 안쪽 {} : 객체 리터럴`;

  // 예제 3
  const productData = {
    name: '무선 이어폰 프리미엄',
    price: 89000,
    description: '최고급 음질의 블루투스 이어폰',
    specs: ['블루투스 5.0', '노이즈 캔슬링', '20시간 재생'],
    tags: ['전자제품', '음향기기', '무선']
  };

  const resultContent3 = (
    <ProductCard product={productData} />
  );

  const codeString3 = `function ProductCard(props) {
  return (
    <div>
      <h3>{props.product.name}</h3>
      <p>{props.product.price.toLocaleString()}원</p>
      <p>{props.product.description}</p>
      
      <div>
        <strong>사양:</strong>
        <ul>
          {props.product.specs.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <strong>태그:</strong>
        {props.product.tags.map((tag, index) => (
          <span key={index}>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

function App() {
  const productData = {
    name: '무선 이어폰 프리미엄',
    price: 89000,
    description: '최고급 음질의 블루투스 이어폰',
    specs: ['블루투스 5.0', '노이즈 캔슬링', '20시간 재생'],
    tags: ['전자제품', '음향기기', '무선']
  };
  
  return <ProductCard product={productData} />;
}

// 복잡한 데이터는 객체로 묶어서 전달하면 편함`;

  return (
    <div>
      <h2>3-2-3. 배열/객체 Props 전달</h2>

      <TabViewer
        title="예제 1: 배열 Props 전달"
        description="배열은 중괄호로 감싸서 전달. map으로 렌더링"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 객체 Props 전달"
          description="객체는 이중 중괄호 필요. 변수 사용이 더 깔끔"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 복잡한 데이터 구조"
          description="객체 안에 배열, 배열 안에 객체 등 복잡한 구조도 전달 가능"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default ArrayObjectProps;