<template>
<div class="modal_block">
  <div class="black_theme_modal modal-demo">
    <div class="openModal"><i class="fa fa-times close"></i>
        <p>Дорогой друг! Спасибо за интерес<br>к нашему продукту. Заполни, пожалуйста, форму, и мы вышлем тестовый доступ в систему!</p>

        <form class="form av-form2">
            <div class="form__form-block form-block">
                <input class="form-block__obligatory-field" id="FORM2_field1" name="ФИО" type="text" placeholder="Введите имя*" />
            </div> 
        
            <div class="form__form-block form-block">
                <input class="form-block__phone-field-11 form-block__number-field form-block__obligatory-field" id="FORM2_field2" name="Телефон" type="text" placeholder="Введите номер телефона*">
            </div>

            <div class="form__form-block form-block">
                <input class="form-block__mail-field" id="FORM2_field3" name="E-mail" type="text" placeholder="Введите email*">
            </div>
        
            <div class="form__form-block form-block form-block-submit">
                <button type="submit">Отправить</button>
                <input name="title" type="hidden" value="Заказать звонок" />
            </div>

            <div class="form__form-select form-block">
                <p>Нажимая кнопку, вы даете согласие <br> на <router-link to="/approval/" title="Подробнее" class="pers">обработка персональных данных</router-link></p>
            </div> 
        </form>
    </div>
  </div>

  <div class="black_theme_modal modal-call">
    <div class="openModal"><i class="fa fa-times close"></i>
        <p>Дорогой друг! <br> Спасибо за интерес к нашему сервису. Заполни, пожалуйста, форму, и мы перезвоним в течение рабочего дня!</p>

        <form class="form av-form2">
            <div class="form__form-block form-block">
                <input class="form-block__obligatory-field" id="FORM1_field1" name="ФИО" type="text" placeholder="Введите имя*" />
            </div> 
        
            <div class="form__form-block form-block">
                <input class="form-block__phone-field-11 form-block__number-field form-block__obligatory-field" id="FORM1_field2" name="Телефон" type="text" placeholder="Введите номер телефона*">
            </div>

            <div class="form__form-block form-block form-block-submit">
                <button type="submit">Отправить</button>
                <input name="title" type="hidden" value="Заказать звонок" />
            </div>

            <div class="form__form-select form-block">
                <p>Нажимая кнопку, вы даете согласие <br> на <router-link to="/approval/" title="Подробнее" class="pers">обработка персональных данных</router-link></p>
            </div> 
        </form>
    </div>
  </div>
</div>
</template>

<script>
window.addEventListener('DOMContentLoaded', function() {

  var isInitDemo = false,
    isInitCall = false,
    openDemolBtn = document.querySelector('[data-open_demo]'),
    openCalllBtn = document.querySelectorAll('[data-open_call]');

  function openModalDemo(){
    var elModal  = document.querySelector('.modal-demo');

    if(isInitDemo==false) {
    isInitDemo = true;
    document.querySelector('.modal-demo .fa-times.close').addEventListener('click',
          function(event) {
            event.preventDefault();
            elModal.classList.toggle('active');
          }
      );
    }
    elModal.classList.toggle('active');
  }

    function openModalCall(){
    var elModal  = document.querySelector('.modal-call');

    if(isInitCall==false) {
    isInitCall = true;
    document.querySelector('.modal-call .fa-times.close').addEventListener('click',
          function(event) {
            event.preventDefault();
            elModal.classList.toggle('active');
          }
      );
    }
    elModal.classList.toggle('active');
  }

  openDemolBtn.addEventListener('click', function(event) {
    openModalDemo();
  });

  for (let i = 0; i < openCalllBtn.length; i++) {
    openCalllBtn[i].addEventListener('click', function(event) {
      openModalCall();
    });
  }


});

</script>
