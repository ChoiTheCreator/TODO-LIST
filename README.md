## **나만의 ToDoList 프로젝트**

**나만의 ToDoList**는 사용자가 로그인 후 자신만의 투두리스트를 관리할 수 있는 웹 애플리케이션입니다.

사용자는 이메일과 비밀번호를 입력하여 로그인하고, 자신만의 할 일을 추가하거나 삭제할 수 있습니다.

---

## **🌟 주요 기능**

1. **로그인 및 인증**
    - 이메일과 비밀번호를 입력하여 서버를 통해 인증.
    - JWT 토큰을 활용한 사용자 인증 관리.
2. **할 일 관리**
    - 새로운 투두리스트 항목 추가.
    - 기존 항목 삭제.
3. **사용자별 데이터 관리**
    - 로그인한 사용자만 자신의 데이터 접근 가능.

---

## **🛠️ 기술 스택**

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express
- **Database**: JSON 파일 (로컬 DB)
- **Authentication**: JWT (JSON Web Token)

---

## **📚 프로젝트 구조**

```
src/
├── api/                  # API 라우트 및 서버 관련 코드
│   ├── routes/           # 서버 라우트 정의
│   ├── controllers/      # 서버 로직
│   ├── middleware/       # 인증 및 기타 미들웨어
│   └── db/               # JSON 파일 데이터베이스
├── components/           # React 컴포넌트
├── pages/                # 주요 페이지 (로그인, 메인)
├── utils/                # 헬퍼 함수 및 유틸리티
└── App.jsx               # 메인 React 파일
```

---

## **🖼️ 스크린샷**

### 로그인화면

<img width="831" alt="스크린샷 2024-11-22 오후 6 45 59" src="https://github.com/user-attachments/assets/30f082f2-12fa-4018-bcc7-18b25f208141">

### 회원가입 모달

<img width="824" alt="스크린샷 2024-11-22 오후 6 46 05" src="https://github.com/user-attachments/assets/23fb4126-763c-47b6-a779-a84d13d516ff">

### TODO_List 화면 진입

<img width="799" alt="스크린샷 2024-11-22 오후 6 46 15" src="https://github.com/user-attachments/assets/bb4d1ea9-ad9e-43af-86de-fcb68fb8e667">
---

## **📜 라이선스**

이 프로젝트는 개인 프로젝트이며 공개적으로 사용 가능합니다.

---

이제 README 파일에서 **사진이 빠지는 문제를 해결**하였습니다!

📌 추가적으로 수정할 부분이 있다면 말씀해주세요 😊
