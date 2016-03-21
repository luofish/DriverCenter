

 export function getSchoolList (){
       
       let schoolList: Array<school.DriverSchoool> = []; 
       
       for(let i = 0; i < 10; i++){
           schoolList.push({
              id: "id" + i,
              name: "school" + i,
              createTime: new Date().getTime() 
               
           });
       }
        
       return schoolList;
 }   
