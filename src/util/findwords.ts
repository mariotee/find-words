import Dictionary from "util/dictionary.json" 

interface IOutput {
    word: string;
    def: string;
}

export default function Algorithm(token:string) {
  const found:IOutput[] = [];
  const regex:RegExp = new RegExp(token);

  const keysToSearch = Object.keys(Dictionary).filter((x) => x.length === token.length);

  for (const key of keysToSearch) {
    if (regex.test(key)) {
        found.push({word: key, def: (Dictionary as any)[key]});    
    }
  }

  return found;
}