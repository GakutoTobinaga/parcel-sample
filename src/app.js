import axios from 'axios';

async function fetchData() {
  try {
    const randomNumber = Math.floor(Math.random() * 30) + 1;
    const response = await axios.get(`https://dummyjson.com/recipes/${randomNumber}`);

    const recipeName = response.data.name;
    const ingredients = response.data.ingredients;
    const instructions = response.data.instructions;

    // レシピ名を<h2>に表示
    const titleElement = document.getElementById('recipe-name');
    titleElement.textContent = recipeName;
    // 材料を表示
    const ingredientsList = document.createElement("ul");
    ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = ingredient;
        ingredientsList.appendChild(listItem);
    })
    // 手順を表示
    const instructionsList = document.createElement('ul');
    instructions.forEach(step => {
      const listItem = document.createElement('li');
      listItem.textContent = step;
      instructionsList.appendChild(listItem);
    });

    // <body>に材料リスト、手順リストを追加
    document.getElementById("display-ingredients-area").appendChild(ingredientsList);
    document.getElementById("display-instructions-area").appendChild(instructionsList);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// データ取得関数を実行
fetchData();
