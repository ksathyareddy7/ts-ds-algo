/**
 * @param {string[]} words
 * @return {number}
 */
function uniqueMorseRepresentations(words: string[]) {
  let letterToMorse: any = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };

  let set = new Set();
  for (let i = 0; i < words.length; i++) {
    // build morse string for each word and store it in set
    let sb = "";
    words[i].split("").forEach((letter: string) => {
      sb += letterToMorse[letter];
    });
    set.add(sb);
  }
  return set.size;
}
