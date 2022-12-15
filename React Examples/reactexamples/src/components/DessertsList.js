function DessertsList(props) {
  
    const desserts = props.data;

    const healthy = desserts.filter((elem) => elem.calories < 500)
                            .sort((a,b) => (a.calories > b.calories)? 1 :-1)
                            .map((healthy_desert)=>{
                                const desertAndCal = `${healthy_desert.name} - Calories: ${healthy_desert.calories} cal`
                                return <li>{desertAndCal}</li>; 
                            });

    return <ul>{healthy}</ul>
  
  }
  
  export default DessertsList;
  