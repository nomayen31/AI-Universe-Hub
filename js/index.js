const loadUniver = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const univers = data.data.tools;
    // console.log(univers);
    displayCourses(univers)

}

const displayCourses = univers => {

    const courseContainer = document.getElementById('course-container');

    for (const univer of univers) {
        console.log(univer);

        const courseCard = document.createElement('div');
        courseCard.classList = `card w-96 bg-base-100 shadow-xl `;
        courseCard.innerHTML = `
        <figure><img src="${univer.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">
            ${univer.name}
          </h2>
         
          <ol>
          <li>1. ${univer.features[0]}</li>
          <li>2. ${univer.features[1]}</li>
          <li>3. ${univer.features[2]}</li>
        </ol>  
          <div class="card-actions justify-end">
            <div class="badge badge-outline">Fashion</div> 
            <div class="badge badge-outline">Products</div>
          </div>
        </div>
        
        `

        courseContainer.appendChild(courseCard);

    }

}

loadUniver();