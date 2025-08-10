widget.backgroundColor = new Color("#222");

let t = widget.addText("Hello from the web!");
t.textColor = Color.white();
t.font = Font.boldSystemFont(16);

let s = widget.addText("Updated remotely 🎉");
s.textColor = Color.gray();
s.font = Font.systemFont(12);
