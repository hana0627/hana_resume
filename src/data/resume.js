// =============================================================
// 이력서 데이터  (원본 resume-nextjs v2 구조와 동일한 형태)
// 이 파일만 수정하면 화면이 바뀝니다.
// 경력 날짜는 'YYYY-LL' (예: '2023-04') 형식 — 재직기간 자동 계산용
// =============================================================

export const profile = {
  // 프로필 사진: public 폴더에 이미지를 넣고 경로 지정. 예) '/profile.jpg'
  // 비워두면 사진 없이 렌더링됩니다.
  image: 'image/profile.jpg',
  name: { title: '박하나', small: '' },
  tagline: '레거시 환경의 한계를 직접 마주하며, 시스템 개선을 이끌어온 백엔드 개발자',
  contacts: [
    { icon: 'envelope', title: 'hanana9506@naver.com', link: 'mailto:hanana9506@naver.com' },
    { icon: 'phone', title: '010-3606-6270', link: 'tel:010-3606-6270' },
    { icon: 'pen', title: 'velog.io/@hana0627', link: 'https://velog.io/@hana0627' },
    { icon: 'github', title: '@hana0627', link: 'https://github.com/hana0627' },
  ],
  // 상단 알림 배너 (필요 없으면 notice: null)
    notice: {
        icon: 'bell',
        title: `프러덕트를 이해하고 비즈니스 문제를 해결하는 개발자를 지향합니다.
지속적인 학습을 실제 서비스 개선과 문제 해결의 결과로 증명하고자 합니다.
자세한 프로젝트 내용은 GitHub와 Velog에서 확인하실 수 있습니다.`,
    },
  // 통계 밴드 (값은 자유롭게 수정. 비우려면 headings: [])
  headings: [
    // { value: '2+', label: 'Years of experience' },
    // { value: '5', label: 'Projects' },
    // { value: '2', label: 'Certificates' },
  ],
}

export const introduce = {
  contents: [
    '새로운 문제에 도전하고, 더 나은 해결책을 만들어가는 과정에서 가장 큰 동기를 얻는 백엔드 개발자입니다.',
    '레거시 환경에서 개발을 시작하며 구조적 한계와 운영상의 문제를 경험했고, 이후 성능 개선, 장애 대응, 시스템 현대화 등 다양한 도전을 해결하며 성장해왔습니다. 최근에는 3억 건 규모의 특허 데이터 플랫폼을 운영하며 OOM 장애 해결, Kubernetes 환경 전환, 검색 성능 개선을 수행하고 있습니다.',
    '새로운 기술과 아키텍처를 꾸준히 학습하고 실제 서비스에 적용하며 검증하는 것을 중요하게 생각합니다. 앞으로도 기술 자체보다 해결해야 할 문제와 제품의 가치를 먼저 고민하며, 서비스의 안정성과 확장성을 높이는 프로덕트 엔지니어로 성장하고자 합니다.',
  ],
  latestUpdated: '2026-06-27',
  sign: 'Hana Park',
}

export const highlights = [
    {
        title: 'Large Scale Service',
        description: '3억 건 규모 특허 데이터 플랫폼 운영 및 장애 대응 경험',
        keywords: ['ElasticSearch', 'Cassandra', 'Troubleshooting'],
    },

    {
        title: 'System Modernization',
        description: '레거시 시스템 개선과 Kubernetes 기반 환경 전환 경험',
        keywords: ['Migration', 'Kubernetes', 'Refactoring'],
    },

    {
        title: 'Product Engineering',
        description: '제품과 비즈니스 맥락을 이해하고 사용자 가치로 이어지는 문제 해결',
        keywords: ['Product Thinking', 'Problem Solving', 'Domain Knowledge'],
    },
]


// EXPERIENCE — positions 의 startedAt/endedAt 으로 기간 자동 계산. endedAt 없으면 '재직 중'.
export const experience = {
  list: [
      {
          title: '워트인텔리전스',
          positions: [
              {
                  title: '프러덕트엔지니어링팀 | 백엔드개발자',
                  location: '서울시 강남구',
                  startedAt: '2025-11',
                  //endedAt: '현재',
                  descriptions: [
                      { content: '3억건 규모 특허데이터 서빙 플랫폼 백엔드' },
                      { content: '키워트프로·키워트인사이트 서비스 백엔드 API 개발 및 운영' },
                      { content: '안정성·성능 중심의 서비스 개선과 레거시 시스템 현대화' },
                      { content: '운영 데이터 관리 효율화를 위한 어드민 기능 개발 및 개선' },
                  ],
              },
          ],
      },
    {
      title: '(주)비큐러스정보기술',
      positions: [
        {
          title: '솔루션사업부 | 선임',
          location: '서울시 중구',
          startedAt: '2023-04',
          endedAt: '2025-03',
          descriptions: [
              { content: '솔루션사업부 백엔드 개발' },
              { content: '자사 솔루션 및 대기업 SI 프로젝트 진행' },
          ],
        },
      ],
    },
    {
      title: '주식회사 엠아이에스에이',
      positions: [
        {
          title: '개발실 | 사원',
          location: '서울시 강서구',
          startedAt: '2022-11',
          endedAt: '2023-03',
          descriptions: [
              { content: '인사관리 모듈 개발' },
              { content: '회사의 경영악화로 인한 폐업' },
          ],
        },
      ],
    },
  ],
}

// PROJECT (실무 프로젝트)
export const project = {
  list: [
    {
      startedAt: '2025-11',
      title: '키워트 — 3억건 특허데이터 서빙 플랫폼',
      where: '워트인텔리전스 · Spring Boot, Kotlin, Java, ElasticSearch, Cassandra, redis, AWS(EKS/ECR), ArgoCD, AmazonMQ',
      descriptions: [
        {
          content: '운영 환경 OOM 장애 원인 분석 및 해결 (서비스 다운 → 재발 방지)',
          weight: 'MEDIUM',
          descriptions: [
            { content: '약 900만 건 검색결과를 메모리에 무한 누적하던 중복제거 요청이 힙을 소진, Pod 전체 다운' },
            { content : '900만건 검색 결과가 JVM을 죽인 이유 : ' ,postHref: 'https://buly.kr/1GLrc3N' }
          ],
        },
        {
          content: '키워트프로 통합 번호검색 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'ElasticSearchQuery 쿼리의 최적화로 멀티인덱스 쿼리 구현'},
            { content: '구현방식 변경에 따른 부하테스트 설계 및 진행 (with Loucst)'},
            { content: 'TPS/RPS 측정방식 대신 index수 * documents 수 산정'},
          ],
        },
        { content: '키워트프로·키워트인사이트 통합회원 시스템 개발',
            weight: 'MEDIUM',
            descriptions: [
                { content: '2026-06 현재 진행 중' },
            ],},
      ],
    },
    {
      startedAt: '2025-11',
      title: '키워트 어드민 — 레거시 시스템 현대화',
      where: '워트인텔리전스 · Kotlin, Spring Boot, jOOQ, Thymeleaf, AWS(EKS/ECR), ArgoCD',
      descriptions: [
        {
          content: '레거시 기술 스택 현대화',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Java → Kotlin' },
            { content: 'Spring Boot 2 → 4' },
            { content: 'MyBatis → jOOQ' },
            { content: 'JSP → Thymeleaf' },
          ],
        },
        {
          content: 'IDC → EKS 마이그레이션',
          weight: 'MEDIUM',
          descriptions: [
            { content: '우당탕탕 EKS 이관기 : ', postHref: 'https://buly.kr/BTRqxiH' },
          ],
        },
        {
          content: '어드민 서비스 유지보수',
          weight: 'MEDIUM',
          descriptions: [
            { content: '운영환경에 1.4만개의 고객문의를 넣어버리다', postHref: 'https://buly.kr/ET0lmqW' },
          ],
        },
      ],
    },
    {
      startedAt: '2023-10',
      endedAt: '2025-02',
      title: '아워케어 — 건강검진 예약/관리 플랫폼',
      where: '(주)비큐러스정보기술 · Spring Boot 2.7, Spring Security, JPA, QueryDSL, PostgreSQL, Jenkins, React',
      descriptions: [
        {
          content: '리팩토링을 통한 API 응답속도 개선 (1.5s → 0.1s)',
          weight: 'MEDIUM',
          descriptions: [
            { content: '문제: 검진날짜 선택 시 해당 월 전체 예약가능 여부 조회. 이중 for-loop + 내부 findById로 총 105개 쿼리 실행, 응답 1.5s' },
            { content: '해결: for-loop 내 findById → QueryDSL + IN절 일괄 조회, 이중 for-loop → 독립된 2개 for-loop로 분리' },
            { content: '결과: 105개 쿼리 → 4개로 감소, 응답속도 1.5s → 0.1s 개선', postHref: 'https://bit.ly/hana_refactoring' },
          ],
        },
        { content: '검진 항목별 TO 조회 및 검진 예약 API 구현' },
        { content: '모바일 본인인증을 위한 화면 및 API 개발' },
        { content: 'Jenkins 기반 CI/CD 파이프라인 구축' },
      ],
    },
    {
      startedAt: '2023-06',
      endedAt: '2024-10',
      title: '준법감시 내부통제 솔루션',
      where: '(주)비큐러스정보기술 · Spring Framework 4, Spring Security, JSP, Mybatis, SQLServer',
      descriptions: [
        { content: '사용자의 모든 행동 로깅을 위한 AOP 기능 설계 및 구현', weight: 'MEDIUM' },
        {
          content: '부서별 내부통제 진행상태를 한번에 조회하기 위한 통계 쿼리 작성',
          descriptions: [
            { content: '문제: 복잡한 통계 쿼리(서브쿼리 다수)로 SSR 렌더링 지연, 사용자 체감 랜딩 시간 과다' },
            { content: '해결: SPA 방식 착안 — 빈 프레임 먼저 렌더링 후 탭별 AJAX 비동기 호출로 순차 로드' },
            { content: '결과: 사용자 체감 랜딩 시간 대폭 감소, JSP 환경에서 현대적 UX 패턴 구현' },
          ],
        },
        { content: '초기 데이터 구축을 위한 Apache POI 연동 excel 업로드 구현' },
        { content: '전체 사용자 조회 API 응답속도 개선을 위한 DB Index 적용 (9.6s → 0.9s)', weight: 'MEDIUM' },
      ],
    },
    {
      startedAt: '2023-05',
      endedAt: '2023-06',
      title: '내부회계시스템 연결 솔루션',
      where: '(주)비큐러스정보기술 · Spring Framework 4, JSP, Mybatis, PostgreSQL',
      descriptions: [
        {
          content: '수정이 필요한 쿼리 실행 로그만 자동 추출하는 작업을 자동화하여 휴먼 에러 최소화',
          weight: 'MEDIUM',
          descriptions: [
            { content: '문제: 1000줄 이상의 로그에서 수정 대상 SQL 수동 필터링 — 단순 반복 + 휴먼 에러 위험' },
            { content: '해결: 쿼리 패턴 분석 기반 자동 필터링 웹 툴 제작. 전체 로그 붙여넣기 시 수정 대상만 자동 필터링' },
            { content: '결과: 팀원 업무 피로도 감소, 휴먼 에러 최소화' },
          ],
        },
      ],
    },
  ],
}

// SIDE PROJECT (개인 프로젝트)
export const sideProject = {
  list: [
    {
      startedAt: '2025-07',
      endedAt: '2025-10',
      title: 'I Love Pet — Kafka 기반 펫샵 전자상거래 플랫폼',
      where: '개인 프로젝트 · Spring Boot 3.5, Spring Cloud, Kotlin, JPA, QueryDSL, Kafka, Redis, Docker, React, TossPayments SDK',
      descriptions: [
        { content: '4개 MicroService 간 통신을 Kafka 비동기 메시징으로 구현한 펫샵 전자상거래 플랫폼' },
        { content: 'Event-Driven Architecture — 서비스 간 통신을 전부 Kafka 기반 비동기 메시징으로 구현' },
        { content: 'MSA 인프라 — Spring Cloud Gateway 단일 진입점(라우팅·로드밸런싱) 및 Eureka 기반 Service Discovery 구현' },
        {
          content: 'SAGA 패턴 & 보상 트랜잭션으로 분산 트랜잭션 정합성 보장',
          weight: 'MEDIUM',
          descriptions: [
            { content: '문제: Kafka 전환 후 각 서비스가 독립 커밋 → 재고 차감 후 결제 실패 시 재고 불일치' },
            { content: '해결: SAGA 보상 트랜잭션 설계, 결제 실패 시 payment.confirmed.fail 이벤트로 재고 자동 롤백' },
            { content: '결과: 분산 환경에서 재고 정합성 보장, 장애 시나리오 테스트 검증 완료' },
          ],
        },
        {
          content: 'Redis 기반 멱등성 보장으로 중복 처리 방지(재고 차감/복구)',
          weight: 'MEDIUM',
          descriptions: [
            { content: '문제: Kafka at-least-once 특성으로 동일 메시지 중복 수신 시 재고 2배 차감 위험' },
            { content: '해결: 주문번호를 Key로 작업 플래그 관리, 완료 후 삭제하는 중복처리 방지 메커니즘 구현' },
            { content: '결과: 중복 이벤트 완전 차단, 재고 정합성 유지 (결제는 PG사 레벨에서 중복 방지)' },
          ],
        },
        { content: 'Correlation Id 기반 분산 트랜잭션 로그 추적 — 동일 논리 트랜잭션 로그를 하나의 ID로 연결' },
        { content: 'React 프론트엔드 직접 구현 및 TossPayments SDK 연동, 결제 승인까지 End-to-End 검증' },
        { content: 'Mockito 단위테스트 및 EmbeddedKafka 통합테스트 작성' },
        { content: 'Phase1(WebClient 동기 MVP) → Phase2(Kafka 이벤트 전환) → Phase3(API Gateway·Service Discovery 고도화)' },
        { content: 'Github', postHref: 'https://github.com/hana0627/i-love-pet' },
        { content: '데모영상', postHref: 'https://youtu.be/N6IL4091ePg' },
      ],
    },
    {
      startedAt: '2025-05',
      endedAt: '2025-07',
      title: 'Cheers_up_v2 — 주변 술집찾기 서비스',
      where: '개인 프로젝트 · Spring Boot 3.5, JPA, React, Android, Oauth2, Kakao Open API',
      descriptions: [
        { content: '카카오 길찾기를 이용한 주변 술집찾기 서비스 (2023년 진행 프로젝트 리팩토링 및 재구성)' },
        { content: '카카오 주소검색을 연동한 검색 화면 및 API 구현' },
        { content: '라인/분기 테스트 커버리지 100% 달성', weight: 'MEDIUM' },
        { content: 'Github', postHref: 'https://github.com/hana0627/cheers_up_v2' },
        { content: '시연영상', postHref: 'https://youtube.com/shorts/uEWaBm6-Rsw' },
      ],
    },
    {
      startedAt: '2024-04',
      endedAt: '2024-05',
      title: '인증 모듈 개발',
      where: '개인 프로젝트 · Spring Boot 3.2, Spring Security, JPA, QueryDSL, Redis, JUnit5, Mockito, RestDocs, React',
      descriptions: [
        { content: 'Redis 기반 사용자 인증 로직 설계 및 구현' },
        {
          content: 'SpringBootTest 어노테이션 제거 및 리팩토링을 통한 테스트 속도 5배 향상 (6.3s → 0.7s)',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Mockito 기반 Mocking으로 실제 애플리케이션 실행 없이 테스트 수행 가능하게 변경', postHref: 'https://bit.ly/springtomockito' },
          ],
        },
        { content: '로그인 페이지 개발 및 소셜 로그인 기능 구현 (구글, 네이버, 카카오)' },
        { content: 'Github', postHref: 'https://github.com/hana0627/login' },
      ],
    },
  ],
}

// SKILL
export const skill = {
    skills: [
        {
            category: 'Backend',
            items: [
                { title: 'Java' },
                { title: 'Kotlin' },
                { title: 'Spring Boot' },
                { title: 'JPA' },
                { title: 'QueryDSL' },
                { title: 'Mybatis' },
            ],
        },

    {
      category: 'Database',
      items: [
        { title: 'MySQL' },
        { title: 'PostgreSQL' },
        { title: 'Redis' },
        { title: 'ElasticSearch' },
        { title: 'Cassandra' },
      ],
    },

{
  category: 'Infrastructure & Tools',
  items: [
    { title: 'Kafka' },
    { title: 'Docker' },
    { title: 'Kubernetes' },
    { title: 'AWS EKS' },
    { title: 'Jenkins' },
    { title: 'ArgoCD' },
  ],
},

    ],
}


// EDUCATION (교육 + 학력)
export const education = {
  list: [
    {
      // left: '2025. 03 ~ 2025. 04',
      left: '2025. 04',
      title: '실무에 바로 쓰는 쿠버네티스 클라우드',
      subTitle: 'Kubernetes 기초부터 장애대응까지 학습하여 실무에 적용 가능',
      descriptions: [{ content: '참고', postHref: 'https://hanghae99.spartacodingclub.kr/kdc/k8s' }],
    },
    {
      // left: '2022. 02 ~ 2022. 08',
      left: '2022. 08',
      title: '크로스플랫폼 융합 응용 SW 개발자 양성 과정',
      subTitle: 'JAVA, DB, HTML, CSS, JavaScript, JSP, Spring 과정',
    },
    {
      // left: '2022. 03 ~ 2025. 02',
      left: '2025. 02',
      title: '학점은행제',
      subTitle: '대학교(학사) | 컴퓨터공학과',
    },
    {
      // left: '2014. 03 ~ 2021. 02',
      left: '2021. 02',
      title: '삼육대학교',
      subTitle: '대학교(학사) | 식품영양학과',
    },
  ],
}

// CERTIFICATE (자격증)
export const certificate = {
  list: [
    { left: '2024. 12', title: '정보처리기사', subTitle: '기사' },
    { left: '2018. 08', title: 'JLPT', subTitle: 'N2' },
  ],
}
