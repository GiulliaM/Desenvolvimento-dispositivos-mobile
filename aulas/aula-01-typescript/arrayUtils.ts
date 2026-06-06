// T é o tipo dos elementos do array — funciona com number, string ou qualquer objeto
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

// K extends keyof T garante que 'key' é uma chave válida de T em tempo de compilação
// Record<string, T[]> mapeia cada valor de chave para um array de T
export function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
  return arr.reduce<Record<string, T[]>>((acc, obj) => {
    const groupKey = String(obj[key]);
    (acc[groupKey] = acc[groupKey] ?? []).push(obj);
    return acc;
  }, {});
}

// K extends keyof T limita a chave a propriedades de T
// A checagem em runtime garante que só somamos valores numéricos, evitando NaN
export function sumBy<T, K extends keyof T>(arr: T[], key: K): number {
  return arr.reduce((total, obj) => {
    const value = obj[key];
    return total + (typeof value === 'number' ? value : 0);
  }, 0);
}
