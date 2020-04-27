import { menuController } from '@ionic/core';


export class MyApp {
  public message = 'Hello World!';
  class: string;

  buttons = [{
    text: 'Delete',
    role: 'destructive',
    icon: 'trash',
    handler: () => {
      console.log('Delete clicked');
    }
  }, {
    text: 'Share',
    icon: 'share',
    handler: () => {
      console.log('Share clicked');
    }
  }, {
    text: 'Play (open modal)',
    icon: 'arrow-dropright-circle',
    handler: () => {
      console.log('Play clicked');
    }
  }, {
    text: 'Favorite',
    icon: 'heart',
    handler: () => {
      console.log('Favorite clicked');
    }
  }, {
    text: 'Cancel',
    icon: 'close',
    role: 'cancel',
    handler: () => {
      console.log('Cancel clicked');
    }
  }];

  actionSheet: HTMLIonActionSheetElement;
  showActionSheet: boolean;

  changeTheme() {
    this.class = this.class === 'dark-theme' ? '' : 'dark-theme';
    alert(`Changing the theme to ${this.class}`);
    this.showActionSheet = true;
  }

  openFirst() {
    menuController.enable(true, 'first');
    menuController.open('first');

  }

}


