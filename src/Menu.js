import lunch from './Resources/images/Healthy lunch.jpg';
import fast from './Resources/images/fast food.jpg';
import sushi from './Resources/images/sushi.jpg';
import dessert from './Resources/images/desserts.jpg'



const Menu = [
    {
        id:"01",
        "menu_title":"Healthy Lunch",
        "img":lunch,
        "list":[
            {
                
                "name":"Bacon & Eggs",
                "label":true,
                "label_name":"best sale",
                "price":"$8.50",
                "calorie":"150g/160cal",
                "ingredients":"Fried eggs, bacon, spicy sauce (optional), slice of bread."
            },
             {
                "name":"Croissant with Bacon & Cheese",
                "label":false,
                "label_name":"",
                "price":"$12",
                "calorie":"145g/80cal",
                "ingredients":"Fried bacon, cheese, avocado (optional)."
            },
             {
                "name":"Vegetarian Lunch",
                "label":true,
                "label_name":"vegan",
                "price":"$10.5",
                "calorie":"100g/70cal",
                "ingredients":"Sweet potato, cherry tomatoes, mushroom, organic eggs, apple."
            },
             {
                "name":"Fruit Salad",
                "label":false,
                "label_name":"",
                "price":"$8.5",
                "calorie":"100g/50cal",
                "ingredients":"Orange, pineapple, kiwi, strawberries, blueberries, raspberries."
            },
             {
                "name":"Nut and Fruity Waffles",
                "label":true,
                "label_name":"new",
                "price":"$15",
                "calorie":"200g/120cal",
                "ingredients":"With strawberry and banana / chocolate and hazelnuts / caramel."
            }
        ]
    },
    {
        id:"02",
        "menu_title":"Fast Food",
        "img":fast,
        "list":[
            {
                
                "name":"Chicken sandwich",
                "label":true,
                "label_name":"classic",
                "price":"$10",
                "calorie":"150g/400cal",
                "ingredients":"Breaded chicken, soft bun, tart pickles, Polynesian sauce."
            },
             {
                "name":"Bacon cheeseburger",
                "label":false,
                "label_name":"",
                "price":"$13",
                "calorie":"150g/580cal",
                "ingredients":"Beef, bacon, pickles, onions, cheese, lettuce."
            },
             {
                "name":"Fries",
                "label":false,
                "label_name":"",
                "price":"$2.5",
                "calorie":"100g/340cal",
                "ingredients":"Fried potatoes, salt, spices."
            },
             {
                "name":"Tomato pizza",
                "label":false,
                "label_name":"",
                "price":"$10.5",
                "calorie":"150g/350cal",
                "ingredients":"Tomato, cheese, special sauce, species."
            },
             {
                "name":"Chicken nuggets",
                "label":true,
                "label_name":"classic",
                "price":"$15",
                "calorie":"150g/300cal",
                "ingredients":"Fried chicken, special sauce, spices, salt"
            }
        ]
    },
    {
        id:"03",
        "menu_title":"Sushi",
        "img":sushi,
        "list":[
            {
                
                "name":"Roll tenderness | 6 PCS",
                "label":true,
                "label_name":"best sale",
                "price":"$5",
                "calorie":"150g/160cal",
                "ingredients":"Rice, nori, cream cheese, scallops tempura, salmon roe."
            },
             {
                "name":"Roll avocado | 8 PCS",
                "label":false,
                "label_name":"",
                "price":"$12",
                "calorie":"145g/80cal",
                "ingredients":"Rice, nori, cream cheese, avocado, salmon, sesame"
            },
             {
                "name":"Roll with cheese | 8 PCS",
                "label":false,
                "label_name":"",
                "price":"$14",
                "calorie":"100g/70cal",
                "ingredients":"Rice, mamenori, tobiko, cream cheese, shrimps "
            },
             {
                "name":"Roll Canadian | 6 PCS",
                "label":false,
                "label_name":"",
                "price":"$8.5",
                "calorie":"100g/50cal",
                "ingredients":"Rice, nori, cream cheese, avocado, salmon, sesame"
            },
             {
                "name":"Roll American | 4 PCS",
                "label":true,
                "label_name":"new",
                "price":"$15",
                "calorie":"200g/120cal",
                "ingredients":"Rice, nori, cream cheese, salmon, avocado, tobiko, eel, cucumber"
            }
        ]
    },
    {
        id:"04",
        "menu_title":"Desserts",
        "img":dessert,
        "list":[
            {
                
                "name":"Caramel brownie",
                "label":true,
                "label_name":"best sale",
                "price":"$6.50",
                "calorie":"150g/160cal",
                "ingredients":"Brownie pieces, caramel drizzled with Chocolate ganache, whipped cream."
            },
             
             {
                "name":"Chocolate waffles",
                "label":false,
                "label_name":"",
                "price":"$10",
                "calorie":"145g/1250cal",
                "ingredients":"Chocolate syrup, chocolate ice cream, chocolate brownies, bananas, whipped cream."
            },
             {
                "name":"Ice cream cookie",
                "label":false,
                "label_name":"",
                "price":"$4.5",
                "calorie":"100g/570cal",
                "ingredients":"French vanilla ice cream, chocolate filled cookie, chocolate sauce, whipped cream."
            },
            {
                "name":"Walnut Pie",
                "label":false,
                "label_name":"",
                "price":"$12",
                "calorie":"100g/850cal",
                "ingredients":"Chocolate chip, walnut, coconut layered bar, vanilla ice cream, fudge, caramel."
            },
             {
                "name":"Nut and Fruity Waffles",
                "label":false,
                "label_name":"",
                "price":"$15",
                "calorie":"200g/120cal",
                "ingredients":"With strawberry and banana / chocolate and hazelnuts / caramel."
            }
        ]
    }
]



export default Menu;