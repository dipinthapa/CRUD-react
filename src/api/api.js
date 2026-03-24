export const getPosts = async() => {
 const response = await fetch('https://jsonplaceholder.typicode.com/users', {
           method: "GET" , 
        }) 
        return  await response.json();

};