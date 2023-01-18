## EBS 란
![](https://d1.awsstatic.com/product-marketing/Storage/EBS/2x-Product-Page-Diagram_Amazon-Elastic-Block-Store.ccfa6a042138077ff56b627845860315168f3dc3.png)

Elastic Block Store의 약자로 인스턴스용 영구 블록 스토리지를 뜻한다

## 장점
- 영구 스토리지 - 볼륨 수명은 특정 EC2 인스턴스와 독립적
- 범용 - EBS 볼륨은 모든 운영체제에서 사용할수 있는 형식이 지정되지 않은 원시 블록 디바이스
- 고성능 - 로컬 EC2 드라이브와 같거나 더 우수한 성능을 제공
- 높은 안정성 - 가용 영역 내에서 기본적으로 이중화 됨
- 뛰어난 복원력 - EBS는 더 높은 내구성의 신규 볼륨(io2)를 제공하여 99.8%-99.9%의 내구성과 0.001%의 연간 장애율(AFR)을 지원할 수 있도록 설계 <br/>
기타 모든 Amazon EBS 볼륨은 99.8%-99.9%의 내구성과 0.1%-0.2%의 AFR을 제공할 수 있도록 설계
- 가변 크기 - 볼륨의 크기는 1GB ~ 16TB
- 사용 편의성 - 쉽게 생성하고 연결, 백업, 복원, 삭제할 수 있음