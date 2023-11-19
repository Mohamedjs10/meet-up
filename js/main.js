//* navbar items
const navbarItems = [
  {
    title: "الرئيسية",
    url: "../index.html",
    notificationNumber: "5",
    keyWord: "index",
  },
  {
    title: "الفاعليات",
    url: "../html/events.html",
    notificationNumber: "5",
    keyWord: "events",
  },
  {
    title: "التصاريح",
    url: "../html/permits.html",
    notificationNumber: "5",
    keyWord: "permits",
  },
  {
    title: "دعم الفاعليات",
    url: "../html/events-support.html",
    notificationNumber: "5",
    keyWord: "support",
  },
  {
    title: "المساعدة",
    url: "../html/help.html",
    notificationNumber: "5",
    keyWord: "help",
  },
  {
    title: "الاعدادات",
    url: "../html/settings.html",
    notificationNumber: "5",
    keyWord: "settings",
  },
];

if (document.getElementById("navbar-middle")) {
  const url = window.location.href;

  const navbarItemsContainer = document.getElementById("navbar-middle");
  navbarItems.forEach((item) => {
    //*
    if (url.indexOf(item.keyWord) !== -1 && item.title !== "الرئيسية") {
      const branch = document.getElementById("branch");
      branch.innerHTML = item.title;
    }

    //*
    const element = document.createElement("a");
    const className =
      url.indexOf(item.keyWord) !== -1 ? "navbar-item-selected" : "navbar-item";
    element.classList.add(className);
    element.href = item.url;
    element.innerHTML = `
          <p>${item.title}</p>
          <div class="notification">
            <p class="notification-number">${item.notificationNumber}</p>
          </div>
      `;

    navbarItemsContainer.appendChild(element);
  });
}
// ---- drop down menu ----
if (document.getElementById("dropdown-content")) {
  const dropdownContent = document.getElementById("dropdown-content");
  navbarItems.forEach((item) => {
    const element = document.createElement("a");
    element.classList.add("navbar-item");
    element.href = item.url;

    element.innerHTML = `
            <p>${item.title}</p>
            <div class="notification">
              <p class="notification-number">${item.notificationNumber}</p>
            </div>
        `;

    dropdownContent.appendChild(element);
  });
}

//* table rows
const bodyRows = [
  {
    checked: true,
    number: "123456",
    name: "text",
    speakers: ["Mohamed", "Ali", "sara"],
    start: "12/5/2023",
    end: "12/5/2023",
    status: "open",
    enroll: "100",
    options: ["option1", "option2", "option3"],
  },
  {
    checked: false,
    number: "123456",
    name: "text",
    speakers: ["Mohamed", "Ali", "sara"],
    start: "12/5/2023",
    end: "12/5/2023",
    status: "closed",
    enroll: "100",
    options: ["option1", "option2", "option3"],
  },
];

if (document.getElementById("table-body")) {
  const tableBodyContainer = document.getElementById("table-body");
  bodyRows.forEach((item) => {
    const element = document.createElement("tr");

    element.innerHTML = `
      <td>
          <input type="checkbox" id="checkbox1" name="checkbox1" checked=${
            item.checked
          } />
      </td>
      <td>
          <span>${item.number}</span>
          ${
            item.status === "open"
              ? `<span>
                <i class="fa-solid fa-circle" style="color: #55cb55"></i>
              </span>`
              : ""
          }
      </td>
      <td>
          <span>${item.name}</span>
      </td>
      <td>
          <span>${item.speakers}</span>
      </td>
      <td>
          <select id="select-container">
              <option value="option1" selected disabled>خيارات</option>
              ${item.options
                .map((option) => `<option value="${option}">${option}</option>`)
                .join("")}
          </select>
      </td>
  `;
    tableBodyContainer.appendChild(element);
  });
}
// **
const header = [
  "",
  `
    <span>رقم الطلب</span>
    <span>
      <i class="fa-solid fa-sort sort"></i>
    </span>
  `,
  "اسم الفاعلية",
  "المتحدثون",
  "",
];
{
}
if (document.getElementById("table-header")) {
  const headerContainer = document.getElementById("table-header");
  header.forEach((item) => {
    const element = document.createElement("th");

    element.innerHTML = item;
    headerContainer.appendChild(element);
  });
}
// **

// if (document.getElementById("branch")) {
//   const branch = document.getElementById("branch");
//   branch.innerHTML = "test";
// }

//* categories

const categories = [
  {
    title: "عرض القوائم",
    id: "1",
  },
  {
    title: "بحث",
    id: "2",
  },
  {
    title: "طلب تصريح",
    id: "3",
  },
];
let chosenCategory = "1";
let changeSelected = (id) => {
  console.log(id);

  const unChosen = document.getElementById(chosenCategory);
  unChosen.classList.remove("category-chosen");
  unChosen.classList.add("category");

  chosenCategory = id;
  const chosen = document.getElementById(id);
  chosen.classList.remove("category");
  chosen.classList.add("category-chosen");
};

if (document.getElementById("categories-container")) {
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((item) => {
    const element = document.createElement("div");
    element.setAttribute("id", item.id);

    element.classList.add(
      `${chosenCategory === item.id ? "category-chosen" : "category"}`
    );

    element.innerHTML = `
      <div onclick="changeSelected(${item.id})">${item.title}</div>
    `;
    categoriesContainer.appendChild(element);
  });
}

// ******************************************
// ******************************************
if (document.getElementById("section-a")) {
  // Sample array
  const fruits = [
    {
      image:
        "https://secure-content.meetupstatic.com/images/classic-events/517169887/272x153.webp?w=384",
      title:
        "Cairo Toastmasters Meeting - Develop your public speaking in Tagamo3!",
      host: "Cairo Toastmasters - Improve your Public Speaking!",
      date: "TUE, NOV 21 · 7:00 PM EET",
      attendanceNum: "30",
      price: "free",
      detailsUrl: "https://www.meetup.com/egypt-techies/events/297259050/",
    },
    {
      image:
        "https://secure-content.meetupstatic.com/images/classic-events/516791184/272x153.webp?w=384",
      title:
        "Cairo Toastmasters Meeting - Develop your public speaking in Tagamo3!",
      host: "Cairo Toastmasters - Improve your Public Speaking!",
      date: "TUE, NOV 21 · 7:00 PM EET",
      attendanceNum: "30",
      price: "free",
      detailsUrl: "https://www.meetup.com/gdgcairo/events/295859151/",
    },
    {
      image:
        "https://secure-content.meetupstatic.com/images/classic-events/504922837/272x153.webp?w=384",
      title:
        "Cairo Toastmasters Meeting - Develop your public speaking in Tagamo3!",
      host: "Cairo Toastmasters - Improve your Public Speaking!",
      date: "TUE, NOV 21 · 7:00 PM EET",
      attendanceNum: "30",
      price: "free",
      detailsUrl: "https://www.meetup.com/cairotmclub/events/297093037/",
    },
    {
      image:
        "https://secure-content.meetupstatic.com/images/classic-events/517361608/272x153.webp?w=384",
      title:
        "Cairo Toastmasters Meeting - Develop your public speaking in Tagamo3!",
      host: "Cairo Toastmasters - Improve your Public Speaking!",
      date: "TUE, NOV 21 · 7:00 PM EET",
      attendanceNum: "30",
      price: "free",
      detailsUrl: "https://www.meetup.com/gdg-helwan/events/297446035/",
    },
  ];

  // Function to map over the array and create HTML content
  const container = document.getElementById("section-a");
  // container.innerHTML = ""; // Clear existing content

  fruits.forEach((item, index) => {
    // Create a new div element for each fruit
    const fruitDiv = document.createElement("div");
    fruitDiv.addEventListener("click", () => {
      window.location.href = item.detailsUrl;
    });
    fruitDiv.classList.add("card");
    fruitDiv.innerHTML = `
<img src=${item.image}/>
<h1>${item.title}</h1>
<div>Hosted by: ${item.host}</div>
<div>
<i class="fa-regular fa-calendar"></i>
<span>${item.date}</span>
</div>
<div class="card-row">
<div>
<i class="fa-regular fa-circle-check"></i>
<span>${item.attendanceNum} going</span>
</div>
<div>
<i class="fa-solid fa-ticket"></i>
<span>${item.price}</span>
</div>
</div>
`;
    //     fruitDiv.innerHTML = `
    //     <td>
    //         <input type="checkbox" id="checkbox1" name="checkbox1" checked=${
    //           item.checked
    //         } />
    //     </td>
    //     <td>
    //         <span>${item.number}</span>
    //         ${
    //           item.status === "open"
    //             ? `<span>
    //               <i class="fa-solid fa-circle" style="color: #55cb55"></i>
    //             </span>`
    //             : ""
    //         }
    //     </td>
    //     <td>
    //         <span>${item.name}</span>
    //     </td>
    //     <td>
    //         <span>${item.speakers}</span>
    //     </td>
    //     <td>
    //         <select id="select-container">
    //             <option value="option1" selected disabled>خيارات</option>
    //             ${item.options
    //               .map((option) => `<option value="${option}">${option}</option>`)
    //               .join("")}
    //         </select>
    //     </td>
    // `;

    container.appendChild(fruitDiv);
  });
}
