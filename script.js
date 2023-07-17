let btnAdd = document.getElementById("btnAdd");
let ulParent = document.getElementById("cList");

const addChapter = (event) => 
{
   if (ulParent.firstElementChild.classList == "msg") 
   {
      ulParent.firstElementChild.remove();
   }
   let currTarget = event.currentTarget;
   let preElement = currTarget.previousElementSibling;

   let newUl = document.createElement("ul");
   newUl.innerHTML =
      `  <li class="list">
         <h2>${preElement.value}</h2>
         <div class="btns">
            <button class="edit flEnd" onclick="editChapter(this)">Edit</button>
            <button class="remove flEnd" onclick="removeChapter(this)">Remove</button>
         </div>
      </li>`;

   ulParent.appendChild(newUl);
}

btnAdd.addEventListener('click', addChapter);

function removeChapter(event) 
{
   let parentOne = event.parentElement;
   let parentTwo = parentOne.parentElement;
   let paretnThree = parentTwo.parentElement;
   paretnThree.remove();

   if (ulParent.children.length <= 0) 
   {
      let msgEmpty = document.createElement("h3");
      msgEmpty.textContent = "Empty. Add Chapters";
      msgEmpty.classList.add("msg");
      ulParent.appendChild(msgEmpty);
   }
}

function editChapter(event) 
{
   if (event.textContent == "Save") 
   {
      event.textContent = "Edit";
      let currentChapterName = event.parentElement.previousElementSibling.value;
      let newHeading= document.createElement("h2");   
      newHeading.textContent= currentChapterName;      
      event.parentElement.parentElement.replaceChild(newHeading, event.parentElement.previousElementSibling);
   }

   else 
   {
      event.textContent = "Save";
      let currentChapterName = event.parentElement.previousElementSibling.textContent;
      let newInput = document.createElement("input");
      newInput.type = "text";
      newInput.classList.add("nInput");
      newInput.value = currentChapterName;

      event.parentElement.parentElement.replaceChild(newInput, event.parentElement.previousElementSibling);
   }
}