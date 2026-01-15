// src/components/03-props/3-4-children/03-ChildrenPatterns.jsx
import TabViewer from "../../common/TabViewer";
import { useState } from "react";

// 예제 1: 조건부 children
function Collapsible({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', margin: '10px 0' }}>
      <div 
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          padding: '15px',
          backgroundColor: '#f8f9fa',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 'bold'
        }}
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div style={{ padding: '15px' }}>
          {children}
        </div>
      )}
    </div>
  );
}

// 예제 2: children이 없을 때
function EmptyState({ children }) {
  return (
    <div style={{ 
      padding: '40px',
      textAlign: 'center',
      color: '#666',
      border: '2px dashed #ddd',
      borderRadius: '8px',
      margin: '10px 0'
    }}>
      {children ? (
        children
      ) : (
        <>
          <p style={{ fontSize: '48px', margin: '0 0 10px 0' }}>📭</p>
          <p>표시할 내용이 없습니다</p>
        </>
      )}
    </div>
  );
}

// 예제 3: 여러 children 영역
function Layout({ header, sidebar, children, footer }) {
  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: '200px 1fr',
      gridTemplateRows: 'auto 1fr auto',
      gap: '10px',
      minHeight: '400px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <div style={{ 
        gridColumn: '1 / -1',
        padding: '15px',
        backgroundColor: '#007bff',
        color: 'white'
      }}>
        {header}
      </div>
      
      <div style={{ 
        padding: '15px',
        backgroundColor: '#f8f9fa'
      }}>
        {sidebar}
      </div>
      
      <div style={{ 
        padding: '15px'
      }}>
        {children}
      </div>
      
      <div style={{ 
        gridColumn: '1 / -1',
        padding: '15px',
        backgroundColor: '#6c757d',
        color: 'white',
        textAlign: 'center'
      }}>
        {footer}
      </div>
    </div>
  );
}

// 예제 4: children 조작
function List({ children, separator = false }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <div>
      {childrenArray.map((child, index) => (
        <div key={index}>
          {child}
          {separator && index < childrenArray.length - 1 && (
            <hr style={{ margin: '10px 0', border: 'none', borderTop: '1px solid #ddd' }} />
          )}
        </div>
      ))}
    </div>
  );
}

function ListItem({ children }) {
  return (
    <div style={{ 
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderRadius: '4px'
    }}>
      {children}
    </div>
  );
}

function ChildrenPatterns() {
  // 예제 1
  const resultContent1 = (
    <div>
      <Collapsible title="공지사항" defaultOpen={true}>
        <p>시스템 점검이 예정되어 있습니다.</p>
        <p>일시: 2024.12.27 02:00 ~ 04:00</p>
      </Collapsible>
      
      <Collapsible title="자주 묻는 질문">
        <h4>Q. 비밀번호를 잊어버렸어요</h4>
        <p>A. 로그인 페이지에서 '비밀번호 찾기'를 클릭하세요.</p>
      </Collapsible>
      
      <Collapsible title="이용약관">
        <p>제1조 (목적)</p>
        <p>이 약관은...</p>
      </Collapsible>
    </div>
  );

  const codeString1 = `function Collapsible({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="collapsible">
      <div 
        className="header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>
      
      {/* 조건부로 children 렌더링 */}
      {isOpen && (
        <div className="content">
          {children}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      <Collapsible title="공지사항" defaultOpen={true}>
        <p>시스템 점검이 예정되어 있습니다.</p>
      </Collapsible>
      
      <Collapsible title="FAQ">
        <p>자주 묻는 질문...</p>
      </Collapsible>
    </div>
  );
}

// isOpen 상태에 따라 children을 조건부로 표시`;

  // 예제 2
  const resultContent2 = (
    <div>
      <EmptyState>
        <h3>검색 결과</h3>
        <p>10개의 결과를 찾았습니다</p>
      </EmptyState>
      
      <EmptyState />
    </div>
  );

  const codeString2 = `function EmptyState({ children }) {
  return (
    <div className="empty-state">
      {children ? (
        // children이 있으면 표시
        children
      ) : (
        // children이 없으면 기본 메시지
        <>
          <p>📭</p>
          <p>표시할 내용이 없습니다</p>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <div>
      {/* children 있음 */}
      <EmptyState>
        <h3>검색 결과</h3>
        <p>10개의 결과를 찾았습니다</p>
      </EmptyState>
      
      {/* children 없음 - 기본 메시지 표시 */}
      <EmptyState />
    </div>
  );
}

// children 유무에 따라 다른 내용 표시`;

  // 예제 3
  const resultContent3 = (
    <Layout
      header={<h1 style={{ margin: 0 }}>내 웹사이트</h1>}
      sidebar={
        <nav>
          <div style={{ marginBottom: '10px' }}>메뉴 1</div>
          <div style={{ marginBottom: '10px' }}>메뉴 2</div>
          <div style={{ marginBottom: '10px' }}>메뉴 3</div>
        </nav>
      }
      footer={<p style={{ margin: 0 }}>© 2024 My Website</p>}
    >
      <h2>메인 콘텐츠</h2>
      <p>이곳에 주요 내용이 표시됩니다.</p>
      <p>여러 섹션을 포함할 수 있습니다.</p>
    </Layout>
  );

  const codeString3 = `function Layout({ header, sidebar, children, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      
      <div className="layout-body">
        <aside>{sidebar}</aside>
        <main>{children}</main>
      </div>
      
      <footer>{footer}</footer>
    </div>
  );
}

function App() {
  return (
    <Layout
      header={<h1>내 웹사이트</h1>}
      sidebar={
        <nav>
          <div>메뉴 1</div>
          <div>메뉴 2</div>
        </nav>
      }
      footer={<p>© 2024</p>}
    >
      <h2>메인 콘텐츠</h2>
      <p>이곳에 주요 내용이 표시됩니다.</p>
    </Layout>
  );
}

// header, sidebar, footer는 일반 props
// children은 메인 콘텐츠
// 각 영역을 명확하게 분리`;

  // 예제 4
  const resultContent4 = (
    <div>
      <h4>구분선 없음:</h4>
      <List>
        <ListItem>항목 1</ListItem>
        <ListItem>항목 2</ListItem>
        <ListItem>항목 3</ListItem>
      </List>
      
      <h4 style={{ marginTop: '20px' }}>구분선 있음:</h4>
      <List separator={true}>
        <ListItem>항목 1</ListItem>
        <ListItem>항목 2</ListItem>
        <ListItem>항목 3</ListItem>
      </List>
    </div>
  );

  const codeString4 = `function List({ children, separator = false }) {
  const childrenArray = Array.isArray(children) ? children : [children];
  
  return (
    <div>
      {childrenArray.map((child, index) => (
        <div key={index}>
          {child}
          {/* separator가 true이고 마지막이 아니면 구분선 */}
          {separator && index < childrenArray.length - 1 && (
            <hr />
          )}
        </div>
      ))}
    </div>
  );
}

function ListItem({ children }) {
  return <div className="list-item">{children}</div>;
}

function App() {
  return (
    <div>
      <List separator={true}>
        <ListItem>항목 1</ListItem>
        <ListItem>항목 2</ListItem>
        <ListItem>항목 3</ListItem>
      </List>
    </div>
  );
}

// children을 순회하면서 사이에 구분선 추가`;

  return (
    <div>
      <h2>3-4-3. children 패턴</h2>

      <TabViewer
        title="예제 1: 조건부 children"
        description="상태에 따라 children을 조건부로 렌더링. 접기/펼치기 기능"
        resultContent={resultContent1}
        codeString={codeString1}
      />

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 2: children이 없을 때 기본값"
          description="children이 없으면 기본 메시지 표시. Empty State 패턴"
          resultContent={resultContent2}
          codeString={codeString2}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 3: 여러 children 영역"
          description="header, sidebar, footer는 props, 메인 콘텐츠는 children"
          resultContent={resultContent3}
          codeString={codeString3}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <TabViewer
          title="예제 4: children 조작"
          description="children 사이에 구분선 추가. React.Children API 활용"
          resultContent={resultContent4}
          codeString={codeString4}
        />
      </div>
    </div>
  );
}

export default ChildrenPatterns;
