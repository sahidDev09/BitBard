const discussLeft = document.getElementById("mainCardParent");
const Readsection = document.getElementById("total-section");
const countRead = document.getElementById("countRead");

let count = 0;

const mainCard = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  data.posts.forEach((card) => {
    console.log(card);
    const mainDiscussDiv = document.createElement("div");
    mainDiscussDiv.innerHTML = `
    <div
    class="discuss-left  gap-2 bg-blue-50 border border-blue-400 rounded-xl mb-5">
    <div class="flex gap-5 text-lg text-gray-600 md:p-10 p-5">
      <div class="relative">
        <i
          class="fa-solid fa-circle absolute text-green-600 z-10 right-[-6px] bottom-[-20]"></i>
        <img
          class="md:w-24 md:h-24 w-44 h-10 md:rounded-xl rounded-full border border-r-red-400"
          src="${card.image}"
          alt="" />
      </div>
      <div class="flex flex-col gap-4">
        <div class="flex gap-6 items-center">
          <h1>#${card.category}</h1>
          <h1>Author : ${card.author.name}</h1>
        </div>
        <h1 class="md:text-2xl font-bold">
          ${card.title}
        </h1>
        <p class="text-sm">
          ${card.description}
        </p>
        <hr class="border-dashed" />
        <div class="flex justify-between items-center">
          <div class="flex gap-5">
            <div class="flex gap-4 items-center">
              <i class="fa-solid fa-envelope-open-text"></i>
              <p>${card.comment_count}</p>
            </div>

            <div class="flex gap-4 items-center">
              <i class="fa-solid fa-eye"></i>
              <p>${card.view_count}</p>
            </div>

            <div class="flex gap-4 items-center">
              <i class="fa-regular fa-clock"></i>
              <p>${card.posted_time}min</p>
            </div>
          </div>
          <button
          onclick = "handleRead('${card.title}', '${card.view_count}')"
            class="addToRead p-2 px-3 rounded-full bg-green-500 text-white text-xl">
            <i class="fa-solid fa-envelope-open"></i>
          </button>
        </div>
      </div>
    </div>
    
  </div>
    
    `;

    discussLeft.appendChild(mainDiscussDiv);
  });
};

// mark as read function

const handleRead = (title, view) => {
  count++;
  countRead.innerText = count;

  const newReaddiv = document.createElement("div");
  newReaddiv.innerHTML = `
  
              <div
              class="flex justify-between items-center bg-white p-6 rounded-xl mb-5">
               <h1 class="text-lg">
                  ${title}
                </h1>
                <div class="flex gap-3 items-center">
                  <i class="fa-regular fa-eye"></i>
                  <p>${view}</p>
                </div>
              </div>
  `;

  Readsection.appendChild(newReaddiv);
};

mainCard();
