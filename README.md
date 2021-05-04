# Is Your Number?
##이 숫자는 당신의 숫자인가요?

게임을 시작하기 전에, 랜덤으로 당신을 숫자를 정하세요~!

이제 이 숫자를 가지고 게임장에 입장해 보세요~!

제한 시간 60초동안 칠판에 표시되는 계산식과 당신의 숫자와의 대소관계를 판별해주세요~!

60초의 제한시간이 다 흐르거나, 비교를 3번 실패하면 게임오버가 되니 주의하세요~!

단순히 크고 작음을 비교하는 게임이지만... 두뇌 회전이 된다는 사실은 변함없습니다~!

그럼 당신의 숫자는 당신에게 얼마나 많은 점수를 가져다 줄까요?

## 게임 진행

### 1. Title

![Title](https://user-images.githubusercontent.com/49430407/117021657-7fdb9880-ad32-11eb-8b24-39f6054d8489.gif)

게임 시작 버튼을 누르면 숫자를 지정하는 페이지로 넘어갑니다.

### 2. Setting Number

![setting](https://user-images.githubusercontent.com/49430407/117021971-cd580580-ad32-11eb-9cf1-f495db0127cf.gif)

게임의 들어가기 위한 자신의 숫자를 랜덤하게 뽑습니다.

### 3. Enter Main Game

![start](https://user-images.githubusercontent.com/49430407/117022187-fe383a80-ad32-11eb-807f-adb916eafb4b.gif)

숫자가 정해지면, game start 버튼을 눌러 게임을 시작합니다.

### 4. Main Game

계산식의 결과값과 자신의 지정 숫자의 대소관계를 비교합니다.

![right](https://user-images.githubusercontent.com/49430407/117022384-2cb61580-ad33-11eb-98ac-049aa259bd13.gif)

만약, 옳은 답을 선택했다면 점수가 +1 됩니다.


![wrong](https://user-images.githubusercontent.com/49430407/117022602-553e0f80-ad33-11eb-8665-847e497ff66e.gif)

만약, 오답을 선택했다면, 경고가 +1 됩니다.

![gameover](https://user-images.githubusercontent.com/49430407/117022744-6f77ed80-ad33-11eb-85f2-a0f712c32e86.gif)

경고가 +3이상이면, 게임이 종료되고 game over page로 전환됩니다.

### 5. Game Over

![save and return](https://user-images.githubusercontent.com/49430407/117022922-9afad800-ad33-11eb-9735-b53aa93f3797.gif)

Game Over 페이지에서는 그동안 얻은 score를 서버에 저장합니다. 저장을 마친 후에는 return home 버튼이 활성화되고, 클릭하면 다시 Title로 돌아갑니다.
