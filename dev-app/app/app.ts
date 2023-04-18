
import { ICustomElementViewModel, customElement, } from "aurelia";
import template from './app.html?raw';
import './app.scss';
import { mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline } from "ionicons/icons";
import { route } from "@aurelia/router-lite";

@customElement({ name: 'app', template:template })
@route({
  routes:[
    {
      path: '',
      redirectTo:'/folder/Inbox'
    },
    {
      path: '/folder/:id',
      component: () => import ('../pages/folder')
    }
  ]
})
export class App implements ICustomElementViewModel  {
  selectedIndex= 0;
  bookmarkOutline = bookmarkOutline;
  appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      iosIcon: mailOutline,
      mdIcon: mailSharp,
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp,
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      iosIcon: heartOutline,
      mdIcon: heartSharp,
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      iosIcon: archiveOutline,
      mdIcon: archiveSharp,
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      iosIcon: trashOutline,
      mdIcon: trashSharp,
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      iosIcon: warningOutline,
      mdIcon: warningSharp,
    },
  ];
  labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
}
