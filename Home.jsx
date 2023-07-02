import { Component } from "react";

import Breakfast from './components/Breakfast';

export default class Home extends Component{
   constructor(props){
         super(props);
         this.state={
            receipes:[
                {
                    Breakfast:[
                        {
                            name:'Masala Dosa',
                            id:'Masala Dosa',
                            ingredients:[
                                '1-1/2 cups long grain rice',
                            '1/2 cup urad dal (polished black lentil or white lentil)',
                            '3 quarts water',
                            'Salt',
                            '1 medium onion, chopped',
                             '2 green chilies, chopped',
                             '1 Tbs ghee ',
                            '1/2 tsp black mustard seeds',
                            '1/2 tsp chana dal (split black chickpeas)',
                            '1 sprig curry leaves',
                            '1/2 tsp turmeric powder',
                            '2 large potatoes, boiled'
                                                     ]
                        },

                        {
                            name:'Aloo Paratha',
                            id:'Aloo Paratha',
                            ingredients:[    
                                '2 potato',
                                '1 tablespoon coriander leaves',
                                'salt ',
                                '1 tablespoon ghee',
                                ' 1/2 teaspoon red chilli powder',
                                '2 tablespoon onion',
                                '1/2 teaspoon garam masala powder',
                                '1 cup wheat flour',
                               '1/2 cup water'
                            ]

                        },
                        {
                            name:'Phulka',
                            id:'Phulka',
                            ingredients:[
                                '2 cup flour',
                                'salt',
                                '1 tbs ghee'
                            ]
                        }

                    ],
                    SnacksandSweets:[
                        {
                            name:'Gulab Jamun',
                            id:'Gulab Jamun',
                            ingredients:[
                                '50 gm paneer',
                                '2 cup canola oil/ rapeseed oil',
                                '500 ml boiling water',
                                '1 slice lemon',
                                '2 cup powdered sugar',
                                '1/2 teaspoon powdered green cardamom',
                                '150 gm mashed khoya',
                                '2 tablespoon ghee',
                                 '30 gm all purpose flour',
                                '2 tablespoon corn flour',
                                '1/4 teaspoon baking powder'
                                
                                                     ]
                        },

                        {
                            name:'BhelPuri',
                            id:'BhelPuri',
                            ingredients:[    
                                '2 cups puffed rice (murmura)',
                                 '1/2 cup fine sev',
                                '1 cup finely chopped onions',
                                '1 cup boiled and cubed potatoes',
                                '8 poories',
                                '1 Tbsp green chutney',
                                '1/4 cup date chutney',
                                '1 Tbsp lemon juice',
                                '1 Tbsp salt',
                                'Coriander leaves '
                            ]

                        },
                        {
                            name:'Mysore Pak',
                            id:'Mysore Pak',
                            ingredients:[
                                '2 cup sugar',
                                '1 pinch baking soda',
                                '1 cup gram flour (besan)',
                                '2 cup ghee',
                                '1/2 cup water'
                            ]
                        }

                    ],
                    RiceVarieties:[
                        {
                            name:'Rice Noodles',
                            id:'Rice Noodles ',
                            ingredients:[
                                '1-1/2 cups long grain rice',
                            '1/2 cup urad dal (polished black lentil or white lentil)',
                            '3 quarts water',
                            'Salt',
                            '1 medium onion, chopped',
                             '2 green chilies, chopped',
                             '1 Tbs ghee ',
                            '1/2 tsp black mustard seeds',
                            '1/2 tsp chana dal (split black chickpeas)',
                            '1 sprig curry leaves',
                            '1/2 tsp turmeric powder',
                            '2 large potatoes, boiled'
                                                     ]
                        },

                        {
                            name:'Plain Rice',
                            id:'Plain Rice',
                            ingredients:[    
                                '2 cup Rice',
                                '1 cup water',
                                'salt',

                            ]

                        },
                        {
                            name:'Turmeric Rice',
                            id:'Turmeric Rice',
                            ingredients:[
                                '2 cup Rice',
                                'salt',
                                '1 cup water',
                                '1 tbs turmeric',
                                '2 chilli',
                                'corriader'
                            ]
                        }

                    ],

                }
            ]
         }
   }

   

    render(){

           
         
         return 
            
         <div>
         
         {
             this.state.receipes.map(receipe => <Breakfast key={receipe.Breakfast.id}
                 delEvent={(id) => this.deleteBreakfast(id)}
                 receipe={receipe} />)
         }
           </div>
         
               
              
    
            




    }



}