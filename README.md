# 🖥️ fluent-TS
TypeScript types for Roblox-TS, allowing you to effectively use the Fluent library without it being a painful experience.

### 🔌 Installation

```
npm install --save-dev github:mr-suno/fluentTS
```

---

### 📖 How-To

You can import the Fluent library using the code below,
along with creating a tab:
```ts
const fluent = load_url('https://github.com/mr-suno/Fluent/releases/latest/download/main.lua') as Fluent;

const window = fluent.CreateWindow({
    'Title': 'Your Script',                         // Title of your library
    'SubTitle': 'Any subheader',                    // Content next to title
    'TabWidth': 160,                                // Changes how large (X axis) the tabs are
    'Size': UDim2.fromOffset(625, 570),             // Offset: X, Y (Use Udim2.fromScale() for Scale!)
    'Acrylic': false,                               // Adds blur if true
    'Theme': 'Darker',                              // Changes theme (No docs, sorry!)
    'MinimizeKey': Enum.KeyCode.LeftControl         // Changes keybind (Enum)
});

const tabs = {                                      // Inside of a table is optional
    main: window.AddTab({
        Title: 'Main',
        Icon: ''                                    // lucide.dev/icons for Icons!
    }),
}

tabs.main.AddButton({
    Title: 'My button',
    Description: 'Press me for a cookie!',
    Callback: () => {
        print('Hello, world!');
    }
});
```
