const calculateScore = require('./calculateScore')


const offer1 = {
    _id: "5e466a59143c2549b4ec66c4",
    position: "developpeur",
    address: "rue de charonne",
    contract: "cdd",
    duration: "7 mois",
    title: "developpement web et web mobile",
    city: "paris",
    region: "idf",
    experience: 1,
    description: "abcde",
    companyName: "Konexio",
    created: "2020-02-14T09:37:29.788Z",
    __v: 0
};

const offer2 = {
    _id: "5e4a99620b3d5d36d8a634a5",
    position: "",
    companyId: "5e46636ad7309f1e4c550f21",
    address: "",
    contract: "",
    duration: "",
    title: "title",
    city: "Paris",
    region: "ile de france",
    experience: 5,
    description: "",
    created: null,
    companyName: "Ikea",
    __v: 0
};

const user = {
    skills: [
        {
            _id: "5e45321022c01b0b10a5fce2",
            name: "HTML",
            parentId: "5e45315f22c01b0b10a5fcde",
            created: "2020-02-13T11:25:04.209Z",
            __v: 0
        }
    ],
    _id: "5e4a96470b3d5d36d8a634a1",
    role: "developer",
    firstName: "Marie",
    lastName: "Dupont",
    email: "",
    picture: "",
    companyName: "",
    password: "",
    phoneNumber: "",
    experience: 1,
    city: "Paris",
    postalCode: "75011",
    contract: "",
    siret: "",
    associationNumber: "",
    bio: "",
    github: "",
    linkedin: "",
    cv: "",
    position: "",
    created: null,
    __v: 0
};

const firstScore = calculateScore(offer1, user);
console.log('firstScore', firstScore);
const secondScore = calculateScore(offer2, user);
console.log('secondScore', secondScore);