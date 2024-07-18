 import add from './img/add.jpg'
import white from './img/white.jpg'
import  black from './img/black.jpg'
import black1 from './img/black1.jpg'
import blue from './img/blue.jpg'
import blue1 from './img/blue1.jpg'
  import pp2 from './img/pp2.jpg'
  import pp3 from './img/pp3.jpg'
  import pp4 from './img/pp4.jpg'
  import pp5 from './img/pp5.jpg'
  import pp6 from './img/pp6.jpg'
  
const  products = [
    {
      id:7,
      description :'ASUS ROG Strix Scope II 96 Wireless Gaming Keyboard, Tri-Mode Connection, Dampening Foam & Switch-Dampening Pads, Hot-Swappable Pre-lubed ROG NX Snow Switches, PBT Keycaps, RGB-Black',
        name: "Apple iPad 8 (8th Gen) - (2020 Model) - 32GB - Wi-Fi - A2270 - Good ",
       reviews: "(200 reviews)",
       img :  [add,
               pp2,
               pp3],

       Rs : "$0 - 300",
      prevPrice: "$140,00",
      newPrice: "200",
       Featured : "Featured",
      color: "Silver",
      All : "All accessories",
      Brand: "Nexis",
      value:5,
      Price : "Low to High",

    },
    {
      id:8,
     img : [white,
     pp3,
     pp6],
        description :'SteelSeries Apex Pro TKL Wireless HyperMagnetic Gaming Keyboard — Esports Tenkeyless — OLED Screen — Adjustable Actuation — PBT Keycaps — Bluetooth — 2.4GHz — USB-C',
       name: "Apple iPad 7 (7th Gen) - (2019 Model) - 32GB - Wi-Fi - Good ",
       reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "300",
      Featured : "Featured",
        color: "White",
        Rs : "$0 - 300",
        All : "All accessories",
      Brand: "Omini",
       value :4,
      Price : "High to Low",

    },
  
    {
      id:9,
      img : [blue,
        pp4,
        pp5],
      description :'ASUS ROG Strix Scope II 96 Wireless Gaming Keyboard, Tri-Mode Connection, Dampening Foam & Switch-Dampening Pads, Hot-Swappable Pre-lubed ROG NX Snow Switches, PBT Keycaps, RGB-Black',
        name: "Apple iPad 6 (8th Gen) - (2020 Model) - 32GB - Wi-Fi - A2270 - Good ",
       reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "500",
      value :3,
      All : "All accessories",
      Featured : "Featured",
        color: "Blue",
      Brand: "Ventage",
      Rs : "$301 - 500",
       Price : "Low to High",

    },
    {
      id:10,
      img : [blue1,
        pp5,
        pp6], 
       name : "Apple iPhone 5 Pro - (Unlocked) - 256GB - A2160 - Good ",
       reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "5000",
      value :2,
      All : "All accessories",
      description :'ASUS ROG Strix Scope II 96 Wireless Gaming Keyboard, Tri-Mode Connection, Dampening Foam & Switch-Dampening Pads, Hot-Swappable Pre-lubed ROG NX Snow Switches, PBT Keycaps, RGB-Black',
       color: "Blue",
       Rs :"Over $3000",
       Featured : "Featured",
       Brand: "Apex",
      Price : "High to Low",

    },
    {
      id:5,
      img : [black,
        pp3,
        pp6],
        value :2,
      description :'ASUS ROG Strix Scope II 96 Wireless Gaming Keyboard, Tri-Mode Connection, Dampening Foam & Switch-Dampening Pads, Hot-Swappable Pre-lubed ROG NX Snow Switches, PBT Keycaps, RGB-Black',
       name : " Apple iPhone 4 Pro - (Unlocked) - 256GB - A2160 - Good",
       reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice: "3000",
      All : "All accessories",
      Featured : "Featured",
        color: "Black",
        Rs : "$501 - 3000",
      Brand: "Apex",
       Price : "Low to High",
    },
    {
      id:12,
      img : [black1,
        pp3,
        pp2],
      description :'ASUS ROG Strix Scope II 96 Wireless Gaming Keyboard, Tri-Mode Connection, Dampening Foam & Switch-Dampening Pads, Hot-Swappable Pre-lubed ROG NX Snow Switches, PBT Keycaps, RGB-Black',
      name : "Apple iPad 3 (7th Gen) - (2019 Model) - 32GB - Wi-Fi - Good ",
       reviews: "(123 reviews)",
      prevPrice: "$140,00",
      newPrice:  "700",
      Featured : "Featured",
      value :3,
         color: "Black",
         Rs : "$501 - 3000",
         All : "All accessories",
      Brand: "Ventage",
      Price : "Low to High",
      Arrival : "Newest Arrivals"
    },
    
  
   
  ];
  export default  products