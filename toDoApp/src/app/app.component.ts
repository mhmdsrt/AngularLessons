import { Component } from '@angular/core';
import { UserInfo, ToListItem } from './ToDoListModel'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Title = 'toDoApp';
  userInfo = new UserInfo();
  isDisplay: boolean = false;
  getName() {
    return this.userInfo.UserName
  }
  getAge() {
    return this.userInfo.UserAge
  }
  getTitleName() {
    return this.userInfo.Title
  }
  getAllToDoListItems() {
    return this.userInfo.ToDoListItems
  }
  getToDoListItemsByFilt() {
    if(this.isDisplay==true){
       return this.getAllToDoListItems(); // eğer DisplayAll checkbox işaretli ise ToDoListItems dizisindeki tüm öğeleri göster
    }
    return this.userInfo.ToDoListItems.filter(a => a.Action == false)  // filter() ile ToDoListItems dizisini filtreleyip yeni bir dizi döndürüyoruz

  }

  AddItem(value: string) { // input'dan gelen değer boş değilse ToListItem sınıfı tipinden nesneyi ToDoListItems dizisine ekle
    if (value != "") {
      this.userInfo.ToDoListItems.push(new ToListItem(value, false));
    }
  }
}
/*
@Component Dekoratörü -> bu sınıfın bir component oldugu söyler.

selector -> seçici
selector -> Angular uygulamasındaki bu oluşturduğumuz componenti   <app-root></app-root> olarak kullanabilmemizi sağlar.
ındex.html sayfasında bu componenti kullanıyoruz.

templateUrl -> HTML dosyasını nereden alacağını belirtiyoruz.

styleUrls -> CSS dosyasını nereden alacağını belirtiyoruz.
*/