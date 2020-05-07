class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv() {
        let div = document.createElement('div');
        document.body.append(div);
        div.style.cssText = `height: ${this.height};width: ${this.width};
        background: ${this.bg}; font-size: ${this.fontSize};
         text-align: ${this.textAlign}`;
        let answer = prompt("Введите любой текст");
        div.textContent = answer;
    }
}
const opt = new Options ('40px','200px','green','12px','center');
opt.createDiv();