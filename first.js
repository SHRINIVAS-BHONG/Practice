let reviews = [
    {
        name: "Shrinivas",
        rating: 5,
        review: " c,m dn A MAS CNKjasd asm cJBWHD Gs c IUDUIGreat Food!"
    },

    {
        name: "Pratibha",
        rating: 3,
        review: "ndfkjbasjdbfkakdlmdsfjoafhewfjsnfkjcnJDFNdnffGreat Food!"
    },

    {
        name: "Akash",
        rating: 4,
        review: "Great Food!d kv kjnkonbj dnk vkdjifio xlndf  ds vosioisv"
    },

    {
        name: "Asmita",
        rating: 5,
        review: "mdnkjvsjpdnc  lkdsmkjbvajs  landfbkjadsnklml"
    },

    {
        name: "Abhijith",
        rating: 4,
        review: "dvnjsbdijb vnjkbdfbvndkfbnk"
    },

    {
        name: "manav",
        rating: 5,
        review: "vnbvkkdcnb"
    }
];

let foodImage = document.querySelector("#landing-photo");
let reviewBox = document.querySelector("#review-box");

let customerName = document.querySelector("#review-name");
let customerRating = document.querySelector("#review-rating");
let customerReview = document.querySelector("#review-text");

customerName.innerText = reviews[0].name;
customerRating.innerText = reviews[0].rating + ".0";
customerReview.innerText = reviews[0].review;
foodImage.addEventListener("mouseenter", () => reviewBox.style.display = "block");

foodImage.addEventListener("mouseleave", () => reviewBox.style.display = "none");

reviewBox.addEventListener("mouseenter", () => reviewBox.style.display = "block");

reviewBox.addEventListener("mouseleave", () => reviewBox.style.display = "none");