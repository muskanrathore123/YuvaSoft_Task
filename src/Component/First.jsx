import React, { useEffect, useState } from 'react'

function First() {
    let [selectcolor, setColor] = useState([
      { color: "white", price: +0, type: "snow" },
      { color: "orange", price: +100, type: "orange" },
      { color: "green", price: 100, type: "sky" },
    ]);

    let [selectPower,setSelectPower]=useState([
        {value:"100MW", price:0},
        {value:"150MW", price:200},
        {value:"200MW", price:500}
    ])

    let [warpDrive, setWarpDrive] = useState([
      { value: "NO", price: 0 },
      { value: "YES", price: 1000 },
    ]);

    let [selectOption, setSelectOption] = useState([
      { value: "Basic", price: 0, facility: "air condition" },
      {
        value: "Sport",
        price: 100,
        facility: "air condition",
        f2: "cloth seat",
        f3: "personal tech support",
      },
      {
        value: "Lux",
        price: 500,
        facility: "air condition",
        f2: "cloth seat",
        f3: "fm radio",
      },
    ]);

    let basePrice=1000;
    let[colorPrice,setColorPrice]=useState(null)
     let [powerPrice, setPowerPrice] = useState(null);
      let [warpDrivePrice, setWarpPrice] = useState(null);
       let [optionPrice, setOptionPrice] = useState(null);
     let [total,setTotal]=useState(basePrice)
       
        
       

     useEffect(() => {
       setTotal(
         basePrice + colorPrice + powerPrice + warpDrivePrice + optionPrice
       );
     }, [colorPrice, powerPrice, warpDrivePrice, optionPrice]);

       
   
    //  handle for color
    function handleColor(price){
        setColorPrice(price)
        console.log(colorPrice);       
    }

    // handle for power
    function handlePower(price){
        setPowerPrice(price)
        console.log(powerPrice);    
    }

    // handle wrap drive
    function handleDrive(price){
        setWarpPrice(price)
        console.log(warpDrivePrice);   
    }

    // handle select opttion
    function handleSelect(price){
        setOptionPrice(price)
        console.log(optionPrice);
        
    }
  return (
    <div className=" w-[800px] h-auto border border-green-500 mx-auto mt-48 bg-indigo-950 pb-10">
      <div>
        <h1 className="text-center text-green-400">Spaceship configuratior</h1>
      </div>
      {/* select color */}
      <div>
        <h1 className="text-green-900 ml-12">select color:</h1>
      </div>
      <div className="flex flex-wrap gap-8 ml-28 text-center">
        {selectcolor.map((val) => (
          <div
            className="w-32 h-20 rounded-md border border-green-400 text-cente   hover:drop-shadow-md "
            onClick={() => handleColor(val.price)}
          >
            <div
              className="w-10 h-5 rounded-sm mx-auto mt-2"
              style={{ background: val.color }}
            ></div>
            <p className="text-green-400">{val.price}</p>
            <p className="text-green-400">{val.type}</p>
          </div>
        ))}
      </div>
      {/* select color end */}
      {/* select Power */}

      <div>
        <h1 className="text-green-400 ml-12">Select Power:</h1>
      </div>
      <div className="flex flex-wrap gap-8 ml-28">
        {selectPower.map((val) => (
          <div
            className="w-32 h-20 rounded-md border border-green-400 text-center"
            onClick={() => handlePower(val.price)}
          >
            <p className="text-green-400">{val.value}</p>
            <p className="text-green-400">{val.price}</p>
          </div>
        ))}
      </div>
      {/* select power end */}

      {/* Wrap drive */}
      <div>
        <h1 className="text-green-400 ml-12">Select Power:</h1>
      </div>
      <div className="flex flex-wrap gap-8 ml-28">
        {warpDrive.map((val) => (
          <div
            className="w-32 h-20 rounded-md border border-green-400 text-center"
            onClick={() => handleDrive(val.price)}
          >
            <p className="text-green-400">{val.value}</p>
            <p className="text-green-400">{val.price}</p>
          </div>
        ))}
      </div>
      {/* wrap drive end */}

      {/* select option */}
      <div>
        <h1 className="text-green-400 ml-12">Select Option:</h1>
      </div>
      <div className="flex flex-wrap gap-8 ml-28">
        {selectOption.map((val) => (
          <div
            className="w-32 h-auto rounded-md border border-green-400 text-center hover:shadow-md"
            onClick={() => handleSelect(val.price)}
          >
            <p className="text-green-400">{val.value}</p>
            <p className="text-green-400">{val.price}</p>
            <p className="text-green-400">{val.facility}</p>
            <p className="text-green-400">{val.f1}</p>

            <p className="text-green-400">{val.f2}</p>
          </div>
        ))}
      </div>
      {/* select option end */}

      {/* show the total price */}
      <div className="w-72 h-auto pb-10 rounded-md border border-green-400 text-center text-green-700 flex flex-col mt-16 mx-auto">
        <label>Base Price:</label>
        <span>{basePrice}</span>

        <div>
          <label>Color:</label>
          <span>{colorPrice}</span>
        </div>
        <div>
          <label>Power:</label>
          <span>{powerPrice}</span>
        </div>
        <div>
          <label>Wrap Drive:</label>
          <span>{warpDrivePrice}</span>
        </div>
        <div>
          <label>Option Package:</label>
          <span>{optionPrice}</span>
        </div>

        <div>
          <label>Total:</label>
          <span>{total}</span>
        </div>
      </div>
    </div>
  );
}

export default First
