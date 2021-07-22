<template>
  <div class="modal-call">
    <i class="fa fa-times close" @click="$emit('close')"></i>
    <p>
      Дорогой друг! <br />
      Спасибо за интерес к нашему сервису. Заполни, пожалуйста, форму, и мы
      перезвоним в течение рабочего дня!
    </p>

    <form class="form av-form2">
      <div class="form__form-block form-block">
        <input
          id="FORM1_field1"
          class="form-block__obligatory-field"
          name="ФИО"
          type="text"
          placeholder="Введите имя*"
        />
      </div>

      <div class="form__form-block form-block">
        <input
          id="FORM1_field2"
          class="
            form-block__phone-field-11
            form-block__number-field
            form-block__obligatory-field
          "
          name="Телефон"
          type="text"
          placeholder="Введите номер телефона*"
        />
      </div>

      <div class="form__form-block form-block form-block-submit">
        <button type="submit">Отправить</button>
        <input name="title" type="hidden" value="Заказать звонок" />
      </div>

      <div class="form__form-select form-block">
        <p>
          Нажимая кнопку, вы даете согласие <br />
          на
          <router-link to="/approval/" title="Подробнее" class="pers"
            >обработка персональных данных</router-link
          >
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {}
</script>
