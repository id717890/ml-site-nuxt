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
          :class="{ 'not-valid': !validateName }"
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
          :class="{ 'not-valid': !validatePhone }"
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
import ModalRules from '~/components/Modal/Rules'

export default {
  name: 'ModalCallMe',
  directives: { mask },
  data: () => ({
    name: null,
    phone: '+7',
    // name: 'Zamir',
    // phone: '+79527247500',
    loading: false,
    submit: false,
  }),
  computed: {
    validateForm() {
      return this.validateName && this.validatePhone
    },
    validateName() {
      if (!this.submit) return true
      return this.name?.length > 0
    },
    validatePhone() {
      if (!this.submit) return true
      return this.phone?.length === 18
    },
  },
  methods: {
    ...mapActions('lead', [types.CREATE_REQUEST]),
    openLink() {
      // this.$emit('close')
      // this.$router.push({ name: 'rules' })
      this.$modal.show(
        ModalRules,
        {},
        {
          ...this.$const.MODAL_SETTINGS,
          width: 700,
          maxWidth: 700,
          scrollable: true,
        }
      )
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
        phone: parseInt(this.$helper.getClearPhone(this.phone, true)),
        formname: 'Mloyalty_CALL',
        type: 1, // тип лида; "Заказать звонок" это 1 тип, "Демо" - это 5 тип
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
