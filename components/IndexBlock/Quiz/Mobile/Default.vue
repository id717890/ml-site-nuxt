<template>
  <div class="px-4 pt-4 mb-5">
    <div class="quiz-mobile">
      <p class="quiz-mobile_title mb-3">
        Хотите точно знать сроки и стоимость по Вашему запросу?
      </p>
      <div
        v-for="(line, index) in lines"
        :key="index"
        class="quiz-mobile_line mb-2"
      >
        <span class="dot me-2"></span>
        <!-- eslint-disable-next-line -->
        <span class="text" v-html="line"></span>
      </div>
      <div class="mt-3 d-flex flex-row flex-nowrap align-items-center">
        <!-- <img src="/img/mobile/frame3.png" alt="" /> -->
        <a
          href="#"
          class="btn btn-quiz mx-0 mt-4"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Узнать стоимость
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuizBlockMobileDefault',
  data: () => ({
    lines: [
      'Уделите 5 минут времени',
      'Ответьте вдумчиво на 10 вопросов',
      'Укажите контактные данные <br /> (звонить и спамить не будем) ',
      'Дождитесь коммерческого <br /> предложения на почту и по смс',
    ],
  }),
  methods: {
    openQuiz() {
      // TODO перенести в конфиг ID quiz
      // eslint-disable-next-line no-undef
      Marquiz.showModal('5aa97f14ee90d20018523ad6')
    },
  },
}
</script>

<style lang="scss">
.btn-quiz {
  color: white;
  background: transparent;
  border-color: white;
  padding: 8px 18px;
}

.btn-quiz:hover {
  color: white;
}
.quiz-mobile {
  position: relative;
  background: linear-gradient(88.08deg, #1b316a 2.6%, #194064 97.91%), #fff;
  box-shadow: 0 0 17px rgba(4, 33, 108, 0.1);
  border-radius: 10px;
  padding: 20px;

  .quiz-mobile_title {
    font-style: normal;
    font-size: 28px;
    font-weight: 700;
    line-height: 107.4%;
    color: #fff;
  }

  .quiz-mobile_line {
    display: flex;
    flex-flow: row nowrap;
    color: white;
    font-size: 18px;
    align-items: center;

    .dot {
      width: 8px;
      border-radius: 50%;
      height: 8px;
      background: linear-gradient(
        270deg,
        #ff5766 0%,
        #ff856f 100%,
        #ff856f 100%
      );
      box-shadow: -1px 3px 8px rgba(0, 0, 0, 0.1);
    }
  }
}
</style>
