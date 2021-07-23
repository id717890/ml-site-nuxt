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
          v-model="name"
          class="form-block__obligatory-field"
          name="ФИО"
          type="text"
          placeholder="Введите имя*"
        />
      </div>

      <div class="form__form-block form-block">
        <input
          id="FORM1_field2"
          v-model="phone"
          v-mask="'+7 (###) ###-##-##'"
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
        <button :disabled="loading" type="submit" @click.prevent="sendRequest">
          <div
            v-if="loading"
            class="spinner-border spinner-border-sm text-light"
            role="status"
          >
            <span class="sr-only">Loading...</span>
          </div>
          Отправить
        </button>
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
import { mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
import types from '~/store/types'
export default {
  name: 'ModalCallMe',
  directives: { mask },
  data: () => ({
    name: null,
    phone: null,
    // name: 'Zamir',
    // phone: '+79527247500',
    loading: false,
  }),
  methods: {
    ...mapActions('lead', [types.CREATE_REQUEST]),
    async sendRequest() {
      this.loading = true
      const result = await this[types.CREATE_REQUEST]({
        leadname: this.name,
        phone: this.phone,
        formname: 'MLoyalty - ЗВОНОК', // наименование формы
        leadmessage: {
          subject: this.name,
          leadtext: 'Запрос ЗВОНКА',
        },
      })
      this.loading = false
      if (result) {
        this.$emit('close')
      }
    },
  },
}
</script>
