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
        // console.log(univer);
        sortData(univer)

        const courseCard = document.createElement('div');
        courseCard.classList = `card w-96 bg-base-100 shadow-xl mt-4 gap-8`;
        courseCard.innerHTML = `
        <figure><img src="${univer.image}" alt="Shoes" /></figure>
        <div class="card-body">
          
          <h1>features</h1>
          <ol>
          <li>1. ${univer.features[0]}</li>
          <li>2. ${univer.features[1]}</li>
          <li>3. ${univer.features[2]}</li>
        </ol>  
        <hr>
        <h2 class="card-title">
            ${univer.name}
          </h2>
          <p>${univer.published_in}</p>
          <div class="card-actions justify-end"> 
          <button onclick="my_modal_5.showModal()" class="btn btn-circle">
          <i class="fa-solid fa-arrow-right"></i>
        </button>
          </div>
        </div>
        
        `

        courseContainer.appendChild(courseCard);

    }

}



const sortData = (univer) =>{
    var a = univer.published_in;
    // console.log(a);
    var intArr = Array.from(String(a))
    intArr.sort()
    console.log(intArr);
    
}

loadUniver();