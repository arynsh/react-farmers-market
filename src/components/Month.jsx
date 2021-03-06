import React from 'react';
import Selection from './Selection';

var monthSelection = [
  {month: 'January',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Garlic ',
      'Mushrooms ',
      'Onions ',
      'Potatoes ',
      'Turnips '
    ]
    //produce: selection.produce
  },
  {month: 'February',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Garlic ',
      'Mushrooms ',
      'Onions ',
      'Potatoes '
    ]
  //produce: selection.produce
  },
  {month: 'March',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Rhubarb ',
      'Garlic ',
      'Mushrooms ',
      'Onions ',
      'Potatoes '
    ]
  //produce: selection.produce
  },
  {month: 'April',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Rhubarb ',
      'Asparagus ',
      'Garlic ',
      'Lettuce ',
      'Mushrooms ',
      'Onions ',
      'Potatoes '
    ]
  //produce: selection.produce
  },
  {month: 'May',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Rhubarb ',
      'Asparagus ',
      'Cauliflower ',
      'Garlic ',
      'Lettuce ',
      'Potatoes ',
      'Radishes '
    ]
  //produce: selection.produce
  },
  {month: 'June',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Rhubarb ',
      'Blackberries ',
      'Cherries ',
      'Raspberries ',
      'Strawberries ',
      'Asparagus ',
      'Broccoli ',
      'Cauliflower ',
      'Kohlrabi ',
      'Lettuce ',
      'Mushrooms ',
      'Potatoes ',
      'Radishes ',
      'Squash '
    ]
  //produce: selection.produce
  },
  {month: 'July',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Rhubarb ',
      'Apricots ',
      'Blackberries ',
      'Blueberries ',
      'Cherries ',
      'Melons ',
      'Nectarines ',
      'Peaches ',
      'Raspberries ',
      'Strawberries ',
      'Tomatoes ',
      'Beets ',
      'Broccoli ',
      'Brussel Sprouts ',
      'Cabbage ',
      'Carrots ',
      'Cauliflower ',
      'Cucumber ',
      'Eggplant ',
      'Garlic ',
      'Green Beans ',
      'Kohlrabi ',
      'Lettuce ',
      'Mushrooms ',
      'Potatoes ',
      'Radishes ',
      'Squash ',
      'Turnips '
    ]
  //produce: selection.produce
  },
  {month: 'August',
    selection: [
      'Apples ',
      'Apricots ',
      'Blackberries ',
      'Blueberries ',
      'Cherries ',
      'Melons ',
      'Nectarines ',
      'Peaches ',
      'Pears ',
      'Plums ',
      'Raspberries ',
      'Rhubarb ',
      'Strawberries ',
      'Tomatoes ',
      'Beets ',
      'Broccoli ',
      'Brussel Sprouts ',
      'Cabbage ',
      'Carrots ',
      'Cauliflower ',
      'Corn ',
      'Cucumber ',
      'Eggplant ',
      'Garlic ',
      'Green Beans ',
      'Kohlrabi ',
      'Lettuce ',
      'Mushrooms ',
      'Onions ',
      'Peas ',
      'Peppers ',
      'Potatoes ',
      'Radishes ',
      'Squash ',
      'Turnips '
    ]
  //produce: selection.produce
  },
  {month: 'September',
    selection: [
      'Apples ',
      'Blueberries ',
      'Grapes ',
      'Melons ',
      'Peaches ',
      'Pears ',
      'Plums ',
      'Raspberries ',
      'Tomatoes ',
      'Broccoli ',
      'Brussel Sprouts ',
      'Cabbage ',
      'Carrots ',
      'Cauliflower ',
      'Corn ',
      'Cucumber ',
      'Eggplant ',
      'Garlic ',
      'Green Beans ',
      'Kohlrabi ',
      'Lettuce ',
      'Mushrooms ',
      'Onions ',
      'Peas ',
      'Peppers ',
      'Potatoes ',
      'Radishes ',
      'Squash ',
      'Turnips '
    ]
  //produce: selection.produce
  },
  {month: 'October',
    selection: [
      'Apples ',
      'Grapes ',
      'Hazelnuts ',
      'Melons ',
      'Peaches ',
      'Pears ',
      'Tomatoes ',
      'Broccoli ',
      'Brussel Sprouts ',
      'Cabbage ',
      'Carrots ',
      'Cauliflower ',
      'Corn ',
      'Cucumber ',
      'Eggplant ',
      'Garlic ',
      'Green Beans ',
      'Kohlrabi ',
      'Lettuce ',
      'Mushrooms ',
      'Onions ',
      'Peas ',
      'Peppers ',
      'Potatoes ',
      'Pumpkins ',
      'Radishes ',
      'Squash ',
      'Turnips '
    ]
  //produce: selection.produce
  },
  {month: 'November',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Broccoli ',
      'Carrots ',
      'Cauliflower ',
      'Garlic ',
      'Mushrooms ',
      'Onions ',
      'Potatoes ',
      'Squash ',
      'Turnips '
    ]
  //produce: selection.produce
  },
  {month: 'December',
    selection: [
      'Apples ',
      'Hazelnuts ',
      'Pears ',
      'Broccoli ',
      'Carrots ',
      'Cauliflower ',
      'Garlic ',
      'Mushrooms ',
      'Onions ',
      'Potatoes ',
      'Turnips '
    ]
  //produce: selection.produce
  }
];

function Month(){
  return(
    <div >
      {monthSelection.map((selection, index) =>
      <Selection 
          month={selection.month}
          selection={selection.selection.sort()}
          key={index}/>
    )}
    </div>
  );
}

export default Month;