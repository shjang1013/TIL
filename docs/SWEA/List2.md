# List2
*written by sohyeon*🍀

<br>

## 목차
### [1. List2](#1-List2-1)
### [2. 부분 집합](#2-부분-집합-1)
### [3. 검색](#3-검색-1)
### [4. 정렬](#4-정렬-1)

<br>

## 1. List2

### 2차원 List 구조
```
1. 1차원 List를 묶어놓은 List
2. 2차원 이상의 다차원 List는 차원에 따라 Index를 선언
3. 2차원 List의 선언 : 세로길이(행의 개수), 가로길이(열의 개수)를 필요로 함
```
### List 초기화

#### ex) 예제
```
arr = [0,0,0,0,0]  # 곱셈 연산을 통해 List 초기화
arr = [0] * 5      # [0,0,0,0,0]
arr = [i for i in range(2,9) if i%2==0] # [2,4,6,8]

brr = [[1,2,3],[1,2,3],[1,2,3]]
brr = [[1,2,3]] * 3
brr = [[i,j] for i in range(3) for j in range(2)] # [[0,0],[0,1],[1,0],[1,1],[2,0],[2,1]]
```

### 2차원 List 입력 받기

- 첫째 줄에 n행 m열  
- 둘째 줄부터 n*m의 행렬 데이터가 주어질 경우 입력을 받는 방법  
  
#### ex) 예제1
```
n, m = map(int, input().split())

mylist = [0 for _ in range(n)] # mylist = [0] * n # 1차원 리스트를 만들어놓는다.

for i in range(n):
    mylist[i] = list(map(int, input().split())) # 1차원 리스트에 각 원소에 입력받은 한 행의 데이터로 구성된 리스트를 저장한다.
```

#### ex) 예제2
```
n, m = map(int, input().split())

mylist = []

for i in range(n):
    mylist[i].append(list(map(int, input().split())))
```

#### ex) 예제3
```
n, m = map(int, input().split())

mylist = [list(map(int, input().split())) for _ in range(n)]

```

### 2차원 List에서 원하는 데이터의 위치 찾기
  
- 1이 입력된 [행, 열]

#### ex) 예제1
```
n, m = map(int, input().split())

mylist = [list(map(int, input().split())) for _ in range(n)]

newlist = [(i,j) for i in range(n) for j in range(m) if mylist[i][j]==1]
```

### List 순회
n x m List의 n*m 개의 모든 원소를 빠짐없이 조사하는 방법  
  
* **행 우선 순회**  
List의 행을 우선으로 List의 원소를 조사하는 방법

#### 행 우선 순회 예제
```
arr = [[0,1,2,3], [4,5,6,7], [8,9,10,11]]

for i in range(len(arr)): # 행의 좌표
    for j in range(len(arr[i])): # 열의 좌표
        print(arr[i][j], end=' ')
```
  
* **열 우선 순회**  
List의 열을 우선으로 List의 원소를 조사하는 방법

#### 열 우선 순회 예제
```
arr = [[0,1,2,3], [4,5,6,7], [8,9,10,11]]

for j in range(len(arr)):
    for i in range(len(arr[i])):
        print(arr[i][j], end=' ')
```
  
* **지그재그 순회**  
List의 행을 좌우로 조사하는 방법  

#### 지그재그 순회 예제
```
arr = [[0,1,2,3], [4,5,6,7], [8,9,10,11]]

n = len(arr)
m = len(arr[0])

for i in range(n):
    for j in range(m):
        print(arr[i][j+(m-1-2*j)*(i%2)], end=' ')
```


### 델타를 이용한 2차 List 탐색
```
1. 2차 List의 한 좌표에서 네 방향의 인접 List 요소를 탐색할 때 사용하는 방법
2. 델타 값은 한 좌표에서 네 방향의 좌표와 x, y의 차이를 저장한 List로 구현
3. 델타 값을 이용하여 특정 언소의 상하좌우에 위치한 원소에 접근할 수 있음
4. 이차원 List의 가장자리 원소들은 상하좌우 네 방향에 원소가 존재하지 않을 경우가 있으므로, Index를 체크하거나 Index의 범위를 제한해야 함
```

#### 델타를 이용한 2차 List 탐색 예제
```
# arr[0...n-1][0...n-1] : 2차원 List
dx = [0, 0, -1, 1] # 상하좌우
dy = [-1, 1, 0, 0]

for x in range(len(arr)):
    for y in range(len(arr[x])):
        for i in range(4):
            testX = x + dx[i]
            testY = y + dy[i]
            print(arr[testX][testY])
```

### 전치행렬  
행과 열의 값이 반대인 행렬을 의미  

#### 전치행렬 예제
```
arr = [[1,2,3],[4,5,6],[7,8,9]] # 3*3 행렬

for i in range(3):
    for j in range(3):
        if i < j:
            arr[i][j], arr[j][i] = arr[j][i], arr[i][j]
```

### zip(iterable*)
동일한 개수로 이루어진 자료형들을 묶어 주는 역할을 하는 함수  

#### zip 예제
```
alpha = ['a','b','c']
index = [1,2,3]
alpha_index = list(zip(alpha, index))
print(alpha_index) # [('a',1),('b',2),('c',3)]
```
```
arr = [[1,2,3],[4,5,6],[7,8,9]]
print(list(zip(*arr))) # [(1,4,7),(2,5,8),(3,6,9)]
```

<br>

## 2. 부분 집합

### 부분 집합의 합 문제
유한 개의 정수로 이루어진 집합이 있을 때, 이 집합의 부분 집합 중에서 그 집합의 원소를 모두 더한 값이 0이 되는 경우가 있는지를 알아내는 문제  
```
1. 완전 검색기법으로 부분 집합 합 문제를 풀기 위해서는 우선 집합의 모든 부분 집합을 생성한 후 각 부분 집합의 합을 계산함
2. 주어진 집합의 부분 집합을 생성하는 방법 생각해 보기
```

### 부분 집합의 수
```
Q. 어떤 집합의 부분 집합을 구할 경우 부분 집합의 총 개수가 몇 개일까요?
A. 1. 집합의 원소가 n개일 때, 공집합을 포함한 부분 집합의 수는 2^n개
   2. 각 원소를 부분 집합에 포함시키거나 포함시키지 않는 2가지 경우를 모든 원소에 적용한 경우의 수와 같음
```

#### Loop를 이용하여 확안하고, 부분 집합을 생성하는 방법의 예제
```
bit = [0,0,0,0]
for i in range(2):
    bit[0] = i                 # 0번째 원소
    for j in range(2):
        bit[1] = j             # 1번째 원소
        for k in range(2):
            bit[2] = k         # 2번째 원소
            for l in range(2):
                bit[3] = l     # 3번째 원소
                print(bit)     # 생성된 부분집합을 출력
```

```
비트 List가 [0,0,0,0] 일 경우 { }
비트 List가 [0,0,0,1] 일 경우 { 4 }
...
...
비트 List가 [1,1,1,1]일 경우 { 1, 2, 3, 4 } 출력
```
  
* **비트 List**  
대상 List의 각 원소를 포함할지 말지를 정하는 List
    
* **비트 연산자**  
0과 1로 이루어진 이진수에 대한 연산을 수행하는 연산자

    * `비트연산자`의 종류는 `&, |, <<, >>` 등이 있다.  
    * `&`는 비트 단위로 AND 연산을 하고, `|`는 비트 단위로 OR 연산을 한다.  
    * `<<`는 피연산자의 비트 열을 왼쪽으로 이동시키고, 마지막으로 `>>`는 피연산자의 비트 열을 오른쪽으로 이동시킨다.  

#### 보다 간결하게 부분 집합을 생성하는 방법의 예제 
```
arr = [3,6,7,1,5,4]
n = len(arr) # n : 원소의 개수

for i in range(1<<n):   # 1<<n : 부분 집합의 개수  64
    for j in range(n):  # 원소의 수만큼 비트를 비교함  6
        if i & (1<<j):  # i의 j번째 비트가 1이면 j번째 원소 출력  
            print(arr[j], end=",")
    print()
```

<br>

## 3. 검색
저장되어 있는 있는 자료 중에서 `원하는 항목(목적하는 탐색키를 가진 항목)`을 찾는 작업

### 순차 검색(Sequential Search)
* 일렬로 되어 있는 자료를 순서대로 검색하는 방법
* List나 연결 List 등 순차구조로 구현된 자료구조에서 유용함
* 구현이 쉽지만, 검색 대상이 많은 경우 수행시간의 증가로 비효율적임
* 2가지 경우가 있음
    - 정렬된 경우
    - 정렬되지 않은 경우

### 정렬되지 않는 자료의 검색 과정
```
1. 첫번째 원소부터 순서대로 검색대상과 키 값이 같은 원소가 있는지를 비교하여 찾음
2. 키 값이 동일한 원소를 찾으면 그 원소의 인덱스를 반환
3. 자료구조의 마지막에 갈 때까지 검색 대상을 찾지 못하면 검색 실패
```

* 첫 번째 원소를 찾을 때에는 1번 비교, 두 번째 원소를 찾을 때에는 2번 비교  
* `정렬되지 않은 자료`에서의 순차검색의 평균 비교 횟수
    - 1/n * (1+2+...+n) = (n+1)/2
* 시간 복잡도 : `O(n)`

#### 정렬되지 않는 자료의 예제
```
def sequentialSearch(a,n,key):
    i = 0
    while i < n and a[i] != key:
        i = i + 1
    
    if i < n: 
        return i
    else: 
        return -1
```

### 정렬된 자료의 검색 과정
```
1. 자료가 오름차순으로 정렬된 상태에서 검색을 실시한다고 가정
2. 자료를 순차적으로 검색하면서 키 값을 비교함
3. 원소의 키 값이 검색 대상의 키 값보다 크면 원소가 없다는 것이므로 더 이상 검색하지 않고 검색을 종료함
```

* 정렬되어 있으므로 검색 실패를 반환하는 경우 평균 비교 횟수가 반으로 줄어듦
* 시간 복잡도 : `O(n)`

#### 정렬된 자료의 예제
```
def sequentialSearch(a,n,key):
    i = 0
    while i < n and a[i] < key:
        i = i + 1
    
    if i < n and a[i] == key:
        return i
    else:
        return -1
```

### 이진 검색(Binary Search)
* 순차 검색보다 효율적인 검색 방법
* 자료의 가운데 항목의 키 값과 비교하여 다음 검색의 위치를 결정하고 검색을 계속하는 방법
    - 목적 키를 찾을 때까지 이진 검색을 순환적으로 반복 수행함으로써 `검색 범위를 반으로 줄여가면서 빠르게 검색`을 수행함
* 이진 검색을 하기 위해서는 `자료가 정렬된 상태`여야 함
* 정렬된 데이터 n개가 있는 경우의 시간복잡도
    - 순차 검색 시 O(N)의 시간이 걸리지만, 이진 검색 시 `O(logN)`의 시간이 걸림

### 이진 검색의 검색 과정
```
1. 자료의 중앙에 있는 원소를 선택
2. 중앙 원소의 값과 찾고자 하는 목표 값을 비교
3. 목표값 < 중앙 원소 값 : 자료의 왼쪽 반에 대해서 새로 검색을 수행
   목표값 > 중앙 원소 값: 자료의 오른쪽 반에 대해서 새로 검색을 수행
4. 찾고자 하는 값을 찾을 때까지 [1~3]의 과정을 반복
```

* 검색 범위의 `시작점과 종료점을 이용하여 검색을 반복 수행`함
* 이진 검색의 경우, 자료에 삽입이나 삭제가 발생하였을 때 `List의 상태를 항상 정렬 상태로 유지하는 추가 작업이 필요함`

#### 이진 검색의 예제
```
def binarySearch(a, key):
    start = 0
    end = len(a)-1
    while start <= end:
        middle = start + (end - start)//2
        if key == a[middle]: # 검색 성공
            return True
        elif key < a[middle]:
            end = middle-1
        else:
            start = middle+1
    return False # 검색 실패 
```

#### 재귀 함수를 이용한 이진 검색의 예제
```
def binarySearch(a, low, high, key):
    if low > high: # 검색 실패
        return False
    else:
        middle = (low + high)//2
        if key == a[middle]: # 검색 성공
            return True
        elif key < a[middle]:
            return binarySearch(a, low, middle-1, key)
        elif a[middle] < key:
            return binarySearch(a, middle+1, high, key)
```

### 인덱스(Indexing)
* 데이터베이스(Database)에서 유래, 테이블에 대한 동작 속도를 높임
* 룩 업 테이블(Look up table) 등의 용어로 사용함
* 인덱스를 저장하는데 필요한 디스크 공간은 보통 테이블 저장에 필요한 디스크 공간보다 작음
    - 인덱스는 키-필드만 갖고 있고, 테이블의 다른 세부 항목은 갖고 있지 않음
* List를 사용한 인덱스
    - 대량의 데이터를 매번 정렬하면, 프로그램의 반응은 느려질 수 밖에 없음
    - 이신림고등학교러한 대량 데이터의 성능 저하 문제를 해결하기 위해 List 인덱스를 사용할 수 있음
    - 원본 데이터에 데이터가 삽입될 경우 `상대적으로 크기가 작은 인덱스 List`를 정렬하기 때문에 속도가 빠름

<br>

## 4. 정렬

### 셀렉션 알고리즘
* 저장되어 있는 자료로부터 k번째로 큰 혹은 작은 원소를 찾는 방법
* 최소값, 최대값 혹은 중간값을 찾는 알고리즘을 의미하기도 함

### 셀렉션 선택 과정
```
1. 정렬 알고리즘을 이용하여 자료를 정렬
2. 원하는 순서에 있는 원소 가져오기
```

#### ex) k번째로 작은 원소를 찾는 알고리즘
* 1번부터 k번째까지 작은 원소들을 찾아 List의 앞쪽으로 이동시키고, List의 k번째를 반환
* k가 비교적 작을 때 유용하며 `O(kn)`의 수행시간을 필요로 함
```
def select(list, k):
    for i in range(0,k):
        minIndex = i
        for j in range(i+1, len(list)):
            if list[minIndex] > list[j]:
                minIndex = j
        list[i], list[minIndex] = list[minIndex], list[i]
    return list[k-1]
```

### 선택 정렬
* 주어진 자료들 중 `가장 작은 값의 원소부터 차례대로` 선택하여 위치를 교환하는 방식
* 셀렉션 알고리즘을 전체 자료에 적용한 것. 

### 선택 정렬 과정 `시간 복잡도 = O(n^2)`
```
1. 주어진 List 중에서 최소값을 찾음
2. 그 값을 List의 맨 앞에 위치한 값과 교환
3. 맨 처음 위치를 제외한 나머지 List를 대상으로 위의 과정을 반복
```
  
선택 정렬의 시간 복잡도 = `O(n^2)`
  
### 선택 정렬의 특성
| 알고리즘 | 평균 수행시간 | 최악 수행시간 | 알고리즘 기법 | 비고 |
|:---:|:---:|:---:|:---:|:---:|
| 선택 정렬 | O(n^2) | O(n^2) | 비교와 교환 | 교환의 횟수가 버블, 삽입정렬보다 작음 |

<br>

## Reference & Additional Resources
> SW Expert Academy  
