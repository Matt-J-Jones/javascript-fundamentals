let counter = 0;

const increment = (n) => {
  setInterval(() => { n++; console.log(n);}, 1000)
}

increment(counter)