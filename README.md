# Task-Demo

<img src="https://img.shields.io/badge/Next.js-061629?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/Typescript-127EFA?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwindcss-38bdf8?style=flat-square&logo=Tailwindcss&logoColor=white"/>

## 시작하기

`pnpm i && pnpm dev`

## 기술 스택

- Frontend
  - Next.js
  - Typescript
  - Forms
    - react-hook-form
  - UI / 스타일링
    - tailwindcss
    - @radix-ui
    - @tanstack/react-table"
  - 상태관리
    - zustand

## 테스트 케이스

1. eobrien@example.org (Admin)

```
  - 모든 사용자 리스트 노출
  - Invite User 버튼 활성화
  - 모든 Task 리스트가 노출
  - Create Task버튼 활성화
  - Task 생성 : 모든 사용자(본인포함)에게 Task 할당가능
```

2. emma78@example.net (PrimeUser)

```
  - 모든 사용자 리스트가 노출
  - Invite User 버튼 비 활성화
  - 모든 Task 리스트가 노출
  - Create Task버튼 활성화
  - Task 생성 : PrimeUser 이하의 사용자에게 Task 할당 가능
```

2. morrislucas@example.org (RegularUser)

```
  - 본인에 대한 정보만 볼 수 있음
  - 본인이 생성한 Task 리스트 노출
  - Create Task버튼 활성화
  - Task 생성 : 본인에게만 Task 할당 가능
```

3. nlynch@example.org (Viewer)

```
  - 메뉴 접근 금지 (좌측의 메뉴 자체가 비활성화 되어, 리스트에 대한 접근이 불가함)
  - 본인한테 할당된 Task 만 노출
  - Create Task버튼 비활성화
```
