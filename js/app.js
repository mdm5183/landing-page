//create nav menu link items
const sections = document.getElementsByTagName("section");


//loop through sections
for (let i = 0; i < sections.length; i++) {
    let currentSection = sections[i].getAttribute("data-nav");
    let currentSectionId = sections[i].getAttribute("id");
    let section = sections[i];
  
    const node = document.createElement("li");

    node.innerHTML = currentSection;
    document.getElementById("navbar__list").appendChild(node);

    // add event listener on click
    node.addEventListener("click", scrollToSection);
    node.classList.add('active');
};

//add event listener on scroll  
window.addEventListener("scroll", handleScroll);

function handleScroll() {
    console.log("scrolling");
    for (let i = 0; i < sections.length; i++) {
        if (isInViewport(sections[i]) === true) {
            removeAllActive();
            addActive(sections[i]);
        };
    };
};

//'scroll to' on click function
function scrollToSection(event) {
    const activeSection = document.querySelector(`[data-nav="${event.target.textContent}"]`);
    console.log("active section", activeSection);

    const rect = activeSection.getBoundingClientRect();

    //account for starting position other than top 
    const scrollPosition = window.pageYOffset;
    window.scrollTo({
      top: scrollPosition + rect.y,
      left: 0,
      behavior: 'smooth'
    });
    removeAllActive();
    addActive(activeSection);
};

//check if section is in viewport - logic borrowed from https://vanillajstoolkit.com/helpers/isinviewport/ 
const isInViewport = function (elem) {
   const distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//remove active class 
function removeAllActive() {
    const allSections = document.getElementsByTagName('section');
    const allSectionsArray = [...allSections];

    allSectionsArray.forEach(section => section.classList.remove('active'));

    const allNavLi = document.getElementsByTagName('li');
    const allNavLiArray = [...allNavLi];

    allNavLiArray.forEach(li => li.classList.remove('active'));
};

//add active class 
function addActive(section) {
    section.classList.add('active');
    function addActiveNav(li) {
        li.classList.add('active');
    };
};
