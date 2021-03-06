import templateCfg from '~/configs/template'
import partnersCfg from '~/configs/partners'
import friendsCfg from '~/configs/friends'
import techCfg from '~/configs/tech'
import faqCfg from '~/configs/faq'

export default {
  indexBlocksMobile: [
    // prettier-ignore
    { id: 101, order: 1, name: 'MainMobile', style: 'Default', },
    // { id: 102, order: 2, name: 'NavBtnsMobile', style: 'Default' },
    // prettier-ignore
    { id: 110, order: 10, name: 'TemplateMobile', style: 'Default', anchor: 'faq-block-mobile', ...faqCfg },
    { id: 109, order: 9, name: 'TechMobile', style: 'Default', ...techCfg },
    { id: 108, order: 8, name: 'QuizMobile', style: 'Default' },
    { id: 107, order: 7, name: 'PricingMobile', style: 'Default' },
    // prettier-ignore
    { id: 106, order: 6, name: 'FriendMobile', style: 'Default', ...friendsCfg, title1: "Интеграции" },
    // prettier-ignore
    { id: 105, order: 5, name: 'TemplateMobile', style: 'Default', ...templateCfg, image: null },
    // prettier-ignore
    { id: 104, order: 4, name: 'PartnerMobile', style: 'Default', anchor: 'partners-block-mobile', ...partnersCfg, },
    // prettier-ignore
    // { id: 103, order: 3, name: 'FunctionAndConnectionMobiel', style: 'Default', },
    { id: 111, order: 3, name: 'AlgorithmMobile', style: 'Default' },
  ],
  indexBlocks: [
    {
      id: 1,
      order: 1,
      name: 'Main',
      style: 'Default',
      title1: 'Единая платформа для управления<br> программами лояльности',
      title2: 'Бонусы | Сертификаты | Купоны | Скидки | Рассылки',
      // orderBtn: {
      //   show: true,
      //   text: 'Заказать КП',
      // },
    },
    // // {
    // //   id: 2,
    // //   order: 2,
    // //   name: 'Partners',
    // //   style: 'Default',
    // //   defaults: {
    // //     showItems: 3,
    // //   },
    // //   partners: [
    // //     {
    // //       id: 1,
    // //       title: 'Пожалуйста',
    // //       description: 'Коалиционная программа',
    // //       link: '/pozhalujsta/',
    // //       image: '/img/please.png',
    // //       details: {
    // //         title1: 'Коалиционная программа лояльности "Пожалуйста"',
    // //         businessName: 'Частный инвестор',
    // //         task: 'Коалиционная программа "Пожалуйста" с нуля!',
    // //         timing: '4 месяца',
    // //         descriptivePart: [
    // //           {
    // //             name: 'Брендбук',
    // //             items: [
    // //               'Бренд',
    // //               'Миссия бренда',
    // //               'Логотипы',
    // //               'Пресс-кит',
    // //               'Корпоративная полиграфия',
    // //               'Сувенирная полиграфия',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Концепция Программы',
    // //             items: [
    // //               'Цели и задачи Программы',
    // //               'Бизнес-модель',
    // //               'Операционная модель',
    // //               'Маркетинговая модель',
    // //               'Функциональная модель',
    // //               'Финансовая модель',
    // //               'Учетно юридическая схема',
    // //               'Технологическая модель',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Правила Программы',
    // //             items: [
    // //               'Общие положения программы "Пожалуйста"',
    // //               'Порядок начисления бонусов',
    // //               'Порядок использования бонусов',
    // //               'Правила коммуникаций',
    // //               'Правила обработки персональных данных',
    // //               'Правила выхода из Программы',
    // //               'Срок действия Программы',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Бизнес- процессы',
    // //             items: [
    // //               'Регистрация участника Программы',
    // //               'Распространение карт Программы',
    // //               'Авторизация в личных кабинетах',
    // //               'Покупки и возвраты участниками',
    // //               'Обращения участников',
    // //               'Подключение Партнеров к Программе',
    // //               'Взаиморасчеты в Программе',
    // //               'Техническая и маркетинговая поддержка',
    // //             ],
    // //           },
    // //         ],
    // //         mlRelease: [
    // //           {
    // //             name: 'Процессинг + CRM',
    // //             items: [
    // //               'Настройка бонусных правил',
    // //               'Генерация карт, настройка типов карт',
    // //               'Настройка кассового шлюза',
    // //               'Настройка модуля рассылок',
    // //               'Настройка модуля отчетности и аналитики',
    // //               'Настройка рабочего места оператора колл-центра',
    // //               'Заведение Партнеров в системе и назначение индивидуальных бонусных правил',
    // //               'Заведение набора типовых акций',
    // //               'Размещение IT-инфраструктуры на хостинге Заказчика',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Веб-сайт + ЛК',
    // //             items: [
    // //               'Дизайн веб-сайта',
    // //               'Верстка веб-страниц веб-сайта',
    // //               'Интеграция веб-сайта с процессингом',
    // //               'Копирайт',
    // //               'Контент',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Мобильные приложения',
    // //             items: [
    // //               'Дизайн мобильных приложений',
    // //               'Верстка экранов мобильных приложений',
    // //               'Интеграция приложений с процессингом',
    // //               'Копирайт',
    // //               'Контент',
    // //               'Размещение мобильных приложений в AppStore и Google Play',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Доступ Партнера',
    // //             items: [
    // //               'Виртуальная касса',
    // //               'Аналитика и отчетность',
    // //               'Клиенты',
    // //               'Продажи',
    // //               'Бухгалтерия',
    // //               'Заведение рассылок и акций',
    // //               'Живой чат с Оператором Программы',
    // //               'Размещение IT-инфраструктуры на хостинге Заказчика',
    // //             ],
    // //           },
    // //         ],
    // //         results:
    // //           'Проект реализован за 3,5 месяца. <br/> Программа продолжает развитие по плану',
    // //         images: {
    // //           desktop: ['pozhalujsta_macbook.png'],
    // //           mobile: [
    // //             {
    // //               btnText: 'Скачать для iOS',
    // //               url: 'https://itunes.apple.com/us/app/%D0%BA%D0%B0%D1%80%D1%82%D0%B0-%D0%BF%D0%BE%D0%B6%D0%B0%D0%BB%D1%83%D0%B9%D1%81%D1%82%D0%B0/id1298271662?l=ru&ls=1&mt=8',
    // //               image: 'pozhalujsta_iphone_1.png',
    // //             },
    // //             {
    // //               btnText: 'Скачать для Android',
    // //               url: 'https://play.google.com/store/apps/details?id=com.app.pleasecard',
    // //               image: 'pozhalujsta_iphone_2.png',
    // //               // image: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    // //             },
    // //           ],
    // //         },
    // //         siteUrl: 'http://plizcard.ru',
    // //       },
    // //     },
    // //     {
    // //       id: 2,
    // //       title: 'M5 BONUS',
    // //       description: 'Торговый центр',
    // //       link: '/m5_bonus/',
    // //       image: '/img/m5.png',
    // //       details: {
    // //         title1: 'Программа лояльности "M5 BONUS"',
    // //         businessName: 'Галерея обуви, ТРЦ Мегаполис, г.Екатеринбург',
    // //         task: 'Программа лояльности для ТРЦ для 25 арендаторов',
    // //         timing: '1 месяц',
    // //         descriptivePart: [
    // //           {
    // //             name: 'Концепция Программы',
    // //             items: [
    // //               'Цели и задачи Программы',
    // //               'Бизнес-модель',
    // //               'Операционная модель',
    // //               'Маркетинговая модель',
    // //               'Функциональная модель',
    // //               'Технологическая модель',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Правила Программы',
    // //             items: [
    // //               'Общие положения программы "M5 BONUS"',
    // //               'Порядок начисления бонусов',
    // //               'Порядок использования бонусов',
    // //               'Правила коммуникаций',
    // //               'Правила обработки персональных данных',
    // //               'Правила выхода из Программы',
    // //               'Срок действия Программы',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Бизнес- процессы',
    // //             items: [
    // //               'Регистрация участника Программы',
    // //               'Авторизация в личных кабинетах',
    // //               'Покупки и возвраты участниками',
    // //               'Обращения участников',
    // //               'Подключение Партнеров к Программе',
    // //               'Взаиморасчеты в Программе',
    // //               'Техническая и маркетинговая поддержка',
    // //             ],
    // //           },
    // //         ],
    // //         mlRelease: [
    // //           {
    // //             name: 'Процессинг + CRM',
    // //             items: [
    // //               'Настройка бонусных правил',
    // //               'Генерация карт, настройка типов карт',
    // //               'Настройка кассового шлюза',
    // //               'Настройка модуля рассылок',
    // //               'Настройка модуля отчетности и аналитики',
    // //               'Настройка рабочего места оператора колл-центра',
    // //               'Заведение Партнеров в системе и назначение индивидуальных бонусных правил',
    // //               'Заведение набора типовых акций',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Веб-сайт + ЛК',
    // //             items: [
    // //               'Дизайн веб-сайта',
    // //               'Верстка веб-страниц веб-сайта',
    // //               'Интеграция веб-сайта с процессингом',
    // //               'Копирайт',
    // //               'Контент',
    // //               'Хостинг веб-сайта',
    // //             ],
    // //           },
    // //           {
    // //             name: '25 Кабинетов Партнеров',
    // //             items: [
    // //               'Виртуальная касса',
    // //               'Аналитика и отчетность',
    // //               'Клиенты',
    // //               'Продажи',
    // //               'Бухгалтерия',
    // //               'Заведение рассылок и акций',
    // //               'Живой чат с Оператором Программы',
    // //             ],
    // //           },
    // //         ],
    // //         results:
    // //           'Проект реализован за 4 недели. <br/> Программа продолжает развитие по плану',
    // //         images: {
    // //           desktop: ['m5_1.png'],
    // //           mobile: [
    // //             {
    // //               btnText: 'Скачать для iOS',
    // //               url: null,
    // //               image: 'm5_2.png',
    // //             },
    // //             {
    // //               btnText: 'Скачать для Android',
    // //               url: null,
    // //               image: 'm5_3.png',
    // //             },
    // //           ],
    // //         },
    // //         siteUrl: 'http://m5shoes.ru',
    // //       },
    // //     },
    // //     {
    // //       id: 3,
    // //       title: 'Сладкоежкам везет',
    // //       description: 'Розничная сеть',
    // //       // link: '/sladkoezhkam_vezet/',
    // //       image: '/img/medoboryi.png',
    // //       details: {
    // //         title1: 'Программа лояльности "Сладкоежкам везёт"',
    // //         businessName: 'Розничная сеть "Медоборы", Крым, 70 магазинов',
    // //         task: 'Веб-сайт ПЛ, Система лояльности для ПЛ, модуль интеграция с 1С',
    // //         timing: '1,5 месяц',
    // //         descriptivePart: [
    // //           {
    // //             name: 'Концепция Программы',
    // //             items: [
    // //               'Цели и задачи Программы',
    // //               'Бизнес-модель',
    // //               'Операционная модель',
    // //               'Маркетинговая модель',
    // //               'Функциональная модель',
    // //               'Технологическая модель',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Правила Программы',
    // //             items: [
    // //               'Общие положения программы "Сладкоежкам везет"',
    // //               'Порядок начисления бонусов',
    // //               'Порядок использования бонусов',
    // //               'Правила коммуникаций',
    // //               'Правила обработки персональных данных',
    // //               'Правила выхода из Программы',
    // //               'Срок действия Программы',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Бизнес- процессы',
    // //             items: [
    // //               'Регистрация участника Программы',
    // //               'Распространение карт Программы',
    // //               'Авторизация в личных кабинетах',
    // //               'Покупки и возвраты участниками',
    // //               'Обращения участников',
    // //               'Подключение Франчази к Программе',
    // //               'Взаиморасчеты в Программе',
    // //               'Техническая и маркетинговая поддержка',
    // //             ],
    // //           },
    // //         ],
    // //         mlRelease: [
    // //           {
    // //             name: 'Процессинг + CRM',
    // //             items: [
    // //               'Настройка бонусных правил',
    // //               'Генерация карт, настройка типов карт',
    // //               'Настройка кассового шлюза',
    // //               'Настройка модуля рассылок',
    // //               'Настройка модуля отчетности и аналитики',
    // //               'Настройка рабочего места оператора колл-центра',
    // //               'Заведение торговых точек в системе и назначение индивидуальных бонусных правил',
    // //               'Заведение набора типовых акций',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Интеграция с самописной 1С (front + back)',
    // //             items: [
    // //               'Написание ТЗ на интеграцию системы M.Loyalty с 1С Розница 8.1',
    // //               'Написание ТЗ на интеграцию системы M.Loyalty с 1С Управление Торговлей 7.7',
    // //               'Разработка модулей интеграции',
    // //               'Тестирование, запуск в промышленную эксплуатацию',
    // //               'Передача модулей интеграции Заказчику',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Веб-сайт + ЛК',
    // //             items: [
    // //               'Дизайн веб-сайта',
    // //               'Верстка веб-страниц веб-сайта',
    // //               'Интеграция веб-сайта с процессингом',
    // //               'Копирайт',
    // //               'Контент',
    // //               'Хостинг веб-сайта',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Интерфейс менеджера ПЛ',
    // //             items: [
    // //               'Ручное начисление и списание бонусов',
    // //               'Аналитика и отчетность',
    // //               'Клиенты',
    // //               'Продажи',
    // //               'Бухгалтерия',
    // //               'Заведение рассылок и акций',
    // //               'Живой чат с Оператором Программы',
    // //             ],
    // //           },
    // //         ],
    // //         results:
    // //           'Проект реализован за 28 дней. <br/> Программа продолжает развитие по плану',
    // //         images: {
    // //           desktop: ['medobor_1.png'],
    // //           mobile: [
    // //             {
    // //               btnText: 'Скачать для iOS',
    // //               url: null,
    // //               image: 'medobor_2.png',
    // //             },
    // //             {
    // //               btnText: 'Скачать для Android',
    // //               url: null,
    // //               image: 'medobor_3.png',
    // //             },
    // //           ],
    // //         },
    // //         siteUrl: 'http://www.medobory.com/',
    // //       },
    // //     },
    // //     {
    // //       id: 4,
    // //       title: 'Нем-Ка',
    // //       description: 'Строительная компания',
    // //       link: null,
    // //       image: '/img/partner-nemka.png',
    // //       details: {
    // //         title1: 'Программа лояльности "Нем-Ка"',
    // //         businessName:
    // //           'Бонусная программа. Москва. Товары для строительства.',
    // //         task: 'Система лояльности для ПЛ, модуль интеграция с 1С',
    // //         timing: '1 месяц',
    // //         descriptivePart: [
    // //           {
    // //             name: 'Концепция Программы',
    // //             items: ['Заполнить'],
    // //           },
    // //         ],
    // //         mlRelease: [
    // //           {
    // //             name: 'Система лояльности',
    // //             items: [
    // //               'Разработка концепции Программы лояльности',
    // //               'Настройка условий программы лояльности',
    // //               'Настройка каналов коммуникации, настройка шаблонов сообщений и писем',
    // //               'Настройка личных кабинетов (менеджера и партнера)',
    // //               'Разработка Правил Программы (оферта для клиентов)',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Интеграция с 1С',
    // //             items: [
    // //               'Написание ТЗ на интеграцию системы M.Loyalty с 1С Управление Торговлей 10.3',
    // //               'Доработка и настройка модуля для 1С Управление Торговлей 10.3',
    // //               'Разработка модулей интеграции',
    // //               'Тестирование, запуск в промышленную эксплуатацию',
    // //               'Передача модулей интеграции Заказчику',
    // //             ],
    // //           },
    // //         ],
    // //         results: null,
    // //         images: null,
    // //         siteUrl: null,
    // //       },
    // //     },
    // //     {
    // //       id: 5,
    // //       title: 'Holika',
    // //       description: 'Сеть магазинов косметики',
    // //       link: null,
    // //       image: '/img/partner-holika.png',
    // //       details: {
    // //         title1: 'Программа лояльности "Holika-Holika"',
    // //         businessName:
    // //           'Бонусно-дисконтная программа. РФ. Сеть магазинов косметики (розница + интернет-магазины)',
    // //         task: 'Система лояльности для ПЛ, модуль интеграция с 1С',
    // //         timing: '3 месяц',
    // //         descriptivePart: [
    // //           {
    // //             name: 'Концепция Программы',
    // //             items: [
    // //               'Цели и задачи Программы',
    // //               'Бизнес-модель',
    // //               'Операционная модель',
    // //               'Маркетинговая модель',
    // //               'Функциональная модель',
    // //               'Финансовая модель',
    // //               'Учетно юридическая схема',
    // //               'Технологическая модель',
    // //             ],
    // //           },
    // //         ],
    // //         mlRelease: [
    // //           {
    // //             name: 'Система лояльности',
    // //             items: [
    // //               'Разработка концепции Программы лояльности',
    // //               'Настройка условий программы лояльности',
    // //               'Настройка каналов коммуникации, настройка шаблонов сообщений и писем',
    // //               'Настройка личных кабинетов (менеджера и партнера)',
    // //               'Разработка Правил Программы (оферта для клиентов)',
    // //               'Импорт клиентской базы с историей покупок',
    // //               'Доработка конструктора акций и коммуникаций по ТЗ',
    // //               'Доработка функционала и интерфейса личного кабинета менеджера',
    // //               'Разработка и запуск промо-сайта и личного кабинета клиента',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Интеграция с 1С',
    // //             items: [
    // //               'Написание ТЗ на интеграцию системы M.Loyalty с 1С Управление Торговлей 10.3',
    // //               'Доработка и настройка модуля для 1С Розница 8 и 1С УТ 11.4',
    // //               'Полная интеграция с 1С Битрикс Управление Сайтом',
    // //               'Тестирование, запуск в промышленную эксплуатацию',
    // //               'Передача модулей интеграции Заказчику',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Концепция франчайзи',
    // //             items: [
    // //               'Разработка концепции подключения франчайзи',
    // //               'Доработка систем и интерфейсов для работы с франчайзи (учёт | акции | маркетинг)',
    // //             ],
    // //           },
    // //         ],
    // //         results:
    // //           'Являемся эксклюзивным подрядчиком по реализации программы лояльности. <br/> Осуществляем полную поддержку франчайзинговой сети.',
    // //         images: null,
    // //         siteUrl: null,
    // //       },
    // //     },
    // //     {
    // //       id: 6,
    // //       title: 'Народные традиции',
    // //       description: 'Торговый дом',
    // //       link: null,
    // //       image: '/img/partner-national-tradition.png',
    // //       details: {
    // //         title1: 'Программа лояльности "Народные традиции"',
    // //         businessName:
    // //           'Бонусно-дисконтная программа. РФ. Сеть магазинов товаров для самогоноварения (розница + интернет-магазин)',
    // //         task: 'Система лояльности для ПЛ, модуль интеграция с 1С',
    // //         timing: '7 дней',
    // //         descriptivePart: [
    // //           {
    // //             name: 'Концепция Программы',
    // //             items: ['Заполнить'],
    // //           },
    // //         ],
    // //         mlRelease: [
    // //           {
    // //             name: 'Система лояльности',
    // //             items: [
    // //               'Разработка концепции Программы лояльности',
    // //               'Настройка условий программы лояльности',
    // //               'Настройка каналов коммуникации, настройка шаблонов сообщений и писем',
    // //               'Настройка личных кабинетов (менеджера и партнера)',
    // //               'Разработка Правил Программы (оферта для клиентов)',
    // //             ],
    // //           },
    // //           {
    // //             name: 'Интеграция с 1С',
    // //             items: [
    // //               'Написание ТЗ на интеграцию системы M.Loyalty с 1С Управление Торговлей 10.3',
    // //               'Доработка и настройка модуля для 1С Управление Торговлей 10.3',
    // //               'Разработка модулей интеграции',
    // //               'Тестирование, запуск в промышленную эксплуатацию',
    // //               'Передача модулей интеграции Заказчику',
    // //             ],
    // //           },
    // //         ],
    // //         results: null,
    // //         images: null,
    // //         siteUrl: null,
    // //       },
    // //     },
    // //   ],
    // // },
    // // {
    // //   id: 3,
    // //   order: 2,
    // //   name: 'SliderAnd4Image',
    // //   style: 'Default',
    // //   image1: {
    // //     url: '/img/example/s1.jpg',
    // //     href: 'https://google.com',
    // //     title: 'Хоккейный шлем — прочность, надежность и безопасность',
    // //     subtitle: 'Экипировки',
    // //   },
    // //   image2: {
    // //     url: '/img/example/s2.jpg',
    // //     href: '/partner/1',
    // //     title: 'Легкое пуховое одеяло для тепла зимой и комфорта летом',
    // //     subtitle: 'Текстиль',
    // //   },
    // //   image3: {
    // //     url: '/img/example/s3.jpg',
    // //     href: '/partner/2',
    // //     title: 'Трехколесный транспорт для начинающих гонщиков',
    // //     subtitle: 'Велосипеды',
    // //   },
    // //   image4: {
    // //     url: '/img/example/s4.jpg',
    // //     href: '/partner/3',
    // //     title: 'Деталь стильного образа для мужчин и женщин',
    // //     subtitle: 'Часы',
    // //   },
    // //   slides: [
    // //     { image: '/img/example/s5.jpg' },
    // //     { image: '/img/example/s6.jpg' },
    // //     { image: '/img/example/s7.jpg' },
    // //   ],
    // // },
    {
      id: 4,
      order: 4,
      name: 'Convenient',
      style: 'Default',
      section1: {
        title1: 'Удобно, когда всё в одном месте',
        title2: 'ТОЛЬКО НУЖНЫЙ ФУНКЦИОНАЛ И КЛЮЧЕВЫЕ ПОКАЗАТЕЛИ',
        image: '/img/mokap_2.png',
        items: [
          {
            name: 'Аналитика',
            items: ['Клиенты', 'Магазины', 'Товары', 'Бонусы'],
          },
          {
            name: 'Продажи',
            items: [
              'По списку клиентов',
              'По магазинам',
              'По кассирам',
              'По датам и времени',
            ],
          },
          {
            name: 'Сертификаты',
            items: [
              'Электронные',
              'Пластиковые',
              'Гибкие правила',
              'Продажи и гашения',
            ],
          },
          {
            name: 'Рассылки',
            items: [
              'Создание шаблонов',
              'Запуск онлайн',
              'Аналитика по рассылкам',
              'Триггерные цепочки',
            ],
          },
          {
            name: 'Акции',
            items: [
              'Создание шаблонов',
              'Запуск онлайн',
              'Аналитика',
              'Цепочки акций',
            ],
          },
          {
            name: 'Клиенты',
            items: [
              'Динамика продаж',
              'Участие в акциях',
              'RFM-Анализ',
              'Сегментация 360',
            ],
          },
          {
            name: 'Магазины',
            items: [
              'Динамика продаж',
              'Динамика клиентов',
              'Списки магазинов для акций',
            ],
          },
          {
            name: 'Товары',
            items: [
              'Динамика продаж',
              'Сезонность',
              'Списки товаров для акций',
            ],
          },
        ],
      },
      section2: {
        title1: 'Понятный конструктор <br/> условий поощрения',
        title2: null,
        image: '/img/ipad-air.png',
        items: [
          {
            name: 'Кого поощрять',
            items: ['Всех', 'Сегменты клиентов', 'Сегменты карт'],
          },
          {
            name: 'Как поощрять',
            items: ['Процент', 'Сумма', 'Значение Fix'],
          },
          {
            name: 'Когда поощрять',
            items: ['Заданный период', 'Определенные дни', 'Определенные часы'],
          },
          {
            name: 'Где поощрять',
            items: [
              'Во всех точках продаж',
              'Во отдельных точках продаж',
              'На определенной кассе',
            ],
          },
          {
            name: 'Какое основание',
            items: [
              'Чек покупки',
              'Позиция чека покупки',
              'Действия клиента',
              'События вокруг клиента',
            ],
          },
          {
            name: 'Как понять результат',
            items: [
              'Аналитика по клиентам',
              'Аналитика по продажам',
              'Аналитика по акциям',
              'Готовые отчеты',
            ],
          },
          {
            name: 'Как сообщить',
            items: [
              'SMS, E-mail, Push, Viber, Telegram',
              'Социальные сети',
              'Личный кабинет',
            ],
          },
        ],
      },
    },
    {
      id: 5,
      order: 5,
      name: 'Template',
      style: 'Default',
      ...templateCfg,
    },
    {
      id: 16,
      order: 16,
      name: 'Template',
      style: 'Default',
      anchor: 'faq-block',
      ...faqCfg,
    },
    {
      id: 6,
      order: 6,
      name: 'Algorithm',
      style: 'Default',
    },
    {
      id: 7,
      order: 1,
      name: 'Advertising',
      style: 'Default',
    },
    {
      id: 8,
      order: 7,
      // order: 0,
      name: 'Connection',
      style: 'Default',
    },
    {
      id: 9,
      order: 8,
      // order: 0,
      name: 'Pricing',
      style: 'Third',
      withoutAdditional: true,
    },
    {
      id: 10,
      order: 6,
      name: 'Friend',
      style: 'Second',
      ...friendsCfg,
    },
    {
      id: 11,
      order: 3,
      name: 'Partners',
      style: 'TabAndTag',
      ...partnersCfg,
    },
    {
      id: 12,
      order: 12,
      name: 'Tech',
      style: 'Default',
      ...techCfg,
    },
  ],
}
