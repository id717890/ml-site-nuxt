<template>
  <div
    class="cd-panel cd-panel--from-right js-cd-panel-main"
    :class="{ ' cd-panel--is-visible': showPanel }"
  >
    <i
      class="cd-panel__close fa fa-times close my-times"
      @click="togglePanel"
    ></i>
    <div class="cd-panel__header px-4 pt-1 pb-1" style="border: none">
      <p class="flex-grow-1 px-4"></p>

      <!-- <i class="fa fa-times close my-times" @click="togglePanel"></i> -->
    </div>

    <div class="cd-panel__container">
      <div
        class="
          cd-panel__content
          px-4
          py-3
          d-flex
          flex-column
          justify-content-center
        "
      >
        <p class="text-center demo-text">
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
              v-mask="'(###) ###-##-##'"
              class="
                form-block__phone-field-11
                form-block__number-field
                form-block__obligatory-field
                ml-phone-input
              "
              :class="{ 'not-valid': !validatePhone, filled: phone }"
              name="Телефон"
              type="text"
              placeholder="Введите номер телефона*"
            />
            <label for="FORM2_field2"></label>
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
            <p style="font-weight: 300" class="demo-text">
              Нажимая кнопку, вы даете согласие <br />
              на
              <a
                href="#"
                title="Подробнее"
                class="pers"
                @click.prevent="openLink"
              >
                обработка персональных данных
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import { mask } from 'vue-the-mask'
import types, { SHOW_SIDE_PANEL } from '~/store/types'
import ModalMessage from '~/components/Modal/Message.vue'
import ModalRules from '~/components/Modal/Rules'

export default {
  name: 'SidePanelPageDemo',
  directives: { mask },
  data: () => ({
    name: null,
    phone: '',
    email: null,
    // name: 'Zamir',
    // phone: '+79527247500',
    // email: 'zam@gmail.com',
    loading: false,
    submit: false,
  }),
  computed: {
    ...mapState({
      showPanel: (state) => state?.panel?.show,
    }),
    validateForm() {
      return this.validateName && this.validatePhone && this.validateEmail
    },
    validateName() {
      if (!this.submit) return true
      return this.name?.length > 0
    },
    validatePhone() {
      if (!this.submit) return true
      return this.phone?.length === 15
    },
    validateEmail() {
      if (!this.submit) return true
      return /.+@.+/.test(this.email)
    },
  },
  methods: {
    ...mapMutations('panel', [SHOW_SIDE_PANEL]),
    ...mapActions('lead', [types.CREATE_REQUEST]),
    togglePanel() {
      this[SHOW_SIDE_PANEL](!this.showPanel)
    },
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
    clearForm() {
      this.name = null
      this.phone = null
      this.email = null
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
        email: this.email,
        formname: 'Mloyalty_DEMO',
        type: 5, // тип лида; "Заказать звонок" это 1 тип, "Демо" - это 5 тип
      })
      this.loading = false
      if (result) {
        // this.$emit('close')
        this.$modal.show(ModalMessage, {}, this.$const.MODAL_SETTINGS)
      }
    },
  },
}
</script>

<style scoped>
.demo-text {
  font-size: 1rem;
  color: #7f7f7f;
}
</style>
