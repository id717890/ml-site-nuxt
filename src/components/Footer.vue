<template>
    <footer class="footer">
        <div class="container">
            <div class="flex">
                <div class="box box_1">
                    <router-link to="/"><img src="../assets/img/logo_white.png" alt="Logo"></router-link>
                    <div class="copi">© 2010-{{ new Date().getFullYear() }} Все права защищены</div>
                </div>
                <div class="box box_2">
                    <div class="btn_block flex">
                        <button type="button" class="btn bg_tr btn-consultation" data-open_call>Заказать звонок</button>
                        <button type="button" class="btn btn-order">Узнать стоимость</button>
                    </div>
                    <router-link to="/approval/" title="Подробнее" class="pers">Обработка персональных данных</router-link>
                    </div>
                <div class="box box_3">
                    <div class="title_footer">Контактная информация:</div>
                    <a href="tel:+74999901863" class="tel" title="Позвонить">+7 (499) 990-18-63</a>
                    <a href="mailto:info@mloyalty.ru" class="mail" title="Написать письмо">info@mloyalty.ru</a>
                </div>
            </div>
        </div>
    </footer>
</template>