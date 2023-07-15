/** @format */
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  const professionOfEmployee = arr.filter((employee) => employee.profession === "developer");
  professionOfEmployee.map((professionOfEmployee) =>{ console.log("output using map: ",professionOfEmployee)});
  }
function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee)=>{
      if(employee.profession === "developer"){
        console.log("output using forEach: ",employee);
      }
  });
}

function addData() {
  //Write your code here, just console.log
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log("Added Employee:", arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log("Updated Array:", arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  const newArray = [
    { id: 5, name: "shreyas", age: "25", profession: "developer" },
    { id: 6, name: "akash", age: "24", profession: "manager" },
    { id: 7, name: "tushar", age: "27", profession: "painter" },
  ];
  const concatenatedArray = arr.concat(newArray);
  console.log("Concatenated Array:", concatenatedArray);
}