class GrandParent{
    m0(){
        console.log("grandparent m0 method");
    }
}
// javaScript does not support multiple inheritace

class Parent extends GrandParent{
    m1(){
        console.log("parent m1 method");
    }
}

class Child extends Parent{
    m2(){
        console.log("child m2 method");
    }
}

const obj=new Child()           //  multi-level inheritance

obj.m2()
obj.m1()
obj.m0()