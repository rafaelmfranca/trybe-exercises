const fs = require('fs').promises;

(async () => {
  const strArr = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const promises = strArr.map((str, index) =>
    fs.writeFile(`file${index + 1}.txt`, str)
  );

  await Promise.all(promises);

  const readFiles = Array.from({ length: strArr.length }, (_, index) =>
    fs.readFile(`file${index + 1}.txt`, 'utf8')
  );

  const fileContents = await Promise.all(readFiles);
  await fs.writeFile('fileAll.txt', fileContents.join(' '));
})();
