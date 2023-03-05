const loadUniverse = () => {
    const URL = `https:openapi.programming-hero.com/api/ai/tools`;
    fetch(URL)
        .then((res) => res.json())
        .then((data) => displayData(data.data.tools.slice(0, 6)))
        .catch((err) => console.log(err));
    document.getElementById("spinear").classList.add("block");
};

const displayData = (universeDatas) => {
    const cardDiv = document.getElementById("card");
    cardDiv.innerHTML = "";
    universeDatas.forEach((universeData) => {
        let count = 1;
        const div = document.createElement("div");
        div.innerHTML = `
    <div class="card-body">
    <figure><img src=${universeData.image} alt="Shoes" /></figure>
      <h2 class="font-bold">Features</h2>
      <ul class="text-base font-normal text-[#585858]">
            <li>${universeData.features[0] ? count++ : ""} ${universeData.features[0] ? universeData.features[0] : ""
            }</li>
            <li>${universeData.features[1] ? count++ : ""} ${universeData.features[1] ? universeData.features[1] : ""
            }</li>
            <li>${universeData.features[2] ? count++ : ""} ${universeData.features[2] ? universeData.features[2] : ""
            }</li>
            <li>${universeData.features[3] ? count++ : ""} ${universeData.features[3] ? universeData.features[3] : ""
            }</li> 
          </ul>
          <div style="justify-content: space-between;" class="flex my-3">
       <div class="items-start text-start my-3 mx-5">
       <h2 class="card-title font-semibold text-2xl text-[#111111]">${universeData.name
            }</h2>
       <p><i  class="fa-solid fa-calendar-days"> </i> ${universeData.published_in
            }</p>         
   </div>
   <div class="my-auto mr-5">
   <label  onclick="details('${universeData.id
            }')"  for="modals" class="border-none"><i class="fa-solid fa-arrow-right-long"></i></label>
   </div>
       </div>
    </div>
    `;
        cardDiv.appendChild(div);
        document.getElementById("spinear").classList.add("hidden");

    });
};
const showAllDataS = () => {
    const URL = `https:openapi.programming-hero.com/api/ai/tools`;
    fetch(URL)
        .then((res) => res.json())
        .then((data) => displayData(data.data.tools));
    document.getElementById("btn-seeMore").classList.add("hidden");
};

const details = (id) => {
    const URL = `https:openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => modalUiDisplay(data.data));
};
const modalUiDisplay = (data) => {
    console.log(data);
    document.getElementById("detailModel").innerText = data.description;
    document.getElementById("price").innerText =
        data.pricing === null ||
            data.pricing[0].price === "0" ||
            data.pricing[0].price === "No cost"
            ? "Free of Cost  "
            : data.pricing[0].price;
    document.getElementById("plan").innerText =
        data.pricing === null || data.pricing[0].plan === "Free"
            ? "/ Basic"
            : "/ Basic";
    document.getElementById("price2").innerText =
        data.pricing === null ||
            data.pricing[1] === "0" ||
            data.pricing[1].price === "No cost"
            ? "Free of cost"
            : data.pricing[1].price;
    document.getElementById("plan2").innerText =
        data.pricing === null || data.pricing[0].plan === "Free"
            ? "/ Pro"
            : "/ Pro";
    const feature = document.getElementById("feature");
    const newDiv = document.createElement("div");
    let count = 1;
    feature.innerHTML = "";
    newDiv.innerHTML = `
        <ul class="font-normal text-base text-left text-[#585858]">
        <li>${data.integrations === null
            ? ""
            : data.features[1].feature_name
                ? count++
                : ""
        } ${data.features[1].feature_name ? data.features[1].feature_name : ""}</li>
            <li>${data.features[2].feature_name ? count++ : ""} ${data.features[2].feature_name ? data.features[2].feature_name : ""
        }</li>
            <li>${data.features[3].feature_name ? count++ : ""} ${data.features[3].feature_name ? data.features[3].feature_name : ""
        }</li>
        </ul>
        `;
    let add = 1;
    feature.appendChild(newDiv);
    const IntegrationTitle = document.getElementById("font");
    font.innerHTML = "";
    const fontDiv = document.createElement("div");
    fontDiv.innerHTML = `
            <ul class="font-normal text-base text-left text-[#585858]">
            <li>${data.integrations === null
            ? "No Data Found"
            : data.integrations[0]
                ? add++
                : ""
        } ${data.integrations === null
            ? ""
            : data.integrations[0]
                ? data.integrations[0]
                : ""
        }</li>
            <li>${data.integrations === null ? "" : data.integrations[1] ? add++ : ""
        } ${data.integrations === null
            ? ""
            : data.integrations[1]
                ? data.integrations[1]
                : ""
        }</li>
            <li>${data.integrations === null ? "" : data.integrations[2] ? add++ : ""
        } ${data.integrations === null
            ? ""
            : data.integrations[2]
                ? data.integrations[2]
                : ""
        }</li>
          </ul>`;
    IntegrationTitle.appendChild(fontDiv);
    const modalImg = document.getElementById("model-Img");
    modalImg.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
            <figure  class="px-10 pt-10">
             <img  src=${data.image_link[0]} class="rounded-xl bg-black" />
                              </figure>
                                <div class="pt-[10px]">
                                    <h1 class="font-semibold text-2xl text-center text-[#111111] ">${data.input_output_examples === null
            ? "Can you give any example?"
            : data.input_output_examples[0].input
                ? data.input_output_examples[0].input
                : data.input_output_examples[1].input
        }</h1>
                                <p class="font-normal pt-2 text-base text-center text-[#585858]">${data.input_output_examples === null
            ? "No! Not Yet! Take a break!!!"
            : data.input_output_examples[0].output
                ? data.input_output_examples[0].output
                : data.input_output_examples[1].output
        }</p>
                                </div>
            `;
    modalImg.appendChild(div);

};





loadUniverse();