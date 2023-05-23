class Password {
  constructor(
    lowercase: boolean,
    uppercase: boolean,
    numbers: boolean,
    symbols: boolean,
    length: number
  ) {
    let text = "";
    while (text.length < length) {
      if (lowercase && Math.random() > 0.5) {
        text += "abcdefghijklmnopqrstuvwxyz".charAt(
          Math.floor(Math.random() * 26)
        );
      }
      if (uppercase && Math.random() > 0.5) {
        text += "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(
          Math.floor(Math.random() * 26)
        );
      }
      if (numbers && Math.random() > 0.5) {
        text += "1234567890".charAt(Math.floor(Math.random() * 10));
      }
      if (symbols && Math.random() > 0.5 && text.length > 0) {
        text += "~!@#$%^&*()_+-{[}]".charAt(Math.floor(Math.random() * 20));
      }
    }
    this.text = text;
  }

  text: string;
}

export default Password;
