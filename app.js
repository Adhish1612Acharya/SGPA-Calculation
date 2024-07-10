let btn=document.querySelector("button");
btn.addEventListener("click",function(){
// Program to calculate cgpa

let sub1marks,sub2marks,sub3marks,sub4marks,sub5marks,sub6marks,sub7marks,sub8marks;

let credit1=4,credit2=4,credit3=3,credit4=3,credit5=3,credit6=1,credit7=1,credit8=1;

let gp1,gp2,gp3,gp4,gp5,gp6,gp7,gp8;

let marks1,marks2,marks3,marks4,marks5,marks6,marks7,marks8;

//subject1
sub1marks=prompt("Enter your Subject1 marks out of 100");
if(sub1marks<0 || sub1marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
    sub1marks=prompt("Enter your Subject one marks correctly");
    console.log(sub1marks);
}
else{
    console.log(`Subject1 marks = ${sub1marks}`);
}


if(sub1marks>=90 && sub1marks<=100){
     gp1=10;
     marks1=gp1*credit1;
} 
else if(sub1marks>=80 && sub1marks<90){
    gp1=9;
    marks1=gp1*credit1;
} 
else if(sub1marks>=70 && sub1marks<80){
    gp1=8;
    marks1=gp1*credit1;
} 
else if(sub1marks>=60 && sub1marks<70){
    gp1=7;
    marks1=gp1*credit1;
} 
else if(sub1marks>=50 && sub1marks<60){
    gp1=6;
    marks1=gp1*credit1;
} 
else if(sub1marks>=40 && sub1marks<50){
    gp1=5;
    marks1=gp1*credit1;
} 
else{
    console.log("Fail in subject1 !!!");
    marks1=0;
}

console.log(`marks1 after Grade_point * Credit = ${marks1}`);

//subject2
sub2marks=prompt("Enter your Subject2 marks out of 100");
if(sub2marks<0 || sub2marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
}
else{
    console.log(`Subject2 marks = ${sub2marks}`);
}


if(sub2marks>=90 && sub2marks<=100){
    gp2=10;
    marks2=gp2*credit2;
} 
else if(sub2marks>=80 && sub2marks<90){
   gp2=9;
   marks2=gp2*credit2;
} 
else if(sub2marks>=70 && sub2marks<80){
   gp2=8;
   marks2=gp2*credit2;
} 
else if(sub2marks>=60 && sub2marks<70){
   gp2=7;
   marks2=gp2*credit2;
} 
else if(sub2marks>=50 && sub2marks<60){
   gp2=6;
   marks2=gp2*credit2;
} 
else if(sub2marks>=40 && sub2marks<50){
   gp2=5;
   marks2=gp2*credit2;
} 
else{
   console.log("Fail in subject2 !!!");
   marks2=0;
}

console.log(`marks2 after Grade_point * Credit = ${marks2}`);

//subject3
sub3marks=prompt("Enter your Subject3 marks out of 100");
if(sub3marks<0 || sub3marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
}
else{
    console.log(`Subject3 marks = ${sub3marks}`);
}


if(sub3marks>=90 && sub3marks<=100){
    gp3=10;
    marks3=gp3*credit3;
} 
else if(sub3marks>=80 && sub3marks<90){
   gp3=9;
   marks3=gp3*credit3;
} 
else if(sub3marks>=70 && sub3marks<80){
    gp3=8;
    marks3=gp3*credit3;
} 
else if(sub3marks>=60 &&sub3marks<70){
    gp3=7;
    marks3=gp3*credit3;
} 
else if(sub3marks>=50 && sub3marks<60){
    gp3=6;
    marks3=gp3*credit3;
} 
else if(sub3marks>=40 && sub3marks<50){
    gp3=5;
    marks3=gp3*credit3;
} 
else{
   console.log("Fail in subject3 !!!");
   marks3=0;
}

console.log(`marks3 after Grade_point * Credit = ${marks3}`);

//subject4
sub4marks=prompt("Enter your Subject4 marks out of 100");
if(sub4marks<0 || sub4marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
}
else{
    console.log(`Subject4 marks = ${sub4marks}`);
}


if(sub4marks>=90 && sub4marks<=100){
    gp4=10;
    marks4=gp4*credit4;
} 
else if(sub4marks>=80 && sub4marks<90){
    gp4=9;
   marks4=gp4*credit4;
} 
else if(sub4marks>=70 && sub4marks<80){
    gp4=8;
    marks4=gp4*credit4;
} 
else if(sub4marks>=60 && sub4marks<70){
    gp4=7;
    marks4=gp4*credit4;
} 
else if(sub4marks>=50 && sub4marks<60){
    gp4=6;
    marks4=gp4*credit4;
} 
else if(sub4marks>=40 && sub4marks<50){
    gp4=5;
    marks4=gp4*credit4;
} 
else{
   console.log("Fail in subject4 !!!");
   marks4=0;
}

console.log(`marks4 after Grade_point * Credit = ${marks4}`);

//subject5
sub5marks=prompt("Enter your Subject5 marks out of 100");
if(sub5marks<0 || sub5marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
}
else{
    console.log(`Subject5 marks = ${sub5marks}`);
}


if(sub5marks>=90 && sub5marks<=100){
    gp5=10;
    marks5=gp5*credit5;
} 
else if(sub5marks>=80 && sub5marks<90){
    gp5=9;
   marks5=gp5*credit5;
} 
else if(sub5marks>=70 && sub5marks<80){
    gp5=8;
    marks5=gp5*credit5;
} 
else if(sub5marks>=60 && sub5marks<70){
    gp5=7;
    marks5=gp5*credit5;
} 
else if(sub5marks>=50 && sub5marks<60){
    gp5=6;
    marks5=gp5*credit5;
} 
else if(sub5marks>=40 && sub5marks<50){
    gp5=5;
    marks5=gp5*credit5;
} 
else{
   console.log("Fail in subject5 !!!");
   marks5=0;
}

console.log(`marks5 after Grade_point * Credit = ${marks5}`);

//subject6
sub6marks=prompt("Enter your Subject6 marks out of 100");
if(sub6marks<0 || sub6marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
}
else{
    console.log(`Subject6 marks = ${sub6marks}`);
}


if(sub6marks>=90 && sub6marks<=100){
    gp6=10;
    marks6=gp6*credit6;
} 
else if(sub6marks>=80 && sub6marks<90){
    gp6=9;
   marks6=gp6*credit6;
} 
else if(sub6marks>=70 && sub6marks<80){
    gp6=8;
    marks6=gp6*credit6;
} 
else if(sub6marks>=60 && sub6marks<70){
    gp6=7;
    marks6=gp6*credit6;
} 
else if(sub6marks>=50 && sub6marks<60){
    gp6=6;
    marks6=gp6*credit6;
} 
else if(sub6marks>=40 && sub6marks<50){
    gp6=5;
    marks6=gp6*credit6;
} 
else{
   console.log("Fail in subject6 !!!");
   marks6=0;
}

console.log(`marks6 after Grade_point * Credit = ${marks6}`);

//subject7
sub7marks=prompt("Enter your Subject7 marks out of 100");
if(sub7marks<0 || sub7marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
}
else{
    console.log(`Subject7 marks = ${sub7marks}`);
}


if(sub7marks>=90 && sub7marks<=100){
    gp7=10;
    marks7=gp7*credit7;
} 
else if(sub7marks>=80 && sub7marks<90){
    gp7=9;
   marks7=gp7*credit7;
} 
else if(sub7marks>=70 && sub7marks<80){
    gp7=8;
    marks7=gp7*credit7;
} 
else if(sub7marks>=60 && sub7marks<70){
    gp7=7;
    marks7=gp7*credit7;
} 
else if(sub7marks>=50 && sub7marks<60){
    gp7=6;
    marks7=gp7*credit7;
} 
else if(sub7marks>=40 && sub7marks<50){
    gp7=5;
    marks7=gp7*credit7;
} 
else{
   console.log("Fail in subject7 !!!");
   marks7=0;
}

console.log(`marks7 after Grade_point * Credit = ${marks7}`);

//subject8
sub8marks=prompt("Enter your Subject8 marks out of 100");
if(sub8marks<0 || sub8marks>100){
    console.warn("Invalid marks!!!");
    alert("Invalid marks!!!");
}
else{
    console.log(`Subject8 marks = ${sub8marks}`);
}


if(sub8marks>=90 && sub8marks<=100){
    gp8=10;
    marks8=gp8*credit8;
} 
else if(sub8marks>=80 && sub8marks<90){
    gp8=9;
   marks8=gp8*credit8;
} 
else if(sub8marks>=70 && sub8marks<80){
    gp8=8;
    marks8=gp8*credit8;
} 
else if(sub8marks>=60 && sub8marks<70){
    gp8=7;
    marks8=gp8*credit8;
} 
else if(sub8marks>=50 && sub8marks<60){
    gp8=6;
    marks8=gp8*credit8;
} 
else if(sub8marks>=40 && sub8marks<50){
    gp8=5;
    marks8=gp8*credit8;
} 
else{
   console.log("Fail in subject8 !!!");
   marks8=0;
}

console.log(`marks8 after Grade_point * Credit = ${marks8}`);

let marks=marks1 + marks2 + marks3 + marks4 + marks5 + marks6 + marks7 + marks8;
let CGPA = marks/20;

if(CGPA>=8){
    alert(`Congratulations!!! Your SGPA is ${CGPA}`);
    console.log(`Congratulations!!! Your SGPA is ${CGPA}`);
}
else if(CGPA>=6.5 && CGPA<8){
    alert(`Well done!!! Your SGPA is ${CGPA} but still  you can do BETTER!!!`);
    console.log(`Well done!!! Your SGPA is ${CGPA} but still  you can do BETTER!!!`);
}
else{
    alert(` Your SGPA is ${CGPA}  !!!!NEED TO IMPROVE A LOT!!!`);
    console.log(` Your CGPA is ${CGPA}  !!!!NEED TO IMPROVE A LOT!!!`);
}
});
