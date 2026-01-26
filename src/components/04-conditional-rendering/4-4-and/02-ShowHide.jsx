// src/components/04-conditional-rendering/4-4-and/02-ShowHide.jsx
import { useState } from "react";
import TabViewer from "../../common/TabViewer";

// 예제 1: 섹션 표시/숨김
function Example1() {
  const [user, setUser] = useState({
    hasOrders: true,
    hasWishlist: true,
    hasReviews: false,
    points: 1500,
  });

  return (
    <div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={user.hasOrders}
            onChange={(e) => setUser({ ...user, hasOrders: e.target.checked })}
          />
          주문 내역
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={user.hasWishlist}
            onChange={(e) =>
              setUser({ ...user, hasWishlist: e.target.checked })
            }
          />
          찜한 상품
        </label>
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={user.hasReviews}
            onChange={(e) => setUser({ ...user, hasReviews: e.target.checked })}
          />
          작성한 리뷰
        </label>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
        }}
      >
        <h1>마이페이지</h1>

        {/* 주문 내역 섹션 */}
        {user.hasOrders && (
          <section
            style={{
              padding: "15px",
              backgroundColor: "white",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #dee2e6",
            }}
          >
            <h2>최근 주문</h2>
            <p>5개의 주문 내역이 있습니다</p>
            <button style={{ padding: "8px 16px" }}>전체 보기</button>
          </section>
        )}

        {/* 찜한 상품 섹션 */}
        {user.hasWishlist && (
          <section
            style={{
              padding: "15px",
              backgroundColor: "white",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #dee2e6",
            }}
          >
            <h2>찜한 상품</h2>
            <p>❤️ 12개</p>
            <button style={{ padding: "8px 16px" }}>전체 보기</button>
          </section>
        )}

        {/* 작성한 리뷰 섹션 */}
        {user.hasReviews && (
          <section
            style={{
              padding: "15px",
              backgroundColor: "white",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #dee2e6",
            }}
          >
            <h2>내가 작성한 리뷰</h2>
            <p>⭐ 8개</p>
            <button style={{ padding: "8px 16px" }}>전체 보기</button>
          </section>
        )}

        {/* 포인트는 항상 표시 */}
        {user.points > 0 && (
          <section
            style={{
              padding: "15px",
              backgroundColor: "white",
              marginBottom: "15px",
              borderRadius: "8px",
              border: "1px solid #dee2e6",
            }}
          >
            <h2>포인트</h2>
            <p
              style={{ fontSize: "24px", fontWeight: "bold", color: "#007bff" }}
            >
              {user.points.toLocaleString()}P
            </p>
          </section>
        )}
      </div>
    </div>
  );
}

const example1Code = `function Dashboard({ user, stats }) {
  return (
    <div className="dashboard">
      <h1>마이페이지</h1>

      {/* 주문 내역이 있을 때만 섹션 표시 */}
      {stats.orders > 0 && (
        <section className="recent-orders">
          <h2>최근 주문</h2>
          <p>{stats.orders}개의 주문 내역</p>
        </section>
      )}

      {/* 찜한 상품이 있을 때만 */}
      {stats.wishlist > 0 && (
        <section className="wishlist">
          <h2>찜한 상품</h2>
          <p>❤️ {stats.wishlist}개</p>
        </section>
      )}

      {/* 리뷰가 있을 때만 */}
      {stats.reviews > 0 && (
        <section className="my-reviews">
          <h2>내가 작성한 리뷰</h2>
          <p>⭐ {stats.reviews}개</p>
        </section>
      )}

      {/* 포인트가 있을 때만 */}
      {user.points > 0 && (
        <section className="points">
          <h2>포인트</h2>
          <p>{user.points.toLocaleString()}P</p>
        </section>
      )}
    </div>
  );
}`;

// 예제 2: 버튼 표시/숨김
function Example2() {
  const [post] = useState({
    id: 1,
    title: "게시글 제목",
    content: "게시글 내용...",
    authorId: 1,
    isLiked: false,
    isBookmarked: true,
  });

  const [currentUser, setCurrentUser] = useState({
    id: 1,
    isAdmin: false,
  });

  const isAuthor = currentUser.id === post.authorId;
  const canEdit = isAuthor || currentUser.isAdmin;

  return (
    <div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <label style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <input
            type="checkbox"
            checked={currentUser.isAdmin}
            onChange={(e) =>
              setCurrentUser({ ...currentUser, isAdmin: e.target.checked })
            }
          />
          관리자 권한
        </label>
        <button
          onClick={() =>
            setCurrentUser({ ...currentUser, id: currentUser.id === 1 ? 2 : 1 })
          }
          style={{ padding: "6px 12px" }}
        >
          사용자 전환 (현재: User {currentUser.id})
        </button>
      </div>

      <div
        style={{
          padding: "20px",
          backgroundColor: "#f8f9fa",
          borderRadius: "8px",
          border: "1px solid #dee2e6",
        }}
      >
        <h2>{post.title}</h2>
        <p>{post.content}</p>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {/* 모든 사용자에게 표시 */}
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            공유하기
          </button>

          {/* 로그인한 사용자만 */}
          {currentUser && (
            <>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: post.isLiked ? "#dc3545" : "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                {post.isLiked ? "❤️ 좋아요 취소" : "🤍 좋아요"}
              </button>

              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: post.isBookmarked ? "#ffc107" : "#6c757d",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                {post.isBookmarked ? "⭐ 북마크됨" : "☆ 북마크"}
              </button>
            </>
          )}

          {/* 작성자나 관리자만 */}
          {canEdit && (
            <>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#28a745",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                수정
              </button>
              <button
                style={{
                  padding: "8px 16px",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                삭제
              </button>
            </>
          )}

          {/* 작성자가 아닌 로그인 사용자만 */}
          {currentUser && !isAuthor && (
            <button
              style={{
                padding: "8px 16px",
                backgroundColor: "#fd7e14",
                color: "white",
                border: "none",
                borderRadius: "4px",
              }}
            >
              신고하기
            </button>
          )}
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#e7f3ff",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          <p>
            작성자 ID: {post.authorId} / 현재 사용자 ID: {currentUser.id}
          </p>
          <p>
            작성자 여부: {isAuthor ? "O" : "X"} / 관리자 여부:{" "}
            {currentUser.isAdmin ? "O" : "X"}
          </p>
        </div>
      </div>
    </div>
  );
}

const example2Code = `function PostActions({ post, currentUser }) {
  const isAuthor = currentUser?.id === post.authorId;
  const canEdit = isAuthor || currentUser?.isAdmin;

  return (
    <div className="post-actions">
      {/* 모든 사용자 */}
      <button>공유하기</button>

      {/* 로그인한 사용자만 */}
      {currentUser && (
        <>
          <button>좋아요</button>
          <button>북마크</button>
        </>
      )}

      {/* 작성자나 관리자만 */}
      {canEdit && (
        <>
          <button>수정</button>
          <button>삭제</button>
        </>
      )}

      {/* 작성자가 아닌 로그인 사용자만 */}
      {currentUser && !isAuthor && (
        <button>신고하기</button>
      )}
    </div>
  );
}`;

// 예제 3: 알림 메시지
function Example3() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  return (
    <div>
      <div
        style={{
          marginBottom: "15px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => setShowSuccess(!showSuccess)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          성공 메시지 {showSuccess ? "숨기기" : "표시"}
        </button>
        <button
          onClick={() => setShowError(!showError)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          에러 메시지 {showError ? "숨기기" : "표시"}
        </button>
        <button
          onClick={() => setShowWarning(!showWarning)}
          style={{
            padding: "8px 16px",
            backgroundColor: "#ffc107",
            color: "#000",
            border: "none",
            borderRadius: "4px",
          }}
        >
          경고 메시지 {showWarning ? "숨기기" : "표시"}
        </button>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {showSuccess && (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#d4edda",
              borderRadius: "8px",
              border: "1px solid #c3e6cb",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>✅ 성공!</strong>
              <p style={{ margin: "5px 0 0 0" }}>
                작업이 성공적으로 완료되었습니다
              </p>
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                padding: "5px 10px",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✕
            </button>
          </div>
        )}

        {showError && (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#f8d7da",
              borderRadius: "8px",
              border: "1px solid #f5c6cb",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>❌ 오류!</strong>
              <p style={{ margin: "5px 0 0 0" }}>
                문제가 발생했습니다. 다시 시도해주세요
              </p>
            </div>
            <button
              onClick={() => setShowError(false)}
              style={{
                padding: "5px 10px",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✕
            </button>
          </div>
        )}

        {showWarning && (
          <div
            style={{
              padding: "15px",
              backgroundColor: "#fff3cd",
              borderRadius: "8px",
              border: "1px solid #ffeaa7",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <strong>⚠️ 경고!</strong>
              <p style={{ margin: "5px 0 0 0" }}>
                주의가 필요한 사항이 있습니다
              </p>
            </div>
            <button
              onClick={() => setShowWarning(false)}
              style={{
                padding: "5px 10px",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
                fontSize: "18px",
              }}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

const example3Code = `function Notifications({ showSuccess, showError, showWarning }) {
  return (
    <div className="notifications">
      {/* 성공 메시지 */}
      {showSuccess && (
        <div className="alert alert-success">
          <strong>✅ 성공!</strong>
          <p>작업이 성공적으로 완료되었습니다</p>
          <button>✕</button>
        </div>
      )}

      {/* 에러 메시지 */}
      {showError && (
        <div className="alert alert-error">
          <strong>❌ 오류!</strong>
          <p>문제가 발생했습니다</p>
          <button>✕</button>
        </div>
      )}

      {/* 경고 메시지 */}
      {showWarning && (
        <div className="alert alert-warning">
          <strong>⚠️ 경고!</strong>
          <p>주의가 필요합니다</p>
          <button>✕</button>
        </div>
      )}
    </div>
  );
}`;

function ShowHide() {
  return (
    <div className="conditional-rendering-examples">
      <h2>4-4-2. 요소 보여주기/숨기기</h2>

      <TabViewer
        title="예제 1: 섹션 표시/숨김"
        description="데이터 유무에 따라 섹션 표시"
        resultContent={<Example1 />}
        codeString={example1Code}
      />

      <TabViewer
        title="예제 2: 버튼 표시/숨김"
        description="권한에 따라 다른 버튼 표시"
        resultContent={<Example2 />}
        codeString={example2Code}
      />

      <TabViewer
        title="예제 3: 알림 메시지"
        description="상태에 따라 알림 메시지 표시/숨김"
        resultContent={<Example3 />}
        codeString={example3Code}
      />
    </div>
  );
}

export default ShowHide;
