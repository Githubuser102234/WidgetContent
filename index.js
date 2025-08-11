// Background color
widget.backgroundColor = new Color("#222");

// Load an image (replace URL with your own)
let img = await loadImage("https://raw.githubusercontent.com/Githubuser102234/WidgetContent/refs/heads/main/IMG_0555.jpeg");

// Create a horizontal stack for image + text
let stack = widget.addStack();
stack.centerAlignContent();

// Add the image to the stack
let imgEl = stack.addImage(img);
imgEl.imageSize = new Size(249, 140); // image size in points
imgEl.cornerRadius = 8;
stack.addSpacer(5); // space between image and text

// Add text next to the image
let tStack = stack.addStack();
tStack.layoutVertically();

// Main title text
let t = tStack.addText("Hello World!");
t.textColor = Color.white();
t.font = Font.boldSystemFont(16);

// Subtitle text
let s = tStack.addText("Updated remotely 🎉");
s.textColor = Color.gray();
s.font = Font.systemFont(12);
