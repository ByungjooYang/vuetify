<template>
    <v-container>
        <v-card>
            <v-card-title>
                Typography
            </v-card-title>
            <!-- 기본색상 :  primary, secondary, error, accent, info, success, warning -->
            <!-- sm 이상일 때 display: block, 그 외에 display: none -->
            <v-card class="pa-3 text-h2 primary lighten-4 d-none d-sm-block"> <!-- lighten : 더 연하게 -->
                컨텐츠
            </v-card>
            <v-card class="pa-3 text-h2 secondary darken-4"> <!-- dark : 더 진하게 -->
                컨텐츠
            </v-card>
            <v-card class="pa-3 text-h2 error">
                컨텐츠
            </v-card>
            <v-card class="pa-3 text-h2 primary--text">
                컨텐츠
            </v-card>
            <v-card class="pa-3 text-h2 secondary--text">
                컨텐츠
            </v-card>
            <v-card class="pa-3 text-h2 error--text">
                컨텐츠
            </v-card>
            <v-contaier class="grey lighten-3">
                <v-card class="pa-3" outlined>
                    <p class="text-h1">
                        Heading 1
                    </p>
                    <p class="text-h2">
                        Heading 2
                    </p>
                    <p class="text-h3 text-sm-subtitle-1">
                        <!-- text 가 sm 이상일 때 subtitle-1 을 적용하고 그 이하일 경우 h3  -->
                        Heading 3
                    </p>
                    <p class="display-4">
                        <!-- 2.0 이하에서 사용되었던 display 속성 -->
                        display-4
                    </p>
                    <p class="text-h1">
                        display-4
                    </p>
                    <p class="font-weight-black">
                        font-weight-black
                    </p>
                    <p class="font-weight-thin">
                        font-weight-black
                    </p>
                    <p class="text-justify"> <!-- 맞춤 정렬 -->
                        이에 국내 반도체 패키징 대표 산·학 단체인 '반도체 패키징 발전전략 포럼'이 첨단 패키징 기술 대응 전략과 생태계 조성 방법을 모색하는 전문가 교류·협력의 장을 마련했다.
                        올해 처음 개최된 '반도체 패키징 발전전략 심포지엄'에는 국내 반도체 산업을 대표하는 대표 기업이 참여, 첨단 패키징 기술 현황을 점검하고 미래 생존법을 제시했다. 첨단 패키징 산업 발전을 위한 업계 자구책뿐만 아니라 정책 제언도 이뤄졌다.
                    </p>
                    <p class="text-center">
                        이에 국내 반도체 패키징 대표 산·학 단체인 '반도체 패키징 발전전략 포럼'이 첨단 패키징 기술 대응 전략과 생태계 조성 방법을 모색하는 전문가 교류·협력의 장을 마련했다.
                        올해 처음 개최된 '반도체 패키징 발전전략 심포지엄'에는 국내 반도체 산업을 대표하는 대표 기업이 참여, 첨단 패키징 기술 현황을 점검하고 미래 생존법을 제시했다. 첨단 패키징 산업 발전을 위한 업계 자구책뿐만 아니라 정책 제언도 이뤄졌다.
                    </p>
                    <p class="text-right">
                        이에 국내 반도체 패키징 대표 산·학 단체인 '반도체 패키징 발전전략 포럼'이 첨단 패키징 기술 대응 전략과 생태계 조성 방법을 모색하는 전문가 교류·협력의 장을 마련했다.
                        올해 처음 개최된 '반도체 패키징 발전전략 심포지엄'에는 국내 반도체 산업을 대표하는 대표 기업이 참여, 첨단 패키징 기술 현황을 점검하고 미래 생존법을 제시했다. 첨단 패키징 산업 발전을 위한 업계 자구책뿐만 아니라 정책 제언도 이뤄졌다.
                    </p>
                    <br>
                    <p class="text-center text-sm-right"> <!-- sm 이상일 떈 우측 정렬, 아닐 땐 중앙 정렬 -->
                        이에 국내 반도체 패키징 대표 산·학 단체인 '반도체 패키징 발전전략 포럼'이 첨단 패키징 기술 대응 전략과 생태계 조성 방법을 모색하는 전문가 교류·협력의 장을 마련했다.
                        올해 처음 개최된 '반도체 패키징 발전전략 심포지엄'에는 국내 반도체 산업을 대표하는 대표 기업이 참여, 첨단 패키징 기술 현황을 점검하고 미래 생존법을 제시했다. 첨단 패키징 산업 발전을 위한 업계 자구책뿐만 아니라 정책 제언도 이뤄졌다.
                    </p>
                </v-card>
            </v-contaier>
        </v-card>
    </v-container>
</template>

<script>
  export default {

  }
</script>
