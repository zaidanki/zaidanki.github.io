/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.querySelector(".student-list"); // declaring constants that i will use in multiple codes
const li = ul.querySelectorAll("li");
const mainDiv = document.querySelector("div");
const headt = document.querySelector("h2").parentNode;

const searchDiv = document.createElement("div"); // creating the search box and elements
const search = document.createElement("button");
const searchText = document.createElement("input");
search.textContent = "Search";
searchDiv.className = "student-search";
headt.appendChild(searchDiv);
searchDiv.appendChild(searchText);
searchDiv.appendChild(search);

const showPage = (list, page) => {
  // function to make sure only 10 people are displayed at a time.
  const first = (page - 1) * 10;
  const last = first + 9;
  for (let i = 0; i < list.length; i++) {
    if (i <= last && i >= first) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
      list[i].id = "hide";
    }
  }
};
showPage(li, 1); //showing the first page

const appendPageLinks = list => {
  // fucntion that appends the elements needed to create a numbering pagination
  const lastPage = Math.ceil(list.length / 10);
  const div = document.createElement("div");
  div.className = "pagination";
  mainDiv.appendChild(div);
  const newUl = document.createElement("ul");
  div.appendChild(newUl);
  for (i = 0; i < lastPage; i++) {
    const newLi = document.createElement("li");
    newUl.appendChild(newLi);
    const a = document.createElement("a");
    a.textContent = i + 1;
    newLi.appendChild(a);
  }
  const a = document.getElementsByTagName("a");
  if (a.length > 0) {
    a[0].className = "active";
  } else {
    const errorText = document.createElement("span");
    errorText.textContent = "No student with that name found, search again"; // if no results apear a text will apear stating that
    mainDiv.appendChild(errorText);
  }
  div.addEventListener("click", e => {
    // event that listens for clicks on the numbers and changes the students displayed accordingly
    if (e.target.tagName == "A") {
      const pageNum = parseInt(e.target.textContent) - 1;
      for (i = 0; i < a.length; i++) {
        a[i].className = "";
        if (pageNum == i) {
          a[i].className = "active";
          showPage(list, pageNum + 1);
        }
      }
    }
  });
};

appendPageLinks(li);

const searchinput = () => {
  // a function that searches names and compares them using the indexOf method and if it returns a number bigger than -1 then it is displayed
  for (i = 0; i < li.length; i++) {
    const name = li[i].querySelector("h3").textContent.toUpperCase();
    if (name.indexOf(searchText.value.toUpperCase()) > -1) {
      li[i].style.display = "";
      li[i].id = "displayed";
    } else {
      li[i].style.display = "none";
      li[i].id = "hide";
    }
  }
  const displayList = document.querySelectorAll("#displayed");
  removeDiv.removeChild(removeDiv.lastElementChild);
  appendPageLinks(displayList);
  showPage(displayList, 1);
};
const removeDiv = document.querySelector(".pagination").parentNode; // two new constants to make event listeners
const searchbut = removeDiv.querySelector("button");

searchbut.addEventListener("click", searchinput); //click search for it to run (not used really)

searchText.addEventListener("keyup", searchinput); // this makes search dynamic and more interactive and more automated!
