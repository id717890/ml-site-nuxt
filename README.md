1) Устанавливаем Node.js https://nodejs.org/en/

2) Устанавливаем Vue.js командой npm install -g @vue/cli

3) Устанавливаем командой npm i vue-router - Для возможностей реализации страниц без перезагрузки 

4) Создаём новый проект vue create mloyalty-site (mloyalty-site - название проекта)

5) Запускаем проект командой: npm run serve

6) Устанавливаем пакет для рендеринга страницы: npm i vue-router


    Основной файл проекта - App.vue

    Все файлы компоненты находятся в папке components

        Шапрка сайта - Header.vue
        Файл "Единая платформа для управления" - UnifiedPlatform.vue
        Файл "Партнеры" - OurPartners.vue
            Файл шаблона карточки партнёра - OurPartnersItem.vue


# mloyalty-site

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

create web.config file https://dnilvincent.com/blog/posts/host-vuejs-app-on-iis

instal URL Rewrite https://www.iis.net/downloads/microsoft/url-rewrite

create site on iis

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


<!-- 
git add *
git commit -m "Commit message"
git push origin master 
-->