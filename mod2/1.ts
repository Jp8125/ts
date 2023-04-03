let objarr: object[] = [
    { id: 1, name: "emp1", city: "ahmedabad", jd: new Date("1, 23, 2023"), salary: 130000 },
    { id: 2, name: "emp2", city: "mumbai", jd: new Date("1, 24, 2024"), salary: 10000 },
    { id: 3, name: "emp45", city: "delhi", jd: new Date("1, 23, 2020"), salary: 70000 },
    { id: 4, name: "emp21", city: "ahmedabad", jd: new Date("11, 25, 2020"), salary: 20000 },
    { id: 5, name: "emp15", city: "jaipur", jd: new Date("1, 2, 2021"), salary: 24000 },
    { id: 6, name: "emp12", city: "pushkar", jd: new Date("1, 23, 2020"), salary: 40000 },
    { id: 7, name: "emp17", city: "ahmedabad", jd: new Date("1,3, 2014"), salary: 50000 }
]
let arr: number[] = [1, 2, 3, 4, 5]
let d = new Date("1-2-2020")
console.log
    (objarr.filter((obj) => obj["jd"].getFullYear() > d.getFullYear()))
console.log("-----filter by city------")
console.log
    (objarr.filter((obj) => obj["city"].toLowerCase() == "mumbai"))
function search(param: number): void {
    console.log("----search y id---")
    console.log(objarr.filter(obj => obj["id"] == param))

}
function search_name(param: string): void {
    console.log("----search y name---")
    console.log(objarr.filter(obj => obj["name"] == param))

}
search_name("emp15")
search(1)
console.log(
    "------------filter by salary------------"
);

console.log
    (objarr.filter((obj) => obj["salary"] > 20000 && obj["salary"] < 50000))