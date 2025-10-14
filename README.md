# 💌 



## 프로젝트 설치 및 실행 방법

1. 저장소를 클론합니다.
```
git clone https://github.com/your-username/mobile-wedding-invitation.git
```
2. 프로젝트 폴더로 이동합니다.
```
cd mobile-wedding-invitation
```
3. 필요한 의존성을 설치합니다.
```
npm install
```
4. (필수) `.env.sample` 파일의 이름을 `.env`으로 바꾸고, VITE_APP_KAKAOMAP_JAVASCRIPT_KEY에 Kakao Developers에서 발급 받은 `JavaScript 키`로 채웁니다. `client_id`는 [kakao developers](https://developers.kakao.com/console/app) 에서 어플리케이션 등록 후 발급받을 수 있습니다. 어플리케이션 등록 후 메뉴에서 제품설정 > 카카오맵을 클릭 후 사용설정 토글을 on합니다.
5. (선택) likes와 방명록 기능 사용을 원한다면 Firebase 설정이 필요합니다. src/firebase.ts 파일에 Firebase SDK를 설정합니다. [Firebase](https://firebase.google.com/docs/web/setup?hl=ko) 문서를 참고하여 SDK를 설정할 수 있습니다.
6. 사용자 정의가 필요한 파일들을 수정합니다. (아래의 체크리스트 참고)
7. 애플리케이션을 실행합니다.
```
npm run dev
```



## 커스텀 체크리스트

- [ ] `src/data.json` 청첩장에 들어갈 정보를 수정합니다.
- [ ] `index.html` 파비콘, title, og tag에 쓰일 meta tag 등을 수정합니다.
- [ ] `public/thumbnail.jpg` 썸네일 사진을 수정합니다.
- [ ] `assets/images`에 갤러리에 들어갈 사진을 넣고, `src/layout/Gallery/Images.ts` 에서 import합니다. 이곳에서 사진에 맞게 사이즈를 수정합니다.
- [ ] `.env` VITE_APP_KAKAOMAP_JAVASCRIPT_KEY=javascript_key 입력이 필요합니다.
- [ ] (선택) `src/firebase.ts` likes, 방명록을 사용한다면 firebase sdk 설정이 필요합니다.
- [ ] (선택) `src/data.json` 혼주 계좌번호 작성시 `kakaopayAccount`, `tossAccount` 항목을 이용해 카카오페이나 토스 링크를 추가할 수 있습니다.


## 참고 자료

- 개발자: [heejin-hwang](https://github.com/heejin-hwang)
- react-photoswipe-gallery 라이브러리: [react-photoswipe-gallery](https://www.npmjs.com/package/react-photoswipe-gallery)
- react-kakao-maps-sdk 공식문서: [react-kakao-maps-sdk](https://react-kakao-maps-sdk.jaeseokim.dev/)
- 카카오 디벨로퍼스: https://developers.kakao.com/
- 토스 아이디 만들기: https://toss.me/


이 프로젝트는 MIT 라이센스에 따라 배포됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.
