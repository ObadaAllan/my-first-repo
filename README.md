# my-first-repo
## level 2 header 
###### level 6 header
* list
* list 2
- dashed list

1. orderd list 
2. 2 item

**this is bold**
*itlaic*
***blod plus italic***

[marck down repo](https://github.com/ObadaAllan/my-first-repo)

![](https://pbs.twimg.com/profile_images/524524469339947008/vrq6jGQM_400x400.jpeg)

js-02 first repo
this will be our first 
hello my name is obada 
o.motasem10@gmail.com this is my email from vs code

|topic| link|   
|---|---|
|review md |[link](./markdown/review.md)   |   
|   |   |   
|   |   |   


## local storage

1. saving array of object to local storage
```javascript
function savedata(data)
{
    console.log("before saving",data);
    //taking array and convert it to string
    let datatosting=JSON.stringify(data)
    localStorage.setItem("drinks",datatosting);
}

```
* the error was set item takes a string and the data tha i store is not readble the soloutin was this line of code
* let datatosting=JSON.stringify(data)

2. getting the data from the local storage
```javascript

{
    //taking string and convert it to array
    let retr=localStorage.getItem("drinks");
    console.log(retr);
    console.log(typeof(retr));
    let arrdata=JSON.parse(retr);
   
``` 
* the error :getitem return a string .not array of object
* the solution was this line let arrdata=JSON.parse(retr);

3. rendering this data from ls so its not lost when refresh
* i can no longer access the methods render
* the solution something called reinstanceation

 *with this line we make an reinstanciation new Drink(arrdata[i].name,arrdata[i].ingredients,arrdata[i].image,arrdata[i].cold,arrdata[i].hot,arrdata[i].price);

 * the sceond error was if the local storage empty so the get item is returning null;
 the solution is put if statment to check if the array is null
