function writeCards(array, eventName) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return newArray;
  }

  function countDown(num) {
    let i = num;
    while (i >= 0) {
        console.log(i)
      i--
    };
}
