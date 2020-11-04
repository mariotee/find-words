import Dictionary from "util/dictionary.json";

export interface IOutput {
    word: string;
    def: string;
}

interface IDictionary {
  [key:string]: string;
}

export function Match(token:string):IOutput[] {
  const parsedToken:string = token.replace(/[^A-z.]/g,"");
  const found:IOutput[] = [];
  const regex:RegExp = new RegExp(parsedToken);

  const keysToSearch = Object.keys(Dictionary).filter((x) => x.length === parsedToken.length);

  for (const key of keysToSearch) {
    if (regex.test(key)) {
        found.push({word: key, def: (Dictionary as IDictionary)[key]});    
    }
  }

  return found;
}
