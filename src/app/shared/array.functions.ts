function sum<T>(array: T[], predicate: (expense: T) => boolean, select: (expense: T) => number) {
    let sumValue = 0;
    array.forEach(expense=> {
      if(predicate(expense))
      sumValue += select(expense);
    });
    return sumValue;
  }

export const arrays = {
    sum
}