<template>
  <div class="container-fluid">
    <div class="row pt-5">
      <div class="col-6 ps-5 pe-3">
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Интеграции
        </a>
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Наши клиенты
        </a>
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Демо-версия
        </a>
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Цена
        </a>
      </div>
      <div class="col-6 ps-3 pe-5">
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Бизнес-логика
        </a>
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Заказать КП
        </a>
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Функционал
        </a>
        <a
          href="#"
          class="btn bg_tr btn-order mb-3"
          style="white-space: nowrap"
          @click.prevent="openQuiz"
        >
          Звонок мне
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBtns',
}
</script>
