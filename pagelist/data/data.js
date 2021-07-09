const data = {}
data.example = {
  title: '예시',
  list: [
    {
      stateClass: 'waiting',
      url: 'test01',
      category: 'example',
      page: '페이지명'
    },
    {
      stateClass: 'working',
      url: 'test02',
      category: 'example',
      page: '페이지명'
    },
    {
      stateClass: 'complete',
      url: 'test03',
      category: 'example',
      page: '페이지명'
    }
  ]
}
data.guide = {
  title: '가이드',
  list: [
    {
      stateClass: 'complete',
      url:'GNB-search',
      category: 'guide',
      page: 'GNB - 최근검색어 없음'
    },
    {
      stateClass: 'complete',
      url: 'nodata',
      category: 'guide',
      page: '결과없음'
    },
    {
      stateClass: 'complete',
      url: 'button',
      category: 'guide',
      page: '버튼'
    },
    {
      stateClass: 'complete',
      url: 'accordion',
      category: 'guide',
      page: '아코디언'
    },
    {
      stateClass: 'complete',
      url: 'grid',
      category: 'guide',
      page: '그리드'
    },
    {
      stateClass: 'complete',
      url: 'form',
      category: 'guide',
      page: '폼'
    },
    {
      stateClass: 'complete',
      url: 'table',
      category: 'guide',
      page: '테이블'
    },
    {
      stateClass: 'complete',
      url: 'slide',
      category: 'guide',
      page: '슬라이드'
    },
    {
      stateClass: 'complete',
      url: 'tab',
      category: 'guide',
      page: '탭'
    },
    {
      stateClass: 'complete',
      url: 'popup',
      category: 'guide',
      page: '팝업'
    },
    {
      stateClass: 'complete',
      url: 'icon',
      category: 'guide',
      page: '아이콘'
    },
    {
      stateClass: 'complete',
      url: 'loading',
      category: 'guide',
      page: '로딩'
    },
    {
      stateClass: 'complete',
      url: 'badge',
      category: 'guide',
      page: '뱃지'
    },
    {
      stateClass: 'complete',
      url: 'video',
      category: 'guide',
      page: '비디오'
    }
  ]
}
data.guide_mobile = {
  title: '가이드(M)',
  list: [
    {
      stateClass: 'complete',
      url: 'layout',
      category: 'guide_mobile',
      page: '레이아웃'
    },
    {
      stateClass: 'complete',
      url: 'nodata',
      category: 'guide_mobile',
      page: '결과없음'
    },
    {
      stateClass: 'complete',
      url: 'button',
      category: 'guide_mobile',
      page: '버튼'
    },
    {
      stateClass: 'complete',
      url: 'accordion',
      category: 'guide_mobile',
      page: '아코디언'
    },
    {
      stateClass: 'complete',
      url: 'grid',
      category: 'guide_mobile',
      page: '그리드'
    },
    {
      stateClass: 'complete',
      url: 'form',
      category: 'guide_mobile',
      page: '폼'
    },
    {
      stateClass: 'complete',
      url: 'table',
      category: 'guide_mobile',
      page: '테이블'
    },
    {
      stateClass: 'complete',
      url: 'slide',
      category: 'guide_mobile',
      page: '슬라이드'
    },
    {
      stateClass: 'complete',
      url: 'tab',
      category: 'guide_mobile',
      page: '탭'
    },
    {
      stateClass: 'complete',
      url: 'popup',
      category: 'guide_mobile',
      page: '팝업'
    },
    {
      stateClass: 'complete',
      url: 'icon',
      category: 'guide_mobile',
      page: '아이콘'
    },
    {
      stateClass: 'complete',
      url: 'loading',
      category: 'guide_mobile',
      page: '로딩'
    },
    {
      stateClass: 'complete',
      url: 'badge',
      category: 'guide_mobile',
      page: '뱃지'
    },
  ]
}

/*
data.additional = {
  title: '교과 부가서비스',
  list: [
    {
      stateClass: 'complete',
      url: 'additional',
      category: 'additional',
      page: '교과 부가서비스'
    },
    {
      stateClass: 'complete',
      url: 'popup-koreanhistory',
      category: 'additional',
      page: '팝업 - 교과서 밖 한국사'
    },
    {
      stateClass: 'complete',
      url: 'popup-instrument',
      category: 'additional',
      page: '팝업 - 악기 해설 영상'
    },
    {
      stateClass: 'complete',
      url: 'popup-subjectmovie',
      category: 'additional',
      page: '팝업 - 교과서 동영상'
    },
    {
      stateClass: 'complete',
      url: 'popup-complete',
      category: 'additional',
      page: '팝업 - 티칭보드담기완료'
    },
   {
      stateClass: 'complete',
      url: 'popup-teachingdownload',
      category: 'additional',
      page: '팝업 - 교사용DVD다운로드'
    }
    // {
    //   stateClass: 'complete',
    //   url: 'popup-teachingdownload-data',
    //   category: 'additional',
    //   page: '팝업 - 교사용DVD다운로드-결과값있음'
    // },
    // {
    //   stateClass: 'complete',
    //   url: 'popup-teachingdownload-nodata',
    //   category: 'additional',
    //   page: '팝업 - 교사용DVD다운로드-결과값없음'
    // }
  ]
}
data.gatepage = {
  title: '게이트페이지',
  list: [
    {
      stateClass: 'complete',
      url: 'T-selpa-gate',
      category: 'gatepage',
      page: '게이트페이지'
    },
    {
      stateClass: 'complete',
      url: 'T-selpa-gate-mobile',
      category: 'gatepage',
      page: '게이트페이지(M)'
    }
  ]
}
data.membership = {
  title: '멤버쉽',
  list: [
    {
      stateClass: 'complete',
      url: 'E-mem-signup-grade01-mobile',
      category: 'membership',
      page: 'M 팝업 - 마케팅수신동의확인'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-signup-grade02-mobile',
      category: 'membership',
      page: 'M 팝업 - 통합회원변경/전환'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-service-deliverylist-mobile',
      category: 'membership',
      page: 'M 팝업 - 택배업체리스트'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-privacy-partnerslist-mobile',
      category: 'membership',
      page: 'M 팝업 - 협력사리스트'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-privacy-mobile',
      category: 'membership',
      page: 'M- 개인정보처리방침'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-service-mobile',
      category: 'membership',
      page: 'M- 이용약관'
    },

    {
      stateClass: 'complete',
      url: 'E-mem-service-deliverylist',
      category: 'membership',
      page: '팝업 - 택배업체리스트'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-privacy-partnerslist',
      category: 'membership',
      page: '팝업 - 협력사리스트'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-address',
      category: 'membership',
      page: '팝업 - 우편번호찾기'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-infantschool-find',
      category: 'membership',
      page: '팝업 -어린이집.유치원찾기'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-infantschool-find-nodata',
      category: 'membership',
      page: '팝업 -어린이집.유치원찾기(결과없음)'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-school-find',
      category: 'membership',
      page: '팝업 - 학교찾기(결과있음)'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-school-find-nodata',
      category: 'membership',
      page: '팝업 - 학교찾기(결과없음)'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-signup-grade01',
      category: 'membership',
      page: '팝업 - 마케팅수신동의확인'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-signup-grade02',
      category: 'membership',
      page: '팝업 - 통합회원변경/전환'
    },

    {
      stateClass: 'complete',
      url: 'E-mem-privacy',
      category: 'membership',
      page: '개인정보처리방침'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-service',
      category: 'membership',
      page: '이용약관'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-signup',
      category: 'membership',
      page: '회원가입'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step1-regular',
      category: 'membership',
      page: '약관동의-정회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step1-student',
      category: 'membership',
      page: '약관동의-교대생회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step2-regular',
      category: 'membership',
      page: '본인인증-정회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step2-student',
      category: 'membership',
      page: '본인인증-교대생회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step3-student-certificate',
      category: 'membership',
      page: '재직증명서인증-정회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step3-student-certificate-clear',
      category: 'membership',
      page: '재직증명서인증완료-정회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step3-regular',
      category: 'membership',
      page: '국가공인교사인증-정회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step3-clear',
      category: 'membership',
      page: '국가공인교사인증완료-정회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step3-clear-type2',
      category: 'membership',
      page: '국가공인교사인증완료-중고등'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step3-student',
      category: 'membership',
      page: '가입정보입력-교대생회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step4-associate',
      category: 'membership',
      page: '회원가입완료-준회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step4-regular',
      category: 'membership',
      page: '회원가입완료-정회원'
    },
    {
      stateClass: 'complete',
      url: 'E-mem-step4-student',
      category: 'membership',
      page: '회원가입완료-교대생회원'
    },
    {
      stateClass: 'complete',
      url: 'K-mem-step1-agreement',
      category: 'membership',
      page: '약관동의-유치회원'
    },
    {
      stateClass: 'complete',
      url: 'K-mem-step2',
      category: 'membership',
      page: '가입정보입력-유치회원'
    },
    {
      stateClass: 'complete',
      url: 'K-mem-step3-regular',
      category: 'membership',
      page: '회원가입완료-유치정회원'
    },
    {
      stateClass: 'complete',
      url: 'k-mem-step3-associate',
      category: 'membership',
      page: '회원가입완료-유치준회원'
    },



  ]
}
data.servicecenter = {
  title: '고객센터',
  list: [
    {
      stateClass: 'complete',
      url: 'E-notice',
      category: 'servicecenter',
      page: '공지사항-전체'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-result',
      category: 'servicecenter',
      page: '공지사항-검색시'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-noresult',
      category: 'servicecenter',
      page: '공지사항-검색없음'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-detail',
      category: 'servicecenter',
      page: '공지사항-클릭시'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_ongoing',
      category: 'servicecenter',
      page: '이벤트'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_ongoing_data',
      category: 'servicecenter',
      page: '이벤트-검색결과있음'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_ongoing_nodata',
      category: 'servicecenter',
      page: '이벤트-검색결과없음'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_ongoing-details',
      category: 'servicecenter',
      page: '이벤트 - 상세보기'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_end',
      category: 'servicecenter',
      page: '이벤트 - 지난이벤트'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_win',
      category: 'servicecenter',
      page: '이벤트 - 당첨자발표'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_win_nodata',
      category: 'servicecenter',
      page: '이벤트 - 당첨자 결과없음'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_win-details',
      category: 'servicecenter',
      page: '이벤트 - 당첨자발표 상세'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_review',
      category: 'servicecenter',
      page: '이벤트 - 이벤트후기'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_review-details',
      category: 'servicecenter',
      page: '이벤트 - 이벤트후기 상세'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-event_review-write',
      category: 'servicecenter',
      page: '이벤트 - 이벤트후기 등록'
    },
    {
      stateClass: 'complete',
      url: 'E-infoselfa',
      category: 'servicecenter',
      page: 'T셀파안내'
    },
    {
      stateClass: 'complete',
      url: 'E-mainservice-k',
      category: 'servicecenter',
      page: '주요서비스-유치'
    },
    {
      stateClass: 'complete',
      url: 'E-mainservice-e',
      category: 'servicecenter',
      page: '주요서비스-초등'
    },
    {
      stateClass: 'complete',
      url: 'E-mainservice-h',
      category: 'servicecenter',
      page: '주요서비스-중&고등'
    },
    {
      stateClass: 'complete',
      url: 'E-qna-list',
      category: 'servicecenter',
      page: '자주묻는질문'
    },
    {
      stateClass: 'complete',
      url: 'E-qna-list-result',
      category: 'servicecenter',
      page: '자주묻는질문-검색값있음'
    },
    {
      stateClass: 'complete',
      url: 'E-qna-list-noresult',
      category: 'servicecenter',
      page: '자주묻는질문-검색값없음'
    },
    {
      stateClass: 'complete',
      url: 'E-inquiry',
      category: 'servicecenter',
      page: '1:1문의'
    },
    {
      stateClass: 'complete',
      url: 'E-sitemap-k',
      category: 'servicecenter',
      page: '사이트맵-유치'
    },
    {
      stateClass: 'complete',
      url: 'E-sitemap-e',
      category: 'servicecenter',
      page: '사이트맵-초등'
    },
    {
      stateClass: 'complete',
      url: 'E-sitemap-m',
      category: 'servicecenter',
      page: '사이트맵-중학'
    },
    {
      stateClass: 'complete',
      url: 'E-sitemap-h',
      category: 'servicecenter',
      page: '사이트맵-고등'
    },
    {
      stateClass: 'complete',
      url: 'E-sitemap-myt',
      category: 'servicecenter',
      page: '사이트맵-MYT셀파'
    },
    {
      stateClass: 'complete',
      url: 'E-sitemap-s',
      category: 'servicecenter',
      page: '사이트맵-고객센터'
    },
    {
      stateClass: 'complete',
      url: 'E-sitemap-ex',
      category: 'servicecenter',
      page: '사이트맵-기타'
    },


  ]
}
data.servicecenter_mobile = {
  title: '고객센터(M)',
  list: [
    {
      stateClass: 'complete',
      url: 'E-infoselfa-mobile',
      category: 'servicecenter',
      page: '고객센터-t셀파안내'
    },
    {
      stateClass: 'complete',
      url: 'E-mainservice-k-mobile',
      category: 'servicecenter',
      page: '주요서비스-유치'
    },
    {
      stateClass: 'complete',
      url: 'E-mainservice-e-mobile',
      category: 'servicecenter',
      page: '주요서비스-초등'
    },
    {
      stateClass: 'complete',
      url: 'E-mainservice-h-mobile',
      category: 'servicecenter',
      page: '주요서비스-중/고등'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-list-mobile',
      category: 'servicecenter',
      page: '공지사항-list'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-list-search-mobile',
      category: 'servicecenter',
      page: '공지사항-list-결과값 있음'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-list-nosearch-mobile',
      category: 'servicecenter',
      page: '공지사항-list-결과값 없음'
    },
    {
      stateClass: 'complete',
      url: 'E-notice-detail-mobile',
      category: 'servicecenter',
      page: '공지사항-list-자세히보기'
    },
    {
      stateClass: 'complete',
      url: 'E-qna-list-mobile',
      category: 'servicecenter',
      page: '자주묻는질문-list'
    },
    {
      stateClass: 'complete',
      url: 'E-qna-list-result-mobile',
      category: 'servicecenter',
      page: '자주묻는질문-list-검색결과있음'
    },
    {
      stateClass: 'complete',
      url: 'E-qna-list-noresult-mobile',
      category: 'servicecenter',
      page: '자주묻는질문-list-검색결과없음'
    },
    {
      stateClass: 'complete',
      url: 'E-inquiry-mobile',
      category: 'servicecenter',
      page: '1:1문의-모바일'
    },

  ]
}
data.error = {
  title: '오류화면',
  list: [
    {
      stateClass: 'complete',
      url: 'error',
      category: 'error',
      page: '권한없는접근시'
    },
    {
      stateClass: 'complete',
      url: 'error_ready',
      category: 'error',
      page: '오픈준비중'
    }
  ]
}
data.mytsherpa = {
  title: 'MY T 셀파',
  list: [
    {
      stateClass: 'complete',
      url: 'MYT-set',
      category: 'mytsherpa',
      page: '01. 내 교과/평가 설정 - 초등'
    },
    {
      stateClass: 'complete',
      url: 'MYT-set-kid',
      category: 'mytsherpa',
      page: '01. 내 교재 설정 - 유치'
    },
    {
      stateClass: 'complete',
      url: 'MYT-set-middle_high',
      category: 'mytsherpa',
      page: '01. 내 교과 설정 - 중학,고등'
    },
    {
      stateClass: 'complete',
      url: 'MYT-Tpin',
      category: 'mytsherpa',
      page: '02. 내 핀 메뉴'
    },
    {
      stateClass: 'complete',
      url: 'MYT-Tpin-nodata',
      category: 'mytsherpa',
      page: '02. 내 핀 메뉴 - 설정안했을경우'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson-nodata',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 폴더없을때'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_2dep',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 2dep'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_2dep-search_result',
      category: 'mytsherpa',
      page: '03.내수업자료실 - 2dep-검색결과'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_2dep-search_result_empty',
      category: 'mytsherpa',
      page: '03.내수업자료실 - 2dep-결과없음'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_teaching',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 내 티칭보드'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_teaching-nodata',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 내 티칭보드 - 폴더없을때'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_teaching-search_result',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 내 티칭보드 - 검색결과'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_teaching-search_result_empty',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 내 티칭보드 - 결과없음'
    },
    {
      stateClass: 'complete',
      url: 'MYT-membership',
      category: 'mytsherpa',
      page: '04. 내 멤버쉽'
    },
    {
      stateClass: 'complete',
      url: 'MYT-membership-dashboard',
      category: 'mytsherpa',
      page: '04. 내 멤버쉽 - 내혜택현황'
    },
    {
      stateClass: 'complete',
      url: 'MYT-membership-popup01',
      category: 'mytsherpa',
      page: '04. 내 멤버쉽 - 포인트 전환 팝업'
    },
    {
      stateClass: 'complete',
      url: 'MYT-membership-notready01',
      category: 'mytsherpa',
      page: '04. 내 멤버쉽 - 준회원'
    },
    {
      stateClass: 'complete',
      url: 'MYT-membership-notready01_2',
      category: 'mytsherpa',
      page: '04. 내 멤버쉽 - (유치)준회원'
    },
    {
      stateClass: 'complete',
      url: 'MYT-membership-notready02',
      category: 'mytsherpa',
      page: '04. 내 멤버쉽 - 교대생회원'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-list',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 리스트'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-list-search_result',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 리스트 - 검색결과'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-list-search_result_empty',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 리스트 - 결과없음'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-view',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 보기'
    },
    {
      stateClass: 'complete',
      url: 'MYT-member-join',
      category: 'mytsherpa',
      page: '06. 회원정보수정 - 어린이집/유치원'
    },
    {
      stateClass: 'complete',
      url: 'MYT-member-join02',
      category: 'mytsherpa',
      page: '06. 회원정보수정 - 초/중/고(정회원)'
    },
    {
      stateClass: 'complete',
      url: 'MYT-member-join03',
      category: 'mytsherpa',
      page: '06. 회원정보수정 - 초/중/고(준회원:교대생)'
    },
    {
      stateClass: 'complete',
      url: 'MYT-member-del',
      category: 'mytsherpa',
      page: '07. 회원탈퇴'
    },
    {
      stateClass: 'complete',
      url: 'MYT-member-del-step02',
      category: 'mytsherpa',
      page: '07. 회원탈퇴 - step02'
    },
    {
      stateClass: 'complete',
      url: 'MYT-member-del-step03',
      category: 'mytsherpa',
      page: '07. 회원탈퇴 - step03'
    }

  ]
}
data.mytsherpa_mobile = {
  title: 'MY T 셀파(M)',
  list: [
    {
      stateClass: 'complete',
      url: 'MYT-Tpin-mobile',
      category: 'mytsherpa',
      page: '02. 내 핀 메뉴'
    },
    {
      stateClass: 'complete',
      url: 'MYT-Tpin-nodata-mobile',
      category: 'mytsherpa',
      page: '02. 내 핀 메뉴 - 설정안했을경우'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson-mobile',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_2dep-mobile',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 2dep'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_2dep-search_result-mobile',
      category: 'mytsherpa',
      page: '03.내수업자료실 - 2dep-검색결과'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_2dep-search_result_empty-mobile',
      category: 'mytsherpa',
      page: '03.내수업자료실 - 2dep-결과없음'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_teaching-mobile',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 내 티칭보드'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_teaching-search_result-mobile',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 내 티칭보드 - 검색결과'
    },
    {
      stateClass: 'complete',
      url: 'MYT-lesson_teaching-search_result_empty-mobile',
      category: 'mytsherpa',
      page: '03. 내 수업 자료실 - 내 티칭보드 - 결과없음'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-list-mobile',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 리스트'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-list-search_result-mobile',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 리스트 - 검색결과'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-list-search_result_empty-mobile',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 리스트 - 결과없음'
    },
    {
      stateClass: 'complete',
      url: 'MYT-QNA-view-mobile',
      category: 'mytsherpa',
      page: '05. 문의내역 및 답변 - 보기'
    },


  ]
}
data.email = {
  title: '이메일',
  list: [
    {
      stateClass: 'complete',
      url: 'E-email-carnation',
      category: 'automail',
      page: '카네이션 소멸 관련 공지'
    },
    {
      stateClass: 'complete',
      url: 'E-email-id',
      category: 'automail',
      page: '아이디 찾기'
    },
    {
      stateClass: 'complete',
      url: 'E-email-password',
      category: 'automail',
      page: '비밀번호찾기'
    },
    {
      stateClass: 'complete',
      url: 'E-email-signup',
      category: 'automail',
      page: '통합회원가입'
    },
    {
      stateClass: 'complete',
      url: 'E-email-delete',
      category: 'automail',
      page: '자동탈퇴예고'
    },
    {
      stateClass: 'complete',
      url: 'E-email-answer',
      category: 'automail',
      page: '문의내역답변확인'
    },
    {
      stateClass: 'complete',
      url: 'E-email-document',
      category: 'automail',
      page: '개인정보이용'
    },
    {
      stateClass: 'complete',
      url: 'E-email-tselpa',
      category: 'automail',
      page: '수신내역동의-myt셀파'
    },
    {
      stateClass: 'complete',
      url: 'E-email-tselpamall',
      category: 'automail',
      page: '수신내역동의-셀파몰'
    },
    {
      stateClass: 'complete',
      url: 'E-email-tselpatraining',
      category: 'automail',
      page: '수신내역동의-t셀파연수'
    },
  ]
}
data.login = {
  title: '로그인(M)',
  list: [
    {
      stateClass: 'complete',
      url: 'login',
      category: 'login',
      page: '로그인(M)'
    }
  ]
}
data.search = {
  title: '통합검색',
  list: [
    {
      stateClass: 'complete',
      url: 'E-com-Tpin',
      category: 'search',
      page: '팝업 - T핀'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-all',
      category: 'search',
      page: '통합검색-검색결과있음'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-nodata',
      category: 'search',
      page: '통합검색-검색결과없음'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-notice-nodata',
      category: 'search',
      page: '통합검색-게시판 결과없음'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-header-lately',
      category: 'search',
      page: '통합검색-최신검색어'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-header-puplar',
      category: 'search',
      page: '통합검색-인기검색어'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-header-nodata',
      category: 'search',
      page: '통합검색-최근검색어결과없음'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-subject',
      category: 'search',
      page: '검색-교과자료'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-video',
      category: 'search',
      page: '검색-동영상'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-img',
      category: 'search',
      page: '검색-이미지'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-music',
      category: 'search',
      page: '검색-음원'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-Ebook',
      category: 'search',
      page: '검색-Ebook'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-document',
      category: 'search',
      page: '검색-문서'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-notice',
      category: 'search',
      page: '검색-게시판-공지사항'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-event',
      category: 'search',
      page: '검색-게시판-이벤트'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-knowledge',
      category: 'search',
      page: '검색-게시판-지식캠퍼스'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-tip',
      category: 'search',
      page: '검색-게시판-학교운영tip'
    },
    {
      stateClass: 'complete',
      url: 'SC-search-ssam',
      category: 'search',
      page: '검색-게시판-쌤나눔자료'
    },
  ]
}
data.problembank = {
  title: '문제은행',
  list: [
    {
      stateClass: 'complete',
      url: 'E-problembank_list-data',
      category: 'problembank',
      page: '문제은행-검색결과있음'
    },
    {
      stateClass: 'complete',
      url: 'E-problembank_list-nodata',
      category: 'problembank',
      page: '문제은행-검색결과없음'
    },
    {
      stateClass: 'complete',
      url: 'E-problembank_step1',
      category: 'problembank',
      page: '문제은행-step1'
    },
    {
      stateClass: 'complete',
      url: 'E-problembank_step2',
      category: 'problembank',
      page: '문제은행-step2'
    },
    {
      stateClass: 'complete',
      url: 'E-problembank-step2-middle',
      category: 'problembank',
      page: '문제은행-중단원있을떄'
    },
    {
      stateClass: 'complete',
      url: 'E-problembank-commentary',
      category: 'problembank',
      page: '문제은행-문제지'
    },
    {
      stateClass: 'complete',
      url: 'E-problembank-preview',
      category: 'problembank',
      page: '문제은행-해설지'
    },

  ]
}
*/
