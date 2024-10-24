# Code explanation:

I decided to keep it simple and code it all on the App.tsx. I tried to design it as similar as the picture provided. Some things such as the lines (missing) and the computer image were a bit harder to implement since it was hard to find replacements that looked good with the colors provided. Outside of that I tried to keep it as similar as possible.

For the button I made a component that can be fully customizable, you can change both the text and the styling without having to constantly re-create new components or classes for it. When clicking it, it shows "button clicked!" on the console.

The code as it is it's not responsive. I only have one small display (macbook) at home so it is difficult for me to properly test it on bigger resolutions so I apologize for that in advance. Ideally I would have used breakpoints to properly make the website responsive on screens of every size.


# Questions:

## Adott egy gomb. Elvileg minden rendben kód szinten, mégsem csinál semmit se hover, se egyéb eseményre (nem disabled). Mi lehet a probléma, mi okozhat ilyen jelenséget?

This could be caused by many things, some can be as simple as pointer-events being disabled on the css, css conflicts could also be an issue that could cause this behavior to happen. If everything in the code seems fine, it could be an issue with z-index elements overlapping or or parent elements blocking interactions.

## A designer a következőképpen álmodja meg a beviteli mező működését:

**Kitöltetlen állapotban:**

![not filled label](https://comnica.hu/wp-content/uploads/2024/10/Gomb1.png)

**Kitöltött állapotban:**

![filled label](https://comnica.hu/wp-content/uploads/2024/10/Gomb-2.png)

**Mi lehet ezzel a működéssel az általános probléma?**

There are two main issues for me, while code wise it might be fine, it breaks a well accepted convention where
the label text usually moves or disappears when the user types on the input field. Another big one is that it
causes accessibility concerns, the label text might get in the way of assisting reading software and it can make it
difficult for people with disabilities to properly navigate the form.

## Írj egy tetszőleges JS funkciót, ami lekér egy felhasználó listát egy képzeletbeli API-ról, majd miután ezt sikerrel megtette, lekér egy szín listát, majd miután ez is sikerült, egy tetszőleges színt rendel a 1-1 felhasználóhoz és így adja vissza a felhasználók listáját. Hiba esetén a console-ra ír illetve eredménytől függetlenül a console-ra írja, ha végzett.

You can find the codesandbox for the question here: https://codesandbox.io/p/sandbox/festive-dew-6f5pp9?file=%2Fsrc%2Findex.mjs
please let me know if it doesn't work!
