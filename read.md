1. Устанавливаем GIT
2.
3.
4. git init Запускаем git
5. git config --local user.name "Martin937" Объявляем свое имя
6. git config --local user.email "Martin937@yandex.ru" Объявляем свой имейл
7. git config --local core.autocrlf true Параметры установки окончаний строк
8. git config --local core.safecrlf warn Параметры установки окончаний строк
9. git config --local core.quotepath off Установка отображения unicode
10.
11. git status Посмотреть состояние
12. git add -A Добавить все файлы
13. git commit -a -m”message” Создание контрольной точки
14. git add -A + git commit -a -m”message” Вводить после внесения всех изменений
15. git log Посмотреть изменения
16.
17. Создаём репозиторий на GITHUB и связываем его с проектом
18.
19. git remote add origin https://github.com/Martin937/Family-Tree.git Прописываем путь к github
20. git remote set-url origin https://github.com/Martin937/Family-Tree.git Если нужно изменить уже существующий
21. git push -u origin master Заливка на github
22. git pull Обновление всех связей и изменений
23. git push Заливка на github
24.
25.
26.
