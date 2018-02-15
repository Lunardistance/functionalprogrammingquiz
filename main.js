const employees = [
    { name: 'Gabriel Luciano', hourlyRate: 120.00, hoursWorked: 40 },
    { name: 'Skippy Luciano', hourlyRate: 115.00, hoursWorked: 40 },
    { name: 'Shary Chamorro', hourlyRate: 100.00, hoursWorked: 65 }
]



class Payroll {
    constructor(employees) {
        this.employees = employees
        this.getNames = this.getNames(this.employees)
        this.getFullTime = this.getFullTime(this.employees)
        this.getTotalLabor = this.getTotalLabor(this.employees)

    }

    getNames(employees) {
        return employees.map(nam => {
            return nam.name
            
            
            })
            const getNames = getNames(employees)
            getNames.sort
           
    }



    getFullTime(employees) {
        return employees.filter(time => {
            return (time.hoursWorked > 60)
        })
    }

    getTotalLabor(employees) {
        return employees.reduce((acc, curr, i) => {
            return (i === employees.length - 1) ? (acc + curr) * (curr.hourlyRate) : acc + curr.hourlyRate

        })
    }
}






const pyrll = new Payroll(employees)

console.log(pyrll.getNames)
console.log(pyrll.getFullTime)
console.log(pyrll.getTotalCost)