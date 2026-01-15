// src/components/03-props/3-2-passing/02-NumberBooleanProps.jsx
import TabViewer from "../../common/TabViewer";

// 예제용 컴포넌트
function Age(props) {
  return (
    <p
      style={{
        padding: "10px",
        backgroundColor: "#e3f2fd",
        borderRadius: "4px",
        margin: "5px 0",
      }}
    >
      나이: {props.value}세 (타입: {typeof props.value})
    </p>
  );
}

function Product(props) {
  return (
    <div
      style={{
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h3>{props.name}</h3>
      <p style={{ color: "#007bff", fontSize: "20px", fontWeight: "bold" }}>
        {props.price.toLocaleString()}원
      </p>
      <p>재고: {props.inStock ? "✅ 있음" : "❌ 없음"}</p>
    </div>
  );
}

function Button(props) {
  return (
    <button
      disabled={props.disabled}
      style={{
        padding: "10px 20px",
        margin: "5px",
        backgroundColor: props.disabled ? "#ccc" : "#007bff",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: props.disabled ? "not-allowed" : "pointer",
      }}
    >
      {props.text}
    </button>
  );
}

function NumberBooleanProps() {
  // 예제 1
  const userAge = 30;

  const resultContent1 = (
    <div>
      <Age value="25" />
      <Age value={25} />
      <Age value={userAge} />
      <Age value={20 + 5} />
    </div>
  );

  const codeString1 = `function Age(props) {
  return (
    <p>
      나이: {props.value}세 (타입: {typeof props.value})
    </p>
  );
}

function App() {
  const userAge = 30;
  
  return (
    <div>
      {/* ❌ 잘못됨 - 문자열 "25"가 전달됨 */}
      <Age value="25" />
      
      {/* ✅ 올바름 - 숫자 25가 전달됨 */}
      <Age value={25} />
      
      {/* ✅ 변수 사용 */}
      <Age value={userAge} />
      
      {/* ✅ 계산식 사용 */}
      <Age value={20 + 5} />
    </div>
  );
}

// 숫자는 반드시 중괄호 사용!`;

  // 예제 2
  const resultContent2 = (
    <div>
      <Product name="무선 이어폰" price={89000} inStock={true} />
      <Product name="기계식 키보드" price={150000} inStock={false} />
    </div>
  );

  const codeString2 = `function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.price.toLocaleString()}원</p>
      <p>재고: {props.inStock ? '있음' : '없음'}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Product 
        name="무선 이어폰"
        price={89000}        // 숫자
        inStock={true}       // 불린
      />
      
      <Product 
        name="기계식 키보드"
        price={150000}       // 숫자
        inStock={false}      // 불린
      />
    </div>
  );
}

// 숫자와 불린은 모두 중괄호 필요`;

  // 예제 3
  const isLoading = false;

  const resultContent3 = (
    <div>
      <Button text="버튼1" disabled={true} />
      <Button text="버튼2" disabled />
      <Button text="버튼3" disabled={false} />
      <Button text="버튼4" disabled={isLoading} />
    </div>
  );

  const codeString3 = `function Button(props) {
  return (
    <button disabled={props.disabled}>
      {props.text}
    </button>
  );
}

function App() {
  const isLoading = false;
  
  return (
    <div>
      {/* 방법 1: 명시적으로 true */}
      <Button text="버튼1" disabled={true} />
      
      {/* 방법 2: true 생략 (같은 의미) */}
      <Button text="버튼2" disabled />
      
      {/* 방법 3: false (생략 불가) */}
      <Button text="버튼3" disabled={false} />
      
      {/* 방법 4: 변수 사용 */}
      <Button text="버튼4" disabled={isLoading} />
    </div>
  );
}

// 불린 Props 특징:
// disabled={true} = disabled (생략 가능)
// disabled={false} (생략 불가)`;

  return (
    <div>
      <h2>3-2-2. 숫자/불린 Props 전달</h2>

      <TabViewer
        title="예제 1: 숫자 Props 전달"
        description="숫자는 반드시 중괄호 사용. 따옴표 사용하면 문자열이 됨"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: 숫자 + 불린 Props"
          description="숫자와 불린을 함께 전달. 모두 중괄호 필요"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 불린 Props 특징"
          description="true는 생략 가능하지만 false는 생략 불가"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default NumberBooleanProps;
