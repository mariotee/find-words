import Dictionary from "util/dictionary.json";

export interface IOutput {
    word: string;
    def: string;
}

interface IDictionary {
  [key:string]: string;
}

export function Match(token:string):IOutput[] {
  const found:IOutput[] = [];
  const regex:RegExp = new RegExp(token);

  const keysToSearch = Object.keys(Dictionary).filter((x) => x.length === token.length);

  for (const key of keysToSearch) {
    if (regex.test(key)) {
        found.push({word: key, def: (Dictionary as IDictionary)[key]});    
    }
  }

  return found;
}