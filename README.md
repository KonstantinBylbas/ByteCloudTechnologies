Треба зробити калькулятор на прикладі https://wasabi.com/cloud-storage-pricing/#cost-estimates, який буде порівнювати ціни різних провайдерів.<br/>
<br/>
Опис завдання:<br/>
• Приклад дизайну на малюнку нижче, але можете робити на власний розсуд.<br/>
• Графік вертикальний для широких екранів та горизонтальний для вузьких.<br/>
• Дві шкали Storage і Transfer у GB, з кроком в 1 GB та діапазоном від 0 до 1000 GB.<br/>
• Іконки на сайтах провайдерів. Ціни не відповідають реальним та вказані за 1 GB.<br/>
• Стовпчик з найнижчою ціною кольору провайдера (червоний, оранжевий, фіолетовий, блакитний). Інші стовпчики сірі.<br/>
• Зовнішність (HTML, CSS) не так важлива, як правильність (JS).<br/>
<br/>
Ціни для калькулятору:<br/>
1) backblaze.com:<br/>
——— мінімальний платіж 7$.<br/>
——— ціна Storage: $0.005.<br/>
——— ціна Transfer: $0.01.<br/>
<br/>
2) bunny.net:<br/>
——— має бути можливість переключатись між опціями HDD та SSD.<br/>
——— максимальний платіж 10$.<br/>
——— ціна Storage:<br/>
——— ——— HDD - $0.01.<br/>
——— ——— SSD - $0.02.<br/>
——— ціна Transfer: будь-яка опція - $0.01.<br/>
<br/>
3) scaleway.com:<br/>
——— має бути можливість переключатись між опціями Multi та Single.<br/>
——— ціна Storage:<br/>
——— ——— Multi - 75 GB безкоштовно, потім $0.06.<br/>
——— ——— Single - 75 GB безкоштовно, потім $0.03.<br/>
——— ціна Transfer: будь-яка опція - 75 GB безкоштовно, потім $0.02.<br/>
<br/>
4) vultr.com:<br/>
——— мінімальний платіж 5$.<br/>
——— ціна Storage: $0.01.<br/>
——— ціна Transfer: $0.01.<br/>
<br/>
Приклади для перевірки правильності розрахунку:<br/>
а) Storage 50 GB, Transfer 50 GB:<br/>
——— backblaze.com = 7$.<br/>
——— bunny.net HDD = 1$, SSD = 1.5$.<br/>
——— scaleway.com Multi = 0$, Single = 0$.<br/>
——— vultr.com = 5$.<br/>
<br/>
б) Storage 100 GB, Transfer 200 GB:<br/>
——— backblaze.com = 7$.<br/>
——— bunny.net HDD = 3$, SSD = 4$.<br/>
——— scaleway.com Multi = 4$, scaleway.com Single = 3.25$.<br/>
——— vultr.com = 5$.<br/>
<br/>
в) Storage 300 GB, Transfer 300 GB:<br/>
——— backblaze.com = 7$.<br/>
——— bunny.net HDD = 6$, SSD = 9$.<br/>
——— scaleway.com Multi = 18$, Single = 11.25$.<br/>
——— vultr.com = 6$.<br/>
<br/>
г) Storage 1000 GB, Transfer 1000 GB:<br/>
——— backblaze.com = 15$.<br/>
——— bunny.net HDD = 10$, bunny.net SSD = 10$.<br/>
——— scaleway.com Multi = 74$, Single = 46.25$.<br/>
——— vultr.com = 20$.
