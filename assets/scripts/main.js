Events.on(WorldLoadEvent, () => {
    // "const input = field.text();" gets the value entered into the text field
    const field = new TextField("0");
    const table = Table();
    const topPanel = new Table();
    const bottomPanel = new Table();
    const leftPanel = new Table();
    const rightPanel = new Table();

    Vars.ui.hudGroup.removeChild(table);
    Vars.ui.hudGroup.addChild(table);

    // table.setWidth(Scl.scl(500));
    table.margin(Scl.scl(18));
    table.setPosition(Scl.scl(0), Scl.scl(100));
    // table.setFillParent(true);

    table.background(Tex.pane);
    leftPanel.background(Tex.pane);
    rightPanel.background(Tex.pane);

    table.add(topPanel).left().padBottom(15).row();
    table.add(bottomPanel).left();

    topPanel.center();
    topPanel.button("[Mode]", () => {}).width(Scl.scl(130));
    topPanel.button("[type]", () => {}).width(Scl.scl(130)).padLeft(Scl.scl(10)).padRight(Scl.scl(15));
    topPanel.add(field).width(Scl.scl(150));
    table.pack();

    bottomPanel.center().setWidth(Scl.scl(400));
    bottomPanel.add(leftPanel).growX();
    leftPanel.top().left();
    leftPanel.add(new Label("INPUT")).row();
    leftPanel.add(new Label("[icon]: 90"));
    leftPanel.add(new Label("[icon]: 90"));

    bottomPanel.add(rightPanel).growX();
    rightPanel.top().left();
    rightPanel.add(new Label("OUTPUT")).row();
    rightPanel.add(new Label("[icon]: 90"));
    rightPanel.add(new Label("[icon]: 90"));

    table.pack();
});

/*
Absolutely! In Mindustry’s JS API (Scene2D), a **`Label`** is more than just text — it uses a **`LabelStyle`** object that defines its **font, color, background, alignment**, etc. You can tweak all of these in several ways.

Here’s a detailed breakdown:

---

### 1️⃣ Changing text color

```javascript
const label = new Label("Hello");
label.setColor(Color.red); // or Color.valueOf("ff0000")
```

* Works for solid colors.
* You can also dynamically change the color at runtime.

---

### 2️⃣ Changing the font

```javascript
const style = new LabelStyle();
style.font = Fonts.outlineSmall; // or Fonts.def, Fonts.large, etc.
const label = new Label("Hello", style);
```

* You need to **create a new LabelStyle** or copy an existing one.
* You can change font at creation time or via `label.setStyle(newStyle)`.

---

### 3️⃣ Adding a background

```javascript
const style = new LabelStyle();
style.background = Tex.pane; // any drawable (Tex.white, Tex.button, etc.)
const label = new Label("Hello", style);
```

* Makes the label look like a panel or button.
* Can be combined with color and font changes.

---

### 4️⃣ Changing alignment

```javascript
label.setAlignment(Align.center); // Align.left, Align.right, Align.top, Align.bottom
```

* Controls **how text is positioned inside the label**.
* Useful for labels inside panels with extra padding.

---

### 5️⃣ Updating style dynamically

```javascript
const oldStyle = label.getStyle();
const newStyle = new LabelStyle(oldStyle);
newStyle.font = Fonts.large;
newStyle.fontColor = Color.yellow;
label.setStyle(newStyle);
```

* Lets you **modify only certain style properties** without recreating everything.

---

### 6️⃣ Using markup for color or style

* Mindustry labels support **markup strings**:

```javascript
const label = new Label("[green]Green text[white] normal text");
```

* Can combine multiple colors, bold (`[b]`), italic (`[i]`), etc.

---

### ✅ Key takeaway

* **Label styling in Mindustry** is controlled by the `LabelStyle` object.
* You can adjust **font, color, background, alignment** either at creation or dynamically.
* For advanced HUDs, combining **background + color + markup** gives a very polished look.

---

If you want, I can show an example where your **left/right panel labels** are restyled with **backgrounds, colors, and dynamic tooltips** so it looks like a proper in-game HUD.

Do you want me to do that?

*/
