## Auto Scaling 이란
![](https://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/images/as-basic-diagram.png)

애플리케이션의 로드를 처리할 수 있도록 정확한 수의 EC2 인스턴스를 보유하도록 보장<br>
위의 사진처럼 오토 스케일링 그룹을 통해 최대, 최소, 목표 인스턴스 개수를 지정할 수 있다.

## 장점
- 내결함성 향상 - 비정상적인 인스턴스를 탐지하여 정상적인 인스턴스로 대체
- 가용성 향상 - 트래픽을 처리할 수 있는 적절한 용량을 찾음
- 비용 관리 개선 - 동적으로 인스턴스를 시작하거나 종료할 수 있다
- 가변 수요 대처
- 웹 앱 아키텍처 - 고객의 트래픽을 처리하기 위해 여러 개의 App 사본을 하나의 EC2 인스턴스에서 호스팅하고 요청을 처리함
- 가용 영역 전반에 인스턴스 분산
<br><br><br><br><br><br>