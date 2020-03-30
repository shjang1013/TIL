(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{280:function(a,t,e){"use strict";e.r(t);var r=e(19),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"완전-검색"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#완전-검색"}},[a._v("#")]),a._v(" 완전 검색")]),a._v(" "),e("p",[e("em",[a._v("written by sohyeon")]),a._v("🍀")]),a._v(" "),e("br"),a._v(" "),e("h2",{attrs:{id:"_1-완전-검색-기법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-완전-검색-기법"}},[a._v("#")]),a._v(" 1. 완전 검색 기법")]),a._v(" "),e("h3",{attrs:{id:"베이비진-baby-gin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#베이비진-baby-gin"}},[a._v("#")]),a._v(" 베이비진(Baby-Gin)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. 0~9 사이의 숫자 카드에서 `임의의 카드 6장 뽑음`\n1-1. 3장의 카드가 연속적인 번호를 갖는 경우 런(Run)\n1-2. 3장의 카드가 동일한 번호를 갖는 경우 트리플릿(Triplete)\n2. 6장의 카드가 Run과 Triplet로만 구성된 경우를 Baby-Gin으로 부름\n")])])]),e("h3",{attrs:{id:"완전-검색-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#완전-검색-2"}},[a._v("#")]),a._v(" 완전 검색")]),a._v(" "),e("ul",[e("li",[a._v("문제의 해를 얻기 위해 "),e("code",[a._v("가능한 모든 경우들을 나열해 보고 확인")]),a._v("하는 기법\n"),e("ul",[e("li",[a._v("고지식한 방법(Brute-force), 생성 및 테스트(Generate and test)")]),a._v(" "),e("li",[a._v("Brute-force의 force의 의미는 사람보다는 컴퓨터의 힘을 의미")])])]),a._v(" "),e("li",[a._v("문제를 해결하기 위한 간단하고 쉬운 접근법\n"),e("ul",[e("li",[a._v("상대적으로 빠른 시간에 문제 해결(알고리즘 설계) 가능")])])]),a._v(" "),e("li",[a._v("대부분의 문제에 적용 가능")]),a._v(" "),e("li",[a._v("문제에 포함된 자료(요소, 인스턴스)의 크기가 작을 경우 유용")])]),a._v(" "),e("h3",{attrs:{id:"고지식한-검색-순차-검색-sequential-search"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#고지식한-검색-순차-검색-sequential-search"}},[a._v("#")]),a._v(" 고지식한 검색 (순차 검색, Sequential Search)")]),a._v(" "),e("p",[a._v("자료들의 리스트에서 키 값을 찾기 위해 첫 번째 자료부터 비교하면서 진행")]),a._v(" "),e("h4",{attrs:{id:"정렬되지-않는-자료의-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#정렬되지-않는-자료의-예제"}},[a._v("#")]),a._v(" 정렬되지 않는 자료의 예제")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("def sequentialSearch(a,n,key):\n    i = 0\n    while i < n and a[i] != key:\n        i = i + 1\n\n    if i < n: \n        return i # 성공하면 키 값의 인덱스 값 반환\n    else: \n        return -1 # 실패하면 -1 반환\n")])])]),e("ul",[e("li",[a._v("순차 검색에서 "),e("code",[a._v("리스트에 키 값이 존재하지 않는다는 것")]),a._v("을 확신하기 위해서는 "),e("code",[a._v("모든 자료들에 대해 키 값과 비교 작업 수행")])])]),a._v(" "),e("h3",{attrs:{id:"완전-검색으로-시작하기"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#완전-검색으로-시작하기"}},[a._v("#")]),a._v(" 완전 검색으로 시작하기")]),a._v(" "),e("ul",[e("li",[a._v("문제 해결을 위한 가장 단순한 방법이기 때문에 "),e("code",[a._v("문제의 크기가 커지면 시간 복잡도가 매우 크게 증가")])]),a._v(" "),e("li",[a._v("모든 경우의 수를 생성하고 테스트하기 때문에 수행 속도는 느리지만, 해답을 찾아내지 못할 확률이 적음\n"),e("ul",[e("li",[a._v("완전 검색을 통해 "),e("code",[a._v("입력의 크기를 작게 해서 빠르게 답을 구하는 알고리즘 설계")])])])]),a._v(" "),e("li",[a._v("그리디 기법이나 동적 계획법을 이용해서 효율적인 알고리즘을 찾음")]),a._v(" "),e("li",[a._v("주어진 문제를 해결하는 방법\n"),e("ul",[e("li",[a._v("완전 검색으로 접근하여 해답 도출")]),a._v(" "),e("li",[a._v("성능 개설을 위해 다른 알고리즘 사용")]),a._v(" "),e("li",[a._v("해답 확인")])])])]),a._v(" "),e("h4",{attrs:{id:"ex-완전-검색을-통한-baby-gin-접근"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ex-완전-검색을-통한-baby-gin-접근"}},[a._v("#")]),a._v(" ex) 완전 검색을 통한 Baby-gin 접근")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. 고려할 수 있는 모든 경우의 수 생성하기\n    > 6개의 숫자로 만들 수 있는 모든 숫자 나열(중복 포함)\n2. 해답 테스트하기\n    > 앞의 3자리와 뒤의 3자리를 잘라, run와 triplete 여부를 테스트하고 최종적으로 Baby-gin을 판단함\n    > 단순히 순열 생성 시 중복된 작업 수행\n    > 중복을 제거할 수 있다면 계산 시간 단축 가능\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"_2-조합적-문제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-조합적-문제"}},[a._v("#")]),a._v(" 2. 조합적 문제")]),a._v(" "),e("h3",{attrs:{id:"완전-검색-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#완전-검색-3"}},[a._v("#")]),a._v(" 완전 검색")]),a._v(" "),e("ul",[e("li",[a._v("많은 종류의 문제들이 특정 조건을 만족하는 경우나 요소를 찾는 검색")]),a._v(" "),e("li",[a._v("순열(Permutation), 조합(Combination), 부분집합(Subset)과 같은 조합적 문제(Combinatorial Problems)와 관련")]),a._v(" "),e("li",[a._v("조합적 문제에 대한 "),e("code",[a._v("고지식한 방법(Brute-force)")])])]),a._v(" "),e("h3",{attrs:{id:"순열-permutation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#순열-permutation"}},[a._v("#")]),a._v(" 순열(Permutation)")]),a._v(" "),e("p",[a._v("서로 다른 것들 중 몇 개를 뽑아서 한 줄로 나열하는 것")]),a._v(" "),e("ul",[e("li",[a._v("서로 다른 n개 중 r개를 택하는 순열은 아래와 같이 표현 : "),e("code",[a._v("nPr")])]),a._v(" "),e("li",[a._v("nPr은 다음과 같은 식이 성립 : "),e("code",[a._v("nPr = n * (n-1) * (n-2) * ... * (n-r+1)")])])]),a._v(" "),e("h4",{attrs:{id:"순열과-관련된-다수의-알고리즘-문제들"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#순열과-관련된-다수의-알고리즘-문제들"}},[a._v("#")]),a._v(" 순열과 관련된 다수의 알고리즘 문제들")]),a._v(" "),e("ul",[e("li",[a._v("순서화된 요소들의 집합에서 최선의 방법을 찾는 것과 관련됨\n"),e("ul",[e("li",[a._v("순회 외판원 문제(Traveling Salesman Problem)\n"),e("ul",[e("li",[a._v("여러 도시들이 있고 한 도시에서 다른 도시로 이동하는 비용이 모두 주어짐")]),a._v(" "),e("li",[a._v("출발 도시에서 시작해서 다른 모든 도시들을 단 한 번만 방문하고 출발")]),a._v(" "),e("li",[a._v("방문할 도시들을 순서대로 나열하면 하나의 경로가 됨")])])])])])]),a._v(" "),e("h4",{attrs:{id:"ex-1-2-3-로-순열-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ex-1-2-3-로-순열-생성"}},[a._v("#")]),a._v(" ex) {1, 2, 3} 로 순열 생성")]),a._v(" "),e("p",[a._v("동일한 숫자가 포함되지 않았을 때, 각 자릿수 별로 loop을 이용")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("for i in range(1,4):\n    for j in range(1,4):\n        if j != i: # 동일한 숫자가 포함되지 않았을 때, 각 자리 수 별로 for loop를 이용해서 구현\n            for k in range(1,4):\n                if k != i and k != j:\n                    print(i, j, k)\n")])])]),e("ul",[e("li",[a._v("Baby-Gin을 판별하는 프로그램은 여섯 개의 for loop를 중첩해서 "),e("code",[a._v("모든 순열을 만들어 냄")])]),a._v(" "),e("li",[a._v("일반적으로 "),e("code",[a._v("재귀 호출을 이용")]),a._v("해서 필요한 횟수만큼 반복을 수행하면서 수열 생성")])]),a._v(" "),e("h3",{attrs:{id:"순열을-만드는-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#순열을-만드는-방법"}},[a._v("#")]),a._v(" 순열을 만드는 방법")]),a._v(" "),e("ul",[e("li",[a._v("사전식 순서\n"),e("ul",[e("li",[a._v("요소들이 오름차순으로 나열된 형태가 시작하는 하나의 순열")])])]),a._v(" "),e("li",[a._v("최소 변경을 통한 방법\n"),e("ul",[e("li",[a._v("각각의 순열들은 이전의 상태에서 단지 두 개의 요소들 교환을 통해 생성")]),a._v(" "),e("li",[a._v("{1, 2, 3} 순열에서 1과 3을 교환해서 {3, 2, 1} 순열을 만듦")])])])]),a._v(" "),e("h4",{attrs:{id:"최소한의-변경-minimum-change-requirement-을-통해-순열을-생성하는-방법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#최소한의-변경-minimum-change-requirement-을-통해-순열을-생성하는-방법"}},[a._v("#")]),a._v(" 최소한의 변경(Minimum-change requirement)을 통해 순열을 생성하는 방법")]),a._v(" "),e("ul",[e("li",[a._v("Johnson-Trotter 알고리즘\n"),e("ul",[e("li",[a._v("각 선들 => 네 개의 요소에 대응되고 점이 표시괸 선이 교환되는 요소")])])]),a._v(" "),e("li",[a._v("1950년대의 교회의 종소리 패턴하고 유사")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-------------------------------------------------\n  |     |     |   |     |     |   |     |     |  \n-------------------------------------------------\n    |       |       |       |       |       |  \n-------------------------------------------------\n      |   |     |     |   |     |     |   |     \n-------------------------------------------------\n")])])]),e("h4",{attrs:{id:"두-원소의-교환을-통해-생성"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#두-원소의-교환을-통해-생성"}},[a._v("#")]),a._v(" 두 원소의 교환을 통해 생성")]),a._v(" "),e("ul",[e("li",[a._v("N개의 요소가 있을 때 N번의 선택으로 순열 생성")]),a._v(" "),e("li",[a._v("순열이 생성되는 모든 과정을 그리면 "),e("code",[a._v("트리 구조")]),a._v("를 가짐\n"),e("ul",[e("li",[a._v("요소의 수가 네 개로 루트는 자식이 네 개이고 트리의 높이가 1인 내부노드들은 자식이 세 개가 되는 구조의 트리가 됨")]),a._v(" "),e("li",[a._v("네 번의 선택을 하기 때문에 트리의 높이는 4가 됨")]),a._v(" "),e("li",[a._v("트리를 순회하는 것과 같이 재귀 호출을 통해 순열을 생성")]),a._v(" "),e("li",[a._v("트리의 단말에 도착하게 되면 하나의 순열 생성")])])])]),a._v(" "),e("h4",{attrs:{id:"ex-재귀-호출을-통한-순열-생성-예제"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ex-재귀-호출을-통한-순열-생성-예제"}},[a._v("#")]),a._v(" ex) 재귀 호출을 통한 순열 생성 예제")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("# a[]: 데이터가 저장된 리스트\n# n: 원소의 개수, k: 현재까지 선택된 원소의 수\n\ndef perm(n, k):\n    if k == n:   # 하나의 순열이 생성됨\n        print(a) # 원하는 작업 수행\n    else:\n        for i in range(k, n):\n            a[k], a[i] = a[i], a[k] # 교환을 통한 선택\n            perm(n, k+1)            # 재귀호출\n            a[k], a[i] = a[i], a[k] # 이전 상태로 복귀\n")])])]),e("h4",{attrs:{id:"ex-파이썬의-라이브러리를-활용한-순열"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ex-파이썬의-라이브러리를-활용한-순열"}},[a._v("#")]),a._v(" ex) 파이썬의 라이브러리를 활용한 순열")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("import itertools\n\nmylist = [1,2,3]\nresult = itertools.permutations(mylist) # (mylist, 3), r 생략시 기본값 리스트 크기\n\nprint(list(result))\n\n# 결과값: [(1, 2, 3), (1, 3, 2), (2, 1, 3), (2, 3, 1), (3, 1, 2), (3, 2, 1)]\n\n")])])]),e("h4",{attrs:{id:"ex-파이썬의-라이브러리를-활용한-중복순열"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ex-파이썬의-라이브러리를-활용한-중복순열"}},[a._v("#")]),a._v(" ex) 파이썬의 라이브러리를 활용한 중복순열")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("import itertools\n\nmylist = [1,2,3]\nresult = itertools.product(mylist, repeat=3)\n\nprint(list(result))\n\n# 결과값: [(1, 1, 1), (1, 1, 2), (1, 1, 3), (1, 2, 1), (1, 2, 2), (1, 2, 3), (1, 3, 1), (1, 3, 2), (1, 3, 3), (2, 1, 1), (2, 1, 2), (2, 1, 3), (2, 2, 1), (2, 2, 2), (2, 2, 3), (2, 3, 1), (2, 3, 2), (2, 3, 3), (3, 1, 1), (3, 1, 2), (3, 1, 3), (3, 2, 1), (3, 2, 2), (3, 2, 3), (3, 3, 1), (3, 3, 2), (3, 3, 3)]\n\n")])])]),e("br"),a._v(" "),e("h2",{attrs:{id:"reference-additional-resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[a._v("#")]),a._v(" Reference & Additional Resources")]),a._v(" "),e("blockquote",[e("p",[a._v("SW Expert Academy")])])])}),[],!1,null,null,null);t.default=s.exports}}]);