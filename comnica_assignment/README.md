Questions:

- Adott egy gomb. Elvileg minden rendben kód szinten, mégsem csinál semmit se hover, se egyéb eseményre (nem disabled). Mi lehet a probléma, mi okozhat ilyen jelenséget?

This could be caused by many things, some can be as simple as pointer-events being disabled on the css, css conflicts could also be an issue that could cause this behavior to happen. If everything in the code seems fine, it could be an issue with z-index elements overlapping or or parent elements blocking interactions.

- A designer a következőképpen álmodja meg a beviteli mező működését:

Kitöltetlen állapotban:
![not filled label](https://comnica.hu/wp-content/uploads/2024/10/Gomb1.png)

Kitöltött állapotban:
![filled label](https://comnica.hu/wp-content/uploads/2024/10/Gomb-2.png)

Mi lehet ezzel a működéssel az általános probléma?

There are two main issues for me, while code wise it might be fine, it breaks a well accepted convention where
the label text usually moves or disappears when the user types on the input field. Another big one is that it
causes accessibility concerns, the label text might get in the way of assisting reading software and it can make it
difficult for people with disabilities to properly navigate the form.
