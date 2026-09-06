(function () {
  const INDEX = [
    // 세계관 개요 (index.html)
    { page: "세계관 개요", heading: "백야", text: "헬리오스 위성망이 폭주한 사건 당일은 백야(白夜)라고 불린다. 궤도의 반사 위성들이 태양광을 계속 반사하면서 하늘 전체가 새하얗게 타올랐고, 그날 밤은 오지 않았다.", url: "index.html" },
    { page: "세계관 개요", heading: "DROP", text: "1 DROP = 표준 음용수 100mL. 물을 담보로 발행되는 디지털 수권.", url: "index.html" },
    { page: "세계관 개요", heading: "七井 칠정", text: "블루넷을 공동 운영하는 일곱 초거대기업.", url: "index.html" },
    { page: "세계관 개요", heading: "HELIOS 헬리오스", text: "헬리오스 기후조정망. 붕괴했지만 일부 위성은 아직 궤도를 돈다.", url: "index.html" },

    // 배경 (world-background.html)
    { page: "배경", heading: "개요", text: "장르: 미래, 사이버펑크, 사막, 포스트 아포칼립스. 배경: 지구 — 과거 미국 영토. 백야 이후의 질서가 어떻게 만들어졌는지, 무엇이 세계를 고정했는지.", url: "pages/world-background.html" },
    { page: "배경", heading: "헬리오스 계획", text: "기후위기에 대한 인류의 마지막 대응. 궤도 반사위성망으로 태양광을 조절해 지구 기온을 낮추려는 국제 프로젝트. 초거대기업들이 주도. 중앙 관제시설에서 전체 위성망을 통제.", url: "pages/world-background.html" },
    { page: "배경", heading: "태양전쟁", text: "헬리오스 관제권을 둘러싸고 참여 기업·국가 간 벌어진 분쟁. 차광 위성을 무기화해 특정 지역에 태양열을 집중하거나 차단. 결국 중앙 관제시설이 파괴되며 위성망이 통제 불능에 빠짐.", url: "pages/world-background.html" },
    { page: "배경", heading: "백야 (白夜)", text: "관제시설 파괴 후 위성망 폭주. 반사 위성이 무작위로 태양광을 쏟아부으며 밤이 사라진 날. 극지방 붕괴, 해양 온도 폭등, 내륙 강우 소멸, 대륙 사막화. 국가 붕괴, 기업과 생존도시가 대체.", url: "pages/world-background.html" },
    { page: "배경", heading: "일소", text: "현재도 남아 있는 재앙. 망가진 반사 위성이 특정 지역에 태양열을 집중하는 현상. 간헐적으로 발생하며 지표면을 태운다.", url: "pages/world-background.html" },

    // 도시 & 자원 (world-structure.html)
    { page: "도시 & 자원", heading: "돔 시티 DOME", text: "완전 밀폐 돔 아래 인공 환경을 유지하는 최상위 도시. 기업이 건설·운영. 냉방, 정수, 수경재배, 블루넷 완비. 기업시민권 필요.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "장막도시 CANOPY", text: "차광막과 냉각탑으로 열을 줄이는 중간 규모 도시. 돔보다 열악하지만 황무지보다 안전. 조합·자유민 중심.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "지하도시 UNDER", text: "지하 공간을 개조한 도시. 열을 피할 수 있지만 환기·조명·위생 문제. 밀수·암시장 활발.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "황무지 WASTE", text: "도시 밖 사막화된 외부 세계. 카라반, 유목민, 갱단이 활동. 일소 위험 상존.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "DROP 드롭", text: "1 DROP = 표준 음용수 100mL. 물을 담보로 발행되는 디지털 수권. 블루넷으로 결제·이체. 칠정이 총발행량 관리.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "물의 등급", text: "공업수, 재생수, 표준수, 청정수, 심층수, 원수. 등급에 따라 가격과 용도가 다르다.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "BLUENET 블루넷", text: "드롭 결제·신원인증·통신을 통합하는 네트워크. 칠정이 공동 운영. 블루넷에서 삭제되면 사회적으로 존재하지 않게 된다.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "AMPUL 앰풀", text: "물을 밀봉한 실물 화폐. 블루넷 접속이 불가능한 황무지에서 사용.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "사회계층", text: "기업시민 CORP, 계약민 BIND, 등록 자유민 FREE, 조합민 UNION, 무등록자 더스트 DUST, 수맥주 AQUIFER.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "기업시민 CORP", text: "칠정 소속 정직원. 돔 시티 거주, 블루넷 풀 액세스, 라자루스 의료보험, 드롭 급여.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "더스트 DUST", text: "무등록자. 블루넷 미등록, 신분증 없음. 사회적으로 존재하지 않는 사람. 앰풀로만 거래.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "수맥주 AQUIFER", text: "지하수맥 소유권을 가진 개인이나 소규모 집단. 칠정에 종속되지 않는 독립 세력.", url: "pages/world-structure.html" },
    { page: "도시 & 자원", heading: "주요 직업군", text: "수맥탐사자, 우물기사, 정수시설 기술자, 카라반 상인, 루트러너, 면허 용병, 이클립스 대원, 패처, 리퍼닥, 넷러너, 기억편집자, 드림캐스터, 기상해설사, 딥 다이버.", url: "pages/world-structure.html" },

    // 권력과 조직 (world-power.html)
    { page: "권력과 조직", heading: "칠정 (七井) — 일곱 우물", text: "헬리오스 계획에 참여한 기업들의 후신이자 블루넷 공동 운영권을 가진 일곱 개의 메가코프. 블루 테이블에서 대표를 파견하는 수권관리이사회.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "네레이드 하이드로시스템즈 NEREID HYDROSYSTEMS", text: "NHS. 수자원 분야의 최강자. 수맥탐사, 지하수 채굴, 정수·저수, 수질 인증, 드롭 발행량 심사, 담수화 연구. 완성된 해수 담수화 기술을 숨기고 있다는 의혹.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "솔라리스 궤도산업 SOLARIS ORBITAL INDUSTRIES", text: "SOI. 헬리오스 계획의 직계 후신. 태양광 발전, 궤도시설, 위성통신, 일소 조기경보, 기후관측. 일소를 비정상적으로 정확하게 예측한다.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "아르카디아 해비타트 ARCADIA HABITAT", text: "AH. 돔과 도시생활을 판매하는 기업. 돔 건설, 인공대기·냉방, 수경재배, 주택·병원·학교, 기업시민권, 도시행정.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "모르포스 바이오다인 MORPHOS BIODYNE", text: "MB. 소수 정예와 인간 개조를 중시하는 군산복합체. 고급 사이버웨어, 생체조직형 의체, 스마트건, 단분자 도검, 유전자 강화. 정예 특수부대 메타모프.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "케르베로스 디펜스 그룹 CERBERUS DEFENSE GROUP", text: "CDG. 대량생산과 압도적 화력을 중시하는 군산복합체. 총기·중화기, 군용 사이버웨어, 장갑차, 전투드론, 포병체계. 기업군 핵심 전력 트라이던트.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "카론 인터콘티넨털 CHARON INTERCONTINENTAL", text: "CI. 도시와 대륙을 연결하는 물류기업. 장갑열차, 육상선·카라반, 수송로·중계기지, 차량 생산. 카론의 노선에서 제외된 도시는 서서히 쇠퇴한다.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "아르고스 시큐어 네트워크 ARGOS SECURE NETWORKS", text: "ASN. 블루넷과 데이터의 실질적 관리자. 금융결제, 신원인증, 통신, AI, 보안·감시, 언론·가상현실. 한 사람의 계좌·신분·시민권을 모두 삭제해 사회적으로 존재하지 않는 사람으로 만들 수 있다.", url: "pages/world-power.html#factions" },
    { page: "권력과 조직", heading: "이클립스 전술국 ECLIPSE TACTICAL BUREAU", text: "ETB. 블루 테이블 공동인가 초기업적 특수치안조직. 군용 사이버웨어 폭주자, 대형 전투드론, 블루넷·급수시설 테러, 전투 AI 등 도시 단위 피해를 일으킬 수 있는 위협에 대응.", url: "pages/world-power.html#orgs" },
    { page: "권력과 조직", heading: "라자루스 LAZARUS MEDICAL RESPONSE", text: "LMR. 회원제 응급의료·전투구조·의료보험 기업. 가입자 생체신호가 위험수준에 도달하면 무장 구조팀이 출동. 계약등급: 더스트 → 쉘터 → 오아시스 → 에덴.", url: "pages/world-power.html#orgs" },
    { page: "권력과 조직", heading: "열화증", text: "과도한 사이버웨어, 신경계 과부하, 전투 스트레스, 고온·탈수로 발생하는 신경붕괴 증상. 체온 상승·극심한 갈증, 감정·감각 지연, 사이버웨어 환상통, 위협 인식 장애.", url: "pages/world-power.html#orgs" },
    { page: "권력과 조직", heading: "로우라인 LOWLINE", text: "LOW. 돔 하층·지하 기반시설 장악. 밀입국, 비밀통로, 불법 전력·냉각망, 시설 침투, 밀수.", url: "pages/world-power.html#gangs" },
    { page: "권력과 조직", heading: "벨벳 스태틱 VELVET STATIC", text: "VS. 유흥·정보·기억·신분세탁. 감각기록, 불법 신경계 개조, 기업인 협박, 가짜 시민권, 기억조작.", url: "pages/world-power.html#gangs" },
    { page: "권력과 조직", heading: "선독스 SUNDOGS", text: "SUN. 황무지 차량 갱단 연합. 카라반 습격, 차량 탈취, 불법 경주, 황무지 통행료, 유료 호위.", url: "pages/world-power.html#gangs" },
    { page: "권력과 조직", heading: "세인트 제로 SAINT ZERO", text: "SZ. 불법 의료·사이버웨어 밀매. 불법 의체이식, 추적코드 제거, 열화증 억제제, 군용 사이버웨어.", url: "pages/world-power.html#gangs" },
    { page: "권력과 조직", heading: "데드 에어 DEAD AIR", text: "DA. 정체불명 넷러너 집단. 블루넷 공격, 신분 삭제·조작, 기업기밀 탈취, 전투드론 탈취, 가짜 재난경보.", url: "pages/world-power.html#gangs" },
    { page: "권력과 조직", heading: "블랙탑 유니언 BLACKTOP UNION", text: "BTU. 운전사·정비사 무장노조에서 성장한 도로조직. 독립 수송, 밀수, 충전소·도로 장악, 카론과 경쟁.", url: "pages/world-power.html#gangs" },
    { page: "권력과 조직", heading: "애시 크라운 ASH CROWN", text: "AC. 돔 외곽·장막도시 대형 스트리트 갱. 구역 관리, 무기·약물, 투기장, 기업물자 강탈, 시위·폭동.", url: "pages/world-power.html#gangs" },

    // 문화 & 갈등 (world-culture.html)
    { page: "문화 & 갈등", heading: "돔 시티 문화", text: "기업 중심 주간생활. VR·대형 엔터테인먼트, 광범위한 감시. 사이버웨어와 패션의 대중화.", url: "pages/world-culture.html" },
    { page: "문화 & 갈등", heading: "장막도시와 황무지 문화", text: "장막도시와 황무지의 거친 일상. 카라반 교역, 차광막 아래의 삶.", url: "pages/world-culture.html" },
    { page: "문화 & 갈등", heading: "사이버웨어 문화", text: "사이버웨어는 도구이자 패션이자 계급의 상징. 모르포스의 고급 의체와 케르베로스의 보급형 사이버웨어.", url: "pages/world-culture.html" },
    { page: "문화 & 갈등", heading: "핵심 갈등", text: "칠정 간 수자원 패권, 헬리오스 관제권, 담수화 기술 은폐, 더스트 인권, 열화증 확산, 독립 수맥주 vs 칠정.", url: "pages/world-culture.html" },

    // 클래스 (characters-classes.html)
    { page: "클래스", heading: "기업인 CORP", text: "권한·인맥·협상으로 살아가는 클래스. 기업 내부 정보, 로비, 계약 협상, 자원 조달.", url: "pages/characters-classes.html" },
    { page: "클래스", heading: "용병 MERC", text: "무력·호위·추적으로 살아가는 클래스. 전투, 경호, 현상금 사냥, 분쟁 개입.", url: "pages/characters-classes.html" },
    { page: "클래스", heading: "장사치 TRADE", text: "자본·교역·감정으로 살아가는 클래스. 카라반 운영, 암시장 거래, 물자 감정, 밀수.", url: "pages/characters-classes.html" },
    { page: "클래스", heading: "기술꾼 TECH", text: "기술·수리·개조로 살아가는 클래스. 사이버웨어 정비, 드론 해킹, 장비 개조, 넷러닝.", url: "pages/characters-classes.html" },

    // 규칙 — 핵심 (rules-core.html)
    { page: "코어 규칙", heading: "기본 시스템", text: "TRPG 시스템. 판정, 능력치, 스킬 체계.", url: "pages/rules-core.html" },
    { page: "코어 규칙", heading: "열화증", text: "사이버웨어·전투 스트레스·탈수로 인한 신경붕괴 증상. 세인트 제로의 열화증 억제제. 말기에는 전투 보조체계가 신체의 우선권을 차지한다.", url: "pages/rules-core.html" },
    { page: "코어 규칙", heading: "일소", text: "반사 위성의 태양열 집중 현상. 차광설비 없는 지역은 지표면이 타들어간다. 탈수와 장비 손상.", url: "pages/rules-core.html" },

    // 용어 사전 (rules-glossary.html)
    { page: "용어 사전", heading: "백야", text: "헬리오스 위성망 폭주로 밤이 사라진 대재앙.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "헬리오스", text: "기후조정 궤도 위성망. 붕괴 후 일부 위성이 폭주 중.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "일소", text: "반사 위성이 특정 지역에 태양열을 집중하는 재앙.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "DROP 드롭", text: "물 기반 디지털 수권. 1 DROP = 100mL 표준 음용수.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "BLUENET 블루넷", text: "드롭 결제·신원인증·통신 통합 네트워크.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "AMPUL 앰풀", text: "물을 밀봉한 실물 화폐. 황무지 거래용.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "칠정 七井", text: "블루넷을 공동 운영하는 일곱 초거대기업.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "블루 테이블", text: "칠정 대표가 모이는 수권관리이사회.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "더스트 DUST", text: "블루넷 미등록 무등록자. 사회적으로 존재하지 않는 사람.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "수맥주", text: "지하수맥 소유권을 가진 독립 세력.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "메타모프 METAMORPH", text: "모르포스 바이오다인의 정예 특수부대.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "트라이던트 TRIDENT", text: "케르베로스 디펜스 그룹의 기업군 핵심 전력.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "ETB 이클립스", text: "Eclipse Tactical Bureau. 블루 테이블 공동인가 특수치안조직.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "LMR 라자루스", text: "Lazarus Medical Response. 회원제 응급의료·전투구조 기업.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "열화증", text: "사이버웨어 과부하로 인한 신경붕괴 증상.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "패처 Patcher", text: "현장 응급수리·의료 기술자.", url: "pages/rules-glossary.html" },
    { page: "용어 사전", heading: "넷러너 Netrunner", text: "블루넷 해킹·침투 전문가.", url: "pages/rules-glossary.html" },
  ];

  function basePath() {
    const path = location.pathname;
    if (path.includes("/pages/")) return "../";
    return "";
  }

  function search(query) {
    const q = query.toLowerCase().trim();
    if (!q) return [];
    const terms = q.split(/\s+/);
    const base = basePath();
    const scored = [];

    for (const entry of INDEX) {
      const hay = (entry.heading + " " + entry.text + " " + entry.page).toLowerCase();
      let match = true;
      let score = 0;
      for (const t of terms) {
        if (!hay.includes(t)) { match = false; break; }
        if (entry.heading.toLowerCase().includes(t)) score += 10;
        else score += 1;
      }
      if (match) scored.push({ ...entry, score, resolvedUrl: base + entry.url });
    }

    scored.sort((a, b) => b.score - a.score);

    const seen = new Set();
    const deduped = [];
    for (const s of scored) {
      const key = s.url + "|" + s.heading;
      if (seen.has(key)) continue;
      seen.add(key);
      deduped.push(s);
      if (deduped.length >= 20) break;
    }
    return deduped;
  }

  function highlight(text, query) {
    const terms = query.toLowerCase().trim().split(/\s+/);
    let result = text;
    for (const t of terms) {
      const re = new RegExp("(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "gi");
      result = result.replace(re, "<mark>$1</mark>");
    }
    return result;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".search-input");
    if (!input) return;

    const wrap = input.closest(".search-wrap");
    const dropdown = document.createElement("div");
    dropdown.className = "search-dropdown";
    wrap.appendChild(dropdown);

    let debounce;
    input.addEventListener("input", () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        const q = input.value.trim();
        if (q.length < 2) { dropdown.innerHTML = ""; dropdown.classList.remove("active"); return; }
        showResults(q);
      }, 150);
    });

    function showResults(q) {
      const results = search(q);
      if (!results.length) {
        dropdown.innerHTML = '<div class="search-no-result">검색 결과 없음</div>';
        dropdown.classList.add("active");
        return;
      }
      dropdown.innerHTML = results
        .map((r) => {
          const snippet = r.text.length > 120 ? r.text.slice(0, 120) + "..." : r.text;
          return `<a class="search-result" href="${r.resolvedUrl}">
            <span class="search-result-page">${r.page}</span>
            <span class="search-result-title">${highlight(r.heading || snippet.slice(0, 40), q)}</span>
            <span class="search-result-snippet">${highlight(snippet, q)}</span>
          </a>`;
        })
        .join("");
      dropdown.classList.add("active");
    }

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) dropdown.classList.remove("active");
    });

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { dropdown.classList.remove("active"); input.blur(); }
    });
  });
})();
