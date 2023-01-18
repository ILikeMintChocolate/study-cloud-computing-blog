## Elastic Load Balancing 이란
![](https://upload.wikimedia.org/wikipedia/commons/a/a6/Elasticsearch_Cluster_August_2014.png)

네트워크 기술의 일종으로 트래픽을 하나 이상의 서버나 장비로 분산하는 역할을 한다.


![](https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSX_XhpNyaNR-1RmRpWQbKILEtkdBpouxeqhnuzuBbWwHbEVmo8)

스케일아웃 방식에서 여러개의 노드를 클러스터로 구성할 때 로드 밸런싱을 사용하여 트래픽을 분산한다

## 특징
- health check (상태확인) - ELB와 연결된 인스턴스의 연결 상태를 수시로 체크
- sticky session - 클라이언트가 처음 접속한 서버로 계속 연결시켜줌
- 고가용성 구성 - Route53 등의 AWS의 다른 서비스와 연계하여 가용성 서비스를 제공


## 종류
- Classic Load Balancer - EC@-classic 네트워크 내에 구축된 애플리케이션을 대상
- Network Load Balancer
- Application Load Balancer

여러 개의 가용 영역을 활성화하고, 모든 가용 영역에 등록된 대상으로 트래픽을 분산하는 교차 영역 로드 밸런싱이 가능하다.