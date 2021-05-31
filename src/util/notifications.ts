import {Platform} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';

import store from '../context/store';
import {ActionType} from '../../typings/enums';

export function configureNotifications(): void {
  PushNotification.createChannel(
    {
      channelId: 'general',
      channelName: 'General',
      importance: Importance.LOW,
      playSound: false,
      vibrate: false,
    },
    () => {},
  );

  PushNotification.configure({
    onRegister(_) {},
    onNotification(_) {},
    onAction(notification) {
      switch (notification.action) {
        case 'Stop':
          store.dispatch({type: ActionType.Reset});
      }
    },

    requestPermissions: Platform.OS === 'ios',
  });
}

export function pushNotification(message: string): void {
  PushNotification.localNotification({
    channelId: 'general',
    ongoing: true,
    title: 'Crunch Clock',
    message: message,
    actions: ['Stop'],
    largeIcon: '',
    invokeApp: false,
  });
}

export function clearNotifications(): void {
  PushNotification.cancelAllLocalNotifications();
}
