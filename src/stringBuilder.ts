class stringBuilder{
    private data: string;
    constructor(input: string){
        this.data = input;
    }

    public getString(): string{
        return this.data;
    }

    public setString(data:string){
        this.data = data;
    }

    public reverse(): void{
        let chars: string[] = this.data.split('');
        for(var i = 0; i < chars.length / 2; i++){
            let cTmp:string = chars[i];
            let cTmp2:string = chars[chars.length - i - 1];
            chars[i] = cTmp2;
            chars[chars.length - i - 1] = cTmp;
        }

        this.data = chars.join('');
    }
}

let word:stringBuilder = new stringBuilder('Maddy Austin');
console.log(word.getString());
word.setString("Maddy");
console.log(word.getString());
word.reverse();
console.log(word.getString());
