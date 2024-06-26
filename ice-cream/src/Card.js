import React, { useEffect, useState } from 'react';
import './App.css';


const Icecream = {
  "icecreamData" : [
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSCgOSKM_CBM6cLV8ZAPZ4EHEvqoKZpwuOAQ&usqp=CAU",
      "name": "Chocolate Cone Ice Cream",
      "description": "A classic favorite, chocolate ice cream is rich, creamy, and packed with the delightful flavor of cocoa. Enjoy it in a crispy cone or as a scoop topped with your favorite toppings, from sprinkles to whipped cream."
    },
    {
      "imageUrl": "https://rumkisgoldenspoon.com/wp-content/uploads/2022/05/Gulkand-icecream.jpg",
      "name": "Gulkand Ice Cream",
      "description": "Gulkand ice cream is a unique treat made with a blend of sweetened condensed milk, rose water, hibiscus powder, and vanilla. It offers a perfect balance of floral sweetness and creamy goodness."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7vmnt4e4QCsTSzrWme4pMnRw5LQDwvoxNKQ&usqp=CAU",
      "name": "Vanilla Bean Ice Cream",
      "description": "A timeless classic, vanilla bean ice cream is known for its pure and creamy flavor. Made with real vanilla beans, this ice cream is perfect on its own or as a versatile base for various toppings and desserts."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WS6cR3-WnWmP5pmip92xSivCrOgy10uq4A&usqp=CAU",
      "name": "Strawberry Swirl Ice Cream",
      "description": "Strawberry swirl ice cream combines the sweetness of ripe strawberries with the creamy goodness of ice cream. Enjoy the fruity swirls and bits of real strawberries."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXJXabsv0aQX1Er2gvhoOifMVbjxTYlk3Xjw&usqp=CAU",
      "name": "Mint Chocolate Chip Ice Cream",
      "description": "Cool and refreshing, mint chocolate chip ice cream features minty freshness combined with chunks of dark chocolate. It's a delightful contrast of flavors and textures."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiL5jkXG-JFq5JFtpRG5CBMidFNEUCp3n7ug&usqp=CAU",
      "name": "Cookies and Cream Ice Cream",
      "description": "Indulge in the sweet delight of cookies and cream ice cream, featuring pieces of chocolate sandwich cookies mixed into a creamy vanilla base."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDUkrkIN2HRMiNHZcAtb75_Xi_jTcRmZCOA&usqp=CAU",
      "name": "Butter Pecan Ice Cream",
      "description": "Butter pecan ice cream is a buttery and nutty delight, with toasted pecans and rich buttery notes complementing the creamy ice cream base."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvdvYt9sMBQimb8JN1tLY0NmXVU_mMMRDDQA&usqp=CAU",
      "name": "Rocky Road Ice Cream",
      "description": "Rocky road ice cream is a delightful combination of chocolate ice cream, marshmallows, and nuts, creating a sweet, nutty, and chewy texture with every bite."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6MwIekQsGR_AVaf7YJO2p4twG3fkcNnI9sk7hHwExji-QihQfQMjacb5k2Cin3M0S5U&usqp=CAU",
      "name": "Pistachio Ice Cream",
      "description": "Pistachio ice cream boasts a subtle yet distinctive nutty flavor. It's made with real pistachios, giving it a natural and earthy taste."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVDCbZf952vOl-av_bTSyQOe4z2sJjIfqTeTrleu096MWYYjf2UjAi7tdS97oWeaZfVg&usqp=CAU",
      "name": "Caramel Swirl Ice Cream",
      "description": "Caramel swirl ice cream offers the perfect balance between sweet and salty. Enjoy the rich caramel ribbons that swirl through the creamy ice cream."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0Pfpu9fJlhg0_TkCGAHwsbZ7jRcflKTB7g&usqp=CAU",
      "name": "Coconut Almond Fudge Ice Cream",
      "description": "This tropical-inspired ice cream combines the flavors of coconut and almonds with the decadence of fudge. It's a delightful escape to a beachside paradise."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbjurD2Qr8ezZIOcQZZynRFv2YW4A1CsADPQ&usqp=CAU",
      "name": "Raspberry Sorbet",
      "description": "For a refreshing, dairy-free option, try raspberry sorbet. Made from ripe raspberries, this frozen dessert is tangy and perfect for a light and fruity treat."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGJwZh5DmAncCWSTkGfdN3c0kPfMbRhnq2A&usqp=CAU",
      "name": "Neapolitan Ice Cream",
      "description": "Neapolitan ice cream is a classic trio of chocolate, vanilla, and strawberry flavors, layered side by side for a delightful taste of variety in every spoonful."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UU8hUUUf6m9MeAioyZldyYzpCVOUubRkwA&usqp=CAU",
      "name": "Blueberry Cheesecake Ice Cream",
      "description": "Indulge in the rich and creamy flavors of blueberry cheesecake ice cream, featuring swirls of blueberry sauce and real cheesecake pieces."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaP3dukNMauzFyZwodsp0MDC6711RXkkXpg&usqp=CAU",
      "name": "Mango Sorbet",
      "description": "Mango sorbet is a tropical delight made from luscious mangoes. It's a refreshing and dairy-free option for mango lovers."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq65xzz0d2o6SSe3emV-LYvRoD4MJs4X-jTg&usqp=CAU",
      "name": "Peanut Butter Cup Ice Cream",
      "description": "Satisfy your peanut butter cravings with peanut butter cup ice cream, featuring peanut butter cups swirled within a creamy peanut butter ice cream."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1wTsuN-3hO3I0jU6zDnTxEk-ylvRs5bB7UMdXcXlzvlUnXkAig0IXPADhFmTjT3C2uWI&usqp=CAU",
      "name": "Lemon Sorbet",
      "description": "Lemon sorbet is a zesty and tangy treat, perfect for a palate-cleansing dessert. It's a refreshing choice for citrus enthusiasts."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6aMlg41r237g0CQSGPWmRyAaJ5eT7rCG27PVo87bXwsb09lE-tLvKUo5A2zDIANn-VtM&usqp=CAU",
      "name": "Black Cherry Ice Cream",
      "description": "Black cherry ice cream features the sweet and slightly tart flavor of black cherries, mixed into a creamy ice cream base."
    },
    {
      "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQeKWISasJi0bhdwPpqyo6RJvsCvy_X7UUA&usqp=CAU",
      "name": "Coffee Toffee Crunch Ice Cream",
      "description": "Coffee lovers can enjoy coffee toffee crunch ice cream, combining the bold flavor of coffee with toffee pieces for a delightful crunch."
    }
  ]
}

const Card = (props) => {
  const [iceCreamData, setIceCreamData] = useState([]);

  useEffect(() => {
    setIceCreamData(Icecream.icecreamData);
  }, []);

  return (
    <div>
      <h2 className='title'>Ice Cream Store</h2>
      <div className='card-container'>
        {iceCreamData.map((item, index) => (
          <div className='cards' key={index}>
            <div className="cardw" style={{ width: "18rem" }}>
              <img src={item.imageUrl} alt={item.name} className="card-img-top card-image" />
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text description">{item.description}</p>
              <button className="btn btn-primary" onClick={() => props.addToCart(item)}>ADD</button>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-success" onClick={() => props.info("summarypage")}>Continue</button>
    </div>
  );
}

export default Card;