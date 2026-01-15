// src/components/03-props/3-2-passing/04-FunctionProps.jsx
import TabViewer from "../../common/TabViewer";
import { useState } from "react";

// 예제용 컴포넌트
function SimpleButton(props) {
  return (
    <button 
      onClick={props.onClick}
      style={{ 
        padding: '10px 20px',
        margin: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {props.text}
    </button>
  );
}

function Input(props) {
  return (
    <div style={{ margin: '10px 0' }}>
      <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
        {props.label}
      </label>
      <input 
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        style={{ 
          padding: '8px',
          width: '200px',
          border: '1px solid #ddd',
          borderRadius: '4px'
        }}
      />
    </div>
  );
}

function DeleteButton(props) {
  return (
    <button 
      onClick={() => props.onDelete(props.id)}
      style={{ 
        padding: '5px 10px',
        margin: '0 5px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '12px'
      }}
    >
      삭제
    </button>
  );
}

function FunctionProps() {
  // 예제 1 상태
  const [message, setMessage] = useState('');

  // 예제 2 상태
  const [name, setName] = useState('');

  // 예제 3 상태
  const [items, setItems] = useState([
    { id: 1, text: '항목 1' },
    { id: 2, text: '항목 2' },
    { id: 3, text: '항목 3' }
  ]);

  // 예제 1
  const handleClick = () => {
    setMessage('버튼이 클릭되었습니다!');
  };

  const resultContent1 = (
    <div>
      <SimpleButton text="클릭하세요" onClick={handleClick} />
      <SimpleButton text="알림" onClick={() => setMessage('알림 버튼 클릭!')} />
      {message && (
        <p style={{ 
          marginTop: '10px', 
          padding: '10px', 
          backgroundColor: '#d4edda',
          borderRadius: '4px'
        }}>
          {message}
        </p>
      )}
    </div>
  );

  const codeString1 = `function Button(props) {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  );
}

function App() {
  const handleClick = () => {
    console.log('버튼 클릭됨!');
  };
  
  return (
    <div>
      {/* 방법 1: 변수 전달 */}
      <Button text="클릭하세요" onClick={handleClick} />
      
      {/* 방법 2: 화살표 함수 직접 전달 */}
      <Button 
        text="알림" 
        onClick={() => console.log('알림!')} 
      />
    </div>
  );
}

// 함수도 Props로 전달 가능
// 이벤트 핸들러에 자주 사용`;

  // 예제 2
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const resultContent2 = (
    <div>
      <Input 
        label="이름"
        value={name}
        onChange={handleNameChange}
        placeholder="이름을 입력하세요"
      />
      <p style={{ marginTop: '10px', color: '#666' }}>
        입력한 이름: <strong>{name}</strong>
      </p>
    </div>
  );

  const codeString2 = `function Input(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input 
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
}

function App() {
  const [name, setName] = useState('');
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  
  return (
    <Input 
      label="이름"
      value={name}
      onChange={handleNameChange}
      placeholder="이름을 입력하세요"
    />
  );
}

// onChange 이벤트 핸들러를 Props로 전달`;

  // 예제 3
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
    setMessage(`항목 ${id}이(가) 삭제되었습니다`);
  };

  const resultContent3 = (
    <div>
      <h4>항목 목록:</h4>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map(item => (
          <li 
            key={item.id}
            style={{
              padding: '10px',
              margin: '5px 0',
              backgroundColor: '#f8f9fa',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{item.text}</span>
            <DeleteButton id={item.id} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );

  const codeString3 = `function DeleteButton(props) {
  return (
    <button onClick={() => props.onDelete(props.id)}>
      삭제
    </button>
  );
}

function App() {
  const [items, setItems] = useState([
    { id: 1, text: '항목 1' },
    { id: 2, text: '항목 2' },
    { id: 3, text: '항목 3' }
  ]);
  
  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.text}
          <DeleteButton 
            id={item.id} 
            onDelete={handleDelete} 
          />
        </li>
      ))}
    </ul>
  );
}

// 인자가 필요한 함수는 화살표 함수로 감싸서 전달
// onClick={() => props.onDelete(props.id)}`;

  return (
    <div>
      <h2>3-2-4. 함수 Props 전달</h2>

      <TabViewer
        title="예제 1: 기본 함수 Props"
        description="함수를 Props로 전달해서 이벤트 핸들러로 사용"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: onChange 이벤트 전달"
          description="Input 컴포넌트에 onChange 핸들러를 Props로 전달"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 인자가 있는 함수 전달"
          description="삭제 기능처럼 인자가 필요한 함수는 화살표 함수로 감싸서 전달"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>
    </div>
  );
}

export default FunctionProps;