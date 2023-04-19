import { route } from '@aurelia/router-lite';
import { customElement, ICustomElementViewModel } from '@aurelia/runtime-html';

import template from './app.html?raw';

import './app.scss';

import {
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
} from 'ionicons/icons';

@customElement({ name: 'app', template: template })
@route({
  routes: [
    {
      path: '',
      redirectTo: '/folder/Inbox',
    },
    {
      path: '/folder/:id',
      component: () => import('../pages/folder'),
    },
  ],
})
export class App implements ICustomElementViewModel {
  selectedIndex = 0;
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
