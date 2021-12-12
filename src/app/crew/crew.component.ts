import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crewNames: string[] = []
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  memberBeingEdited: object = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    // this.crew.push({name: memberName, firstMission: isFirst});
    for (let member of this.crew){
      if(member.name === memberName){
        return false;
      }
    }
    this.crew.push({name: memberName, firstMission:isFirst});
    return true;
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }
  
  edit(member: object) {
    this.memberBeingEdited = member;
 }

 save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }

}