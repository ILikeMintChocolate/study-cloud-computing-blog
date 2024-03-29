## VPC 란

![](https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210706122706/External_network.png)

논리적으로 격리된 네트워크 공간을 할당하여 가상 네트워크에서 AWS 리소스를 이용할 수 있는 서비스

## 구성요소
- 자체 IP 주소 범위
- 서브넷
- 라우팅 테이블
- 네트워크 게이트웨이

## IP
- Private IP
  - 인터넷을 통해 연결할 수 없으며 VPC 내부에서만 사용 가능<br>
  - 서브넷 범위에서 자동 할당<br>
  - 동일 네트워크에서 인스턴스간 통신할 때 사용

- Public IP
  - 인터넷을 통해 연결 가능
  - 인스턴스와 인터넷 간의 톤신을 위해 사용

- Elastic IP
  - 동적 컴퓨팅을 위해 고안된 고정 Public IP

## Subnet
VPC 내부에서 분리된 IP block<br>
각 가용영역에 하나 이상의 서브넷 추가 가능<br>
단일 가용영역에서만 생성 가능<br>
여러 가용영역으로 확장 불가<br>

## 인터넷 게이트웨이
-  한 네트워크에서 다른 네트워크로 이동하기 위해 거쳐야 하는 지점
- VPC와 인터넷 간에 통신을 할 수 있도록 함

## NAT 게이트웨이
외부 네트워크에 알려진 것과 다른 IP 주소를 사용하는 내부 네트워크에서 내부 IP를 외부 IP로 변환하는 서비스
<br><br><br><br><br><br>