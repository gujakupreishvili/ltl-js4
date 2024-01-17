//დავწეროთ ფუნქცია რომელსაც გადეცემა რაიმე პარამეტრი და არგუმენტად
//მიიღებს ისეთ რიცხვებს რომლის დახმარებითაც უნდა გამოვითვალო
//მაგალითად რამდენი წელი გვაკლდება თითოეულს პენსიამდე და ეს
//ყველაფერი უნდა დავწეროთ ამ ფუნქციაში.
const firstFunction=(pensioner,yourAge)=>{
 let a=pensioner-yourAge;
 console.log(`${a} congratulation you are not pensioner`)
   
}
let pensionerAge=Number(prompt("enter pensioner age"));
let your=Number(prompt("enter your age"));
firstFunction(pensionerAge,your);

//2)შექმენით კალკულატორის ფუნქცია სახელად კალკულატორი,
// რომელიც ასრულებს ძირითად არითმეტიკულ ოპერაციებს.
// ამ ფუნქციამ უნდა მიიღოს სამი პარამეტრი: ორი რიცხვი და სტრიქონი,მაგალითად num1,num2, "+".
// რომელიც წარმოადგენს არითმეტიკულ ოპერატორს ('+', '-', '*', '/').
// მოწოდებული ოპერატორის მიხედვით, ფუნქციამ უნდა შეასრულოს შესაბამისი ოპერაცია ორ ნომერზე და დააბრუნოს შედეგი.
function calculator(firstNumber,secondeNUmber,sum){

  switch (sum) {
    case "+":
    sum=firstNumber+secondeNUmber;
    console.log(sum);
      break;
    case "-":
      sum=firstNumber-secondeNUmber;
      console.log(sum);
      break;
    case "*":
      sum=firstNumber*secondeNUmber;
      console.log(sum);
      break;
    case "/":
      sum=firstNumber/secondeNUmber;
      console.log(sum);
    default:
      console.log("error")
      break;
  }
  // return calculator;
}
let num1=Number(prompt("enter your first number"));
let num2=Number(prompt("enter your seconde number"));
let parametr=prompt("enter your parametr")
calculator(num1,num2,parametr);

//3)შეიმუშავეთ ფუნქცია სახელწოდებით checkPasswordStrength, რომელიც აფასებს მოცემული პაროლის სიძლიერეს.
// პაროლის სიძლიერე განისაზღვრება რამდენიმე კრიტერიუმის საფუძველზე: ის უნდა იყოს მინიმუმ 8 სიმბოლო და მაქსიმუმ 16 სიმბოლო;
// ფუნქციამ უნდა დააბრუნოს სტრიქონი სადაც გვეწერება რომ თუ ნაკლებია 8 მაშინ შესაბამისი ერორით თუ მეტია 16 მაშინ შესაბამისი ერრორით და თუ ცარიელია input უნდა შევამოწმოთ ეგეც
//გამოიყენეთ if-else განცხადებები თითოეული კრიტერიუმის შესამოწმებლად და სიძლიერის შესაფასებლად.
function checkPasswordStrength(password){
  if(password.lenght>8 &&password.lenght<16){
    console.log("you can creat password")
  }else if(password.lenght<8){
    console.log("should be at least 8 characters");
  }else if(password.lenght>16){
    console.log("should be up to 16 characters")
  }else if (password===""){
    console.log("error");
  }else{
    console.log("somethin wrong");
  }
}
checkPasswordStrength(prompt("enter your passowrd"));

//4) დაწერეთ ფუქნცია სადაც პარამეტრად გავატანთ flowers და არგუმენტად გავატანთ ყვავილების სახეობებს.
//და გვჭირდება რომ switch case დავწეროთ ლოგიკა რომ თუ შესაბამისი სახელის ყვავილები გვაქვს მაშინ დავაბრუნოთ console-ში 
//ეს ყვავილი ნაპოვნია!!
function typeFlowers(flowers){
  switch (flowers) {
    case "ia":
      console.log("ეს ყვავილი ნაპოვნია")
      break;
      case "vardi":
        console.log("ეს ყვავილი ნაპოვნია");
        break;
      case "gvirila":
        console.log("ეს ყვავილი ნაპოვნია");
        break;  
    default:
      console.log("ეს ყვავილი არ არის ნაპოვნი");
      break;
  }
}
typeFlowers(prompt("enter your favorite flower"));

//5)გვჭირდება სამი prompt.გვჭირდება რომ ამ სამ ინფუტში შემოყვანილი რიცხვებიდან რომელი არის უდიდესი ის დავიჭიროთ და დავლოგოთ უბრალოდ.
// მაგალითად.2,5,7 და აქედან უდიდესი არის 7.
//დაწერეთ ფუნქციაში ეს ყველაფერი და შემდეგ ამ ფუნქციაში შეამოწმეთ if else დახმარებით!!
const ltlsum=(first, second ,third)=>{
  if (first > second && first > third){
    console.log(first);
  }else if(second > first && second>third ){
    console.log(second);
  }else if (third > first && third > second ){
    console.log(third);
  }else{
    console.log("error")
  }
}
let firstNum=Number(prompt("enter first number"));
let secondNUm=Number(prompt("enter second number"));
let thirdNUm=Number(prompt("enter third number"));
ltlsum(firstNum,secondNUm,thirdNUm);

