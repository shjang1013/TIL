(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{372:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"프로그래머스-숫자-야구"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로그래머스-숫자-야구"}},[t._v("#")]),t._v(" [프로그래머스] 숫자 야구")]),t._v(" "),e("p",[e("em",[t._v("written by sohyeon")]),t._v("🍀")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"문제-설명"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#문제-설명"}},[t._v("#")]),t._v(" 문제 설명")]),t._v(" "),e("p",[t._v("숫자 야구 게임이란 2명이 서로가 생각한 숫자를 맞추는 게임입니다.")]),t._v(" "),e("p",[t._v("각자 서로 다른 1~9까지 3자리 임의의 숫자를 정한 뒤 서로에게 3자리의 숫자를 불러서 결과를 확인합니다. 그리고 그 결과를 토대로 상대가 정한 숫자를 예상한 뒤 맞힙니다.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("* 숫자는 맞지만, 위치가 틀렸을 때는 볼\n* 숫자와 위치가 모두 맞을 때는 스트라이크\n* 숫자와 위치가 모두 틀렸을 때는 아웃\n")])])]),e("p",[t._v("예를 들어, 아래의 경우가 있으면")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("A : 123\nB : 1스트라이크 1볼.\nA : 356\nB : 1스트라이크 0볼.\nA : 327\nB : 2스트라이크 0볼.\nA : 489\nB : 0스트라이크 1볼.\n")])])]),e("p",[t._v("이때 가능한 답은 324와 328 두 가지입니다.")]),t._v(" "),e("p",[t._v("질문한 세 자리의 수, 스트라이크의 수, 볼의 수를 담은 2차원 배열 baseball이 매개변수로 주어질 때, 가능한 답의 개수를 return 하도록 solution 함수를 작성해주세요.")]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"제한사항"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#제한사항"}},[t._v("#")]),t._v(" 제한사항")]),t._v(" "),e("ul",[e("li",[t._v("질문의 수는 1이상 100 이하의 자연수입니다.")]),t._v(" "),e("li",[t._v("baseball의 각 행은 [ 세 자리의 수, 스트라이크의 수, 볼의 수 ] 를 담고 있습니다.")])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"입출력-예"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#입출력-예"}},[t._v("#")]),t._v(" 입출력 예")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("baseball")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("return")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("[[123, 1, 1], [356, 1, 0], [327, 2, 0], [489, 0, 1]]")])]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[e("code",[t._v("2")])])])])]),t._v(" "),e("br"),t._v(" "),e("h2",{attrs:{id:"접근법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#접근법"}},[t._v("#")]),t._v(" 접근법")]),t._v(" "),e("p",[t._v("처음 입출력 예제를 보며 문제를 파악하려 했었다.")]),t._v(" "),e("p",[e("code",[t._v("[[123, 1, 1], [356, 1, 0]]")]),t._v("에서 3이 겹치니까 이를 리스트에 저장하면 되지 않을까라는 생각을 했었다.")]),t._v(" "),e("p",[t._v("하지만 숫자가 겹치지 않는 경우가 있어 그 다음에는 어떻게 접근해야 하는 지 고민이 많았다.")]),t._v(" "),e("p",[t._v("다양한 방법을 고민하다가 결국 다른 풀이를 참고하였고, 이 문제를 어떻게 구현했는지 디버깅하며 알 수 있었다.")]),t._v(" "),e("h3",{attrs:{id:"숫자-야구-접근법"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#숫자-야구-접근법"}},[t._v("#")]),t._v(" 숫자 야구 접근법")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1. 1~9까지 모든 조합을 순열로 만든다. \n    * `itertools`의 `permutations`를 이용  \n    \n2. baseball의 세자리 수와 순열의 세자리 수를 비교하여 스트라이크, 볼을 구한다.\n    * 스트라이크 : 숫자와 위치가 같은지 확인하여 1씩 증가\n    * 볼 : `set`을 이용하여 교집합(겹치는 수)을 구해 스트라이크 빼기 \n    \n3. baseball의 스트라이크, 볼의 수와 2번에서 구한 스트라이크, 볼의 수를 비교하여 같으면 순열의 리스트에서 제거한다.\n\n4. 리스트의 길이를 반환한다.  \n")])])]),e("h2",{attrs:{id:"나의-코드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#나의-코드"}},[t._v("#")]),t._v(" 나의 코드")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("from itertools import permutations\n\ndef CheckScore(baseball, P, S, B):\n    strike = 0\n    for i in range(3):\n        if baseball[i] == P[i]:\n            strike += 1\n\n    # 주어진 스트라이크 수와 다를 경우\n    if S != strike:\n        return False\n\n    # 주어진 스트라이크 수와 같을 경우\n    ball = len(set(baseball) & set(P)) - strike\n\n    # 주어진 볼의 수와 같을 경우\n    if B != ball:\n        return False    \n    # 다를 경우\n    return True\n\n\ndef solution(baseball):\n    List = list(permutations([i for i in range(1, 10)], 3))\n\n    for i in baseball:\n        for j in List[:]:\n            #baseball 세자리 수, 순열, 스트라이크, 볼\n            if not CheckScore(list(map(int, list(str(i[0])))), j, i[1], i[2]):\n                List.remove(j)\n\n    return len(List)\n    \n")])])]),e("br"),t._v(" "),e("h2",{attrs:{id:"유의할-점"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#유의할-점"}},[t._v("#")]),t._v(" 유의할 점")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("List")]),t._v("를 사용할 경우 for문이 리스트의 숫자로 세기 때문에 건너 뛰는 경우가 발생한다.")]),t._v(" "),e("li",[t._v("따라서 기존의 값을 유지하면서 for문을 돌아야 할 경우에는 "),e("code",[t._v("List[:]")]),t._v("를 사용한다.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);