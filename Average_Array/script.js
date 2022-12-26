//Criar a média das 3 notas de cada aluno.
//Criar a média geral da sala e a média de idade dos alunos da sala
//informar na frase se o aluno passou(média 7) ou não.
//frase modelo: "O aluno(a) passou com média: xx O aluno foi aprovado/reprovado.


data = [
  {
    name:"Pedro",
    age: 28,
    gradeOne: 10,
    gradeTwo: 5,
    gradeThree: 3,
  },
  {
    name:"Maria",
    age: 29,
    gradeOne: 10,
    gradeTwo: 9,
    gradeThree: 8,
  },
  {
    name:"João",
    age: 32,
    gradeOne: 7,
    gradeTwo: 6,
    gradeThree: 5,
  },
  {
    name:"Letícia",
    age: 30,
    gradeOne: 8,
    gradeTwo: 7.5,
    gradeThree: 6.5,
  },
]

var averageUserClass = []
var ageUserClass = []
var averageClass = 0
var ageClass = 0

function average(gradeOne, gradeTwo, gradeThree) {
  return ((gradeOne + gradeTwo + gradeThree)/3).toFixed(2)
}

for(let userData of data){
  let averageEnd = average(userData.gradeOne, userData.gradeTwo, userData.gradeThree)
    if (averageEnd >= 7){
      alert(`
      O(A) aluno(a) ${userData.name} foi APROVADO(A). \n
      A sua média ${averageEnd}.`)
    } else {
      alert(`
      O(A) aluno(a) ${userData.name} foi REPROVADO(A) \n
      A sua média foi: ${averageEnd}.`)
    }
  }

for (let userData of data){
  averageUser = (userData.gradeOne + userData.gradeTwo + userData.gradeThree)/3
  averageUserClass.push(averageUser)

  ageUser = (userData.age)
  ageUserClass.push(ageUser)
}

for (var i = 0; i < averageUserClass.length; i++){
  averageClass += averageUserClass[i]
}

let averageClassEnd = (averageClass/(averageUserClass.length)) 

alert(`A média final da turma é: ${averageClassEnd.toFixed(2)}`)

for (var i = 0; i < ageUserClass.length; i++){
  ageClass += ageUserClass[i]
}

let ageEndClass = (ageClass/(ageUserClass.length))
ageEndClassRound = Math.round(ageEndClass)

alert(`A média das idades da turma é: ${ageEndClassRound}`)

