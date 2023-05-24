
class personDetail{
    constructor(Name, Sex, Age, PhoneNumber, EmailID, Education, Branch, Experience, Role, ProgrammingSkills ){
             this.Name=Name;
             this.Sex=Sex;
             this.Age=Age;
             this.PhoneNumber=PhoneNumber;
             this.EmailID=EmailID;
             this.Education=Education;
             this.Branch=Branch;
             this.Experience=Experience;
             this.Role=Role;
             this.ProgrammingSkills=ProgrammingSkills;
    }
    getdetails(a){
          
       return a
    }
}

const details =   
 [
    new personDetail('Chandru', 'Male', '23', '+91**********', 'xy******@gmail.com', 'Bachelore of engineering', 'Mechanical', '10months','Design engineer','HTML,CSS,Javascript,Python')
    

]

k  = new personDetail();
console.log(k.getdetails(details));
