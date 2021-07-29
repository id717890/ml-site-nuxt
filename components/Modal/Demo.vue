<template>
  <div class="modal-demo">
    <i class="fa fa-times close" @click="$emit('close')"></i>
    <p>
      Дорогой друг! Спасибо за интерес<br />к нашему продукту. Заполни,
      пожалуйста, форму, и мы вышлем тестовый доступ в систему!
    </p>

    <form class="form av-form2">
      <div class="form__form-block form-block">
        <input
          id="FORM2_field1"
          v-model="name"
          class="form-block__obligatory-field"
          :class="{ 'not-valid': !validateName }"
          name="ФИО"
          type="text"
          placeholder="Введите имя*"
        />
      </div>

      <div class="form__form-block form-block">
        <input
          id="FORM2_field2"
          v-model="phone"
          v-mask="'+7 (###) ###-##-##'"
          class="
            form-block__phone-field-11
            form-block__number-field
            form-block__obligatory-field
          "
          :class="{ 'not-valid': !validatePhone }"
          name="Телефон"
          type="text"
          placeholder="Введите номер телефона*"
        />
      </div>

      <div class="form__form-block form-block">
        <input
          id="FORM2_field3"
          v-model="email"
          class="form-block__mail-field"
          :class="{ 'not-valid': !validateEmail }"
          name="E-mail"
          type="text"
          placeholder="Введите email*"
        />
      </div>

      <div class="form__form-block form-block form-block-submit">
        <button
          type="submit"
          :disabled="loading || !validateForm"
          @click.prevent="sendRequest"
        >
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
          <a href="#" title="Подробнее" class="pers" @click.prevent="openLink">
            обработка персональных данных
          </a>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { mask } from 'vue-the-mask'
import types from '~/store/types'
import ModalMessage from '~/components/Modal/Message.vue'

export default {
  name: 'ModalDemo',
  directives: { mask },
  data: () => ({
    name: null,
    phone: '+7',
    email: null,
    // name: 'Zamir',
    // phone: '+79527247500',
    // email: 'zam@gmail.com',
    loading: false,
    submit: false,
  }),
  computed: {
    validateForm() {
      return this.validateName && this.validatePhone && this.validateEmail
    },
    validateName() {
      if (!this.submit) return true
      return this.name?.length > 0
    },
    validatePhone() {
      if (!this.submit) return true
      return this.phone?.length === 18
    },
    validateEmail() {
      if (!this.submit) return true
      return /.+@.+/.test(this.email)
    },
  },
  methods: {
    ...mapActions('lead', [types.CREATE_REQUEST]),
    openLink() {
      this.$emit('close')
      this.$router.push({ name: 'rules' })
    },

    async sendRequest() {
      this.loading = true
      this.submit = true
      if (!this.validateForm) {
        this.loading = false
        return
      }
      const result = await this[types.CREATE_REQUEST]({
        leadname: this.name,
        phone: this.phone,
        email: this.email,
        formname: 'MLoyalty - DEMO', // наименование формы
        leadmessage: {
          subject: this.name,
          leadtext: 'Запрос ДЕМО',
        },
      })
      this.loading = false
      if (result) {
        this.$emit('close')
        this.$modal.show(ModalMessage, {}, this.$const.MODAL_SETTINGS)
      }
    },
  },
}
</script>
