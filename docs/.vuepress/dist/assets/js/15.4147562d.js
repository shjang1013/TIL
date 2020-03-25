(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{231:function(t,e,a){"use strict";a.r(e);var _=a(19),v=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linked-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linked-list"}},[t._v("#")]),t._v(" Linked List")]),t._v(" "),a("p",[a("em",[t._v("written by sohyeon")]),t._v("🍀")]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_1-linked-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-linked-list"}},[t._v("#")]),t._v(" 1. Linked List")]),t._v(" "),a("h3",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" List")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 순서를 가진 데이터의 묶음 - 같은 데이터의 중복 저장 가능\n2. 시퀀스 자료형 - 인덱싱, 슬라이싱, 연산자, 메서드 사용 가능\n3. 크기 제한 없음, 타입 제한 없음\n-----------------------------------------------\n      |    크기    |       데이터의 타입\n-----------------------------------------------\n 배열  |  변경 불가  | 선언된 한가지 타입만 저장 가능\n-----------------------------------------------\n 리스트 |  변경 가능  | 다양한 데이터 타입 저장 가능\n-----------------------------------------------\n")])])]),a("ul",[a("li",[t._v("순차 리스트 : 배열을 기반으로 구현된 리스트")]),t._v(" "),a("li",[t._v("연결 리스트 : 메모리의 동적 할당을 기반으로 구현된 리스트")])]),t._v(" "),a("h3",{attrs:{id:"순차-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#순차-list"}},[t._v("#")]),t._v(" 순차 List")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("초기화 및 생성")]),t._v(" "),a("ul",[a("li",[t._v("변수에 값을 초기화하는 것으로 리스트 생성")]),t._v(" "),a("li",[t._v("ex) L = [4, 9, 11, 23]")])])]),t._v(" "),a("li",[a("p",[t._v("데이터 접근")]),t._v(" "),a("ul",[a("li",[t._v("리스트의 인덱스를 이용해 원하는 위치의 데이터를 변경하고 참조할 수 있음")]),t._v(" "),a("li",[t._v("ex) 3에 위치한 자료 L[3] = 23, L[-1] = 23")])])]),t._v(" "),a("li",[a("p",[t._v("리스트")]),t._v(" "),a("ul",[a("li",[t._v("동적 배열로 작성된 순차 리스트")])])]),t._v(" "),a("li",[a("p",[t._v("자료의 삽입, 삭제 연산")]),t._v(" "),a("ul",[a("li",[t._v("원소의 이동 작업이 필요")])])])]),t._v(" "),a("p",[t._v("*원소의 개수가 많고 삽입/삭제 연산이 빈번한 작업\n- 소요되는 시간이 크게 증가")]),t._v(" "),a("h3",{attrs:{id:"리스트-복사"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#리스트-복사"}},[t._v("#")]),t._v(" 리스트 복사")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("코드")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("설명")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("new_list = old_list")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("주소의 복사, 얕은 복사")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("new_list = old_list[:]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("슬라이싱, 깊은 복사")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("new_list = []"),a("br"),t._v("new_list.extend(old_list)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("extend() : 리스트를 추가하는 함수, 깊은 함수")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("new_list = list(old_list)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("list(), 깊은 복사")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("import copy"),a("br"),t._v("new_list=copy.copy(old_list)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("copy 활용, 깊은 복사")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("new_list = [i for i in old_list]")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("리스트 함축, 깊은 복사")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("import copy"),a("br"),t._v("new_list=copy.deepcopy(old_list)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("리스트 원소까지도 깊은 복사, 가장 느림")])])])]),t._v(" "),a("ul",[a("li",[t._v("아래로 내려갈수록 시간이 많이 걸림")])]),t._v(" "),a("h3",{attrs:{id:"연결-list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#연결-list"}},[t._v("#")]),t._v(" 연결 List")]),t._v(" "),a("ul",[a("li",[t._v("리스트의 단점을 보완한 자료 구조")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 자료의 논리적인 순서와 메모리 상의 물리적인 순서가 일치하지 않고, 개별적으로 위치하고 있는 원소의 주소를 연결하여 하나의 전체적인 자료구조를 이룸\n2. 링크를 통해 원소에 접근하므로, 순차 리스트에서 물리적인 순서를 맞추기 위한 작업이 필요하지 않음\n3. 자료구조의 크기를 동적으로 조정할 수 있어, 메모리의 효율적인 사용이 가능\n4. 탐색 - 순차탐색\n")])])]),a("h3",{attrs:{id:"연결-리스트-사용을-위한-함수"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#연결-리스트-사용을-위한-함수"}},[t._v("#")]),t._v(" 연결 리스트 사용을 위한 함수")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("함수명")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("기능")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("addtoFirst()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("연결 리스트의 앞쪽에 원소를 추가하는 연산")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("addtoLast()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("연결 리스트의 뒤쪽에 원소를 추가하는 연산")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("add()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("연결 리스트의 특정 위치에 원소를 추가하는 연산")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("delete()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("연결 리스트의 특정 위치에 있는 원소를 삭제하는 연산")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("get()")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("연결 리스트의 특정 위치에 있는 원소를 리턴하는 연산")])])])]),t._v(" "),a("h3",{attrs:{id:"노드와-헤드"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#노드와-헤드"}},[t._v("#")]),t._v(" 노드와 헤드")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("노드")]),t._v(" "),a("ul",[a("li",[t._v("연결 리스트에서 하나의 원소에 필요한 데이터를 갖고 있는 자료단위")]),t._v(" "),a("li",[t._v("데이터 필드: 원소의 값을 저장하는 자료구조")]),t._v(" "),a("li",[t._v("링크 필드: 다음 노드의 주소를 저장하는 자료구조")])])]),t._v(" "),a("li",[a("p",[t._v("헤드")]),t._v(" "),a("ul",[a("li",[t._v("리스트의 처음 노드를 가리키는 레퍼런스")])])])]),t._v(" "),a("h3",{attrs:{id:"단순-연결-리스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단순-연결-리스트"}},[t._v("#")]),t._v(" 단순 연결 리스트")]),t._v(" "),a("ul",[a("li",[t._v("노드가 하나의 링크 필드에 의해 다음 노드와 연결되는 구조를 가짐")]),t._v(" "),a("li",[t._v("헤드가 가장 앞의 노드를 가리키고, 각 노드의 링크 필드가 연속적으로 다음 노드를 가리킴")]),t._v(" "),a("li",[t._v("최종적으로 None을 가리키는 노드가 리스트의 가장 마지막 노드임")])]),t._v(" "),a("h3",{attrs:{id:"단순-연결-리스트의-삽입-연산"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단순-연결-리스트의-삽입-연산"}},[t._v("#")]),t._v(" 단순 연결 리스트의 삽입 연산")]),t._v(" "),a("p",[a("code",[t._v("'A', 'C', 'D'를 원소로 갖고 있는 리스트의 두 번째에 'B'노드를 삽입할 때")])]),t._v(" "),a("ol",[a("li",[t._v("메모리를 할당하여 새로운 노드 new 생성임")]),t._v(" "),a("li",[t._v("새로운 노드 new의 데이터 필드에 'B' 저장")]),t._v(" "),a("li",[t._v("삽입될 위치의 바로 앞에 위치한 노드의 링크 필드 필드를 new에 복사")]),t._v(" "),a("li",[t._v("new의 주소를 앞 노드의 링크 필드에 저장")])]),t._v(" "),a("h4",{attrs:{id:"단순-연결-리스트의-삽입-연산-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단순-연결-리스트의-삽입-연산-예제"}},[t._v("#")]),t._v(" 단순 연결 리스트의 삽입 연산 예제")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 첫 번째 노드로 삽입하는 알고리즘\ndef addtoFirst(data):  # 첫 노드에 데이터 삽입\n    global Head\n    Head = Node(data, Head)  # 새로운 노드 생성\n\n# 가운데 노드로 삽입하는 알고리즘\ndef add(pre, data):  # pre 다음에 데이터 삽입\n    if pre == None:\n        print('error')\n    else:\n        pre.link = Node(data, pre.link)\n\n# 마지막 노드로 삽입하는 알고리즘\ndef addtoLast(data):  # 마지막에 데이터 삽입\n    global Head\n    if Head == None:    \n        Head = Node(data, None)\n    else:\n        p = Head\n        while p.link != None:  # 마지막 노드 찾을 때까지\n            p = p.link\n        p.link = Node(data, None)\n")])])]),a("h3",{attrs:{id:"단순-연결-리스트의-삭제-연산"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단순-연결-리스트의-삭제-연산"}},[t._v("#")]),t._v(" 단순 연결 리스트의 삭제 연산")]),t._v(" "),a("p",[a("code",[t._v("'A', 'B', 'C', 'D' 리스트의 'B'노드를 삭제할 때")])]),t._v(" "),a("ol",[a("li",[t._v("삭제할 노드의 앞 노드(선행노드) 탐색")]),t._v(" "),a("li",[t._v("삭제할 노드의 링크 필드를 선행노드의 링크 필드에 복사")])]),t._v(" "),a("h4",{attrs:{id:"단순-연결-리스트의-삭제-연산-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#단순-연결-리스트의-삭제-연산-예제"}},[t._v("#")]),t._v(" 단순 연결 리스트의 삭제 연산 예제")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 첫 번째 노드를 삭제하는 알고리즘\ndef deletetoFirst():  # 처음 노드 삭제\n    global Head\n    if Head == None:\n        print('error')\n    else:\n        Head = Head.link\n\n# 노드를 삭제하는 알고리즘\ndef delete(pre):  # pre 다음 노드 삭제\n    if pre == None or pre.link == None:\n        print('error')\n    else:\n        pre.link = pre.link.link\n")])])]),a("h3",{attrs:{id:"이중-연결-리스트"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이중-연결-리스트"}},[t._v("#")]),t._v(" 이중 연결 리스트")]),t._v(" "),a("ul",[a("li",[t._v("양쪽 방향으로 순회할 수 있도록 노드를 연결한 리스트")]),t._v(" "),a("li",[t._v("두 개의 링크 필드와 한 개의 데이터 필드로 구성")])]),t._v(" "),a("h3",{attrs:{id:"이중-연결-리스트의-삭제-연산1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이중-연결-리스트의-삭제-연산1"}},[t._v("#")]),t._v(" 이중 연결 리스트의 삭제 연산1")]),t._v(" "),a("p",[a("code",[t._v("cur이 가리키는 노드 다음에 D값을 가진 노드를 삽입하는 과정")])]),t._v(" "),a("ol",[a("li",[t._v("메모리를 할당하여 새로운 노드 new를 생성하고 데이터 필드에 'D'를 저장")]),t._v(" "),a("li",[t._v("cur의 next를 new의 next에 저장하여 cur의 다음 노드를 삽입할 노드의 다음 노드로 연결")]),t._v(" "),a("li",[t._v("new의 값을 cur의 next에 저장하여 삽입할 노드를 cur의 다음 노드로 연결")]),t._v(" "),a("li",[t._v("cur의 값을 new의 prev 필드에 저장하여 cur를 new의 이전 노드로 연결")]),t._v(" "),a("li",[t._v("new의 값을 new가 가리키는 노드의 다음 노드의 prev 필드에 저장하여 삽입하려는 노드의 다음 노드와 삽입하려는 노드를 연결")])]),t._v(" "),a("h4",{attrs:{id:"이중-연결-리스트의-삭제-연산2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#이중-연결-리스트의-삭제-연산2"}},[t._v("#")]),t._v(" 이중 연결 리스트의 삭제 연산2")]),t._v(" "),a("p",[a("code",[t._v("cur이 가리키는 노드를 삭제하는 과정")])]),t._v(" "),a("ol",[a("li",[t._v("현재 상태")]),t._v(" "),a("li",[t._v("삭제할 노드의 다음 노드의 주소를 삭제할 노드의 이전 노드의 next 필드에 저장하여 링크를 연결")]),t._v(" "),a("li",[t._v("삭제할 노드의 다음 노드의 prev 필드에 삭제할 노드의 이전 노드의 주소를 저장하여 링크를 연결")]),t._v(" "),a("li",[t._v("cur이 가리키는 노드에 할당된 메모리를 반환")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_2-삽입-정렬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-삽입-정렬"}},[t._v("#")]),t._v(" 2. 삽입 정렬")]),t._v(" "),a("h3",{attrs:{id:"삽입-정렬의-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#삽입-정렬의-특징"}},[t._v("#")]),t._v(" 삽입 정렬의 특징")]),t._v(" "),a("ul",[a("li",[t._v("도서관 사서가 책을 정렬할 때, 일반적으로 활용되는 방식")]),t._v(" "),a("li",[t._v("자료 배열의 모든 원소들을 앞에서부터 차례대로 이미 정렬된 부분과 비교하여, 자신의 위치를 찾아냄으로써 정렬을 완성")])]),t._v(" "),a("h4",{attrs:{id:"삽입-정렬의-정렬-과정-⇒-시간-복잡도-o-n-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#삽입-정렬의-정렬-과정-⇒-시간-복잡도-o-n-2"}},[t._v("#")]),t._v(" 삽입 정렬의 정렬 과정 ⇒ "),a("code",[t._v("시간 복잡도 : O(n^2)")])]),t._v(" "),a("ul",[a("li",[t._v("정렬할 자료를 두 개의 부분집합 S와 U로 가정\n"),a("ul",[a("li",[t._v("부분집합 S : 정렬된 앞 부분의 원소들")]),t._v(" "),a("li",[t._v("부분집합 U : 아직 정렬되지 않은 나머지 원소들")])])]),t._v(" "),a("li",[t._v("정렬되지 않은 부분집합 U의 원소를 하나씩 꺼내서 이미 정렬되어 있는 부분집합 S의 마지막 원소부터 비교하면서 위치를 찾아 삽입")]),t._v(" "),a("li",[t._v("삽입 정렬을 반복하면서 부분집합 S의 원소는 하나씩 늘리고 부분집합 U의 원소는 하나씩 감소하게 함")]),t._v(" "),a("li",[t._v("부분집합 U가 공집합이 되면 삽입 정렬이 완성됨")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_3-병합-정렬"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-병합-정렬"}},[t._v("#")]),t._v(" 3. 병합 정렬")]),t._v(" "),a("h3",{attrs:{id:"병합-정렬의-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#병합-정렬의-특징"}},[t._v("#")]),t._v(" 병합 정렬의 특징")]),t._v(" "),a("p",[t._v("여러 개의 정렬된 자료의 집합을 병합하여 한 개의 정렬된 집합으로 만드는 방식")]),t._v(" "),a("ol",[a("li",[t._v("분할 정복 알고리즘 활용\n"),a("ul",[a("li",[t._v("자료를 최소 단위의 문제까지 나눈 후에 차례대로 정렬하여 최종 결과를 얻어냄")])]),t._v(" "),a("ul",[a("li",[t._v("Top-Down 방식")])])]),t._v(" "),a("li",[t._v("시간 복잡도: O(nlogn)")])]),t._v(" "),a("h3",{attrs:{id:"병합-정렬의-과정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#병합-정렬의-과정"}},[t._v("#")]),t._v(" 병합 정렬의 과정")]),t._v(" "),a("p",[a("code",[t._v("{69, 10, 30, 2, 16, 8, 31, 22}를 병합 정렬하는 과정")])]),t._v(" "),a("ol",[a("li",[t._v("병합 단계: 2개의 부분집합을 정렬하면서 하나의 집합을 병합")]),t._v(" "),a("li",[t._v("8개의 부분집합이 1개로 병합될 때까지 반복함")])]),t._v(" "),a("h3",{attrs:{id:"병합-정렬-알고리즘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#병합-정렬-알고리즘"}},[t._v("#")]),t._v(" 병합 정렬 알고리즘")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 분할 과정의 알고리즘\n\ndef merge_sort(m):\n    if len(m) <= 1:\n        return m\n\n    # 1. Divide 부분\n    mid = len(m)\n    left = m[:mid]\n    right = m[mid:]\n\n    # 리스트의 크기가 1이 될 때까지 merge_sort 재귀 호출\n    left = merge_sort(left)\n    right = merge_sort(right)\n\n    # 2. Conquer 부분 : 분할된 리스트들 병합\n    return merge(left, right)\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# 병합 과정의 알고리즘\n\ndef merge(left, right):\n    result = []  # 두 개의 분할된 리스트를 병합하여 result를 만듦\n\n    while len(left) > 0 and len(right) > 0: # 양쪽 리스트에 원소가 남아있는 경우\n        # 두 서브 리스트의 첫 원소들을 비교하여 작은 것부터 result에 추가함\n        if left[0] <= right[0]:\n            result.append(left.pop(0))\n        else:\n            result.append(right.pop(0))\n\n    if len(left) > 0:  # 왼쪽 리스트에 원소가 남아있는 경우\n        result.extend(left)\n    else len(right) > 0:  # 오른쪽 리스트에 원소르 남아있는 경우\n        result.extend(right)\n\n    return result\n")])])]),a("h3",{attrs:{id:"삽입-정렬과-병합-정렬의-특성"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#삽입-정렬과-병합-정렬의-특성"}},[t._v("#")]),t._v(" 삽입 정렬과 병합 정렬의 특성")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("알고리즘")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("평균 수행 시간")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("최악 수행 시간")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("알고리즘 기법")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("비고")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("삽입 정렬")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(n^2)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("비교와 교환")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("교환의 횟수가 버블, 삽입 정렬보다 작음")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("병합 정렬")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(nlogn)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("O(nlogn)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("분할 정복")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("연결 List의 경우 가장 효율적인 방식")])])])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"_4-linked-list의-활용"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-linked-list의-활용"}},[t._v("#")]),t._v(" 4. Linked List의 활용")]),t._v(" "),a("h3",{attrs:{id:"list를-이용한-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list를-이용한-stack"}},[t._v("#")]),t._v(" List를 이용한 Stack")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("스택의 원소: 리스트의 노드")]),t._v(" "),a("ul",[a("li",[t._v("스택 내의 순서는 리스트의 링크를 통해 연결됨")]),t._v(" "),a("li",[t._v("Push: 리스트의 마지막에 노드 삽입")]),t._v(" "),a("li",[t._v("Pop: 리스트의 마지막 노드 반환/삭제")])])]),t._v(" "),a("li",[a("p",[t._v("변수 Top")]),t._v(" "),a("ul",[a("li",[t._v("리스트의 마지막 노드를 가리키는 변수")]),t._v(" "),a("li",[t._v("초기 상태: Top = None")])])])]),t._v(" "),a("h3",{attrs:{id:"list를-이용한-stack의-연산"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list를-이용한-stack의-연산"}},[t._v("#")]),t._v(" List를 이용한 Stack의 연산")]),t._v(" "),a("p",[a("code",[t._v("리스트를 이용해 Push와 Pop 연산 구현")])]),t._v(" "),a("ol",[a("li",[t._v("None 값을 가지는 노드를 만들어 스택 초기화")]),t._v(" "),a("li",[t._v("원소 A 삽입: push(A)")]),t._v(" "),a("li",[t._v("원소 B 삽입: push(B)")]),t._v(" "),a("li",[t._v("원소 C 삽입: push(C)")]),t._v(" "),a("li",[t._v("원소 반환: Pop")])]),t._v(" "),a("h3",{attrs:{id:"list를-이용한-stack의-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list를-이용한-stack의-구현"}},[t._v("#")]),t._v(" List를 이용한 Stack의 구현")]),t._v(" "),a("h4",{attrs:{id:"push-pop-연산의-알고리즘-예제"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#push-pop-연산의-알고리즘-예제"}},[t._v("#")]),t._v(" Push / Pop 연산의 알고리즘 예제")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('def push(i):         # 원소 i를 스택 top(맨앞) 위치에 push\n    global top\n    top = Node(i, top) # 새로운 노드 생성\n\ndef pop():           # 스택의 top을 pop\n    global top\n\n    if top == None:    # 빈 리스트면\n        print("error")\n    else:\n        data = top.data\n        top = top.link   # top이 가리키는 노드로 바꿈\n        return data\n')])])]),a("h3",{attrs:{id:"우선순위-queue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#우선순위-queue"}},[t._v("#")]),t._v(" 우선순위 Queue")]),t._v(" "),a("ul",[a("li",[t._v("연결 리스트를 이용한 우선순위 Queue")]),t._v(" "),a("li",[t._v("삽입: enQueue")]),t._v(" "),a("li",[t._v("삭제: deQueue")])]),t._v(" "),a("h3",{attrs:{id:"순차-리스트를-이용한-우선순위-queue-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#순차-리스트를-이용한-우선순위-queue-구현"}},[t._v("#")]),t._v(" 순차 리스트를 이용한 우선순위 Queue 구현")]),t._v(" "),a("ul",[a("li",[t._v("순차 리스트를 이용하여 자료 저장")]),t._v(" "),a("li",[t._v("원소를 삽입하는 과정에서 우선순위를 비교하여 적절한 위치에 삽입하는 구조")]),t._v(" "),a("li",[t._v("가장 앞에 최고 우선순위의 원소가 위치하게 됨")])]),t._v(" "),a("h4",{attrs:{id:"문제점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#문제점"}},[t._v("#")]),t._v(" 문제점")]),t._v(" "),a("p",[t._v("배열을 사용하므로 삽입이나 삭제 연산이 일어날 때 원소의 재배치가 발생함\n이에 소요되는 시간이나 메모리 낭비가 큼")]),t._v(" "),a("h3",{attrs:{id:"연결-리스트를-이용한-우선순위-queue-구현"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#연결-리스트를-이용한-우선순위-queue-구현"}},[t._v("#")]),t._v(" 연결 리스트를 이용한 우선순위 Queue 구현")]),t._v(" "),a("ul",[a("li",[t._v("연결 리스트를 이용하여 자료 저장")]),t._v(" "),a("li",[t._v("원소를 삽입하는 과정에서 리스트 내 노드의 원소들과 비교하여 적절한 위치에 노드를 삽입하는 구조")]),t._v(" "),a("li",[t._v("리스트의 가장 앞쪽에 최고 우선순위가 위치하게 됨")])]),t._v(" "),a("h4",{attrs:{id:"순차리스트-대비-장점"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#순차리스트-대비-장점"}},[t._v("#")]),t._v(" 순차리스트 대비 장점")]),t._v(" "),a("ul",[a("li",[t._v("삽입/삭제 연산 이후 원소의 재배치가 필요 없음")]),t._v(" "),a("li",[t._v("메모리의 효율적인 사용이 가능함")])]),t._v(" "),a("br"),t._v(" "),a("h2",{attrs:{id:"reference-additional-resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reference-additional-resources"}},[t._v("#")]),t._v(" Reference & Additional Resources")]),t._v(" "),a("blockquote",[a("p",[t._v("SW Expert Academy")])])])}),[],!1,null,null,null);e.default=v.exports}}]);