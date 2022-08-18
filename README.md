## Contact list

## Описание:

Двустраничное веб-приложение с возможностью авторизации и страницей контактов пользователя.<br>
Были использованы следующие технологии: TypeScript, React, React-Router(v6), ReduxToolkit, UI - react-bootstrap.

## Инструкция:

#### При разработке приложения была использована версия node 17.9
#### При разворачивании приложения локально необходимо выполнить следующие команды:
- Склонировать репозиторий и перейти в директорию<br>
<code>git clone https://github.com/Re-Dnor/Contacts.git</code>
- Далее установить зависимости проекта и json-server, используемый в качестве fake-rest-api<br>
<code>npm i</code>
<code>npm install -g json-server</code>
<code>json-server --watch -p4000 db.json</code>
- Запуск приложения<br>
<code>npm start</code>