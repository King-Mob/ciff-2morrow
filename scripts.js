const slogan = document.getElementById("slogan");

//loop through slogan children, applying a style and timing out
const letters = [];
for (const letter of slogan.children) {
  letters.push(letter);
}

letters.forEach((letter, i) => {
  setTimeout(() => {
    letter.classList.add("letter-wave");
  }, i * 100);
});

const title = document.getElementById("title");

const titleLetters = [];
for (const letter of title.children) {
  titleLetters.push(letter);
}

titleLetters.forEach((letter, i) => {
  setTimeout(() => {
    letter.classList.add("letter-hue");
    letter.classList.add(`letter-position-${i < 21 ? i : 21}`);
  }, i * 100);
});
