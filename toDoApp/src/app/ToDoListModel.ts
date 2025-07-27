export class UserInfo {
    Title:string = "ToDoList Uygulaması"
    UserName:string = "Muhammed";
    UserAge:number = 27;
    UserJobs:String = "Software Developer";
    ToDoListItems=[
        new ToListItem("CSS",true),
        new ToListItem("HTML",true),
        new ToListItem("JavaScript",false),
        new ToListItem("TypeScript",false),
    ];
}




export class ToListItem {
    Description: string;
    Action: boolean;
    constructor(description:string, action:boolean) {
        this.Description = description;
        this.Action = action;

    }
} 