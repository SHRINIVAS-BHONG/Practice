let reviews = [
    {
        name: "Shrinivas",
        rating: 2.7,
        review: " c,m dn A MAS CNKjasd asm cJBWHD Gs c IUDUIGreat Food!"
    },

    {
        name: "Pratibha",
        rating: 3.1,
        review: "ndfkjbasjdbfkakdlmdsfjoafhewfjsnfkjcnJDFNdnffGreat Food!"
    },

    {
        name: "Akash",
        rating: 4.5,
        review: "Great Food!d kv kjnkonbj dnk vkdjifio xlndf  ds vosioisv"
    },

    {
        name: "Asmita",
        rating: 5.0,
        review: "mdnkjvsjpdnc  lkdsmkjbvajs  landfbkjadsnklml"
    },

    {
        name: "Abhijith",
        rating: 4.3,
        review: "dvnjsbdijb vnjkbdfbvndkfbnk"
    },

    {
        name: "manav",
        rating: 5.0,
        review: "vnbvkkdcnb"
    }
];

let foodImage = document.querySelector("#landing-photo");
let reviewBox = document.querySelector("#review-box");

let customerName = document.querySelector("#review-name");
let customerRating = document.querySelector("#review-rating");
let customerReview = document.querySelector("#review-text");

customerName.innerText = reviews[0].name;
customerRating.innerText = reviews[0].rating;
customerReview.innerText = reviews[0].review;
foodImage.addEventListener("mouseenter", () => reviewBox.style.display = "block");

foodImage.addEventListener("mouseleave", () => reviewBox.style.display = "none");

reviewBox.addEventListener("mouseenter", () => reviewBox.style.display = "block");

reviewBox.addEventListener("mouseleave", () => reviewBox.style.display = "none");

let r1 = document.querySelector("#r1");
let r2 = document.querySelector("#r2");
let r3 = document.querySelector("#r3");
let r4 = document.querySelector("#r4");
let r5 = document.querySelector("#r5");

document.querySelector("#n1").innerText = reviews[1].name;
document.querySelector("#t1").innerText = reviews[1].review;

document.querySelector("#n2").innerText = reviews[2].name;
document.querySelector("#t2").innerText = reviews[2].review;

document.querySelector("#n3").innerText = reviews[3].name;
document.querySelector("#t3").innerText = reviews[3].review;

document.querySelector("#n4").innerText = reviews[4].name;
document.querySelector("#t4").innerText = reviews[4].review;

document.querySelector("#n5").innerText = reviews[5].name;
document.querySelector("#t5").innerText = reviews[5].review;

let showFirst = true;

function showRA() {
    if (showFirst == true) {
        r1.style.display = "block";
        r3.style.display = "block";
        r5.style.display = "block";

        r2.style.display = "none";
        r4.style.display = "none";

        showFirst = false;
    } else {
        r1.style.display = "none";
        r3.style.display = "none";
        r5.style.display = "none";

        r2.style.display = "block";
        r4.style.display = "block";

        showFirst = true;
    }
}

showRA();

setInterval(showRA, 2000);

let orderFoodBtn = document.querySelector("#order-food");
if (orderFoodBtn) {
    orderFoodBtn.addEventListener("click", () => {
        document.querySelector("#page2").scrollIntoView({ behavior: "smooth" });
    });
}

let makeReservationBtn = document.querySelector("#Make-reservation");
if (makeReservationBtn) {
    makeReservationBtn.addEventListener("click", () => {
        document.querySelector("#page3").scrollIntoView({ behavior: "smooth" });
    });
}

let l2OrderBtn = document.querySelector("#l2-buttons");
if (l2OrderBtn) {
    l2OrderBtn.addEventListener("click", () => {
        document.querySelector("#page3").scrollIntoView({ behavior: "smooth" });
    });
}

let exploreInput = document.querySelector("#explore");
if (exploreInput) {
    exploreInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            document.querySelector("#page3").scrollIntoView({ behavior: "smooth" });
        }
    });
}