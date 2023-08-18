## 💡 프로젝트 제목
### 💳 페이히어 : 커피 히어 - 사용자 맞춤형 커피 포스 서비스

![Logo](https://github.com/hissue/CoffeeHere/assets/68486112/e0355be9-09d5-4ecf-b9b8-4a64bd7a04e1)

- **CoffeeHere**는 어디서든 간단한 단말기를 포스기를 관리할 수 있는 서비스입니다.  
- 멀리 있는 가게와도 OK! 주문, 결제, 영수증까지 포스 화면에서 통합 관리하세요.

## 📋 프로젝트 배포 주소
![mainMenu](https://github.com/po-do/Poki/assets/126448936/a2f3bbf7-9497-4db0-b44f-51c9f4cc400e)

<h3> 배포 주소 : <a href="http://3.37.130.11:8000">http://3.37.130.11:8000</a></h3>

## 🧐 How to use
<P> 1. 배포된 주소에 접근 후 고객은 포스기를 통해 메뉴를 확인합니다. </P>
<P> 2. 카테고리에 따라 원하는 메뉴를 나누어 확인할 수 있습니다. </P>
<P> 3. 상품에 대한 옵션 및 수량을 선택 후 장바구니에 담습니다. </P>
<P> 4. 장바구니에서는 선택한 메뉴를 확인하거나 수정 및 삭제가 가능합니다. </P>
<P> 5. 메뉴 결정이 완료되었으면 버튼을 통해 결제할 수 있습니다.  </P>
<P> 6. 결제 시 할인 여부 및 수단을 선택하여 최종 금액을 결정합니다. </P>
<P> 7. 결제 버튼을 통해 영수증을 발급받게 됩니다. </P>

## 👀 전체 기능
![Full](https://github.com/po-do/Poki/assets/126448936/cff9e7f3-5d40-4690-9cb3-75656f09aa0e)

## 🧾 주요 기능
<h3> ⭐ (중점 요소) : 반응형 화면 및 다양한 사용자 단말기를 고려한 UI/UX 구현 </h3>

<br>

### ✏ 카테고리별 메뉴 확인
카테고리별 메뉴를 확인해 보세요.

![Category](https://github.com/po-do/Poki/assets/126448936/e08455e4-2999-48e2-a9f2-f01382ad6097)

### ✏ 상품 옵션 및 수량 선택
상품을 선택하여 옵션 및 수량을 선택해 보세요.

![ProductOption](https://github.com/po-do/Poki/assets/126448936/c5b29ef0-3cc7-4acc-9105-07279000629c)

### ✏ 장바구니 수정 및 삭제
장바구니 내 상품을 수정하거나 수량을 삭제해 보세요.

![Cart](https://github.com/po-do/Poki/assets/126448936/3164ee5f-64bc-4f7a-830c-5518a9abb86e)

### ✏ 결제 및 할인수단 선택 ⭐ 
할인 수단을 선택하여 총 결제 금액을 확인해 보세요.

![PayDiscount](https://github.com/po-do/Poki/assets/126448936/0a55d317-f0ee-4e2b-9a49-67950d189038)

### ✏ 영수증 확인 ⭐
구매한 상품, 옵션, 총 결제 금액을 확인해 보세요.

![Receipt](https://github.com/po-do/Poki/assets/126448936/e8089abc-83e7-4745-9e0e-ffe644a3f606)

### ✏ 홈으로 이동
메뉴를 처음부터 다시 선택하고 싶다면 홈으로 이동해 보세요.

![Home](https://github.com/po-do/Poki/assets/126448936/b741851c-b055-4d65-b1c1-8272df7e3c28)


## ✍ 구현 가이드
  
### ✅ 요구 사항
✔ #1 화면 상단 - 카테고리 정보
- 카테고리 섹션 내 카테고리 목록 출력

✔ #2 카테고리 내 제품 정보
- 선택된 카테고리 내 해당 제품 목록 출력

✔ #3 할인
- 결제 시 금액 할인 / 비율 할인에 따른 할인 수단 적용

✔ #4 선택한 제품 주문수 추가/삭제
- 카트 내 아이템 수량 수정 / 삭제 기능 

✔ #5 결제할 제품 목록
- 카트 내 추가된 제품 목록 확인
  
✔ #6 총 결제
- 할인을 적용한 제품의 총 금액 합 출력
- 결제 내역 영수증 확인

➕ 공통 요소
- 금액 표시는 `00,000원` 형태
- 금액이 없는 데이터 기본값 0원
- 할인 적용 시, 모든 값은 올림 처리

| 분류                      | 상세 설명                      | 구현 여부                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------- | ------------------------- | ------------------------- |
| #1                      | 화면 상단 - 카테고리 정보    |⭕        |                                                                        
| #2                      | 카테고리 내 제품 정보        | ⭕         |
| #3                      | 할인                        | ⭕         |
| #4                      | 선택한 제품 주문수 추가/삭제  | ⭕         |
| #5                      | 결제할 제품 목록             | ⭕         |
| #6                      | 총 결제                     | ⭕         |

*⭕: 구현됨*


### 📢 설치 및 실행
1. node 설치
<a href="https://nodejs.org/en">https://nodejs.org/en</a>

2. node 설치 확인
```
node -v
npx
```

3. 파일 다운로드
```
git clone https://github.com/swssue/paySystem.git
```

4. 의존성 설치
```
cd paySystem
# npx create-react-app paySystem --template typescript 
npm install
```

5. 실행
```
npm run start
```

### 📂 파일 구조도
```
📦src
 ┣ 📂assets //정적 파일
 ┃ ┗ 📂image
 ┃ ┃ ┣ 📜coffee.jpg
 ┃ ┃ ┗ 📜Logo.png
 ┣ 📂components // 재사용 혹은 분할 된 컴포넌트
 ┃ ┣ 📜CartHistory.tsx
 ┃ ┣ 📜ProductCard.tsx
 ┃ ┣ 📜QuantityButton.tsx
 ┃ ┗ 📜Recipt.tsx
 ┣ 📂mock // REST API
 ┃ ┣ 📂rest 
 ┃ ┃ ┣ 📂data
 ┃ ┃ ┃ ┣ 📜categories.ts
 ┃ ┃ ┃ ┣ 📜coupons.ts
 ┃ ┃ ┃ ┗ 📜products.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜responses.ts
 ┃ ┣ 📜common.ts
 ┃ ┗ 📜index.ts
 ┣ 📂Page // 페이지
 ┣ 📂recoil // 전역 상태 관리
 ┃ ┗ 📜atom.ts
 ┣ 📜App.tsx
 ┣ 📜commonTypes.ts // 통합 타입 관리
 ┣ 📜custom.d.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜MockSamples.tsx
```

### 📚 기술스택

| 분류                      | 기술                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Frontend**              | <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/TailwindCss-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"> <img src="https://img.shields.io/badge/CSS-5A0FC8?style=for-the-badge&logo=pwa&logoColor=write"> <img src="https://img.shields.io/badge/recoil-362d59?style=for-the-badge&logo=recoil&logoColor=white">    |                                                                                  
| **Infrastructure/DevOps** |  <img src="https://img.shields.io/badge/AWS_EC2-F1680D?style=for-the-badge&logo=amazonaws&logoColor=white">|

<br />

### 🧩 서비스 구조도
<img src="https://github.com/po-do/Poki/assets/126448936/ab6472df-b2d4-4e80-8ea4-6dafe258ce1c" width="60%" alt="Service Structure">


## 🩹 스스로 개선할 점
- 반응형 UI에 대한 추가 학습
- 전역 상태 관리 시 recoil 외 redux 등 다양한 상태 관리 방법 효율성 비교해 보기
- 추상화를 위한 코드 최적화로 코드의 재사용성 및 가독성 향상 필요 (사용된 라이브러리 정확한 용도 이해 필요)


## 👨‍👨‍👦‍👦 팀원 소개
<table>
  <tbody>
    <tr>
      <td align="center"><img src="https://github.com/po-do/Poki/assets/59272854/e2671a23-7c87-44d9-9088-19fcd8e4f29b" width="150px;" alt=""/><br /><sub><b>지수현<br /><a href="https://github.com/swssue">https://github.com/swssue</a></b></sub><br /></td>
    </tr>
  </tbody>
</table>
