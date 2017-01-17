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
        for(var i = 1; i < chars.length; i++){
            let cTmp:string = chars[i];
            chars[i] = chars[chars.length -1];
            chars[chars.length - 1] = cTmp;
        }

        this.data = chars.join('');
    }
}

let word:stringBuilder = new stringBuilder('Maddy Austin');
console.log(word.getString());